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
    slug: "java-distributed-log",
    title: "Java 分布式日志存储架构：按规模选型",
    date: "2026-11-05",
    tags: ["Java", "架构"],
    excerpt: "B 站场景题合集 P11 的答法：单体写文件、分布式抽统一日志系统走 MQ 异步，MongoDB / ELK / Loki 三方案按场景选。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P11《如何设计分布式日志存储架构》。这道题不用死记方案，按项目规模回答：单体项目用 Logback 写本地文件（部署简单、成本低、稳定）；分布式下挨个服务翻文件没法排查，要抽统一日志系统，采集走 MQ 异步，满足两条设计要求——可用性（不影响业务）与扩展性（支持其他项目接入）。</p>
<p>方案三选一：<strong>MongoDB</strong>（JSON 存日志灵活、查询丰富、天然分片复制，适合数据量大且结构灵活的场景）；<strong>ELK</strong>（Elasticsearch 存储 + Logstash 收集 + Kibana 展示，最主流；企业级改进用 Filebeat 替代过重的 Logstash）；<strong>Loki</strong>（Promtail 采集 + Grafana 展示，已用 Grafana 又只要轻量采集时的最佳选择）。</p>
<blockquote>
  <p>📖 <a href="pages/java-distributed-log.html"><strong>《Java 分布式日志存储架构：按规模选型》</strong></a>——单文件图文页，含演进路线与三方案对比表，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "redis-cache-problems",
    title: "Redis 缓存三问：击穿、雪崩、穿透",
    date: "2026-11-05",
    tags: ["Redis", "面试"],
    excerpt: "B 站场景题合集 P12 的答法：击穿单点失效用双重检查锁，雪崩集体失效用随机过期+哨兵，穿透两边都没有用空对象+布隆过滤器。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P12《使用 Redis 出现缓存击穿雪崩穿透怎么解决》。面试官通常不直接背题，而是问"你用 Redis 遇到过什么问题"。UP 用防弹衣记忆法一秒区分：Redis 是防弹衣、MySQL 是身体——<strong>击穿</strong>是单个热点 key 失效，大并发直击数据库（热点永不过期 + 同步锁双重检查，十台集群最多十个线程击穿，数据库扛得住，大道至简）；<strong>雪崩</strong>是大量 key 集中过期或 Redis 宕机（过期时间加随机打散 + 集群哨兵 + 多机房灾备）；<strong>穿透</strong>是缓存与数据库都没有、多为恶意攻击（参数校验 + 缓存空对象 + 布隆过滤器黑白名单）。</p>
<p>双重检查锁是重点：第一次查缓存未命中加锁，进锁后第二次查（可能已被回填），仍未命中才查库回填——九成以上请求命中直接返回，只有过期瞬间才串行，不影响整体性能。</p>
<blockquote>
  <p>📖 <a href="pages/redis-cache-problems.html"><strong>《Redis 缓存三问：击穿、雪崩、穿透》</strong></a>——单文件图文页，含三问对比表、双重检查锁伪代码与记忆法，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "java-deadlock",
    title: "Java 线上死锁：jstack 定位与四大条件破坏法",
    date: "2026-11-05",
    tags: ["Java", "面试"],
    excerpt: "B 站场景题合集 P4 的死锁答法：转账案例看互等，jps + jstack 两步定位，四条件破坏任意一个，再补银行家算法权衡。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P4《线上发生死锁定位&amp;避免》。死锁在线上没有在线恢复的好办法，只能快速重启，否则线程堆积最终 OOM——所以重点是定位与预防。定位两步：<code>jps</code> 找进程，<code>jstack</code> 直接报 <code>Found one Java-level deadlock</code>，输出里互等线程、持有与等待的对象、卡住的行号一目了然。</p>
<p>预防靠死锁四条件（互斥、占有且等待、不可抢占、循环等待），破坏任意一个即可：不用锁换 AtomicInteger/CAS、资源管理者一次性申请、Lock 超时自动释放、按 id 排序加锁。但破坏条件大多把并行变串行，吞吐量下降，且满足四条件不必然死锁——实际开发用银行家算法概率性避免，兼顾性能。</p>
<blockquote>
  <p>📖 <a href="pages/java-deadlock.html"><strong>《Java 线上死锁：jstack 定位与四大条件破坏法》</strong></a>——单文件图文页，含互等关系图与答题模板，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "java-seckill",
    title: "Java 秒杀系统设计：先挖痛点，再逐层下推",
    date: "2026-11-05",
    tags: ["Java", "面试"],
    excerpt: "B 站场景题合集 P5 的秒杀答法：先挖痛点再逐层下推——CDN 静态化、限流扩容、Redis 预热 + Lua 原子扣减 + SETNX 防重、MQ 异步下单。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P5《秒杀系统如何设计》。答设计型场景题的框架：第一步挖痛点（瞬时高并发打垮系统、库存少要防超卖），然后从访问层逐层下推到数据层，每层给选型与原因，而不是一上来 Redis、MQ 一顿扯。</p>
