# bili-summary

总结B站视频的 ZCode 插件：抓取视频字幕（优先 AI 字幕），由模型直接生成结构化中文总结。**仅支持B站**，不支持 YouTube 等其他平台。

## 使用

- 对话里说：`总结这个B站视频：<链接>`
- 或用命令：`/bili-summary <链接|BV号|av号> [分P页码]`

## 配置（推荐）

设置环境变量 `BILIBILI_SESSDATA`（B站登录凭证）可显著提高字幕获取成功率：

- Windows：`setx BILIBILI_SESSDATA "<浏览器复制的SESSDATA值>"`，重启 ZCode 生效。
- 值来源：浏览器登录 bilibili.com → F12 → 应用/存储 → Cookies → `SESSDATA`。

## 原理

调 B 站官方 API（`x/web-interface/view` + `x/player/v2`）取字幕轨道 → 优先 `ai-zh`/`zh-CN` → 每 7 句合并压缩 → 模型直接总结。方案源自 [BiliGPT](https://github.com/Yuiffy/BiliGPT)，本地化实现，无外部 AI 依赖。视频无字幕时退化为基于标题和简介的总结。
