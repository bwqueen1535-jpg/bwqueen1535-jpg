#!/usr/bin/env node
/**
 * bili-subtitles.mjs — 抓取B站视频元数据与字幕（仅支持B站）
 *
 * 用法：
 *   node bili-subtitles.mjs <视频链接 | BV号 | av号> [--p 分P页码]
 *
 * 环境变量：
 *   BILIBILI_SESSDATA  B站登录凭证，多个用英文逗号分隔（随机选用）。
 *                      未设置时B站常不返回字幕轨道。
 *
 * 退出码：0 正常；1 请求/解析失败；2 无字幕（元数据已输出，可退化为简介总结）；
 *         3 字幕内容校验失败（B站风控导致接口错乱，稍后重试）
 */

import crypto from 'node:crypto'

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
// B站字幕 CDN 有防盗链：请求必须带 Referer，否则会返回随机错乱的其他视频字幕
const REFERER = 'https://www.bilibili.com/'
// 字幕末尾时间与视频时长允许的偏差（秒）
const SPAN_TOLERANCE = 150
const MAX_ATTEMPTS = 3

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

function fail(msg, code = 1) {
  console.error(`[bili-summary] ${msg}`)
  process.exit(code)
}

function fmtTime(sec) {
  const s = Math.floor(sec)
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
}