<p>逐层的要点：访问层做商品页静态化 + CDN、按钮管控、滑动验证码、排队动画；转发层 Nginx 集群（单台两三万并发）+ F5/LVS + 四层负载扛十万 QPS + K8s 动态扩缩容 + 限流熔断；服务端 Redis 预热防击穿、Lua 脚本保证扣库存三步原子性、SETNX 防重（前端防君子，后端防小人）；下单走 MQ 异步削峰填谷；数据库读写分离，量大再分库分表。</p>
<blockquote>
  <p>📖 <a href="pages/java-seckill.html"><strong>《Java 秒杀系统设计：先挖痛点，再逐层下推》</strong></a>——单文件图文页，含全链路架构图与答题模板，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "java-distributed-lock",
    title: "Java 分布式锁演进：从 synchronized 到 RedLock",
    date: "2026-11-05",
    tags: ["Java", "面试"],
    excerpt: "秒杀场景下的锁升级之路：SETNX 手写锁的三个坑、Redisson 看门狗、主从 AP 漏洞与 RedLock，一页演进图讲透。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P9《分布式集群架构下怎么保证并发安全》。全篇用程序员小徐做秒杀踩坑的故事，把锁的演进讲成一条完整的升级路线：单机加 <code>synchronized</code> 压测通过 → Nginx 扩容成集群又超卖（JVM 级锁只锁单进程）→ Redis SETNX 手写分布式锁 → 踩到不设过期时间死锁、业务超时被趁虚而入、误释放别人的锁三个坑 → 换 Redisson（唯一 ID 绑定 + 看门狗每 10 秒续期）→ 最后是主从 AP 模式的同步漏洞，用 RedLock 全节点加锁兜底。</p>
<p>这条演进路径本身就是分布式锁场景题的标准答题顺序：每一层升级都对应一个真实踩坑，讲完演进再主动抛出主从漏洞与 RedLock，层次感就出来了。</p>
<blockquote>
  <p>📖 <a href="pages/java-distributed-lock.html"><strong>《Java 分布式锁演进：从 synchronized 到 RedLock》</strong></a>——单文件图文页，含演进决策图与答题模板，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "prevent-duplicate-order",
    title: "Java 防止重复下单：两道防线保幂等",
    date: "2026-11-05",
    tags: ["Java", "面试"],
    excerpt: "B 站场景题合集 P7 的重复下单答法：前端按钮置灰防君子，后端 Redis SETNX 防小人，token + 商品 URL + 操作标识组 key。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P7《如何防止重复下单》。网络阻塞时用户连点下单，订单服务会生成多条未支付订单——风险集中在「用户发起下单」这一步，确认、支付、回调三步都不怕重复。</p>
<p>答法是两道防线：<strong>前端置灰</strong>挡住无意连点，但只防君子不防小人；<strong>后端 Redis SETNX</strong> 才是兜底——key 由用户 token + 商品 URL + 操作标识组成，过期 3-5 秒，重复请求只成功一次。工程上用自定义注解 + AOP 环绕通知做成通用防重复提交，已登录用 token 维度、未登录用 IP + URL + 参数维度。</p>
<blockquote>
  <p>📖 <a href="pages/prevent-duplicate-order.html"><strong>《Java 防止重复下单：两道防线保幂等》</strong></a>——单文件图文页，支持深浅色切换，可以直接分享。</p>
