# 我的博客

一个零依赖、零构建的个人博客：只有 HTML、CSS 和 JavaScript 三个原生技术，不需要安装任何东西。双击 `index.html` 就能看，推上 GitHub Pages 就能上线。

## 目录结构

```
myblog/
├── index.html        # 首页（文章列表、搜索、标签筛选）
├── post.html         # 文章页模板（所有文章共用这一页）
├── about.html        # 关于页（改成你自己的介绍）
├── css/
│   └── style.css     # 全站样式，顶部变量集中控制配色
├── js/
│   ├── posts.js      # ★ 文章数据：发新文章、改博客名都改这个文件
│   └── main.js       # 全站逻辑，一般不用动
├── assets/
│   └── sample.svg    # 示例插图
├── .nojekyll         # 让 GitHub Pages 原样托管文件（不要删）
└── README.md
```

## 本地预览

直接双击 `index.html` 用浏览器打开即可，不需要启动服务器。

## 如何发布一篇新文章

1. 用文本编辑器打开 `js/posts.js`；
2. 把数组里现成的任意一个 `{ ... }` 文章对象复制一份，**粘贴到数组最前面**；
3. 修改字段：`slug`（网址名）、`title`、`date`、`tags`、`excerpt`（摘要）、`content`（正文，一段 HTML）；
4. 保存、刷新页面，文章就上线了。

博客里也内置了一篇图文教程（含常用 HTML 标签速查表）：打开网站看《如何发布一篇新文章》。

> 以后部署到 GitHub 之后，甚至可以在 GitHub 网页上直接点 `js/posts.js` 的铅笔图标在线编辑保存，不用碰命令行也能发文章。

## 修改博客名字、简介、关于页

- 博客名和一句话简介：`js/posts.js` 顶部的 `SITE`，全站生效；
- 关于页：直接编辑 `about.html` 里的文字；
- 浏览器标签页上的标题：各 HTML 文件顶部 `<title>` 标签里的文字。

## 部署到 GitHub Pages（免费）

### 方式一：网页上传（最简单，推荐第一次用）

1. 在 [github.com](https://github.com) 注册 / 登录后，点右上角 **+** → **New repository** 新建仓库，名字填 `myblog`（或任意名字），选 **Public**，不要勾选任何初始化选项；
2. 在新仓库页面点 **uploading an existing file** 链接，把本项目里的全部文件拖进去（注意要拖 `index.html`、`css/`、`js/` 等**文件本身**，不要把 myblog 文件夹整体拖进去），点 **Commit changes**；
3. 进仓库的 **Settings → Pages**，在 **Build and deployment** 下把 Source 选为 **Deploy from a branch**，Branch 选 `main` 和 `/ (root)`，保存；
4. 等一两分钟，访问 `https://<你的用户名>.github.io/myblog/` 就能看到博客了。

### 方式二：命令行 git

```bash
cd myblog
git init
git add .
git commit -m "init: 我的博客"
git branch -M main
git remote add origin https://github.com/<你的用户名>/myblog.git
git push -u origin main
```

然后同样进仓库 **Settings → Pages**，Source 选 **Deploy from a branch**，Branch 选 `main / (root)` 保存。

> 仓库叫什么名字，网址就带什么路径：仓库叫 `myblog`，地址就是 `https://<用户名>.github.io/myblog/`；如果想要根地址 `https://<用户名>.github.io/`，把仓库命名为 `<用户名>.github.io`。

### 以后更新文章

方式一上传的：到 GitHub 网页上点开 `js/posts.js` → 铅笔图标编辑 → 保存，页面会自动重新部署。
方式二上传的：本地改好后 `git add . && git commit -m "新文章" && git push`。

## 常见问题

- **想改配色 / 字体 / 布局**：改 `css/style.css`，最顶部的 CSS 变量控制全站颜色；
- **想加新页面**（比如「友链」）：复制 `about.html` 改名和内容，并在三个页面的 `<nav>` 里各加一个链接；
- **正文里怎么显示 `<`、`>` 这类符号本身**：写成 `&lt;` 和 `&gt;`；
- **文章图片放哪**：放进 `assets/` 目录，正文里用 `<img src="assets/图片名.png" alt="说明">` 插入。
