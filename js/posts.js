/* =========================================================
 * 站点信息与文章数据
 *
 * 改博客名字 / 简介 → 修改下面的 SITE
 * 发 布 新 文 章   → 复制数组里任意一个 { ... } 对象，
 *                    粘贴到最前面并修改字段：
 *                    slug（网址名，建议英文/数字/短横线）、
 *                    title、date（格式必须是 年-月-日）、
 *                    tags（可以有多个，首页可按标签筛选）、
 *                    excerpt（显示在首页的摘要）、
 *                    content（正文，一段 HTML，用反引号包裹）
 * ========================================================= */

const SITE = {
  name: "我的博客",
  description: "记录、思考与分享。",
};

const POSTS = [
  {
    slug: "java-oom-debugging",
    title: "Java 线上 OOM：三大原因与 dump 定位法",
    date: "2026-11-05",
    tags: ["Java", "面试"],
    excerpt: "从 B 站场景题合集学到的 OOM 答法：三类原因归因、按系统挂没挂分两路定位、dump + VisualVM 六步找到代码行。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P2《线上 OOM 怎么定位和解决》。这套答法的骨架：OOM 先按三类原因归因（对象一次申请太多、资源耗尽不释放、堆内存不够），再按"系统挂没挂"分两路定位——已挂靠 <code>-XX:+HeapDumpOnOutOfMemoryError</code> 自动导 dump，还在运行用 <code>jmap -dump</code> 或 Arthas 在线导出。</p>
<p>拿到 dump 之后，VisualVM 六步定位：载入 → 类视图按内存排序 → 找业务对象 → 展开 GC Root → 看线程引用 → 跳到代码行。视频演示里就是这么定位到 <code>UserService.getUser</code> 第 17 行死循环的。在线导 dump 会付出一次 Full GC/STW 的代价，但换来成倍的定位提速，值得。</p>
<blockquote>
  <p>📖 <a href="pages/java-oom-debugging.html"><strong>《Java 线上 OOM 定位与解决》</strong></a>——单文件图文页，支持深浅色切换，可以直接分享。</p>
</blockquote>
`,
  },
  {
    slug: "biligit-principle",
    title: "BiliGPT 如何总结 B 站视频",
    date: "2026-11-05",
    tags: ["技术", "AI"],
    excerpt: "不下载音视频，只抓字幕：B 站官方 API 取字幕轨道，压缩后交给 OpenAI 生成总结，一页拆清原理与能力边界。",
    content: `
<p>开源项目 <a href="https://github.com/Yuiffy/BiliGPT">BiliGPT</a> 能一键总结 B 站视频，但它从头到尾没有解析过任何音视频。真正的链路是：调 B 站官方 API 拿字幕轨道（优先 AI 生成的 ai-zh 字幕），把字幕文本压缩后连标题一起拼成 Prompt，交给 OpenAI 生成 Markdown 总结。</p>
<p>我把源码里的完整原理整理成了一页图文：整体流程图、抓字幕的四个关键细节（SESSDATA 登录态、字幕轨道优先级、分P 处理、无字幕兜底）、为 4K 上下文设计的两层压缩、Prompt 结构，以及能力边界。</p>
<blockquote>
  <p>📖 <a href="pages/biligit-principle.html"><strong>《BiliGPT 如何总结 B 站视频》</strong></a>——单文件页面，支持深浅色切换，可以直接分享。</p>
</blockquote>
<p>一句话：快，是因为只处理文本；天花板也在这里——视频没有字幕时，它就无能为力。</p>
`,
  },
  {
    slug: "answer-me-with-html-guide",
    title: "Answer me with HTML 使用指南",
    date: "2026-11-05",
    tags: ["教程", "工具"],
    excerpt: "让 Agent 把复杂问题答成一页 HTML 的开源工具：安装、用法、页面交互、高频模式，整理成了一页图文指南。",
    content: `
<p>这个博客的"图纸风"皮肤，来自开源项目 <a href="https://github.com/QingYunA/answer-me-with-html">Answer me with HTML</a>。它是一个 Agent Skill：Agent 遇到复杂问题时，不再回一堵文字墙，而是给一页带图表的 HTML。模型只写 Markdown 稿件，排版、配色、画图全部由它自带的 CLI 完成，产物是单文件、零依赖、断网也能打开的 .html 页面。</p>
<p>我把它仓库里的使用说明整理成了一页图文指南，点这里阅读：</p>
<blockquote>
  <p>📖 <a href="pages/answer-me-with-html.html"><strong>《Answer me with HTML 使用指南》</strong></a>——单文件页面，支持深浅色切换，可以直接分享。</p>
</blockquote>
<p>指南里包括：</p>
<ul>
  <li>三种安装方式（推荐让 Agent 代办，一句话搞定）；</li>
  <li>"说什么，会得到什么"：7 个真实例子；</li>
  <li>页面上的交互：换主题、回复、标注、找回原稿；</li>
  <li>高频模式、常用配置、更新与清理。</li>
</ul>
<p>顺便一提：你现在看到的这篇介绍本身，就是"先写 Markdown 稿、再由 CLI 排版"的思路在博客上的延续。</p>
`,
  },
  {
    slug: "deeptutor-getting-started",
    title: "DeepTutor 从哪开始",
    date: "2026-11-04",
    tags: ["教程", "DeepTutor"],
    excerpt: "25 个模块、8 种对话模式，但第一步只有一件事——配一个模型。",
    content: `
<p>功能多是因为它是一个"学习平台"，不是一个聊天框。先配模型，用 <code>/chat</code> 问三个问题，再按需要进四个区域。不要一上线就逐个点开。</p>
<h2>第一件事：配一个模型</h2>
<p><code>llm</code> 是<strong>唯一</strong>必须配置的服务（<code>readiness.py:136</code>，<code>REQUIRED_CATALOG_SERVICES = {"llm"}</code>）。其余七项服务全部可选。</p>
<p>后端启动日志已经报过这个错：<code>No active LLM model is configured. Please set it in Settings &gt; Language models.</code></p>
<p>目前 <code>model_catalog.json</code> 里 8 项服务全是空的：</p>
<table>
  <thead>
    <tr><th>服务</th><th>现状</th><th>必须</th><th>说明</th></tr>
  </thead>
  <tbody>
    <tr><td>llm</td><td>空</td><td>✓</td><td>对话模型，配了就能用</td></tr>
    <tr><td>embedding</td><td>空</td><td>✗</td><td>建知识库时才需要</td></tr>
    <tr><td>task</td><td>空</td><td>✗</td><td>不配则回落到 llm</td></tr>
    <tr><td>search</td><td>空</td><td>✗</td><td>联网搜索才需要</td></tr>
    <tr><td>tts</td><td>空</td><td>✗</td><td>语音朗读</td></tr>
    <tr><td>stt</td><td>空</td><td>✗</td><td>语音输入</td></tr>
    <tr><td>imagegen</td><td>空</td><td>✗</td><td>画图</td></tr>
    <tr><td>videogen</td><td>空</td><td>✗</td><td>生成视频</td></tr>
  </tbody>
</table>
<p>操作路径：点左下角齿轮 → <strong>设置</strong> → 左侧「模型与服务」→ <strong>模型</strong>（<code>/settings/llm</code>）。也可以先去<strong>连接</strong>（<code>/settings/connections</code>）填一次 API Base 和 Key，再让各服务从这条连接继承凭据。</p>
<p>配完存到 <code>data/user/settings/model_catalog.json</code>，重启容器不丢。</p>
<blockquote>
  <p><strong>本机跑 Ollama / LM Studio 的注意</strong>：容器里的 <code>localhost</code> 是容器自己。API Base 必须写 <code>http://host.docker.internal:11434/v1</code>，不能写 <code>127.0.0.1</code>。</p>
</blockquote>
<h2>第二件事：在 <code>/chat</code> 里换四种"回答模式"</h2>
<p>打开首页 <code>/chat</code>，输入框上方可以切换模式。这不是四个不同的页面，是同一个对话框的四套流程：</p>
<table>
  <thead>
    <tr><th>模式</th><th>标签</th><th>什么时候用</th></tr>
  </thead>
  <tbody>
    <tr><td>Chat</td><td>Chat</td><td>默认，什么问题都行</td></tr>
    <tr><td>Solve</td><td>解题</td><td>数学、逻辑、要多步推导</td></tr>
    <tr><td>Research</td><td>调研</td><td>需要多轮检索再出一份报告</td></tr>
    <tr><td>Visualize</td><td>可视化</td><td>要图表、示意图、动画</td></tr>
    <tr><td>Quiz</td><td>出题</td><td>想让它给你出题考你</td></tr>
    <tr><td>Ask Questions</td><td>反问</td><td>你需求没说清，让它先问你再答</td></tr>
    <tr><td>Video Lesson</td><td>视频课</td><td>一个问题变成能播放的动画讲解</td></tr>
  </tbody>
</table>
<p>第一次用，只开 <strong>Chat</strong> 就够了。模式菜单是渐进披露的，用不上也不会挡路。</p>
<h2>第三件事：学习区是"另一套东西"</h2>
<p>侧边栏分 5 个区：<code>首页 / 学习 / 资源 / 伙伴 / 个性化</code>。<strong>学习区</strong>和聊天区不是一回事，值得单独理解。</p>
<p><code>/learning/new</code> 提供四个工作面，对应四种学东西的方式：</p>
<ul>
  <li><strong>Books</strong>：给个题目，它先写章节目录，你改完再逐页写正文；</li>
  <li><strong>Mastery Path</strong>：先和你商定大纲，生成知识点地图，逐个攻克；</li>
  <li><strong>Practice</strong>：题库。对话、书、掌握路径产生的题自动汇总，错题按到期复习；</li>
  <li><strong>Immersive Reading</strong>：导入 PDF / EPUB / 网页 / 音视频，选中段落就能提问。</li>
</ul>
<p>先不碰这里也可以。等你有一份真实的材料（教材、论文、网课录音）要处理时，再来开 <strong>Immersive Reading</strong>，它的价值最直观。</p>
<h2>资源区：全部是空容器，按需创建</h2>
<p><code>/space</code> 看着热闹，点进去大部分是空的。这些容器在你产生内容之前没有意义。</p>
<table>
  <thead>
    <tr><th>资源</th><th>地址</th><th>什么时候值得看</th></tr>
  </thead>
  <tbody>
    <tr><td>聊天历史</td><td><code>/space/chat-history</code></td><td>想找回以前的对话</td></tr>
    <tr><td>收藏夹</td><td><code>/notebooks</code></td><td>存住好用的原文</td></tr>
    <tr><td>学习日志</td><td><code>/space/journal</code></td><td>回顾目标和进度</td></tr>
    <tr><td>题库</td><td><code>/space/questions</code></td><td>数字变大之后</td></tr>
    <tr><td>知识中心</td><td><code>/knowledge-bases</code></td><td>要让 AI 基于自己的资料回答</td></tr>
    <tr><td>技能</td><td><code>/space/skills</code></td><td>想扩展它的手册式能力</td></tr>
    <tr><td>MCP 服务</td><td><code>/space/mcp</code></td><td>要接外部工具</td></tr>
    <tr><td>记忆</td><td><code>/memory</code></td><td>想改它记住的偏好</td></tr>
  </tbody>
</table>
<p>知识中心是唯一值得早点开的：上传自己的资料，然后对话里就能引用。<strong>注意它需要 embedding 模型</strong>，而 embedding 现在是空的。</p>
<h2>哪些功能现在还不能用</h2>
<p>25 个模块里 21 个 <code>ready=true</code>。剩下 4 个缺依赖，影响到具体功能：</p>
<table>
  <thead>
    <tr><th>模块</th><th>缺什么</th><th>影响</th></tr>
  </thead>
  <tbody>
    <tr><td>parser-markitdown</td><td><code>markitdown[all]</code></td><td>PDF / Office 解析少一条路</td></tr>
    <tr><td>parser-docling</td><td><code>docling</code></td><td>同上</td></tr>
    <tr><td>parser-liteparse</td><td><code>liteparse</code></td><td>同上</td></tr>
    <tr><td>renderer-manim</td><td><code>manim</code>、<code>ffmpeg</code>、<code>latex</code></td><td>数学动画渲染不出</td></tr>
  </tbody>
</table>
<p>解析类不用慌：<code>parser-pymupdf4llm</code> 已就绪，<strong>PDF 导入照常可用</strong>。真正缺的是 Math Animator 的渲染，要装 Manim 加 LaTeX 和 ffmpeg。</p>
<h2>建议的路线</h2>
<ol>
  <li><strong>今天 · 配 llm 模型</strong>——设置 → 模型与服务 → 模型，然后 /chat 问 3 个真实问题；</li>
  <li><strong>本周 · 用熟 Chat 和 1 个模式</strong>——试一次 Research 或 Solve，体会差别；</li>
  <li><strong>有空 · 开 Immersive Reading</strong>——导入一份你真正在学的材料；</li>
  <li><strong>以后 · 知识中心 + embedding</strong>——让它基于你的资料回答；</li>
  <li><strong>按需 · Math Animator 等重依赖</strong>——需要动画时才装 Manim 和 LaTeX。</li>
</ol>
<p>跳过前两步直接去逛功能区，是这次困惑的主因。侧边栏有 70 多个路由，但它没有新手引导，也没打算让你一次走完。</p>
`,
  },
];
