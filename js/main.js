/* =========================================================
 * 全站共用脚本
 * 负责：站点信息渲染、深浅色主题切换、首页文章列表、
 *       文章页内容渲染。一般不需要改动这个文件。
 * ========================================================= */

const $ = (sel, el = document) => el.querySelector(sel);

/* 把文本安全地插入 HTML（防止标题、标签里的特殊字符破坏页面结构） */
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (ch) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]
  ));
}

/* 所有文章按日期从新到旧排好序 */
const sortedPosts = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));

const postUrl = (post) => "post.html?p=" + encodeURIComponent(post.slug);

/* ---------- 站点信息（名字、简介、页脚年份） ---------- */
function renderSiteInfo() {
  document.querySelectorAll("[data-site-name]").forEach((el) => (el.textContent = SITE.name));
  document.querySelectorAll("[data-site-desc]").forEach((el) => (el.textContent = SITE.description));
  const year = $("#footer-year");
  if (year) year.textContent = new Date().getFullYear();
}

/* ---------- 深浅色主题 ---------- */
function setupThemeToggle() {
  const btn = $("#theme-toggle");
  if (!btn) return;

  const current = document.documentElement.dataset.theme || "light";
  btn.textContent = current === "dark" ? "☀️" : "🌙";
  btn.setAttribute("aria-label", current === "dark" ? "切换到浅色模式" : "切换到深色模式");

  btn.addEventListener("click", () => {
    const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
    btn.textContent = theme === "dark" ? "☀️" : "🌙";
    btn.setAttribute("aria-label", theme === "dark" ? "切换到浅色模式" : "切换到深色模式");
  });
}

/* ---------- 首页：文章卡片（图纸面板样式） ---------- */
function createPostCard(post, number) {
  const card = document.createElement("article");
  card.className = "post-card";
  card.innerHTML = `
    <div class="post-card-head">
      <span class="post-card-id">${String(number).padStart(2, "0")}</span>
      <h2 class="post-card-title"><a href="${postUrl(post)}">${escapeHtml(post.title)}</a></h2>
      <time class="post-card-date" datetime="${escapeHtml(post.date)}">${escapeHtml(post.date)}</time>
    </div>
    <div class="post-card-body">
      <div class="post-meta">
        <span class="post-meta-tags">
          ${post.tags.map((t) => `<button class="tag" data-tag="${escapeHtml(t)}">${escapeHtml(t)}</button>`).join("")}
        </span>
      </div>
      <p class="post-excerpt">${escapeHtml(post.excerpt)}</p>
      <a class="read-more" href="${postUrl(post)}">阅读全文 →</a>
    </div>`;
  return card;
}

/* ---------- 首页：文章列表 + 标签筛选 + 搜索 ---------- */
function setupHome() {
  const list = $("#post-list");
  if (!list) return;

  const chipsBox = $("#tag-chips");
  const searchInput = $("#search-input");
  const emptyHint = $("#empty-hint");
  let activeTag = null;

  /* 生成标签筛选条（"全部" + 所有出现过的标签） */
  const allTags = [...new Set(POSTS.flatMap((p) => p.tags))];
  chipsBox.innerHTML =
    `<button class="chip active" data-tag="">全部</button>` +
    allTags.map((t) => `<button class="chip" data-tag="${escapeHtml(t)}">${escapeHtml(t)}</button>`).join("");

  function refresh() {
    const q = searchInput.value.trim().toLowerCase();
    const posts = sortedPosts.filter((p) => {
      const tagOk = !activeTag || p.tags.includes(activeTag);
      const haystack = (p.title + " " + p.excerpt + " " + p.tags.join(" ")).toLowerCase();
      return tagOk && (!q || haystack.includes(q));
    });
    list.replaceChildren(...posts.map((p) => createPostCard(p, sortedPosts.indexOf(p) + 1)));
    emptyHint.hidden = posts.length > 0;
  }

  function setActiveTag(tag) {
    activeTag = tag || null;
    /* 用空字符串参与比较，保证「全部」标签（data-tag=""）也能正确高亮 */
    const value = activeTag || "";
    chipsBox.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c.dataset.tag === value));
    refresh();
  }

  /* 点击筛选条切换标签 */
  chipsBox.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (chip) setActiveTag(chip.dataset.tag || null);
  });

  /* 点击文章卡片里的标签也能筛选 */
  list.addEventListener("click", (e) => {
    const tag = e.target.closest("button.tag");
    if (tag) setActiveTag(tag.dataset.tag);
  });

  searchInput.addEventListener("input", refresh);
  refresh();
}

/* ---------- 文章页 ---------- */
function setupPostPage() {
  const container = $("#post-page");
  if (!container) return;

  const slug = new URLSearchParams(location.search).get("p");
  const index = sortedPosts.findIndex((p) => p.slug === slug);

  if (index === -1) {
    document.title = "文章不存在 · " + SITE.name;
    container.innerHTML = `
      <div class="post-missing">
        <h1>404 · 文章不存在</h1>
        <p>你要找的文章可能还没发布，或者链接有误。</p>
        <p><a class="read-more" href="index.html">← 返回首页</a></p>
      </div>`;
    return;
  }

  const post = sortedPosts[index];
  const older = sortedPosts[index + 1]; /* 上一篇（更早） */
  const newer = sortedPosts[index - 1]; /* 下一篇（更新） */

  document.title = post.title + " · " + SITE.name;
  container.innerHTML = `
    <a class="back-link" href="index.html">← 返回首页</a>
    <h1 class="post-title">${escapeHtml(post.title)}</h1>
    <div class="post-meta">
      <time datetime="${escapeHtml(post.date)}">${escapeHtml(post.date)}</time>
      <span class="post-meta-tags">
        ${post.tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
      </span>
    </div>
    <div class="prose">${post.content}</div>
    <nav class="post-nav">
      ${older
        ? `<a class="post-nav-link" href="${postUrl(older)}"><span class="post-nav-label">上一篇</span>${escapeHtml(older.title)}</a>`
        : "<span></span>"}
      ${newer
        ? `<a class="post-nav-link post-nav-right" href="${postUrl(newer)}"><span class="post-nav-label">下一篇</span>${escapeHtml(newer.title)}</a>`
        : "<span></span>"}
    </nav>`;
}

/* ---------- 启动 ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderSiteInfo();
  setupThemeToggle();
  setupHome();
  setupPostPage();
});