</blockquote>
`,
  },
  {
    slug: "prevent-order-brushing",
    title: "Java 防止刷单：黑产攻防与风控体系",
    date: "2026-11-05",
    tags: ["Java", "面试"],
    excerpt: "B 站场景题合集 P8 的刷单防治答法：人肉机黑产有完整产业链，单点防御全部失守，靠业务风控 + 技术风控 + 用户画像组合拳。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P8《怎么防止刷单？》。人肉机刷单是一个人操控几十上百台手机抢奖品转手赚差价，直播间抽奖、茅台抢购都是重灾区。残酷的现实是：手机验证码被接码平台绕过、图形验证码被打码平台绕过、IP 限制被独立 IP 绕过、账号监控被养号软件绕过——<strong>黑产有完整产业链，单点防御形同虚设</strong>。</p>
<p>正解是组合拳：<strong>业务风控</strong>（实名认证、消费门槛、随机优惠、限中奖次数、忠诚度分层、奖池封顶）+ <strong>技术风控</strong>（限流、K8S 自动扩容、黑名单 + 布隆过滤器）+ <strong>大数据用户画像</strong>（腾讯靠微信 QQ 社交数据建模，普通团队可直接用腾讯云天御）。刷单防不死，只能控风险。</p>
<blockquote>
  <p>📖 <a href="pages/prevent-order-brushing.html"><strong>《Java 防止刷单：黑产攻防与风控体系》</strong></a>——单文件图文页，支持深浅色切换，可以直接分享。</p>
</blockquote>
`,
  },
  {
    slug: "qr-code-login-design",
    title: "Java 扫码登录设计：三步状态机",
    date: "2026-11-05",
    tags: ["Java", "面试"],
    excerpt: "B 站场景题合集 P10 的扫码登录答法：二维码状态存 Redis，手机端 token 作身份证明，临时 token 保证一码只扫一次。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P10《让你设计一个扫码登录怎么实现？》。本质是把手机端已登录的身份，借二维码传递给 PC 端：后端生成全局唯一二维码 ID 并把状态存进 Redis，PC 端轮询状态（淘宝）或走长连接（抖音，WebSocket/SSE）。</p>
<p>三步状态机：<strong>生成二维码</strong>（发 ID、存状态）→ <strong>扫码</strong>（手机端带用户 token + 二维码 ID 请求，状态改已扫描，后端发临时 token 保证一码只扫一次）→ <strong>确认登录</strong>（手机端带临时 token 确认，后端生成 PC token 存 Redis、删临时 token，PC 端轮询到已使用拿到 token）。三种 token、三个角色，状态机串起全流程。</p>
<blockquote>
  <p>📖 <a href="pages/qr-code-login-design.html"><strong>《Java 扫码登录设计：三步状态机》</strong></a>——单文件图文页，含三端时序图，支持深浅色切换，可以直接分享。</p>
</blockquote>
`,
  },
  {
    slug: "order-timeout-design",
    title: "Java 订单超时自动取消：四种实现与阿里选型",
    date: "2026-11-05",
    tags: ["Java", "面试"],
    excerpt: "B 站场景题合集 P6 的订单超时答法：DelayQueue、RocketMQ 定时消息、Redis 过期监听、定时任务批处理四种方案对比，阿里内部用「超时中心」批处理。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P6《订单超时自动取消是怎么实现的？》，一道阿里 P7 面试题。视频把市面上的定时任务实现梳理成四种：JDK <code>DelayQueue</code>（内存队列，单体小系统够用）、RocketMQ 定时消息（简单且精度高，但最长 24 小时、存储成本大）、Redis 过期监听（实现简单，但过期事件可能丢）。</p>
<p>阿里内部用的是最朴素的第四种：<strong>定时任务分布式批处理</strong>——扫库批量捞出超时订单、批量改状态，统一收口到「超时中心」，延迟 30 秒内。理由是稳定（批次天然重试）、高效（批量压低数据库 QPS）、可运维（跑挂手动 SQL 修数）、成本低（不占中间件存储）。一句话：没有垃圾的技术，只有垃圾的开发。</p>
<blockquote>
  <p>📖 <a href="pages/order-timeout-design.html"><strong>《Java 订单超时自动取消的四种实现》</strong></a>——单文件图文页，支持深浅色切换，可以直接分享。</p>
</blockquote>
`,
  },
  {
    slug: "java-cpu-debugging",
    title: "Java 线上 CPU 飙高：三板斧定位法",
    date: "2026-11-05",
    tags: ["Java", "面试"],
    excerpt: "B 站场景题合集 P3 的 CPU 飙高答法：top 找进程、top -H -p 找线程、jstack 找代码行，三步定位到空转的那行代码。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P3《线上突发 CPU 飙高怎么定位和解决》。这套答法只有三个命令：<code>top</code> 找到 CPU 最高的进程，<code>top -H -p</code> 找到该进程里 CPU 最高的线程，线程 ID 转 16 进制后用 <code>jstack | grep</code> 打出线程栈，直接看到是哪一行代码在空转。</p>
<p>视频演示里，这套流程两分钟定位到 <code>UserController.getUser</code> 第 19 行的一个死循环。和 P2 的 OOM 定位正好凑成一对姊妹题：OOM 靠 dump 看堆，CPU 靠 jstack 看栈，一个查内存、一个查执行，套路对仗工整。</p>
<blockquote>
  <p>📖 <a href="pages/java-cpu-debugging.html"><strong>《Java 线上 CPU 飙高定位三板斧》</strong></a>——单文件图文页，支持深浅色切换，可以直接分享。</p>
</blockquote>
`,
  },
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
