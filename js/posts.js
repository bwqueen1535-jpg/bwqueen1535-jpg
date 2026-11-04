/* =========================================================
 * 站点信息与文章数据
 *
 * 改博客名字 / 简介 → 修改下面的 SITE
 * 发 布 新 文 章   → 复制数组里任意一个 { ... } 对象，
 *                    粘贴到最前面并修改字段
 * （博客里内置了一篇图文教程：《如何发布一篇新文章》）
 * ========================================================= */

const SITE = {
  name: "我的博客",
  description: "记录、思考与分享。",
};

const POSTS = [
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
  {
    slug: "hello-world",
    title: "你好，世界：欢迎来到我的博客",
    date: "2026-11-04",
    tags: ["随笔"],
    excerpt: "博客的第一篇文章：这里是哪里、以后会写些什么，以及为什么它只有三个文件。",
    content: `
<p>你好，欢迎来到我的博客！这是这里的第一篇文章。</p>
<p>这个博客没有用任何框架和构建工具，只有最朴素的 <strong>HTML、CSS 和 JavaScript</strong>。正因如此，它足够简单：每一行代码都看得懂、改得动，发布的每一篇文章也都只是一段普通文本。</p>
<h2>这里会写些什么？</h2>
<ul>
  <li>学习和开发中踩过的坑、总结出的经验；</li>
  <li>读过的书、看过的电影和路过的风景；</li>
  <li>一些奇怪但好玩的小想法。</li>
</ul>
<blockquote>
  <p>写博客最大的好处，是逼自己把一件事真正想清楚。</p>
</blockquote>
<p>想知道怎么发文章？博客里内置了一篇图文教程：<a href="post.html?p=how-to-write-a-post">如何发布一篇新文章</a>。想了解我是谁，可以去<a href="about.html">关于</a>页面看看。</p>
<p>祝阅读愉快！🌱</p>
`,
  },
  {
    slug: "how-to-write-a-post",
    title: "如何发布一篇新文章",
    date: "2026-11-03",
    tags: ["教程", "博客"],
    excerpt: "只需要修改一个文件：复制现成的文章对象、改几个字段，保存刷新就能上线。",
    content: `
<p>在这个博客里发布一篇文章，只需要修改一个文件：<code>js/posts.js</code>。不需要命令行，也不需要任何构建工具。</p>
<h2>三步发布</h2>
<ol>
  <li>用任意文本编辑器打开 <code>js/posts.js</code>；</li>
  <li>把数组里现成的任意一个文章对象复制一份，<strong>粘贴到数组最前面</strong>；</li>
  <li>修改它的各个字段，保存后刷新页面，文章就上线了。</li>
</ol>
<h2>每个字段是什么意思？</h2>
<pre><code>{
  slug: "my-first-post",     // 出现在文章网址里，建议只用英文、数字和短横线
  title: "文章标题",
  date: "2026-11-04",        // 格式必须是 年-月-日
  tags: ["随笔"],            // 可以有多个，首页可以按标签筛选
  excerpt: "显示在首页列表里的摘要，一两句话即可。",
  content: &#96;&lt;p&gt;正文是一段 HTML，可以随意换行。&lt;/p&gt;&#96;
}</code></pre>
<p>注意 <code>content</code> 要用一对<strong>反引号</strong>（&#96;）包裹，这样正文可以随意换行，不必拼成一行。</p>
<h2>常用 HTML 标签速查</h2>
<table>
  <thead>
    <tr><th>想要的效果</th><th>写法</th></tr>
  </thead>
  <tbody>
    <tr><td>段落</td><td><code>&lt;p&gt;一段文字&lt;/p&gt;</code></td></tr>
    <tr><td>小标题</td><td><code>&lt;h2&gt;小标题&lt;/h2&gt;</code></td></tr>
    <tr><td>加粗 / 斜体</td><td><code>&lt;strong&gt;加粗&lt;/strong&gt;、&lt;em&gt;斜体&lt;/em&gt;</code></td></tr>
    <tr><td>链接</td><td><code>&lt;a href="https://..."&gt;文字&lt;/a&gt;</code></td></tr>
    <tr><td>图片</td><td><code>&lt;img src="图片地址" alt="说明"&gt;</code></td></tr>
    <tr><td>列表</td><td><code>&lt;ul&gt;&lt;li&gt;一项&lt;/li&gt;&lt;li&gt;另一项&lt;/li&gt;&lt;/ul&gt;</code></td></tr>
    <tr><td>引用</td><td><code>&lt;blockquote&gt;&lt;p&gt;引用的话&lt;/p&gt;&lt;/blockquote&gt;</code></td></tr>
    <tr><td>代码块</td><td><code>&lt;pre&gt;&lt;code&gt;一行代码&lt;/code&gt;&lt;/pre&gt;</code></td></tr>
  </tbody>
</table>
<h2>三个注意事项</h2>
<ul>
  <li><code>slug</code> 是文章网址的一部分，发布之后尽量不要改；</li>
  <li>正文里如果要显示 <code>&lt;</code> 和 <code>&gt;</code> 符号本身，要写成 <code>&amp;lt;</code> 和 <code>&amp;gt;</code>；</li>
  <li>正文里暂时不要直接打反引号字符，需要时可以用实体 <code>&amp;#96;</code> 代替。</li>
</ul>
<p>就这么多——写完保存、刷新页面，就可以看到新文章出现在首页最上面。</p>
`,
  },
  {
    slug: "typography-showcase",
    title: "排版元素一览：这篇博客能写出什么效果",
    date: "2026-11-02",
    tags: ["设计"],
    excerpt: "把博客支持的排版元素全部摆出来：标题、列表、表格、代码、引用、图片……调整样式时可以对照检查。",
    content: `
<p>这篇文章把博客支持的排版元素都摆出来：一来当演示，二来以后想调整样式时，可以直接对照检查效果。</p>
<h2>标题与正文</h2>
<p>上面的大标题是 <code>h2</code>，下面是 <code>h3</code>：</p>
<h3>这是一个三级标题</h3>
<p>正文段落里可以有<strong>加粗</strong>、<em>斜体</em>、<code>行内代码</code>和<a href="index.html">链接</a>。中文正文用的是 1.9 倍行距，长时间阅读不容易累。</p>
<h2>列表</h2>
<ul>
  <li>无序列表的第一项；</li>
  <li>第二项，里面还可以有<strong>加粗文字</strong>。</li>
</ul>
<ol>
  <li>有序列表的第一项；</li>
  <li>第二项。</li>
</ol>
<h2>引用</h2>
<blockquote>
  <p>简洁是智慧的灵魂，冗长是肤浅的藻饰。—— 莎士比亚</p>
</blockquote>
<h2>代码</h2>
<p>行内代码像这样：<code>const answer = 42</code>。代码块长这样：</p>
<pre><code>function greet(name) {
  console.log("你好，" + name + "！");
}

greet("世界");</code></pre>
<h2>表格</h2>
<table>
  <thead>
    <tr><th>时间</th><th>小计划</th></tr>
  </thead>
  <tbody>
    <tr><td>11 月</td><td>把博客搭起来 ✅</td></tr>
    <tr><td>12 月</td><td>写满五篇文章</td></tr>
    <tr><td>明年</td><td>开始第一个长篇系列</td></tr>
  </tbody>
</table>
<h2>图片</h2>
<p>图片放在 <code>assets/</code> 目录里，用 <code>&lt;img&gt;</code> 标签插入：</p>
<p><img src="assets/sample.svg" alt="示例插图：山与月亮" /></p>
<hr />
<p>以上就是全部元素。如果你看到了这一行，说明页面渲染一切正常 🎉</p>
`,
  },
];