function fmtDuration(sec) {
  const h = Math.floor(sec / 3600)
  const m = Math.floor((sec % 3600) / 60)
  const s = sec % 60
  return h > 0
    ? `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
    : `${m}:${String(s).padStart(2, '0')}`
}

async function getJson(url, cookie) {
  const headers = { 'User-Agent': UA, Accept: 'application/json', Referer: REFERER }
  if (cookie) headers.Cookie = cookie
  const res = await fetch(url, { headers, signal: AbortSignal.timeout(20000) })
  if (!res.ok) {
    if (res.status === 412) {
      fail('B站风控(412)：短时间请求过多或请求头不完整，请等几分钟后重试；已配置 SESSDATA 可降低概率')
    }
    fail(`请求失败 HTTP ${res.status}：${url}`)
  }
  const json = await res.json()
  if (json.code !== 0) fail(`B站接口返回错误 code=${json.code}：${json.message || '未知错误'}`)
  return json.data
}

async function resolveVideoId(raw) {
  let input = raw.trim()
  if (/b23\.tv\//.test(input)) {
    const res = await fetch(input, {
      redirect: 'follow',
      headers: { 'User-Agent': UA, Referer: REFERER },
      signal: AbortSignal.timeout(20000),
    })
    input = res.url
  }
  const bv = input.match(/BV[0-9A-Za-z]{10,}/)
  if (bv) return { bvid: bv[0] }
  const av = input.match(/av(\d+)/i)
  if (av) return { aid: av[1] }
  fail(`无法从输入中解析视频 ID：${raw}`)
}

function parsePageFromUrl(raw) {
  const m = raw.match(/[?&]p=(\d+)/)
  return m ? Number(m[1]) : null
}

function pickSessdata() {
  const raw = process.env.BILIBILI_SESSDATA
  if (!raw) return null
  const list = raw.split(',').map((s) => s.trim()).filter(Boolean)
  return list[Math.floor(Math.random() * list.length)] || null
}

function mergeSubtitles(body, groupSize = 7) {
  const groups = []
  body.forEach((item, i) => {
    const gi = Math.floor(i / groupSize)
    if (!groups[gi]) groups[gi] = { from: item.from, text: '' }
    groups[gi].text += `${item.content} `
  })
  return groups.map((g) => `${fmtTime(g.from)} - ${g.text.trim()}`)
}

/* ---------- wbi 签名（与浏览器一致，降低风控概率） ---------- */

const MIXIN_TAB = [
  46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49, 33, 9, 42, 19, 29, 28,
  14, 39, 12, 38, 41, 13, 37, 48, 7, 16, 24, 55, 40, 61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54,
  21, 56, 59, 6, 63, 57, 62, 11, 36, 20, 34, 44, 52,
]

async function getMixinKey(cookie) {
  const headers = { 'User-Agent': UA, Accept: 'application/json', Referer: REFERER }
  if (cookie) headers.Cookie = cookie
  const res = await fetch('https://api.bilibili.com/x/web-interface/nav', { headers })
  const json = await res.json()
  // 未登录时 nav 返回 code=-101，但 wbi_img 仍有效
  if (!json?.data?.wbi_img) fail(`获取 wbi 密钥失败 code=${json.code}`)
  const raw =
    json.data.wbi_img.img_url.split('/').pop().split('.')[0] +
    json.data.wbi_img.sub_url.split('/').pop().split('.')[0]
  let key = ''
  for (const i of MIXIN_TAB) key += raw[i] ?? ''
  return key.slice(0, 32)
}

function wbiSign(params, mixinKey) {
  const wts = Math.floor(Date.now() / 1000)
  const all = { ...params, wts }
  const query = Object.keys(all)
    .sort()
    .map((k) => {
      const v = String(all[k]).replace(/[!'()*]/g, (ch) => '%' + ch.charCodeAt(0).toString(16).toUpperCase())
      return `${encodeURIComponent(k)}=${encodeURIComponent(v)}`
    })
    .join('&')
  const w_rid = crypto.createHash('md5').update(query + mixinKey).digest('hex')
  return `${query}&w_rid=${w_rid}`
}

/* ---------- 主流程 ---------- */

async function downloadSubtitleBody(subtitleUrl, cookie) {
  const url = subtitleUrl.startsWith('//') ? `https:${subtitleUrl}` : subtitleUrl
  const headers = { 'User-Agent': UA, Referer: REFERER }
  if (cookie) headers.Cookie = cookie
  const res = await fetch(url, { headers, signal: AbortSignal.timeout(20000) })
  if (!res.ok) return null
  try {
    return (await res.json()).body || null
  } catch {
    return null
  }
}

function pickTrack(tracks) {
  const usable = tracks.filter((t) => t.subtitle_url)
  if (!usable.length) return null
  return (
    usable.find((t) => t.lan === 'ai-zh') ||
    usable.find((t) => t.lan === 'zh-CN') ||
    usable[0]
  )
}

async function main() {
  const args = process.argv.slice(2)
  const input = args.find((a) => !a.startsWith('--'))
  if (!input) fail('用法：node bili-subtitles.mjs <视频链接 | BV号 | av号> [--p 分P页码]')
  const pIdx = args.indexOf('--p')
  const pArg = pIdx >= 0 ? Number(args[pIdx + 1]) : null

  const sessdata = pickSessdata()
  const cookie = sessdata ? `SESSDATA=${sessdata}` : null

  const id = await resolveVideoId(input)
  const pageFromUrl = parsePageFromUrl(input)
  const query = id.bvid ? `bvid=${id.bvid}` : `aid=${id.aid}`

  const view = await getJson(`https://api.bilibili.com/x/web-interface/view?${query}`, cookie)
  const { title, desc, owner, duration, pages } = view
  const pageNumber = pArg || pageFromUrl || 1
  const page =
    pages && pages.length
      ? pages.find((pg) => pg.page === pageNumber) || pages[pageNumber - 1] || pages[0]
      : null
  const cid = page ? page.cid : view.cid
  if (!cid) fail('未取得视频 cid，无法拉取字幕')
  const pageDuration = page ? page.duration : duration

  await sleep(1200)
  const mixinKey = await getMixinKey(cookie)

  let tracks = null
  let body = null
  let lastProblem = '未取得字幕'
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    await sleep(attempt === 1 ? 1200 : 3000)
    const player = await getJson(
      `https://api.bilibili.com/x/player/wbi/v2?${wbiSign(id.bvid ? { bvid: id.bvid, cid } : { aid: id.aid, cid }, mixinKey)}`,
      cookie,
    )
    tracks = player?.subtitle?.subtitles || []
    const track = pickTrack(tracks)
    if (!track) {
      lastProblem = '无字幕轨道'
      continue
    }
    body = await downloadSubtitleBody(track.subtitle_url, cookie)
    if (!body || !body.length) {
      lastProblem = '字幕文件下载失败'
      continue
    }
    const span = Math.round(body[body.length - 1].to)
    if (pageDuration && Math.abs(span - pageDuration) > SPAN_TOLERANCE) {
      lastProblem = `字幕时长 ${span}s 与视频时长 ${pageDuration}s 不符（风控错乱，内容疑似其他视频）`
      body = null
      continue
    }
    // 校验通过，输出完整结果
    console.log(`标题：${title}`)
    console.log(`UP主：${owner?.name || '未知'}`)
    console.log(`时长：${fmtDuration(pageDuration || duration)}`)
    if (pages && pages.length > 1) {
      console.log(`分P：共 ${pages.length} 个分P，本次为第 ${page?.page || 1} 个「${page?.part || ''}」`)
    }
    console.log(`字幕轨道：${track.lan}（可选轨道：${tracks.map((t) => t.lan).join(', ')}）`)
    if (desc) console.log(`\n【简介】\n${desc}`)
    console.log('\n【字幕（每 7 句合并为一段，段首为起始时间）】')
    console.log(mergeSubtitles(body).join('\n'))
    return
  }

  if (lastProblem === '无字幕轨道') {
    console.log(`标题：${title}`)
    console.log(`UP主：${owner?.name || '未知'}`)
    console.log(`时长：${fmtDuration(pageDuration || duration)}`)
    if (pages && pages.length > 1) {
      console.log(`分P：共 ${pages.length} 个分P，本次为第 ${page?.page || 1} 个「${page?.part || ''}」`)
    }
    console.log(
      `\n未找到字幕。${
        sessdata ? '该视频可能没有字幕轨道。' : '未设置 BILIBILI_SESSDATA，未登录状态下B站常不返回字幕。'
      }`,
    )
    if (desc) console.log(`\n【简介】\n${desc}`)
    process.exit(2)
  }
  fail(`字幕内容校验失败（重试 ${MAX_ATTEMPTS} 次未通过）：${lastProblem}。请等待几分钟后重试`, 3)
}

main().catch((e) => fail(e?.message || String(e)))
