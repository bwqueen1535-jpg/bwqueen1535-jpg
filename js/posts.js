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
    slug: "rea-reverse-clone",
    title: "用 REA 逆向复刻软件：流程、成本与边界",
    date: "2026-11-06",
    tags: ["AI工具", "逆向工程"],
    excerpt: "B 站「程序员老詹」：把 EXE 交给 AI 框架复刻成可运行小软件——18 分钟、700 万 token、5 毛 8。哪些能复刻、哪些复刻不了。",
    content: `
<p>学自 B 站 UP 主「程序员老詹」。REA（Reverse Engineer Anything）是围绕 AI 编程工具搭的反向工程框架，底层挂 IDA Pro 一类反汇编器。流程四步：给 EXE 路径 → 选好模型 → 用自然语言描述核心功能 → 等它跑，中途授权。</p>
<p>实测复刻一个屏幕放大标注工具：<strong>约 18 分钟、700 多万 token、0.58 元</strong>（DeepSeek V4）。提示词要写具体动作（"按下 Ctrl+E 放大屏幕"、"在放大画面上画标记"），只说要复刻则随机性太大。安装门槛是 Node.js 22.19 以上，版本不对装不上。</p>
<p>边界：单功能小工具可行；客户端加服务端的系统只能拿到前端壳；有混淆加密的拿不到有效信息。产物是可演示版本，快捷键还出现过冲突。</p>
<blockquote>
  <p>📖 <a href="pages/rea-reverse-clone.html"><strong>《用 REA 逆向复刻软件：流程、成本与边界》</strong></a>——单文件图文页，含安装要求、四步流程、可行性对照表，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "rag-vs-llm-wiki",
    title: "传统 RAG 与 LLM Wiki：知识库该选哪种",
    date: "2026-11-06",
    tags: ["RAG", "课程笔记"],
    excerpt: "Harness 实战 P19：RAG 完整链路、边界，LLM Wiki 图结构知识库与选型对照。",
    content: `
<p>传统 RAG：提取 → 切块 → 向量化 → 相似度检索五块 → 拼 prompt 推理。适合变化慢的固定文档，不适合每天新增的数据和跨文档推理。LLM Wiki 让 Agent 把文档整理成带目录和关键词链接的图结构，检索变成结构导航，新文档增量并入。实际项目里两者组合使用。</p>
<blockquote>
  <p>📖 <a href="pages/rag-vs-llm-wiki.html"><strong>《传统 RAG 与 LLM Wiki：知识库该选哪种》</strong></a>——单文件图文页，含对照表与选型判断，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "harness-invoice-recap",
    title: "一次实战复盘：规范没写全，模型就开始自己决定",
    date: "2026-11-06",
    tags: ["Harness", "课程笔记"],
    excerpt: "Harness 实战 P13：订单发票功能跑通后暴露的设计错误——发票字段被塞进订单表。",
    content: `
<p>判断 Skill 链路是否生效看产物落点：需求分析目录按预期生成，说明流程确实走了规范。但产物里发票字段被塞进订单表，根因不是模型能力不足，是编码 Skill 没写“附属小实体单独建表”这条规则。<strong>规范未覆盖之处，模型按自身经验补</strong>。修法是把约定写进 Skill，再用同类需求重跑验证。</p>
<blockquote>
  <p>📖 <a href="pages/harness-invoice-recap.html"><strong>《一次实战复盘：规范没写全，模型就开始自己决定》</strong></a>——单文件图文页，含对照表与执行链路，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "harness-refactor-loop",
    title: "让 AI 写的代码长期可维护：定期扫描与重构",
    date: "2026-11-06",
    tags: ["Harness", "课程笔记"],
    excerpt: "Harness 实战 P14：定期扫描 + 重构 Skill，对抗代码熵增。",
    content: `
<p>只让 AI 加功能，代码迟早烂掉。加一条反向流程：扫描 Skill 按半个月到一个月扫全项目代码<strong>加</strong>需求变更记录，输出重构建议清单；重构 Skill 按人工确认过的清单执行并跑测试。两者拆开，避免让 AI 自己决定改什么。</p>
<blockquote>
  <p>📖 <a href="pages/harness-refactor-loop.html"><strong>《让 AI 写的代码长期可维护：定期扫描与重构》</strong></a>——单文件图文页，含对照表与执行链路，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "agent-three-generations",
    title: "Agent 是什么：原生模型的四个短板与三代跃迁",
    date: "2026-11-06",
    tags: ["Agent", "课程笔记"],
    excerpt: "Harness 实战 P16：原生模型四短板、Agent 补的四件事、工具调用/任务编排/工程底座三代。",
    content: `
<p>原生模型四个短板：没记忆、知识有截止、不能联网、碰不到本地资源。Agent 补四件事——翻译官、工具达人、记忆管家、任务管家。三代跃迁：工具调用（实习生，催一下动一下）→ 任务编排（ReAct 等，自主拆解）→ 工程底座（Harness，换模型不用重写）。判断标准：换一个模型要不要重写代码。</p>
<blockquote>
  <p>📖 <a href="pages/agent-three-generations.html"><strong>《Agent 是什么：原生模型的四个短板与三代跃迁》</strong></a>——单文件图文页，含对照表与执行链路，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "agent-seven-architectures",
    title: "七种 Agent 架构怎么选：四个梯队与成本构成",
    date: "2026-11-06",
    tags: ["Agent", "课程笔记"],
    excerpt: "Harness 实战 P17：单Agent/ReAct/意图路由/工作流/多Agent/规划式/黑板，四个梯队选型。",
    content: `
<p>七个架构分四梯队：入门（单 Agent、ReAct）、流程（意图路由、工作流编排）、协同（多 Agent）、复杂（规划式、黑板）。选型从最简单开始，用真实失败案例驱动升级。<strong>上线后成本构成</strong>：开发约 30%，人工标注与调优约 45%，运维约 7%——开发只占三成，剩下七成花在上线之后。</p>
<blockquote>
  <p>📖 <a href="pages/agent-seven-architectures.html"><strong>《七种 Agent 架构怎么选：四个梯队与成本构成》</strong></a>——单文件图文页，含对照表与执行链路，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "harness-execution-flow",
    title: "DeepSeek Harness 的执行流程：从请求到自我优化",
    date: "2026-11-06",
    tags: ["Harness", "课程笔记"],
    excerpt: "Harness 实战 P18：四段流程、两大核心模块、人和 AI 各自优化 AI 的效率对比。",
    content: `
<p>流程四段：接入需求 → 执行层（七种架构任选） → 生成候选结果 → 自动评估优化。关键在第三段与第四段分离：结果先过评估层再出去。两大模块：核心能力（一切接入、万能适配）与基座（自我净化优化）。传统方案靠加人调优，边际收益递减；底座方案评估标准统一，随数据积累效果还能涨，维护只需 1 人。</p>
<blockquote>
  <p>📖 <a href="pages/harness-execution-flow.html"><strong>《DeepSeek Harness 的执行流程：从请求到自我优化》</strong></a>——单文件图文页，含对照表与执行链路，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "harness-quickstart",
    title: "DeepSeek Harness 上手：定位、安装与插件生态",
    date: "2026-11-06",
    tags: ["Harness", "课程笔记"],
    excerpt: "Harness 实战 P1：Harness 是什么、解决什么问题、怎么装起来并跑通第一个插件。",
    content: `
<p>Harness（驾驭工程）= 大模型 + 外围执行框架。大模型负责想，Harness 负责把事做完：读文件、调工具、跑代码、处理报错。P1 讲清它和 Claude Code / Codex 这类成品的区别——Harness 是可观测、可定制、可自由组合的底层平台，附带安装与插件生态入门。</p>
<blockquote>
  <p>📖 <a href="pages/harness-quickstart.html"><strong>《DeepSeek Harness 上手：定位、安装与插件生态》</strong></a>——单文件图文页，含对照表与执行链路，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "harness-why-study",
    title: "DeepSeek Harness 为什么值得研究",
    date: "2026-11-06",
    tags: ["Harness", "课程笔记"],
    excerpt: "Harness 实战 P2：运行可追溯、创造模式、一切皆插件三大设计。",
    content: `
<p>三大核心设计：<strong>运行有据可循</strong>——完整记录执行轨迹，每步成败都留存，结果能回溯怎么生成的；<strong>创造模式</strong>——不限于现成模板，可为自己长期场景搭专属运行逻辑；<strong>一切皆插件</strong>——模型、工具、存储都是可替换组件，运行中换件不崩。</p>
<blockquote>
  <p>📖 <a href="pages/harness-why-study.html"><strong>《DeepSeek Harness 为什么值得研究》</strong></a>——单文件图文页，含对照表与执行链路，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "ai-coding-engineering",
    title: "AI 编程从 Demo 到企业级工程化",
    date: "2026-11-06",
    tags: ["Harness", "课程笔记"],
    excerpt: "Harness 实战 P3：提示词工程→上下文工程→驾驭工程三阶段。",
    content: `
<p>AI 工程三阶段：提示词工程（怎么问）、上下文工程（先喂文档再下指令）、驾驭工程（复杂任务靠约束 + 反馈 + 纠偏）。驾驭工程 = Harness 体系，核心是让模型遵从一系列约束，而不是让它猜。</p>
<blockquote>
  <p>📖 <a href="pages/ai-coding-engineering.html"><strong>《AI 编程从 Demo 到企业级工程化》</strong></a>——单文件图文页，含对照表与执行链路，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "harness-env-skills",
    title: "Harness 实战环境与六大 Skill 体系",
    date: "2026-11-06",
    tags: ["Harness", "课程笔记"],
    excerpt: "Harness 实战 P4：VS Code + Claude Code 环境、TulingShop 项目、六大 Skill 概览。",
    content: `
<p>实战环境：VS Code + Claude Code 插件，模型用国产 coding plan。真实项目 TulingShop（Vue3 + TypeScript 前端，Spring Boot + MySQL + Redis + MQ + MyBatis 后端），从零基于 AI 工程化搭建。开发层六大 Skill：需求分析、编码、代码评审、单元测试、持续集成、部署上线。</p>
<blockquote>
  <p>📖 <a href="pages/harness-env-skills.html"><strong>《Harness 实战环境与六大 Skill 体系》</strong></a>——单文件图文页，含对照表与执行链路，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "harness-core-design",
    title: "Harness 体系核心设计：入口文件与约束规范",
    date: "2026-11-06",
    tags: ["Harness", "课程笔记"],
    excerpt: "Harness 实战 P5：CLAUDE.md 入口文件、文件索引、rules 下的工程结构与开发流程。",
    content: `
<p>入口文件 CLAUDE.md 随每条指令进上下文，写技术栈、红线约束（价格字段用 integer 存分、Redis 前缀规范）和文件索引。rules 目录下三个关键文件：工程结构（分层、依赖方向、模块划分）、开发流程（十阶段流水）、编码规范（异常体系、禁用魔法值、分层规范）。</p>
<blockquote>
  <p>📖 <a href="pages/harness-core-design.html"><strong>《Harness 体系核心设计：入口文件与约束规范》</strong></a>——单文件图文页，含对照表与执行链路，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "harness-sdd-rules",
    title: "SDD 规范驱动开发：编码规范与领域术语",
    date: "2026-11-06",
    tags: ["Harness", "课程笔记"],
    excerpt: "Harness 实战 P6：编码规范细则、业务模型、接口协议、领域术语表。",
    content: `
<p>编码规范把公司的强制约定写死给模型：价格用 integer 存分、禁魔法值、异常走自研 business exception 体系而非直接抛运行时异常、DAO / Service / Controller / Redis 前缀各有写法。业务模型、接口协议（响应码与字段）、领域术语（商品 / SKU / 购物车项 / 订单项命名、状态术语、缓存架构术语）都要写——冷门军工政务项目模型没学过，不写就乱生成。</p>
<blockquote>
  <p>📖 <a href="pages/harness-sdd-rules.html"><strong>《SDD 规范驱动开发：编码规范与领域术语》</strong></a>——单文件图文页，含对照表与执行链路，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "harness-four-layer",
    title: "Rules + Skills + Wiki + Changes 四层工程化体系",
    date: "2026-11-06",
    tags: ["Harness", "课程笔记"],
    excerpt: "Harness 实战 P7：一条指令如何自动调用 Skill，需求分析与编码 Skill 内部步骤。",
    content: `
<p>规范文件是材料，Skill 是把材料串成流水线的执行器。入口文件的文件索引让模型知道每个 Skill 干什么、何时启用。需求分析 Skill 三步：需求解析、影响评估、冲突检测，产物落在 harness/changes/ 下一个功能一个目录。编码 Skill 的前置条件是拿到需求清单，产物清单交给下游用。</p>
<blockquote>
  <p>📖 <a href="pages/harness-four-layer.html"><strong>《Rules + Skills + Wiki + Changes 四层工程化体系》</strong></a>——单文件图文页，含对照表与执行链路，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "harness-legacy-project",
    title: "Agent 如何理解老项目：业务模型与接口协议",
    date: "2026-11-06",
    tags: ["Harness", "课程笔记"],
    excerpt: "Harness 实战 P8：编码前的上下文准备、生成顺序、反馈回路。",
    content: `
<p>编码 Skill 的前置条件：先读需求分析清单，再读 rules 规则文件，再加载 Wiki 模块文档，最后才编码。生成顺序自下而上：实体 → 数据库层 → 服务层 → MQ/缓存 → 接口层 → 前端。企业实践在 Skill 之间插入人工校验形成<strong>反馈回路</strong>——全自动跑到尾产物多半有 bug，每加一道人工确认结果就离预期近一步。</p>
<blockquote>
  <p>📖 <a href="pages/harness-legacy-project.html"><strong>《Agent 如何理解老项目：业务模型与接口协议》</strong></a>——单文件图文页，含对照表与执行链路，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "harness-six-skills",
    title: "六大核心 Skill 开发实战与 AI 编程三大难题",
    date: "2026-11-06",
    tags: ["Harness", "课程笔记"],
    excerpt: "Harness 实战 P9：六大 Skill 交接、人工评审分工、token/幻觉/熵增三大难题。",
    content: `
<p>六个 Skill 依次激活、用清单交接。人工只守核心链路（高并发下单链路绝不无人评审上线），非核心模块交给评审 Skill 循环修到通过。三大难题：token 消耗、幻觉（规范写清楚仍偶发违规）、代码熵增（长期多人高频交互后可控性下降，需专门治理）。Harness 一句话：让 AI 从无序生成走向受控可交付。</p>
<blockquote>
  <p>📖 <a href="pages/harness-six-skills.html"><strong>《六大核心 Skill 开发实战与 AI 编程三大难题》</strong></a>——单文件图文页，含对照表与执行链路，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "harness-demo-vs-enterprise",
    title: "何时才需要 Harness：Demo 与企业级项目的分水岭",
    date: "2026-11-06",
    tags: ["Harness", "课程笔记"],
    excerpt: "Harness 实战 P10：Demo 与企业级项目的差异、写 Skill 的前提、不同层次开发者的处境。",
    content: `
<p>Demo 级项目（网页、套壳站、小工具、小游戏）不需要 Harness，代码乱也能跑。功能上万、有高并发与分布式要求、多人长期协作的企业级项目，没有约束根本做不下去。写 Skill 的前提是懂技术和懂业务：不懂 MQ 可靠性就写不出操作 MQ 的 Skill，不懂微服务划分就写不出架构级 Skill。</p>
<blockquote>
  <p>📖 <a href="pages/harness-demo-vs-enterprise.html"><strong>《何时才需要 Harness：Demo 与企业级项目的分水岭》</strong></a>——单文件图文页，含对照表与执行链路，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "kafka-zookeeper",
    title: "Kafka 中 ZooKeeper 的作用",
    date: "2026-11-06",
    tags: ["Kafka", "面试"],
    excerpt: "B 站场景题合集 P98（完结）：临时节点存元数据——broker 注册、state 与 ISR、消费者分配、offset；新版已去 ZK 化。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P98《Kafka 中 zk 的作用》（系列完结篇）。老版 Kafka 靠 ZK 存元数据：<strong>brokers/ids</strong> 临时节点存 broker id 与物理地址，断连即删供生产者感知；<strong>topics 与 partitions</strong> 维护分布映射；<strong>state 节点</strong>存 Leader 所在 broker 与 ISR 列表（与 Leader 一致的可靠从节点集合，acks=-1 需全同步，Leader 宕机从 ISR 选新主）——选举核心；<strong>消费端</strong>存消费者与分区映射（挂掉触发 rebalance）与 offset（新版移入内部 topic）。客户端不直连 ZK，配 broker 地址间接获取元数据。新版 Kafka 已去 ZK 化，面试主动提及是加分项。</p>
<blockquote>
  <p>📖 <a href="pages/kafka-zookeeper.html"><strong>《Kafka 中 ZooKeeper 的作用》</strong></a>——单文件图文页，含节点树表与定位流程，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "kafka-pull-push",
    title: "Kafka 是 Pull 还是 Push",
    date: "2026-11-06",
    tags: ["Kafka", "面试"],
    excerpt: "B 站场景题合集 P97：Pull 按消费能力拉取、offset 玩转三种语义；空轮询用长阻塞化解；Push 不知消费能力会推垮下游。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P97。Pull 三好处：速率自控（消费完再拉，堆积量自己定）、批量灵活（一条或多条按能力定）、语义灵活（offset 手动提交时机不同，至少/最多/精准一次都好实现）。缺点是 Broker 空时消费端空轮询耗 CPU——Kafka 参数让拉空时长阻塞、或攒够条数再返回。Push 致命伤：不知道消费端进度，超时还推导致雪崩、拒绝服务与网络拥塞。结论：按消费能力拉取更灵活。</p>
<blockquote>
  <p>📖 <a href="pages/kafka-pull-push.html"><strong>《Kafka 是 Pull 还是 Push》</strong></a>——单文件图文页，含优劣对比表，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "kafka-message-loss",
    title: "Kafka 消息丢失的场景与处方",
    date: "2026-11-06",
    tags: ["Kafka", "面试"],
    excerpt: "B 站场景题合集 P96：acks 调大加重试、min.insync.replicas 配 ISR 选举、先处理后提交加幂等——三段各自设防。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P96。发送端三种丢法：acks=0 发完不管；acks=1 Leader 落盘未同步到 Follower 就宕机；unclean.leader.election=true 选中 OSR 落后副本。处方：acks 调大（-1/all）加重试大于 1，选举限 ISR。Broker 端两个搭档参数：<code>acks=-1</code> 指 ISR 全部确认，<code>min.insync.replicas</code> 要求 ISR 数量大于 1，搭配使用多数副本未确认即生产者异常（代价是吞吐下降）；另可调小刷 page cache 间隔。消费端：先 commit 再处理会丢消息，先处理后 commit 会重复消费——选后者配接口幂等（消息 id 去重）。</p>
<blockquote>
  <p>📖 <a href="pages/kafka-message-loss.html"><strong>《Kafka 消息丢失的场景与处方》</strong></a>——单文件图文页，含三段处方单，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "kafka-architecture",
    title: "Kafka 架构设计",
    date: "2026-11-06",
    tags: ["Kafka", "面试"],
    excerpt: "B 站场景题合集 P95：Topic 分区主从副本是高吞吐核心；消费者组分摊分区；ZK 管 broker 注册、映射、选举、offset。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P95。Kafka 高吞吐日志收集首选，可靠性弱于 RocketMQ（RocketMQ 借鉴其架构优化而来）。核心概念链：Broker 组成集群；Topic 类比 Queue；<strong>Partition</strong> 是核心设计——Topic 拆成多个有序队列分散到多 Broker；<strong>Replication</strong> 一主多从，读写全走 Leader；<strong>消费者组</strong>内消费者分摊不同分区（同组同分区一条消息只投一人），组间负载均衡；<strong>offset</strong> 记录消费位置重启续消。ZK 五大职责：broker 注册（临时节点）、topic 分区映射、分区与消费者分配、Leader 选举、offset 存储。</p>
<blockquote>
  <p>📖 <a href="pages/kafka-architecture.html"><strong>《Kafka 架构设计》</strong></a>——单文件图文页，含概念表与吞吐原理图，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "rabbitmq-dlx-delay",
    title: "RabbitMQ 死信队列与延时队列",
    date: "2026-11-06",
    tags: ["MQ", "面试"],
    excerpt: "B 站场景题合集 P94：被拒、过期、超长三种死信转投 DLX；TTL 加死信队列组合实现延时——订单超时关单经典方案。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P94。三种消息变死信：basicNack/basicReject 且不重回队列、TTL 到期、队列超长。配置 DLX 属性即挂死信交换机——它和死信队列都是普通对象，任何交换机类型可充当，多业务队列可共用并用不同 RoutingKey 区分。<strong>延时队列组合拳</strong>：消息设 TTL 投入无人监听的普通队列，到期自动转投死信交换机流入死信队列，消费者只监听死信队列——消息 TTL 与队列 TTL 同设取较小值。典型场景：订单超时自动关单。</p>
<blockquote>
  <p>📖 <a href="pages/rabbitmq-dlx-delay.html"><strong>《RabbitMQ 死信队列与延时队列》</strong></a>——单文件图文页，含死信来源表与延时组合图，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "rabbitmq-transaction",
    title: "RabbitMQ 事务消息",
    date: "2026-11-06",
    tags: ["MQ", "面试"],
    excerpt: "B 站场景题合集 P93：confirm 保必达但保不了原子性；事务消息先进临时队列、提交才可见、回滚即撤回——性能降数倍。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P93。confirm 是事后通知，保证不了消息发送与本地逻辑的原子性——生产端逻辑失败时消息可能已被消费。事务消息机制：信道开启事务后消息进临时队列而非真队列，提交事务才移入真队列（消费可见），回滚则撤回；流程出错抛 IO 异常由业务决定回滚或重发。消费端 autoAck=false 时把 ACK 放进事务以事务提交为准（回滚后已 ACK 的消息仍留在队列），autoAck=true 则不支持事务。性能因多次连接交互降数倍——能选 confirm 先选 confirm。</p>
<blockquote>
  <p>📖 <a href="pages/rabbitmq-transaction.html"><strong>《RabbitMQ 事务消息》</strong></a>——单文件图文页，含机制流程图，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "rabbitmq-reliability",
    title: "RabbitMQ 消息确认机制",
    date: "2026-11-06",
    tags: ["MQ", "面试"],
    excerpt: "B 站场景题合集 P92：发送方 confirm 异步回调 ACK/NACK，消费方手动 ACK 处理完才删；断连重投靠业务幂等兜底。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P92。发送方：信道设 confirm 模式，每条消息带唯一 id，投递成功回调 ConfirmCallback、失败回调 ReturnCallback（NACK），二者必回调其一但不保证何时，且是异步的——发完可继续发。消费方：autoAck=false 手动确认，处理完返回 ACK 才删除；默认 true 投递即删，事务回滚时消息等于没消费却已消失。不 ACK 时 RabbitMQ 不再投下一条——既是天然限流也是保最终一致。未 ACK 但连接断开会重投下一个消费者造成重复消费——业务方用消息 id 去重保幂等。</p>
<blockquote>
  <p>📖 <a href="pages/rabbitmq-reliability.html"><strong>《RabbitMQ 消息确认机制》</strong></a>——单文件图文页，含两道闸对比与幂等流程，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "rabbitmq-architecture",
    title: "RabbitMQ 架构设计",
    date: "2026-11-06",
    tags: ["MQ", "面试"],
    excerpt: "B 站场景题合集 P91：生产者只发 Exchange；四种交换机路由规则；Queue 互斥消费非广播；信道复用 TCP 如光缆光纤。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P91。RabbitMQ 基于 AMQP，以可靠性见长。角色链：生产者只发 Exchange 绝不直投 Queue；Exchange 按 RoutingKey 匹配 BindingKey 决定投递；Queue 对多消费者是轮询互斥消费（点对点天然支持），广播靠交换机投多个队列。四种交换机：Fanout 忽略路由键投所有绑定队列、Direct 完全匹配、Topic 通配符一对多、Headers 按消息头匹配（少用）。信道：TCP 连接有限，类 NIO 思想在一条长连接里开多个互相隔离的 AMQP 信道——光缆里有多个光纤。</p>
<blockquote>
  <p>📖 <a href="pages/rabbitmq-architecture.html"><strong>《RabbitMQ 架构设计》</strong></a>——单文件图文页，含四交换机表与信道模型，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "dubbo-architecture",
    title: "Dubbo 整体架构与分层设计",
    date: "2026-11-06",
    tags: ["微服务", "面试"],
    excerpt: "B 站场景题合集 P90：五角色十层架构；两条长连接分工；熔断降级不在其内——与 Spring Cloud 的关键分野。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P90。五大角色：注册中心、Provider（以接口维度注册）、Consumer、Monitor（统计调用次数耗时）、Container（启动加载 Provider）。两条长连接：Provider 与注册中心之间用心跳（超时剔除），注册中心与 Consumer 之间推送最新服务列表。十层分层：接口服务、配置（ServiceConfig/ReferenceConfig + ZK watch）、服务代理（动态代理封装 RPC）、注册、路由（负载均衡）、监控、远程调用（TCP 封装 RPC）、信息交换（同步转异步）、网络传输（抽象 MINA/Netty）、序列化（JSON/Hessian 任选）。能力边界：熔断降级不在 Dubbo 内——与全家桶式 Spring Cloud 最重要的区别。</p>
<blockquote>
  <p>📖 <a href="pages/dubbo-architecture.html"><strong>《Dubbo 整体架构与分层设计》</strong></a>——单文件图文页，含五角色表与十层分层表，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "springcloud-components",
    title: "Spring Cloud 核心组件与作用",
    date: "2026-11-06",
    tags: ["微服务", "面试"],
    excerpt: "B 站场景题合集 P89：按调用流程串五组件——Eureka 注册发现、Ribbon 负载均衡、Feign 声明调用、Hystrix 熔断、网关入口。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P89。Spring Cloud 是一套方案而非一个框架，按调用流程串起：<strong>Eureka</strong> 注册发现——CS 架构中间件，服务清单是双层 map（服务名→实例名→IP:端口），心跳剔除，集群相互注册，AP 非强一致可用性优先；<strong>Ribbon</strong> 客户端负载均衡——按服务名替代 IP 端口调用；<strong>Feign</strong> 动态代理封装调用（同 MyBatis mapper 思想），注解即远程调用；<strong>Hystrix</strong> 断路器——命令模式独立线程池隔离，统计超时达阈值熔断，fallback 友好提示加降级（记日志发 MQ）；<strong>网关</strong>——前端未注册 Eureka 走不了 Ribbon/Feign，网关自身注册为节点变平等地位，外部流量享受全套治理。</p>
<blockquote>
  <p>📖 <a href="pages/springcloud-components.html"><strong>《Spring Cloud 核心组件与作用》</strong></a>——单文件图文页，含组件流程，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "facade-vs-composite",
    title: "外观模式与组合模式怎么选",
    date: "2026-11-06",
    tags: ["Java", "设计模式"],
    excerpt: "B 站场景题合集 P88：横向网状依赖用外观封装解耦，纵向深层嵌套用组合统一契约递归遍历。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P88。大系统两种复杂度对症两个模式：<strong>外观模式</strong>治横向网状依赖——移动端不透传底层原子服务，中间建聚合接口（placeOrder）当网关，对上屏蔽库存支付物流等异构子系统内部协议，对内梳理多系统调用为一个原子操作；<strong>组合模式</strong>治纵向深层嵌套——统一抽象契约让容器节点与叶子节点同类型，客户端只调根节点 operation 沿树自动递归分发，免 if-else 判类型。选型：降外部接入成本选外观（防腐层），树形结构一致操作选组合（递归体系）。</p>
<blockquote>
  <p>📖 <a href="pages/facade-vs-composite.html"><strong>《外观模式与组合模式怎么选》</strong></a>——单文件图文页，含选型对照表，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "design-patterns-why",
    title: "设计模式到底是什么，为何离不开",
    date: "2026-11-06",
    tags: ["Java", "设计模式"],
    excerpt: "B 站场景题合集 P87：解决代码能活多久；创建/结构/行为三类对症三类混乱；对抗熵增有代价，变化频率超维护成本才正收益。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P87。设计模式解决的不是代码能不能运行，而是代码能活多久。三类方案对症三类混乱：创建型（单例/工厂/建造者）封装 new 的强耦合；结构型（适配器/代理）不改源码组装不兼容组件；行为型（策略/中介者）消灭 if-else、把网状依赖归为总线通讯。根本动力是对抗熵增：系统必然趋向高耦合的腐化。权衡：模式有认知负载与间接层级的代价，业务变化频率超过其维护成本时引入才是正收益——没有银弹。三重境界：手拉车编程 → 套路化过度设计 → 模式内化为直觉，某些场景不用模式恰恰是最高明设计。</p>
<blockquote>
  <p>📖 <a href="pages/design-patterns-why.html"><strong>《设计模式到底是什么，为何离不开》</strong></a>——单文件图文页，含三方案表与三重境界，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "shardingsphere-algorithms",
    title: "ShardingSphere 分片算法全景",
    date: "2026-11-06",
    tags: ["MySQL", "架构"],
    excerpt: "B 站场景题合集 P86：标准/复合策略定维度，取模 O(1) 但扩容全量迁移，时间范围冷热分离零迁移，SPI 自定义兜底。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P86。三层解构：<strong>策略层</strong>——标准分片策略限单片键路由最快，复合分片策略支持多维查询但复杂度陡增；特殊场景用 Hint 强制路由（线程上下文直指数据源）。<strong>算法层</strong>——取模算法 O(1) 纯数学、流量存储完美均衡，适配雪花 id 等数值主键，缺陷是扩容取模偏移触发全量迁移；时间范围算法按时间窗口路由，天然冷热分离、归档直接 DROP 表、未来分片自动创建——扩容成了时间维度的自然延伸零迁移。<strong>SPI 层</strong>——实现标准接口把控制权收回应用层，可注入任意 Java 逻辑甚至读配置中心动态规则。决策矩阵按主键类型与数据形态四条对号入座。</p>
<blockquote>
  <p>📖 <a href="pages/shardingsphere-algorithms.html"><strong>《ShardingSphere 分片算法全景》</strong></a>——单文件图文页，含三层结构与决策矩阵，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "sharding-capacity",
    title: "分库分表数量怎么定：三步推演",
    date: "2026-11-06",
    tags: ["MySQL", "架构"],
    excerpt: "B 站场景题合集 P85：3 年总量÷1000 万定表数对齐 2 的幂，峰值 TPS÷安全水位定库数，逻辑 schema 与物理机解耦换弹性。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P85。红线来自 B+ 树物理逻辑：单表小于 2000 万行树高小于 4 层，单查询 1~3 次磁盘 IO；超限裂变 4 层随机 IO 指数上升。三步推演（订单中心实例）：3 年总量约 17 亿行 ÷ 1000 万 ≈ 170 张，向上对齐 2 的幂取 256 张（哈希路由 id&(n-1) 位运算）；峰值 3000 TPS ÷ 单机安全水位 1000 = 3，冗余取 8 个物理库，单库 375 TPS 负载 40% 以下。逻辑库解耦：初期 2 台物理机跑 8 个 schema，业务增长迁移逻辑库，路由始终 id 对 8 取模——零代码平滑扩容。</p>
<blockquote>
  <p>📖 <a href="pages/sharding-capacity.html"><strong>《分库分表数量怎么定：三步推演》</strong></a>——单文件图文页，含推演表与解耦图，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "redis-vs-zk-lock",
    title: "分布式锁：Redis 还是 Zookeeper",
    date: "2026-11-06",
    tags: ["微服务", "面试"],
    excerpt: "B 站场景题合集 P84：Redis LUA 原子加看门狗续期管 90% 业务；ZK 临时顺序节点加链式监听管资金级强一致。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P84。本地锁因 JVM 进程隔离失效，需要独立于应用的全局互斥信号量。Redis 路线（AP，90% 互联网业务的事实标准）：LUA 脚本把 SETNX 与 EXPIRE 封装为原子指令解原子性，watchdog 每 10 秒检测存活自动续期解活性（防业务超 TTL 锁提前释放与误删）。ZooKeeper 路线（CP，资金流转与事务协调）：临时顺序节点实现公平排队、断连自动删除杜绝死锁、链式监听（只监听前一节点）避免羊群效应降低网络负载。数据库悲观锁在高并发下是反模式；Redis 主从切换瞬间极低概率锁丢失在业务层可接受。</p>
<blockquote>
  <p>📖 <a href="pages/redis-vs-zk-lock.html"><strong>《分布式锁：Redis 还是 Zookeeper》</strong></a>——单文件图文页，含两路线对比，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "distributed-transaction",
    title: "分布式事务三大方案与选型",
    date: "2026-11-06",
    tags: ["微服务", "面试"],
    excerpt: "B 站场景题合集 P83：RPC 三态击穿本地事务；XA 同步阻塞、TCC 业务侵入、RocketMQ 事务消息反向回查——按场景对号入座。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P83。问题根源：调用链跨进程后网络抖动让调用方陷入 RPC 三态（成功、失败、未知），本地事务的原子性边界被击穿。三方案：<strong>XA 两阶段</strong>——prepare 锁资源写日志再 commit，同步阻塞连接与行锁、吞吐随节点指数下降、协调者单点；<strong>TCC</strong>——Try 预留资源（库存转冻结字段）、Confirm 提交、Cancel 反向补偿，无锁高并发但业务侵入极高，须处理空回滚与悬挂；<strong>RocketMQ 事务消息</strong>——half message 持久化待投递、本地事务、commit 转可消费，丢指令靠反向回查自动修复。选型：金融账务 XA/Seata，秒杀 TCC，通知类事务消息。</p>
<blockquote>
  <p>📖 <a href="pages/distributed-transaction.html"><strong>《分布式事务三大方案与选型》</strong></a>——单文件图文页，含三方案对比表，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "base-theory",
    title: "强一致还是保生存：BASE 理论",
    date: "2026-11-06",
    tags: ["微服务", "架构"],
    excerpt: "B 站场景题合集 P82：P 是前提，AP 换吞吐；基本可用、软状态、最终一致；主流程 ACID 刚一致，旁路 MQ 最终一致。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P82。死结：为了绝对准确加重锁，流量一来锁竞争雪崩。CAP 里 P 是必须接受的前提，执着 C 分区时就只能拒绝服务——电商必须先保 A。BASE 是 AP 的工程化，与 ACID 刚性事务相对的柔性事务：基本可用（洪峰降级保核心链路）、软状态（支付成功积分未到账是合法中间态）、最终一致（T0 到 Tn 窗口内副本对齐）。落地刚柔并济：下单主流程用 ACID 保库存资金强一致，积分等非核心写 MQ 异步消费。两道兜底：幂等（唯一键校验防重复消费）与补偿（梯度重试、死信队列、人工对账）。</p>
<blockquote>
  <p>📖 <a href="pages/base-theory.html"><strong>《强一致还是保生存：BASE 理论》</strong></a>——单文件图文页，含三要素表与落地流程，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "dubbo-async",
    title: "Dubbo 异步调用的原理与三陷阱",
    date: "2026-11-06",
    tags: ["微服务", "并发"],
    excerpt: "B 站场景题合集 P81：CPU 闲但线程池耗尽的资源悖论；Future Map 挂钩机制；上下文丢失、被压 OOM、异常逃逸三陷阱。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P81。资源悖论：同步调用线程九成时间在等 IO，CPU 不到 20% 线程池却耗尽。异步原理：Netty 非阻塞写入，微秒级释放业务线程；全局 Future Map 以 request id 为唯一钩子，TCP 响应到达时 Netty 线程按 id 查表写结果触发回调——链路总耗时从累加变为取最慢。三陷阱：异步回调线程已变致 ThreadLocal 上下文丢失（提交前快照）、发送端非阻塞数万 Future 积压 OOM（信号量限流）、主流程 try-catch 捕不到异步异常（future 链末尾强制 exceptionally 兜底）。舱壁隔离：Servlet 3.0 async 接收后立即转独立业务线程池。</p>
<blockquote>
  <p>📖 <a href="pages/dubbo-async.html"><strong>《Dubbo 异步调用的原理与三陷阱》</strong></a>——单文件图文页，含挂钩机制图与陷阱表，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "dubbo-loadbalance",
    title: "Dubbo 负载均衡策略与场景选型",
    date: "2026-11-06",
    tags: ["微服务", "面试"],
    excerpt: "B 站场景题合集 P80：加权随机默认带预热，平滑轮询防突刺，最小活跃自动隔离慢节点，一致性哈希管有状态。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P80。负载均衡站在调用链最后一棒（目录筛节点、路由剔机器之后）。四策略：<strong>Random 加权随机</strong>默认最稳，新机器权重爬坡预热防冷启动打死；<strong>平滑加权轮询</strong>把高权重请求均匀散落在时间轴防流量突刺；<strong>LeastActive 最小活跃数</strong>能者多劳，实时感知积压自动隔离被 Full GC 拖慢的机器；<strong>一致性哈希</strong>管有状态场景（本地缓存、会话粘性），虚拟节点让下线机器流量均匀摊派。配置金字塔：方法级 > 接口级，消费端 > 服务端；SPI 可扩展自定义。</p>
<blockquote>
  <p>📖 <a href="pages/dubbo-loadbalance.html"><strong>《Dubbo 负载均衡策略与场景选型》</strong></a>——单文件图文页，含四策略定位表，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "http-keepalive",
    title: "HTTP 长连接与短连接，Nginx 怎么管",
    date: "2026-11-06",
    tags: ["网络", "性能"],
    excerpt: "B 站场景题合集 P79：短连接多 1.5 倍 RTT 加内核开销；Nginx upstream 不配 keepalive 池与 HTTP/1.1 等于白配。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P79。带宽充足 CPU 闲置但响应慢，杀手在连接管理。短连接像买一件结一次账出一次门：应用层几十 ms 只是表象，网络层多 1.5 倍往返时延，内核层频繁创建销毁 socket 空耗 CPU。长连接是会员通道，建连一次复用成千上万次。Nginx 隐藏陷阱：客户端到 Nginx 开了 keepalive，但 Nginx 默认用 HTTP/1.0 短连接连后端，转手切断——后端压力没减。解法：upstream 配 keepalive 连接池 + proxy_http_version 1.1 + 清空 Connection 头。长连接不是银弹：滥用导致 TIME_WAIT 堆积占满端口，公网环境谨慎设超时。</p>
<blockquote>
  <p>📖 <a href="pages/http-keepalive.html"><strong>《HTTP 长连接与短连接，Nginx 怎么管》</strong></a>——单文件图文页，含三层代价表与陷阱解法，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "zero-copy",
    title: "零拷贝：把 CPU 从搬运工解放出来",
    date: "2026-11-06",
    tags: ["网络", "性能"],
    excerpt: "B 站场景题合集 P76：传统 IO 四拷贝四切换；sendfile 绕用户态，scatter-gather DMA 零接触，Java 有 FileChannel 与 Netty 两流派。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P76。传统读文件并发送是昂贵接力赛：DMA 到内核缓冲 → CPU 拷贝到用户态（应用只是过下手没改数据）→ CPU 拷回 socket 缓冲 → 网卡，共四次拷贝四次上下文切换。零拷贝两步走：<strong>sendfile</strong> 让数据在内核内流转绕过用户态；<strong>scatter-gather DMA</strong> 连内核内拷贝都免掉，只传文件描述符与长度，CPU 全程零接触——Kafka 与 Nginx 靠它跑满网卡。Java 两流派：FileChannel.transferTo 映射 sendfile（静态资源首选）；Netty 的 CompositeByteBuf 逻辑拼装加 Direct Memory 免堆外跨界拷贝（复杂协议拼接）。</p>
<blockquote>
  <p>📖 <a href="pages/zero-copy.html"><strong>《零拷贝：把 CPU 从搬运工解放出来》</strong></a>——单文件图文页，含接力赛链路图与流派表，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "websocket-nginx",
    title: "WebSocket 与 Nginx 的三道配置",
    date: "2026-11-06",
    tags: ["网络", "架构"],
    excerpt: "B 站场景题合集 P75：101 握手借船出海；Nginx 强 HTTP/1.1、透传升级头、超时 3600s；集群用 Redis 发布订阅解连接孤岛。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P75。短轮询九成请求是空的，握手与 header 解析白耗资源；WebSocket 建全双工 TCP 长连接，服务器主动推送，延迟秒级压到毫秒级。握手是借船出海：HTTP 请求带 <code>Upgrade: websocket</code> 与 <code>Connection: Upgrade</code>，服务器回 101 Switching Protocols，之后 TCP 保持打开改传二进制帧。Nginx 三件事：强制 HTTP/1.1（默认 1.0 不支持升级）、透传两个升级头、读超时 3600 秒以上配应用层心跳。集群连接孤岛：WebSocket 有状态不能随意路由，用 Redis 发布订阅当消息总线跨节点投递。</p>
<blockquote>
  <p>📖 <a href="pages/websocket-nginx.html"><strong>《WebSocket 与 Nginx 的三道配置》</strong></a>——单文件图文页，含握手流程与 Nginx 三配置，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "cors",
    title: "什么是跨域以及三种解决方案",
    date: "2026-11-06",
    tags: ["网络", "前端"],
    excerpt: "B 站场景题合集 P74：同源策略防 CSRF；CORS 授权头是标准解，开发用 proxy 提效，生产用 Nginx 网络层天然同源。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P74。同源策略要求协议域名端口完全一致，请求到达服务器、数据回到浏览器后读取阶段仍被拦截——这是在防御 CSRF（恶意站点借残留凭证发起未授权转账）。三种解法按阶段选：<strong>CORS</strong>（服务端下发 Access-Control-Allow-Origin，预检通过放行，适合公共 API）；<strong>本地代理</strong>（Node 中间件转发，浏览器全程同源——关键物理特性：同源策略只限浏览器不限服务间通信）；<strong>Nginx 反向代理</strong>（统一域名，静态与 API 路径分流，网络层天然同源）。业内最佳实践：开发 proxy 提效，生产 Nginx 保障性能。</p>
<blockquote>
  <p>📖 <a href="pages/cors.html"><strong>《什么是跨域以及三种解决方案》</strong></a>——单文件图文页，含三方案定位表，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "http-vs-rpc",
    title: "HTTP 与 RPC 的区别",
    date: "2026-11-06",
    tags: ["网络", "架构"],
    excerpt: "B 站场景题合集 P73：HTTP 写信通用但臃肿，RPC 发电报高效但强契约；成熟系统是网关串联的外宽内严。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P73。HTTP 自描述零门槛（无需 SDK 网络通即调），但文本解析与冗余 header 是高并发性能杀手；RPC 让远程调用像本地函数，IDL 契约只传值不传字段名，二进制极致压缩，强类型还能在编译期拦截参数错误。打比方：HTTP 是写信谁都能懂，RPC 是发电报只有机器读。成熟系统不做单选题——<strong>外宽内严</strong>：公网对不可控环境用 HTTP（兼容性大于一切），API 网关做协议转换，内网订单库存支付等核心服务用 RPC 的长连接与二进制序列化。选型：开放平台/验证期 HTTP，高并发集群 RPC。</p>
<blockquote>
  <p>📖 <a href="pages/http-vs-rpc.html"><strong>《HTTP 与 RPC 的区别》</strong></a>——单文件图文页，含对比表与外宽内严架构，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "ddos-defense",
    title: "什么是 DDoS 攻击，如何防御",
    date: "2026-11-06",
    tags: ["安全", "架构"],
    excerpt: "B 站场景题合集 P72：SYN Flood 堵半连接队列，应用层阴招专打贵操作；CDN 清洗、WAF 拦截、熔断削峰三层漏斗。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P72。DDoS 靠僵尸网络（肉鸡：被黑的服务器、路由器、摄像头）同时发起高频请求形成洪峰。网络层经典是 <strong>SYN Flood</strong>：伪造源 IP 只发 SYN 即失联，内核维持半连接队列耗尽，合法连接进不来；应用层更阴险——伪装正常请求专打贵操作（全表扫描、大文件导出、慢连接占线程），穿透防火墙拖垮线程池。防御是三层漏斗：CDN 边缘节点分散清洗体积型攻击，WAF 网关封禁限流，应用自身熔断保主链路加 MQ 削峰。本质是成本博弈：架构设计抬高攻击者成本。</p>
<blockquote>
  <p>📖 <a href="pages/ddos-defense.html"><strong>《什么是 DDoS 攻击，如何防御》</strong></a>——单文件图文页，含攻击原理表与漏斗图，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "mybatis-cursor-pagination",
    title: "MyBatis 查 100 万页：别再用 Limit Offset",
    date: "2026-11-06",
    tags: ["MySQL", "性能"],
    excerpt: "B 站场景题合集 P71：逻辑分页 OOM、物理分页怕深页；延迟关联降五个数量级，游标驱动与数据量彻底解耦。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P71。四级答案：<strong>逻辑分页</strong>（RowBounds）是应用层拙劣拦截——全量 select 塞满网络、JVM 实例化百万对象再丢弃，OOM；<strong>物理分页</strong> limit 不是跳过是扫描，深页扫百万行加回表随机 IO 耗时 30 秒；<strong>延迟关联</strong>——子查询只取主键 id（索引叶子免回表），再回表取全列，SQL 开销降五个数量级，百万级性价比之王；<strong>游标驱动</strong>——抛弃页码改 where id &gt; 上页最大 id，B+ 树直接 seek 目标叶子，复杂度与数据总量彻底解耦，亿级毫秒级。选型：后台小数据要跳页用 Limit，中型延迟关联，C 端亿级游标。</p>
<blockquote>
  <p>📖 <a href="pages/mybatis-cursor-pagination.html"><strong>《MyBatis 查 100 万页：别再用 Limit Offset》</strong></a>——单文件图文页，含四级方案对比，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "mybatis-l2-cache",
    title: "为什么大厂弃用 MyBatis 二级缓存",
    date: "2026-11-06",
    tags: ["MySQL", "架构"],
    excerpt: "B 站场景题合集 P70：二级缓存是 namespace 级本地缓存，集群下节点间无法失效；标准答案是关掉它上移 Redis。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P70。一级缓存是 SqlSession 级（快而短命，提交或关会话即失效）；二级缓存为打破会话壁垒而生，namespace 级序列化暂存跨会话共享——单体时代的好方案。集群下致命：节点 A 更新清了自己的缓存，节点 B 无感知继续抱旧数据，支付库存场景就是事故级数据割裂。标准答案：显式关闭二级缓存，缓存压力上移 Redis 集群——节点间互不通气，就找全局唯一真理源头，MyBatis 专心做 ORM。</p>
<blockquote>
  <p>📖 <a href="pages/mybatis-l2-cache.html"><strong>《为什么大厂弃用 MyBatis 二级缓存》</strong></a>——单文件图文页，含两级缓存对比与集群脏数据链路，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "jpa-vs-mybatis",
    title: "为什么 JPA 用半年哭着换 MyBatis",
    date: "2026-11-06",
    tags: ["Java", "架构"],
    excerpt: "B 站场景题合集 P69：对象优先 vs SQL 优先；JPA 有 N+1 暗雷；既要又要就读写分离——写 JPA 保逻辑，读 MyBatis 提速。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P69。JPA 对象优先：数据库是被封起来的仓库，自动生成 SQL，复杂业务省事但藏着 N+1 陷阱——查 100 个订单默默跑 100 次子查询补关联数据，数据库堵死 IO 飙高。MyBatis SQL 优先：方法即 SQL 入口，执行过程绝对控制，性能全听你的。选型：高并发电商金融选 MyBatis（极致性能）；OA/ERP/CRM 等复杂业务内部系统选 JPA（领域建模强约束）。既要又要的混合方案：写走 JPA 守逻辑底线，读走 MyBatis 突破性能上限。</p>
<blockquote>
  <p>📖 <a href="pages/jpa-vs-mybatis.html"><strong>《为什么 JPA 用半年哭着换 MyBatis》</strong></a>——单文件图文页，含哲学对比与混合方案，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "springboot-cglib-aop",
    title: "SpringBoot 2.0 为何弃用 JDK 代理",
    date: "2026-11-06",
    tags: ["Java", "Spring"],
    excerpt: "B 站场景题合集 P68：JDK 代理与目标类是平行实现无法互转；CGLIB 子类天然兼容，Objenesis 补掉构造器双调，final 会静默断链。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P68。JDK 动态代理的类型陷阱：代理对象与目标类只是平行实现了同一接口，强类型机制下无法互转——注入实现类加 @Transactional 启动即 ClassCastException。CGLIB 用 ASM 生成目标类子类，注入变继承扩展天然兼容；早期未成默认是因构造函数重复调用（重资源构造器执行两次），Objenesis 绕过构造函数直接实例化后消除副作用且性能追平，Boot 2.0 才切换默认。架构师边界：final 类或 final 方法让代理链静默断裂（不抛异常），事务与权限切面根本进不去，record 与不可变设计场景必须警惕。</p>
<blockquote>
  <p>📖 <a href="pages/springboot-cglib-aop.html"><strong>《SpringBoot 2.0 为何弃用 JDK 代理》</strong></a>——单文件图文页，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "beanfactory-vs-appcontext",
    title: "BeanFactory vs ApplicationContext",
    date: "2026-11-06",
    tags: ["Java", "Spring"],
    excerpt: "B 站场景题合集 P67：裸发动机与全功能整车；懒加载首屏慢错误晚爆，预加载 fail-fast；三大整合能力。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P67。BeanFactory 是 IoC 核心引擎（低级容器规范，只做实例化与配置）；ApplicationContext 继承其全部底座升级为全功能整车。本质区别在加载策略：懒加载启动快但首屏延迟、配置错误等用户触发才暴露；预加载启动即完成全部单例装配，fail-fast 保证上线即健康。三大整合能力：统一资源加载（类路径/文件/网络一套代码）、国际化消息解析、事件发布订阅（观察者模式解耦）。选型：嵌入式等内存敏感场景 BeanFactory 不可替代，现代 Web 与微服务无脑 ApplicationContext。</p>
<blockquote>
  <p>📖 <a href="pages/beanfactory-vs-appcontext.html"><strong>《BeanFactory vs ApplicationContext》</strong></a>——单文件图文页，含加载策略对决表，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "springboot-value-env",
    title: "SpringBoot 配置读取三件套怎么选",
    date: "2026-11-06",
    tags: ["Java", "Spring"],
    excerpt: "B 站场景题合集 P66：配置源是优先级队列，命令行秒杀文件；static 注入要 setter 木马；复杂配置无脑 ConfigurationProperties。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P66。底层：OS 变量、包外文件、命令行参数是平等数据源，队列位置决定覆盖权，Environment.getProperty 遍历队列返回唯一真理。@Value 两死局：static 注入失败（DI 基于实例、类加载时 bean 未出生，用非静态 setter 当特洛伊木马间接赋值）、final 变量用构造器注入保不可变。配置超五项或有层级时升级 @ConfigurationProperties：强类型建模启动即报错、松散绑定、IDEA 智能提示；@PropertySource 默认不支持 yml，手动实现 PropertySourceFactory 补齐。选型：单值用 @Value，业务模块用 ConfigurationProperties，框架级动态数据源直接操作 Environment。</p>
<blockquote>
  <p>📖 <a href="pages/springboot-value-env.html"><strong>《SpringBoot 配置读取三件套怎么选》</strong></a>——单文件图文页，含死局解法表，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "bigdecimal-pitfalls",
    title: "BigDecimal 的四个致命陷阱",
    date: "2026-11-06",
    tags: ["Java", "面试"],
    excerpt: "B 站场景题合集 P65：构造传 String、比较用 compareTo、除法设 RoundingMode、运算必接返回值——金融零容错四条防线。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P65。double 二进制无法精确表示 0.1，0.1+0.2 得 0.30000000000000004，金融零容错。BigDecimal 四陷阱：<strong>构造</strong>传 double 忠实记录已失真近似值，必须传 String 或 valueOf；<strong>比较</strong>equals 还比标度（1.0 与 1.00 不等），业务只用 compareTo；<strong>除法</strong> 1÷3 无限循环必须指定 scale 与 RoundingMode；<strong>不可变</strong>——所有运算返回新对象，不接返回值等于白算。四条防御矩阵即面试答案。</p>
<blockquote>
  <p>📖 <a href="pages/bigdecimal-pitfalls.html"><strong>《BigDecimal 的四个致命陷阱》</strong></a>——单文件图文页，含四陷阱解法表，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "spring-singleton-scope",
    title: "Spring 的单例是容器视角，不是 JVM 视角",
    date: "2026-11-06",
    tags: ["Java", "Spring"],
    excerpt: "B 站场景题合集 P64：@Component 是容器缓存逻辑唯一，父子容器或同容器多定义都能造出多个实例。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P64。单例模式是代码级（私有构造+静态方法）同一 class loader 下物理唯一；Spring singleton 是同一 IoC 容器缓存中托管态逻辑唯一。两个翻车现场：微服务父子容器各自初始化同名 bean，Spring 侧自洽 JVM 侧两个实例，bean 里放全局计数器当场崩；同一容器配两个不同 id 指向同一 class，照样两个实例——singleton 是"按定义唯一"不是"按类唯一"。选型：99% 业务场景用 Spring bean（要 DI 与生命周期），硬件驱动句柄等底层资源才手写单例模式。</p>
<blockquote>
  <p>📖 <a href="pages/spring-singleton-scope.html"><strong>《Spring 的单例是容器视角，不是 JVM 视角》</strong></a>——单文件图文页，含概念对照与翻车现场，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "spring-autowire",
    title: "Spring 自动装配演进与最佳实践",
    date: "2026-11-06",
    tags: ["Java", "Spring"],
    excerpt: "B 站场景题合集 P63：byName 怕重构、byType 怕歧义，构造器注入是终极契约；Qualifier 与 Primary 解多实现冲突。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P63。演进链：XML 手动配置繁琐脆弱 → byName 取 setter 名匹配（重构变量名即注入失败）→ byType 按接口匹配（两实现并存选择困难启动失败）→ @Autowired 默认类型失败回退名称。三种注入流派：字段注入破坏封装不推荐；Setter 留给可选依赖；构造器注入是不可动摇的首选——实例化即完整态、依赖不可变、脱离容器可单测。多实现歧义两把钥匙：@Qualifier 按名称锁定，@Primary 设默认候选。</p>
<blockquote>
  <p>📖 <a href="pages/spring-autowire.html"><strong>《Spring 自动装配演进与最佳实践》</strong></a>——单文件图文页，含四代方案对比，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "java-list-pitfalls",
    title: "99% 开发者都踩过的 List 坑",
    date: "2026-11-06",
    tags: ["Java", "面试"],
    excerpt: "B 站场景题合集 P62：asList 降维不可变是视图，subList 拖住 100MB 不放，CopyOnWriteArrayList 只配读多写少。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P62。Arrays.asList 三重幻象：传 int[] 泛型把数组当单一元素 size 为 1；返回内部类不可增删抛 UnsupportedOperationException；它是原数组的视图改哪边都联动——解药 new ArrayList 包裹解耦。subList 内存泄漏：切片持有原列表引用，10 条切片拖住 100MB 不让 GC——用构造函数拷贝断链。CopyOnWriteArrayList 选型：读直访无锁、写加锁复制整个数组再切换引用，只到最终一致且瞬时内存翻倍——读多写少的白名单是神器，高频写换锁机制。</p>
<blockquote>
  <p>📖 <a href="pages/java-list-pitfalls.html"><strong>《99% 开发者都踩过的 List 坑》</strong></a>——单文件图文页，含三坑解药表，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "order-split-merge",
    title: "电商订单拆单与合单设计",
    date: "2026-11-06",
    tags: ["架构", "面试"],
    excerpt: "B 站场景题合集 P61：拆的是履约单元；合单看仓库状态不看意愿；退货运费后置扣除，四层订单模型撑住业务架构。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P61。拆单本质：洗发水北京仓护发素广州仓，必须把付订单拆成关联仓库的子订单——付订单管收钱、子订单管发货。合单决策门：不看省钱意愿看仓库——已打面单封箱就红线，双方未处理且同仓库同时效才合。灵魂拷问：满 99 包邮买 100 拆 50+50 退一半怎么办？运费后置扣除，退 50 减运费 10 = 40，技术上要求支付单与商户子单解耦。四层模型：订单层（用户视角）、支付层（总账）、子单层（履约单元）、履约层（物流包裹）。</p>
<blockquote>
  <p>📖 <a href="pages/order-split-merge.html"><strong>《电商订单拆单与合单设计》</strong></a>——单文件图文页，含决策门流程与四层模型，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "gc-pause-ttsp",
    title: "GC 耗时 10ms，系统为什么卡 10 秒",
    date: "2026-11-06",
    tags: ["JVM", "面试"],
    excerpt: "B 站场景题合集 P60：差值是 Time To Safepoint——JIT 剥掉 int 计数循环的安全点检查，一个线程聋了全网陪等。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P60。GC 日志 real 0.01s、total 10s，差值是 TTSP（Time To Safepoint）：GC 吹哨要所有线程到最近安全点停车，而 JIT 认为计数循环确定跑得快，激进剥掉循环内 safe point check——T3 跑完两亿次循环前听不见哨声，GC 不开工其他线程不恢复，十秒真相。自救：野路子 int 改 long（利用 JIT 保守判断），正规军 -XX:+UseCountedLoopSafepoints 让计数循环也保留检查，牺牲一丢丢性能换稳定可预测。</p>
<blockquote>
  <p>📖 <a href="pages/gc-pause-ttsp.html"><strong>《GC 耗时 10ms，系统为什么卡 10 秒》</strong></a>——单文件图文页，含灾难现场还原图，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "coupon-rule-engine",
    title: "优惠券规则引擎与组合优惠设计",
    date: "2026-11-06",
    tags: ["Java", "架构"],
    excerpt: "B 站场景题合集 P59：规则脚本入库存库热加载，优惠券三元抽象（条件/动作/约束），组合优惠用剪枝加动态规划。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P59。硬编码灾难：if 套 if 像意大利面，大促凌晨改规则要编译打包重启，改错即 P0。解法是<strong>规则引擎</strong>：逻辑即数据，规则脚本（QlExpress/SpEL/Groovy）存数据库，订单来了引擎动态解析，运营改脚本秒生效免发版。<strong>三元抽象</strong>：任何券拆成 condition（门槛）+ action（权益）+ constraint（互斥/有效期）元数据，免改表支持无限玩法。<strong>组合优惠</strong>是背包问题：十张券穷举 1024 种、二十张百万次，剪枝先砍不可能分支（满 500 券遇 200 元订单整支砍掉），再上动态规划。</p>
<blockquote>
  <p>📖 <a href="pages/coupon-rule-engine.html"><strong>《优惠券规则引擎与组合优惠设计》</strong></a>——单文件图文页，含三元抽象表与算法思路，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "sensitive-word-filter",
    title: "敏感词过滤的架构师答案",
    date: "2026-11-06",
    tags: ["Java", "架构"],
    excerpt: "B 站场景题合集 P58：contains 是性能谋杀、正则会栈溢出；DFA 建树 O(n) 匹配，清洗归一化防绕过，双缓冲热更新。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P58。天真方案死法：List + contains 循环是几万词乘几千字的性能谋杀；正则引擎回溯可栈溢出；原样匹配防不住表情穿插与火星文。架构师三件套：<strong>DFA 算法</strong>——敏感词建树（赌→博/局，词尾标记），文章逐字顺树爬，匹配效率只与文章长度有关、与词库大小无关；<strong>防绕过流水线</strong>——去噪清洗扒表情标点，归一化拼音转汉字繁转简，再进树一抓一个准；<strong>双缓冲热更新</strong>——后台构建新 Map 建好后引用指针瞬间切换，旧 Map 交 GC，词库天天变服务不重启。</p>
<blockquote>
  <p>📖 <a href="pages/sensitive-word-filter.html"><strong>《敏感词过滤的架构师答案》</strong></a>——单文件图文页，含防绕过流水线图，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "multi-tenant-saas",
    title: "多租户 SaaS 系统设计",
    date: "2026-11-06",
    tags: ["架构", "面试"],
    excerpt: "B 站场景题合集 P57：三种隔离模式按客户分级定价；MyBatis 拦截器自动注入 tenant_id 兜底，限流加迁移治吵闹邻居。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P57。"加个 tenant_id 字段"太初级，三坑：手抖漏 where 或传错租户 id 是数据泄露事故；一客户一库在万级客户下连接池爆掉；大客户大促抢满 CPU 的吵闹邻居。方案：<strong>分级隔离</strong>——VIP 独立数据库（物理隔离最贵最安全）、中产独立 schema、平民共享表加 tenant_id；<strong>工具兜底</strong>——永远不要相信人，MyBatis Plus 拦截器拦下 SQL 自动注入当前租户 id，业务无感且安全；<strong>治邻居</strong>——给大租户设 QPS 阈值限流，长期占用资源自动迁移独立库。</p>
<blockquote>
  <p>📖 <a href="pages/multi-tenant-saas.html"><strong>《多租户 SaaS 系统设计》</strong></a>——单文件图文页，含三模式表与拦截器流程，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "token-storage",
    title: "用户登录 Token 存储的安全漏洞",
    date: "2026-11-06",
    tags: ["Java", "安全"],
    excerpt: "B 站场景题合集 P56：localStorage 挨 XSS、纯 cookie 挨 CSRF、JWT 撤不回；终解 HttpOnly cookie + Redis 集中管控。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P56。三连坑：<strong>localStorage</strong> 是给 JS 存数据用的，XSS 注入脚本一行 getItem 就把 token 偷走冒充转账；<strong>纯 cookie</strong> 自动携带，CSRF 钓鱼链接一点转账请求带着正确 cookie 直达后端；<strong>JWT 无状态</strong>——发出去像泼出去的水，改密码注销后旧 token 照用到期（换了锁芯没收钥匙）。补救与终解：JWT 配 Redis 黑名单（注销改密拉黑 token id），或回归本质用随机 sessionId + Redis 存会话（更安全、可撤销、可续期免 refresh token）。前端落 cookie 加 HttpOnly 加 SameSite，后端 Redis 集中管控。</p>
<blockquote>
  <p>📖 <a href="pages/token-storage.html"><strong>《用户登录 Token 存储的安全漏洞》</strong></a>——单文件图文页，含三连坑表与两套方案图，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "comment-nesting",
    title: "评论盖楼系统：楼中楼的工业级设计",
    date: "2026-11-06",
    tags: ["架构", "面试"],
    excerpt: "B 站场景题合集 P55：parent_id 有 N+1 死亡螺旋、path 有写放大；root_id 一枪拉平内存组装，ZSet 热榜，点赞 write-back。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P55。两个天真方案：parent_id 邻接表查 100 层楼发 100 次 SQL（N+1 打爆连接池）；path 物化路径删顶层评论要更新几万条子孙路径（写放大），like 前缀查询千万级龟速。工业级方案：<strong>root_id 反范式</strong>——不管第几层都冗余顶级楼层 id，where root_id 一枪查平全量子孙，Java 内存组装成树（用 CPU 换 IO）；<strong>冷热分离</strong>——Redis ZSet 存 top 热评（点赞数当 score），先拿 Redis 前十条其余回库；<strong>点赞 write-back</strong>——只 INCR Redis，攒几秒或 100 赞批量刷库，Redis 挂了丢几秒点赞数用户无感，最终一致性。</p>
<blockquote>
  <p>📖 <a href="pages/comment-nesting.html"><strong>《评论盖楼系统：楼中楼的工业级设计》</strong></a>——单文件图文页，含方案对比与性能两坑，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "live-reward",
    title: "直播间高并发打赏系统设计",
    date: "2026-11-06",
    tags: ["架构", "面试"],
    excerpt: "B 站场景题合集 P54：扣款同步乐观锁、加钱 MQ 聚合每秒 5000 条并一条 UPDATE；广播合并加分桶对抗十亿消息。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P54。直接开事务死于<strong>主播账户热点行锁</strong>：几万线程改同一行，连接池占满 TPS 个位数。资金链路两段式：扣款同步（乐观锁保证不透支），加钱异步——礼物消息进 MQ，聚合服务每秒捞 5000 条内存算总额，一条 <code>UPDATE 余额=余额+5000</code>，把堵死的路变成高速路。第二个坑<strong>广播风暴</strong>：1000 人/秒送礼 × 100 万观众 = 每秒 10 亿条消息。两招：消息合并（攒几百毫秒合成"100 人送出 500 个火箭"播一个大特效）、分桶轮播（100 万人分 1000 桶轮流发，抹平峰值）。</p>
<blockquote>
  <p>📖 <a href="pages/live-reward.html"><strong>《直播间高并发打赏系统设计》</strong></a>——单文件图文页，含资金链路图与广播两招，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "stock-deduction",
    title: "高并发库存扣减与防超卖：漏斗架构",
    date: "2026-11-06",
    tags: ["架构", "面试"],
    excerpt: "B 站场景题合集 P53：悲观锁热点行、纯 Redis 少卖、分桶体验割裂全是坑；三层漏斗——归零拦截、LUA 原子扣减、MQ 削峰。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P53。常规方案坟场：数据库悲观锁热点行竞争，1 万请求排队串行 TPS 几百直接宕机；纯 Redis 扣减遇服务重启少卖（Redis 扣了订单没插）；库存分桶导致桶 1 卖光桶 2 有货的体验割裂。大厂标准答案三层漏斗：<strong>第一层</strong>库存归零标记放 Nginx/本地缓存，9.99 万请求连 Redis 都不碰直接返回；<strong>第二层</strong>LUA 脚本在 Redis 内原子地判库存并扣减（get 再 set 必超卖）；<strong>第三层</strong>扣减成功发 MQ，数据库异步按自己节奏记账。核心不是 SQL 溜，是把洪水层层过滤成细流。</p>
<blockquote>
  <p>📖 <a href="pages/stock-deduction.html"><strong>《高并发库存扣减与防超卖：漏斗架构》</strong></a>——单文件图文页，含坟场表与漏斗图，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "redis-cluster-16384",
    title: "Redis Cluster 为什么是 16384 个槽",
    date: "2026-11-06",
    tags: ["Redis", "面试"],
    excerpt: "B 站场景题合集 P52：16384 槽心跳 2KB 防 gossip 内网风暴；1000 节点均摊 16 槽够用；smart client 加 hashtag 实战。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P52。CRC16 本可 65536 槽，作者砍到 16384：<strong>带宽账</strong>——去中心化集群 gossip 心跳携带槽位 bitmap，65536 槽 8KB、16384 槽 2KB，大集群每秒疯传 8KB 心跳等于内网 DDoS；<strong>规模账</strong>——官方建议节点不超 1000，均摊每节点 16 槽足够负载均衡，为达不到的万级规模牺牲网络是过度设计。生产两坑：笨客户端被 moved 踢皮球双倍延迟（用 smart client 本地缓存槽位地图）；mget 跨节点报 CROSSSLOT（hashtag 大括号把相关 key 锁进同槽，数据局部性优化）。</p>
<blockquote>
  <p>📖 <a href="pages/redis-cluster-16384.html"><strong>《Redis Cluster 为什么是 16384 个槽》</strong></a>——单文件图文页，含两笔账与实战坑表，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "redis-lru-oom",
    title: "Redis 配了 LRU 为什么还 OOM",
    date: "2026-11-06",
    tags: ["Redis", "性能"],
    excerpt: "B 站场景题合集 P51：近似 LRU 采样漏掉钉子户、删大 key 阻塞主线程、碎片不还 OS；三张配置处方对症下药。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P51。配置生效了但你被机制骗了，三大坑：<strong>采样骗局</strong>——Redis 是近似 LRU，随机抓 5 个（maxmemory-samples 默认 5）淘汰最旧，冷数据钉子户没被抓到、热数据倒霉被删；<strong>大 key 卡死</strong>——选中存 500 万条的 hash，单线程主线程埋头回收，get/set 全堵，stop the world 式卡顿；<strong>碎片幽灵</strong>——数据删了内存不还操作系统（分配器行为），Redis 觉得有空地 OS 觉得没连续空间直接 OOM。三张处方：samples 调 10、开 lazyfree-lazy-eviction、开 activedefrag。</p>
<blockquote>
  <p>📖 <a href="pages/redis-lru-oom.html"><strong>《Redis 配了 LRU 为什么还 OOM》</strong></a>——单文件图文页，含三坑三药对照，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "redis-transaction",
    title: "Redis 事务与原子性的大坑",
    date: "2026-11-06",
    tags: ["Redis", "面试"],
    excerpt: "B 站场景题合集 P50：pipeline 只快不原子、MULTI/EXEC 不回滚、watch 高并发 CPU 爆炸；LUA 是标准答案但脚本杀不掉。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P50《Redis 事务与原子性的大坑》。四大方案坑位：<strong>pipeline</strong> 只省网络往返，服务端执行不独占、别人能插队，毫无原子性；<strong>MULTI/EXEC 事务</strong>中间命令报错照常执行剩余命令且不支持回滚，与数据库事务两回事；<strong>watch 乐观锁</strong>在秒杀场景 999 人失败重试，应用服务器 CPU 先 100% 雪崩；<strong>LUA 脚本</strong>是标准答案——脚本被当整体执行、结束前无人插队，但高分点是主动讲它的死穴：脚本里 while true 或执行 5 秒，单线程 Redis 全世界等它，已执行写操作的脚本 unkillable，唯一出路 SHUTDOWN NOSAVE。选型三句话：批量不在乎原子用 pipeline；逻辑简单要原子用 LUA（短且快）；逻辑复杂上分布式锁或 MQ。</p>
<blockquote>
  <p>📖 <a href="pages/redis-transaction.html"><strong>《Redis 事务与原子性的大坑》</strong></a>——单文件图文页，含四方案坑位表，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "jvm-card-table",
    title: "JVM 跨代引用与卡表",
    date: "2026-11-06",
    tags: ["JVM", "面试"],
    excerpt: "B 站场景题合集 P49：Minor GC 不扫老年代怎么知道谁活着——卡表空间换时间、写屏障自动打标、伪共享检查再写。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P49《JVM 跨代引用与卡表》。悖论：Minor GC 只扫年轻代，老年代引用年轻代时不扫会误杀、全扫几十 GB 是自杀。破局是<strong>卡表</strong>：老年代切 512 字节卡页，引用年轻代的卡页标脏记进字节数组，Minor GC 只扫脏卡页（范围从几十 GB 缩到几百字节）。谁来打标？<strong>写屏障</strong>——JVM 在赋值指令后自动插入 mark dirty（类 AOP 思想，与内存屏障无关）。隐藏大坑<strong>伪共享</strong>：卡表是 byte 数组，64 个标记挤同一 CPU 缓存行，并发更新互相打脸，JDK 7+ 检查再写缓解。</p>
<blockquote>
  <p>📖 <a href="pages/jvm-card-table.html"><strong>《JVM 跨代引用与卡表》</strong></a>——单文件图文页，含四层递进结构，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "tcp-max-connections",
    title: "一台服务器最多多少 TCP 连接",
    date: "2026-11-06",
    tags: ["网络", "面试"],
    excerpt: "B 站场景题合集 P48：65535 是客户端端口上限；服务端受文件描述符、内存（4KB/连接）、CPU、内核参数四道关。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P48《一台服务器最多能建立多少个 TCP 连接》。脱口而出 65535 就露馅了——那是客户端端口上限；服务端只监听 80 一个端口，连接的唯一标识是四元组（源 IP、源端口、目标 IP、目标端口）。真正的四道关：文件描述符默认 1024 是门槛（ulimit 调到百万级）；内存每连接约 4KB，16GB 机器理论支撑 200 万连接；CPU 处理协议栈决定并发上限；内核参数配合。2 核 4G 默认配置几千个到头，高配加调优百万连接不是梦。</p>
<blockquote>
  <p>📖 <a href="pages/tcp-max-connections.html"><strong>《一台服务器最多多少 TCP 连接》</strong></a>——单文件图文页，含四道关结构，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "jvm-escape-analysis",
    title: "逃逸分析与栈上分配",
    date: "2026-11-06",
    tags: ["JVM", "面试"],
    excerpt: "B 站场景题合集 P47：对象不一定在堆上——不逃逸时标量替换拆成局部变量进栈，TLAB 不是栈上分配，同步消除白送。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P47《逃逸分析与栈上分配》。三种逃逸状态：方法逃逸（return 或传参出去）、线程逃逸（赋给 static 被多线程访问）、不逃逸。不逃逸时 JIT 两招：<strong>标量替换</strong>——根本不创建对象，把字段拆成标量局部变量放栈帧，方法结束自动销毁 GC 零参与；<strong>同步消除</strong>——锁对象不逃逸出线程时直接去掉 synchronized（StringBuffer 有时与 StringBuilder 一样快的原因）。关键纠偏：TLAB 不是栈上分配，它是堆内 Eden 区的线程私有地盘，对象仍要 GC。限制：依赖 JIT 触发、复杂调用链分析不动、分析本身有成本。</p>
<blockquote>
  <p>📖 <a href="pages/jvm-escape-analysis.html"><strong>《逃逸分析与栈上分配》</strong></a>——单文件图文页，含三种逃逸表与标量替换示意，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "jvm-constant-pool",
    title: "JVM 常量池与 intern() 的版本真相",
    date: "2026-11-06",
    tags: ["JVM", "面试"],
    excerpt: "B 站场景题合集 P46：三个池子分清；StringTable 1.7 从永久代搬进堆，intern 从复制变引用，滥用会撞哈希链表。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P46《JVM 常量池与 intern()》。三个池子：Class 常量池（class 文件静态图纸）、运行时常量池（类加载后的实物）、StringTable（本质 hash table）。版本大迁徙：1.6 StringTable 住永久代（空间小 GC 难易 OOM），1.7 起搬进堆。同一道经典题 <code>new String(\"1\")+new String(\"1\")</code> 后 intern 再 == 比较：1.6 是 false（复制进永久代，两个对象），1.7+ 是 true（池里只记录堆对象引用，one instance one reference）。滥用 intern 的坑：几千万 URL 全塞进去，哈希碰撞链表拉长，intern 变遍历，CPU 100%——调优 -XX:StringTableSize 调大桶数。</p>
<blockquote>
  <p>📖 <a href="pages/jvm-constant-pool.html"><strong>《JVM 常量池与 intern() 的版本真相》</strong></a>——单文件图文页，含版本对比与调优参数，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "jvm-tricolor-gc",
    title: "JVM 三色标记与漏标：CMS 与 G1 的分水岭",
    date: "2026-11-06",
    tags: ["JVM", "面试"],
    excerpt: "B 站场景题合集 P45：白灰黑三色、漏标两条件缺一不可；CMS 增量更新破条件一，G1 SATB 破条件二宁要浮动垃圾。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P45《JVM 三色标记与 GC 核心架构》。三色语义：白（未扫，扫完仍白即回收）、灰（自身已扫引用未扫完，浪头）、黑（安全上岸）。并发标记的漏标两条件缺一不可：黑色对象新增白色引用 + 灰色对象同时断开白色引用——被断开的白色对象会被误回收，用时直接空指针。两种解法各破一条件：<strong>CMS 增量更新</strong>破条件一，黑引白时把黑重置灰、重新标记阶段深度重扫（老年代大时代价大）；<strong>G1 SATB</strong> 破条件二，断开前拍照记录，按扫描开始快照当它还活着（浮动垃圾留到下轮）。G1 管几十上百 GB 成千上万 region，深度重扫停顿失控，宁要浮动垃圾换停顿可控。</p>
<blockquote>
  <p>📖 <a href="pages/jvm-tricolor-gc.html"><strong>《JVM 三色标记与漏标》</strong></a>——单文件图文页，含漏标推演图与解法对比表，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "distributed-id-pitfalls",
    title: "分布式 ID 面试必问五大坑",
    date: "2026-11-06",
    tags: ["架构", "面试"],
    excerpt: "B 站场景题合集 P44：UUID 伪随机撞车 + 乱序性能杀手；雪花时钟回拨等一等或报错；按 QPS 决策树选型。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P44《分布式 ID 面试必问五大坑》。UUID v4 两大坑：伪随机（种子极小概率重复会撞车）与性能杀手（36 位乱序字符串，查询 0.8s 对比自增 0.1s，插入引发 B+ 树频繁页分裂）。雪花算法 64 位（41 时间戳 69 年 + 10 机器 1024 台 + 12 序列号每毫秒 4096）是大厂标准答案，致命伤时钟回拨——等待追上或报错人工介入。备选：美团 Leaf（工业级容灾，DB 挂了内存号段顶阵）、Redis 自增（挂了归零，持久化必配）、UUID v7（时间戳入位解决乱序的救赎版）。选型决策树：小系统 QPS 千以内 DB 自增；大厂电商雪花或 Leaf；老系统已有 Redis 则 Redis 自增或 UUID v7。</p>
<blockquote>
  <p>📖 <a href="pages/distributed-id-pitfalls.html"><strong>《分布式 ID 面试必问五大坑》</strong></a>——单文件图文页，含 UUID 坑表与决策树，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "springboot-config-encrypt",
    title: "SpringBoot 配置文件敏感信息加密",
    date: "2026-11-06",
    tags: ["Java", "安全"],
    excerpt: "B 站场景题合集 P43：Jasypt 三步——maven 插件生成 ENC 密文、贴回配置、启动参数带私钥；边界是私钥管理。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P43《配置文件敏感信息加密》。数据库账号、Redis 密码裸奔在配置里，同事翻仓库和黑客拿下服务器都能直连。Jasypt 三步：引依赖与 maven 插件 → <code>mvn jasypt:encrypt</code> 生成 <code>ENC(...)</code> 密文贴回 application.yml → 启动与部署时加 <code>-Djasypt.encryptor.password=私钥</code>。加密后无权限者只见密文，黑客没私钥解不开。边界要清楚：私钥与密文同机部署时，拿到启动命令同样能解——密钥管理（环境变量、密钥服务）才是完整答案。</p>
<blockquote>
  <p>📖 <a href="pages/springboot-config-encrypt.html"><strong>《SpringBoot 配置文件敏感信息加密》</strong></a>——单文件图文页，含操作序列与安全边界，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "mybatis-sql-cost",
    title: "MyBatis 记录 SQL 耗时的两种姿势",
    date: "2026-11-06",
    tags: ["Java", "性能"],
    excerpt: "B 站场景题合集 P42：自研 Interceptor 拦 StatementHandler 计时告警，或 p6spy 换驱动零代码；生产环境都要慎用。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P42《MyBatis 怎么记录 SQL 耗时》。自研路线：实现 <code>Interceptor</code> 接口加 <code>@Component</code> 自动注册，@Intercepts 签名拦 StatementHandler 的 query（增删改另加 update 签名）——插件只能拦四大对象（Executor 缓存、StatementHandler 执行、ParameterHandler 参数、ResultSetHandler 结果），签名必须带参数类型防重载。现成路线：p6spy 换驱动加 spy.properties 零代码，计时更准（UP 实测 3ms 对比自研 13ms）。生产环境慎用：高并发下日志拖性能，只在开发测试环境开。</p>
<blockquote>
  <p>📖 <a href="pages/mybatis-sql-cost.html"><strong>《MyBatis 记录 SQL 耗时的两种姿势》</strong></a>——单文件图文页，含四大对象表与插件骨架，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "spring-vs-springboot",
    title: "Spring 正常、SpringBoot 却报错的四处",
    date: "2026-11-06",
    tags: ["Java", "面试"],
    excerpt: "B 站场景题合集 P41：重名 bean 覆盖变报错、循环依赖默认拒绝、@Value 缺值快速失败、AOP 默认全 CGLIB。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P41。同一代码 Spring 能跑 SpringBoot 报错的四处差异：Bean 重名（Spring 后者覆盖，Boot 启动报错）；循环依赖（Spring 允许，Boot 认为是设计坏味道直接报错）；@Value 取不到值（Spring 把表达式原文当值静默埋雷，Boot 快速失败，建议设默认值容错）；AOP 动态代理（Spring 有接口走 JDK、无接口走 CGLIB，Boot 2.x 默认全 CGLIB）。每处 Boot 都保留了与 Spring 一致的回退配置。Boot 的哲学：默认即最佳实践，错了就大声失败。</p>
<blockquote>
  <p>📖 <a href="pages/spring-vs-springboot.html"><strong>《Spring 正常、SpringBoot 却报错的四处》</strong></a>——单文件图文页，含差异对照表，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "springboot-anti-decompile",
    title: "SpringBoot 交付包防反编译",
    date: "2026-11-06",
    tags: ["Java", "安全"],
    excerpt: "B 站场景题合集 P40：ClassFinal 加密 jar 与配置，javaagent 探针启动前解密；诚实边界——ClassWinter 连探针一起混淆。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P40《如何防止 SpringBoot 反编译》。交付客户服务器又没卖源码时，两步搞定：<strong>一</strong>，pom 引 ClassFinal 插件，配置 password（只加密写 #）、packages（加密的包，逗号分隔）、cfgfiles（加密的 application.yml）、libjars（自研依赖）；<strong>二</strong>，<code>java -javaagent:加密包 -jar 加密包</code> 启动。原理是 javaagent 探针（类 AOP 机制）在启动前解密。边界要诚实：ClassFinal 自身 agent 类未加密，看懂即可解密；ClassWinter 连探针一起混淆更难破解。对付一般客户 ClassFinal 足够。</p>
<blockquote>
  <p>📖 <a href="pages/springboot-anti-decompile.html"><strong>《SpringBoot 交付包防反编译》</strong></a>——单文件图文页，含插件配置表，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "java-design-patterns",
    title: "支付案例讲透三个设计模式",
    date: "2026-11-06",
    tags: ["Java", "设计模式"],
    excerpt: "B 站场景题合集 P39：if-else → 策略模式 → 简单工厂 + Spring 容器 → 模板方法，四步改造步步有理由。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P39《开发中有没有用设计模式》。四步演进：<strong>策略模式</strong>消 if-else（策略接口 + 三实现 + 上下文，新增类型零改上层）；<strong>简单工厂</strong>去冗余（按类型返回策略接口，上层一目了然）；<strong>Spring 容器</strong>解决 bean 问题（new 出来的不是 bean，实现 ApplicationContextAware 后工厂从容器 getBean，策略内才能注入 Mapper）；<strong>模板方法</strong>收公共逻辑（AbstractPay 的 commonPay 固化流程，check 声明 private 保证校验契约不被子类覆盖）。类增多不是复杂，是解耦。</p>
<blockquote>
  <p>📖 <a href="pages/java-design-patterns.html"><strong>《支付案例讲透三个设计模式》</strong></a>——单文件图文页，含四步演进与角色表，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "java-synchronized-optimize",
    title: "synchronized 锁粒度优化：考试交卷案例",
    date: "2026-11-06",
    tags: ["Java", "并发"],
    excerpt: "B 站场景题合集 P38：全局锁到按校分锁，再躲开 Spring 传 String 对象与常量池全局两坑，ConcurrentHashMap 专属锁对象收官。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P38《synchronized 怎么提升性能》。案例是教务系统按学校统计交卷数。第一档整方法加锁线程安全但全串行；第二档按学校维度分锁（同校串行、跨校并行），但有<strong>两个必踩的坑</strong>：Spring 底层传的是 String 对象不是常量，互斥失效，要用 <code>intern()</code> 锁常量池实例；而常量池是全局的，考试接口会阻塞入学接口，最终方案是每个接口独立的 <code>ConcurrentHashMap</code>，<code>computeIfAbsent(school, k -&gt; new Object())</code> 拿专属锁对象——同维度串行、跨维度并行、跨接口互不干扰。</p>
<blockquote>
  <p>📖 <a href="pages/java-synchronized-optimize.html"><strong>《synchronized 锁粒度优化：考试交卷案例》</strong></a>——单文件图文页，含两坑解析与最终代码，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "resttemplate-connection-pool",
    title: "RestTemplate 连接池优化",
    date: "2026-11-06",
    tags: ["Java", "性能"],
    excerpt: "B 站场景题合集 P37：默认工厂无池每请求建连；换 HttpClient 工厂配连接池，maxTotal 按 QPS × 响应秒数再上浮。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P37《RestTemplate 如何优化连接池》。默认 SimpleClientHttpRequestFactory 无池，每次请求经 DNS 解析、三次握手、HTTPS 证书、四次挥手，真正请求只占一小段，高并发下连接无限创建。解法三步：引 httpclient 依赖 → 换 HttpComponentsClientHttpRequestFactory → 配 PoolingHttpClientConnectionManager。参数会算：maxTotal = QPS × 平均响应秒数再上浮 60-70%（QPS 1000、响应 1.1 秒则设 2000 左右）；每域长连接数只在访问固定少数域时有意义；再加空闲存活时间。</p>
<blockquote>
  <p>📖 <a href="pages/resttemplate-connection-pool.html"><strong>《RestTemplate 连接池优化》</strong></a>——单文件图文页，含参数经验表，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "git-hotfix",
    title: "Git 修复线上突发 Bug 标准流程",
    date: "2026-11-06",
    tags: ["工具", "协作"],
    excerpt: "B 站场景题合集 P36：stash 暂存手头代码，从线上分支切 hotfix 修复，按紧急度合并——回滚、直上、走 release、跟版本。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P36《Git 怎么修复线上突发 bug》。标准流程：<code>git stash</code> 暂存未完成的开发代码 → 从线上分支切 hotfix 分支修复 → 按紧急度选合并去向。四级处理：特别严重直接回滚上一版本先恢复服务；特急修完直接合并线上分支（来不及测试也先恢复）；一般紧急合并 release 分支走测试发布；非紧急合并 develop 跟版本走。冲突是显式协商不是事故，修完 <code>stash pop</code> 回开发现场。</p>
<blockquote>
  <p>📖 <a href="pages/git-hotfix.html"><strong>《Git 修复线上突发 Bug 标准流程》</strong></a>——单文件图文页，含四级处理表与操作序列，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "java-simple-mq",
    title: "用 Java 手写一个简单的消息队列",
    date: "2026-11-06",
    tags: ["Java", "并发"],
    excerpt: "B 站场景题合集 P35：MQ 的本质是生产者消费者——判满 wait、入队 notify、判空 wait、出队 notify，外加五个线程安全细节。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P35《怎么用 Java 实现一个简单的消息队列》。四件套：ArrayBlockingQueue 做缓冲区、生产者锁内判未满则入队（满了 wait）、消费者锁内判非空则 poll（空了 wait）、入队 notify 消费者与出队 notify 生产者互相唤醒。五个细节：判满判空与入出队全程持锁保证原子性；wait 会释放锁（与 sleep 的本质区别）；interrupt 异常要手动唤醒避免永久沉睡；队列泛型换成短信实体类即真实业务；多线程抢锁导致输出顺序不固定。</p>
<blockquote>
  <p>📖 <a href="pages/java-simple-mq.html"><strong>《用 Java 手写一个简单的消息队列》</strong></a>——单文件图文页，含完整骨架代码与运行时序推演，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "java-password-reset",
    title: "忘记密码为什么不发原密码",
    date: "2026-11-06",
    tags: ["Java", "安全"],
    excerpt: "B 站场景题合集 P34：系统真不知道原密码——库里只存不可逆摘要；MD5 两死穴、SHA256 加长、BCrypt 自带随机盐。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P34。标准答案一句话：系统也不知道原密码，库里存的只是不可逆摘要——能还原原密码本身就是重大安全漏洞（库被盗、内部人员作恶）。算法演进三步：<strong>MD5</strong> 抗碰撞弱（UP 实测 4-5 小时跑出碰撞对）、密文固定可暴力枚举，固定盐套路也易被识破；<strong>SHA256</strong> 64 字符更抗碰撞，但仍需自己加随机盐；<strong>BCrypt</strong> 60 字符密文自带版本号、强度因子与随机盐，彩虹表失效，是现在的事实标准，Spring Security 一行 <code>BCryptPasswordEncoder</code> 即用。</p>
<blockquote>
  <p>📖 <a href="pages/java-password-reset.html"><strong>《忘记密码为什么不发原密码》</strong></a>——单文件图文页，含三算法对比表，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "mysql-mvcc",
    title: "MySQL 隔离级别的实现原理：MVCC",
    date: "2026-11-06",
    tags: ["MySQL", "面试"],
    excerpt: "B 站场景题合集 P33：隐藏列 + undo 版本链 + ReadView 快照；读已提交每次查询建快照，可重复读只建一次。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P33《MySQL 的隔离级别实现原理 MVCC》。MVCC 是隔离级别的无锁实现——不用行锁是因为查询会阻塞变串行。三要素：<strong>隐藏列</strong>（DB_TRX_ID 事务 id、DB_ROLL_PTR 回滚指针、DB_ROW_ID 替补）、<strong>undo 版本链</strong>（旧数据串成链，兼供回滚与快照读）、<strong>ReadView</strong>（当前事务 id、活跃事务集合、最小活跃 id、下一个将分配的 id）。可见性四规则：是自己改的可读、早于最小活跃已提交可读、晚于快照不可读、活跃未提交不可读，不满足就沿链回溯。RC 与 RR 的一线之差：前者每次查询新建 ReadView，后者整个事务只建一次。</p>
<blockquote>
  <p>📖 <a href="pages/mysql-mvcc.html"><strong>《MySQL 隔离级别的实现原理：MVCC》</strong></a>——单文件图文页，含四规则与双事务示例，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "mysql-deep-pagination",
    title: "深分页为什么慢，怎么优化",
    date: "2026-11-06",
    tags: ["MySQL", "性能"],
    excerpt: "B 站场景题合集 P32：limit 50000,100 是取回 50100 条再筛掉 5 万；优化阶梯到 id 定位与游标分页，业务限翻页最省。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P32《深分页为什么慢，怎么优化》。慢的真相：<code>limit 50000,100</code> 不是跳读，引擎层从第 0 条取到第 50100 条交回 Server 层再筛；若走二级索引且未覆盖，50100 条逐条回主键树，慢上加慢。优化阶梯：索引覆盖消回表 → 子查询过渡 → <strong>id 定位分页</strong>（<code>where id &gt; 上页末尾</code> 直接 B+ 树定位，需自增主键，删数据会不满页）→ 游标分页（拿上页最大 id，禁止跨页）→ 分库分表 / ES。业务允许时限制翻页深度（淘宝京东限 100 页）成本最低。</p>
<blockquote>
  <p>📖 <a href="pages/mysql-deep-pagination.html"><strong>《深分页为什么慢，怎么优化》</strong></a>——单文件图文页，含方案对比表与示例 SQL，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "distributed-id",
    title: "分库分表后的 ID 冲突：五方案与三个轮子",
    date: "2026-11-06",
    tags: ["MySQL", "架构"],
    excerpt: "B 站场景题合集 P31：步长不能扩容、号段有单点、UUID 伤树、Redis 怕宕机、雪花怕回拨；轮子选美团 Leaf。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P31《分库分表 id 冲突解决方案》。五套方案各有死穴：<strong>自增步长</strong>（按表数设步长，致命伤是无法扩容）、<strong>数据库号段</strong>（批取入缓存，号段表单点）、<strong>UUID</strong>（无序致 B+ 树频繁分裂，正确姿势是主键保留自增、UUID 做唯一索引对外）、<strong>Redis INCR</strong>（原子自增，宕机丢号，RDB/AOF 持久化各有短板）、<strong>雪花算法</strong>（41bit 毫秒时间戳 + 10bit 节点 1024 个 + 12bit 序列号每毫秒 4096，有序高性能，怕时间回拨）。现成轮子：百度 UidGenerator（已停维护）、美团 Leaf（双模式 + ZK 解决回拨）、滴滴 Tinyid（号段增强）。</p>
<blockquote>
  <p>📖 <a href="pages/distributed-id.html"><strong>《分库分表后的 ID 冲突：五方案与三个轮子》</strong></a>——单文件图文页，含雪花位段账与选型表，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "mysql-index-left-like",
    title: "前模糊查询索引失效：四条出路",
    date: "2026-11-05",
    tags: ["MySQL", "性能"],
    excerpt: "B 站场景题合集 P30：like '%x' 退化全表扫描；反向索引、限定范围、索引覆盖、Elasticsearch 四招对症下药。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P30《前模糊索引失效》。原理一句话：B+ 树按索引值有序排列，<code>like '%庶'</code> 连第一个字都不确定，有序性失效只能全表扫描。四条出路：<strong>反向索引</strong>（多存一份倒序列，前模糊变后模糊，代价是写入双份维护）、<strong>限定范围</strong>（附加时间条件缩小扫描面）、<strong>索引覆盖</strong>（只查索引列免回表）、<strong>Elasticsearch</strong>（倒排索引天生做模糊搜索）。</p>
<blockquote>
  <p>📖 <a href="pages/mysql-index-left-like.html"><strong>《前模糊查询索引失效：四条出路》</strong></a>——单文件图文页，含四招选型表，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "mysql-count",
    title: "count(*)、count(1)、count(字段) 谁更快",
    date: "2026-11-05",
    tags: ["MySQL", "面试"],
    excerpt: "B 站场景题合集 P29：count(字段) 排 NULL，另两个全统计；count(*) 与 count(1) 官方声明无性能区别。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P29。先分功能：<code>count(字段)</code> 不统计该列为 NULL 的行，<code>count(*)</code> 与 <code>count(1)</code> 统计所有行。再破性能争论：MySQL 官方明确两者无区别，用 <code>explain + show warnings</code> 可见底层把 count(*) 改写成 count(0)——0 和 1 都只是"这行存在"的标记常量。非要分高下，count(1) 省掉那步优化改写，理论略胜。</p>
<blockquote>
  <p>📖 <a href="pages/mysql-count.html"><strong>《count(*)、count(1)、count(字段) 谁更快》</strong></a>——单文件图文页，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "mysql-clustered-index",
    title: "聚集索引与非聚集索引",
    date: "2026-11-05",
    tags: ["MySQL", "面试"],
    excerpt: "B 站场景题合集 P28：不是索引类型是存储方式——InnoDB 主键即聚集，二级索引回表；MyISAM 分文件，主键也要回表。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P28《聚集索引和非聚集索引》。两层理解：<strong>主键视角</strong>——InnoDB 主键索引叶子存索引加整行数据（聚集），非主键索引叶子存索引加主键值（二级索引），查索引外的列要回表，只查索引列则索引覆盖免回表；<strong>引擎视角</strong>——InnoDB 索引与数据同住 .ibd 文件，MyISAM 分成 .MYI 与 .MYD 两个文件，所以 MyISAM 连主键查询也要"回表"（按磁盘指针跨文件取数据）。</p>
<blockquote>
  <p>📖 <a href="pages/mysql-clustered-index.html"><strong>《聚集索引与非聚集索引》</strong></a>——单文件图文页，含对比表与覆盖索引要点，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "mysql-binlog-vs-redolog",
    title: "Binlog 与 RedoLog 为何缺一不可",
    date: "2026-11-05",
    tags: ["MySQL", "面试"],
    excerpt: "B 站场景题合集 P27：binlog 是 Server 层全量历史，redo log 是 InnoDB 事务专用恢复日志——都能恢复，自动化天差地别。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P27。两者都记修改后的新值，为何留俩？历史原因：MySQL 早期没有 InnoDB，binlog 先于事务存在，记的是全量修改历史；redo log 随 InnoDB 而生，专记事务信息与提交状态。崩溃时 redo log 自动重放回 BufferPool 全自动恢复；binlog 理论上也能恢复，但难定位丢了哪些事务、还要手动——职责不同，缺一不可。</p>
<blockquote>
  <p>📖 <a href="pages/mysql-binlog-vs-redolog.html"><strong>《Binlog 与 RedoLog 为何缺一不可》</strong></a>——单文件图文页，含对比表，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "mysql-binlog-flush",
    title: "MySQL Binlog 刷盘机制",
    date: "2026-11-05",
    tags: ["MySQL", "面试"],
    excerpt: "B 站场景题合集 P26：sync_binlog 三档——0 交给 OS、1 实时刷、N 攒批刷；5.7.7 后默认 1，双 1 是强一致姿势。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P26《binlog 刷盘机制》。binlog 由 Server 层提供、所有引擎通用，刷盘由 <code>sync_binlog</code> 控制三档：<strong>0</strong> 写 OS page cache 系统闲时刷（最险）；<strong>1</strong> 提交时实时写实时刷（最稳，性能开销最大）；<strong>N</strong> 攒满 N 笔事务刷一次（折中）。默认值 5.7.7 前是 0、之后是 1——与 redo log 的 <code>innodb_flush_log_at_trx_commit=1</code> 组成"双 1 配置"，强一致标准姿势。</p>
<blockquote>
  <p>📖 <a href="pages/mysql-binlog-flush.html"><strong>《MySQL Binlog 刷盘机制》</strong></a>——单文件图文页，含三档对比表，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "mysql-redolog",
    title: "MySQL RedoLog 崩溃恢复",
    date: "2026-11-05",
    tags: ["MySQL", "面试"],
    excerpt: "B 站场景题合集 P25：脏页未刷盘宕机会丢已提交事务；redo log 顺序写新值、崩溃后重放前滚；三种刷盘策略，强一致选 1。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P25《MySQL 怎么做到 Redolog 崩溃恢复》。问题起点：BufferPool 改完、事务提交、脏页还没刷盘，此刻 MySQL 挂了，这条数据就丢了。解法是修改同步写 redo log（顺序写新值），崩溃后把 redo log 重放回 BufferPool 前滚，恢复到崩溃前状态。</p>
<p>经典追问"为什么不直接写 ibd 数据文件"：随机写要寻道、慢；redo log 顺序追加、快——直接写要 5 秒的活它 2 秒干完，暴露窗口更小，丢失概率更低（但写 redo log 之前挂掉照样丢，只是概率小）。进阶是 <code>innodb_flush_log_at_trx_commit</code> 三种刷盘策略：0 每秒刷（丢 1 秒）、1 提交时 fsync 实时刷（一致性最高，默认）、2 先写 OS page cache（MySQL 挂不丢、断电才丢）——强一致选 1。</p>
<blockquote>
  <p>📖 <a href="pages/mysql-redolog.html"><strong>《MySQL RedoLog 崩溃恢复》</strong></a>——单文件图文页，含恢复链路图与策略对比表，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "mysql-buffer-pool",
    title: "InnoDB BufferPool 工作过程",
    date: "2026-11-05",
    tags: ["MySQL", "面试"],
    excerpt: "B 站场景题合集 P24：一条 UPDATE 的引擎层之旅——查缓存、整页加载、undo 备份、脏页刷盘，五个角色一台戏。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P24《MySQL 引擎层 BufferPool 工作过程原理》。一条 UPDATE 的完整链路：执行器调 InnoDB → 查 BufferPool，未命中就按索引定位数据页<strong>整页加载</strong>（不是缓存一条，是缓存 16KB 一整页，吃局部性红利）→ 修改前旧值写入 undo log（回滚 + MVCC 双职责）→ 更新缓存页，该页成为脏页 → 后台择机刷盘恢复。</p>
<p>脏页不是坏事：它只表示内存与磁盘暂不一致，攒着一起刷盘正是 InnoDB 吞吐量的来源，也是 redo log 崩溃恢复要接手的问题。</p>
<blockquote>
  <p>📖 <a href="pages/mysql-buffer-pool.html"><strong>《InnoDB BufferPool 工作过程》</strong></a>——单文件图文页，含完整链路图，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "mysql-bplus-tree",
    title: "B 树与 B+ 树：InnoDB 为什么选后者",
    date: "2026-11-05",
    tags: ["MySQL", "面试"],
    excerpt: "B 站场景题合集 P23：数据全放叶子层，树更宽 IO 更少；叶子双向链表让范围查询不再反复回根。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P23《B 树和 B+ 树的区别》。两条区别定胜负：<strong>一</strong>，B 树每个节点都存数据，B+ 树数据只在叶子层、非叶子纯索引——同样的 16KB 页塞更多索引，树更宽更矮，磁盘 IO 更少；<strong>二</strong>，B+ 树叶子层用双向链表串起来，范围查询定位起点后顺链表扫过去，B 树则要反复从根出发。</p>
<p>面对"根节点命中 B 树更快"的追问：数据库面向海量数据，量小时链表都快，量大才看树的宽度与层数。</p>
<blockquote>
  <p>📖 <a href="pages/mysql-bplus-tree.html"><strong>《B 树与 B+ 树：InnoDB 为什么选后者》</strong></a>——单文件图文页，含范围查询对比表，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "mysql-sharding-threshold",
    title: "单表多少行要分表：用 B+ 树层数算",
    date: "2026-11-05",
    tags: ["MySQL", "架构"],
    excerpt: "B 站场景题合集 P22：2000 万是拍脑袋——页 16KB 推算三层 B+ 树容量，百字节行 4 亿、1KB 行 4200 万，结论 1000 万行左右。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P22《单表最多数据量需要分表》。抛开行大小只谈行数是耍流氓。现场推算：页 16KB 减页头页尾约 200 字节得 16184 字节有效空间；示例行（4 个 int 加 varchar(20)）约 100 字节，一页 161 行；非叶子节点只存索引加指针（10 字节），一页 1618 个，三层容量 1618×1618×161 ≈ <strong>4.2 亿行</strong>。行大到 1KB 也还有 4200 万行。</p>
<p>三层是性能甜点：3 次磁盘 IO 定位数据。2000 万只是参考值；阿里 500 万兼顾了机械硬盘时代的资源与备份恢复风险，SSD 时代可上浮。UP 结论：单表 1000 万行左右考虑分表。</p>
<blockquote>
  <p>📖 <a href="pages/mysql-sharding-threshold.html"><strong>《单表多少行要分表：用 B+ 树层数算》</strong></a>——单文件图文页，含完整推算表，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "mysql-sql-execute",
    title: "一条 SQL 在 MySQL 里的执行过程",
    date: "2026-11-05",
    tags: ["MySQL", "面试"],
    excerpt: "B 站场景题合集 P21：连接、缓存（已移除）、解析、预处理、优化、执行六步链路；优化器会自动调整最左前缀的条件顺序。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P21《SQL 的执行过程》。六步链路：建立连接校验账号 → 服务层查缓存 → 解析器验语法 → 预处理器验表名字段名 → 优化器选路径生成执行计划 → 执行器调引擎层（InnoDB 先查 BufferPool，缺了才读磁盘）。常考追问是<strong>查询缓存为何被移除</strong>：缓存适合不变的数据，而库里的数据变得频繁，命中率低纯属性能浪费，5.7 默认关闭、8.0 彻底移除。</p>
<p>优化器的小例子：联合索引要求最左前缀，条件没按最左列放开头时，优化器会自动重排条件顺序来命中索引。日志（binlog、undo log、redo log）贯穿执行过程，为可靠性与崩溃恢复服务。</p>
<blockquote>
  <p>📖 <a href="pages/mysql-sql-execute.html"><strong>《一条 SQL 在 MySQL 里的执行过程》</strong></a>——单文件图文页，含六步链路表与引擎层流程，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "java-volatile",
    title: "volatile 的两大应用场景",
    date: "2026-11-05",
    tags: ["Java", "并发"],
    excerpt: "B 站场景题合集 P20：可见性救协同循环标志位，有序性救双重检查锁单例——new 的三步重排会造出空壳对象。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P20《volatile 有哪些应用场景》。volatile 只保证可见性与有序性（不保证原子性），对应两大场景：<strong>线程协同的循环标志位</strong>——每个线程有工作内存缓存副本，不加 volatile 另一线程的修改看不见，循环永不退出；<strong>双重检查锁单例</strong>——new 一个对象有三步（开堆内存、初始化、赋引用），指令重排成"开内存、赋引用、初始化"时，另一线程可能拿到只分配了内存的空壳对象，volatile 禁止重排。</p>
<p>指令重排本身是 CPU 优化：利用取内存数据的空档期提前执行后续指令，单线程结果不变，多线程出事故。</p>
<blockquote>
  <p>📖 <a href="pages/java-volatile.html"><strong>《volatile 的两大应用场景》</strong></a>——单文件图文页，含两段关键伪代码，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "springboot-max-requests",
    title: "SpringBoot 能同时处理多少请求",
    date: "2026-11-05",
    tags: ["Java", "面试"],
    excerpt: "B 站场景题合集 P19：默认 8192+100=8292，饭店模型讲清 Tomcat 四参数——正式厨师、兼职上限、座位数、排队位。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P19《SpringBoot 可以同时处理多少请求》。答案藏在 Tomcat 四个参数里：<code>max-connections</code> 默认 8192（店里座位），<code>accept-count</code> 默认 100（门口排队位），相加 8292；另有 <code>min-spare-threads</code>（正式厨师）与 <code>max-threads</code>（兼职上限）。</p>
<p>请求旅程：先看容量，满了进排队队列，<code>connection-timeout</code> 内等不到位置直接断开；线程按最小数起步、不够再开到最大，超出的进线程池阻塞队列。UP 用压测验证了这笔账：连接 30 + 排队 10、业务耗时 2 秒、超时 300ms，100 并发恰好 40 成功 60 失败。调参要结合硬件、IO 模型、压测与监控。</p>
<blockquote>
  <p>📖 <a href="pages/springboot-max-requests.html"><strong>《SpringBoot 能同时处理多少请求》</strong></a>——单文件图文页，含饭店模型对照表与请求旅程图，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "java-bulk-insert",
    title: "SpringBoot 百万级数据插入优化",
    date: "2026-11-05",
    tags: ["Java", "性能"],
    excerpt: "B 站场景题合集 P18：拆 100 批异步并行，90 秒变 17 秒；IO 密集型核心线程数=核数×2，线程加码收益递减。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P18《SpringBoot 百万数据插入怎么优化》。三板斧：100 万条按 1 万一份拆 100 批；自定义 <code>ThreadPoolTaskExecutor</code> 配成 bean 后用 @Async 异步批量保存；<code>CountDownLatch(100)</code> 计数收口，await 等全部完成后统计耗时。实测 90 多秒优化到约 17 秒。</p>
<p>线程数怎么算是重点：插库是 IO 密集型（网络 IO 会阻塞、CPU 空闲），核心线程数 = CPU 核数 × 2（16 核设 32/33）；CPU 密集型（计算排序）= 核数 + 1；最大线程数取核心两倍。线程加到 200 只快 1 秒——加码收益递减，资源留给其他业务。上线前后靠压测与监控调参，大厂用动态线程池在线调整加阈值告警。</p>
<blockquote>
  <p>📖 <a href="pages/java-bulk-insert.html"><strong>《SpringBoot 百万级数据插入优化》</strong></a>——单文件图文页，含效果账与线程数经验表，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "java-query-optimize",
    title: "500ms 内查 1000 条数据：并发拆分",
    date: "2026-11-05",
    tags: ["Java", "并发"],
    excerpt: "B 站场景题合集 P17：拆 5 份并行查、Future 合并，总耗时回到 200ms 量级；合并阶段注意线程安全。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P17《查询 200 条耗时 200ms，怎么在 500ms 内查 1000 条》。先算串行的账：单线程 5 次查询要 1 秒开外。解法是把 1000 条拆 5 份、线程池并行执行、<code>Future</code> 收集合并——并行不是压缩单次查询，而是让 5 次同时发生，总耗时约等于最慢的一次（200 多毫秒）。</p>
<p>两个考点：线程池 <code>submit</code> 提交带返回值的任务；多线程各查各的，合并阶段避免并发写同一集合。</p>
<blockquote>
  <p>📖 <a href="pages/java-query-optimize.html"><strong>《500ms 内查 1000 条数据：并发拆分》</strong></a>——单文件图文页，含实现示意代码，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "java-bigfile-count",
    title: "200MB 内存读 1GB 文件，统计重复内容",
    date: "2026-11-05",
    tags: ["Java", "面试"],
    excerpt: "B 站场景题合集 P16：分块读取加 Map 计数是第一级；内容全不重复时哈希取模分 1024 片落盘逐片统计——内存不够外存凑。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P16《内存 200M 读取 1G 文件并统计重复内容》。两级答案：<strong>第一级</strong>，缓冲区分块读取（每次 1MB 到 50MB），内容做 Map 的 key、次数做 value；<strong>第二级</strong>，极端情况下内容几乎全不重复，Map 无限增长撑爆内存——此时对每条内容做哈希取模（如 %1024）落到对应分片文件，同一条内容必落同一分片，分片内统计等价于全量统计，逐片分块读入计数后清空 Map。</p>
<p>点题：这就是"内存不够外存凑"，MapReduce 的思想雏形。</p>
<blockquote>
  <p>📖 <a href="pages/java-bigfile-count.html"><strong>《200MB 内存读 1GB 文件，统计重复内容》</strong></a>——单文件图文页，含分片流程图，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "redis-leaderboard",
    title: "Redis ZSet 亿级用户实时积分排行榜",
    date: "2026-11-05",
    tags: ["Redis", "面试"],
    excerpt: "B 站场景题合集 P15：ZSet 三条命令实现排行榜；亿级 member 成大 key 后按分数段分桶，查榜只看高分桶。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P15《Redis 如何实现上亿用户实时积分排行榜》。两个关键词定死选型：用户量上亿、要求实时——数据库扛不住，Redis ZSet 一把梭：<code>ZADD</code> 更新积分（member 存用户 id、score 存分数），<code>ZREVRANGE</code> 拿前 N 名，<code>ZREVRANK</code> 查个人名次，更新与查询都是 O(logN)。</p>
<p>进阶答案是分桶：亿级 member 挤一个 key 就是大 key，会引发延迟与堵塞。按分数段拆桶（1000 分以上、500 以上、500 以下，过大再细拆），查前十名只需排序分数最高的桶，低分桶不用碰。方案没换，只是分治。</p>
<blockquote>
  <p>📖 <a href="pages/redis-leaderboard.html"><strong>《Redis ZSet 亿级用户实时积分排行榜》</strong></a>——单文件图文页，含分桶流程图与答题模板，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "redis-bitmap-login",
    title: "Redis Bitmap 记录亿级用户连续登录天数",
    date: "2026-11-05",
    tags: ["Redis", "面试"],
    excerpt: "B 站场景题合集 P13 的答法：连续签到是二值统计，MySQL 流水表会膨胀；Bitmap 一天一张图、用户 id 做偏移，512MB 存 42 亿位，30 天 TTL 收尾。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P13《如何使用 Redis 记录上亿用户连续登录天数》。先否定 MySQL：每个用户每天一行签到记录，上亿用户一个月就是几十亿行，流水表必然膨胀。二值状态（登录/没登录）是 Redis Bitmap 的主场——string 类型实现，单 key 上限 512MB 约存 42.9 亿 bit，1 亿用户一天只要约 12MB。</p>
<p>存储分两种维度：<strong>按日期建图</strong>（日期做 key、用户 id 做偏移）适合全站按天统计，但查单个用户要循环每个日期的 key；<strong>按用户建图</strong>（用户 id 做 key、天做偏移）适合查个人连续天数。游戏签到都做 30 天周期不是巧合：key 设 30 天过期，超期自动清理，内存可控。</p>
<blockquote>
  <p>📖 <a href="pages/redis-bitmap-login.html"><strong>《Redis Bitmap 记录亿级用户连续登录天数》</strong></a>——单文件图文页，含数学账与维度选型表，支持深浅色切换。</p>
</blockquote>
`,
  },
  {
    slug: "redis-common-friends",
    title: "亿级 keys 统计共同好友：这题有坑",
    date: "2026-11-05",
    tags: ["Redis", "架构"],
    excerpt: "B 站场景题合集 P14 的答法：SINTERSTORE 取交集只是开场，坑在暗示你把亿级数据全塞 Redis；主动算成本账，换 MySQL 分库分表 / Neo4j / HBase+Hadoop。",
    content: `
<p>学自 B 站 UP 主「java架构师徐庶」的场景题合集 P14《给你一个亿 Redis keys 统计双方的共同好友》。基础答法一行命令：Set 存好友（用户 id 做 key），<code>SINTERSTORE</code> 取交集。但这题有坑——"1 亿"这个数字就是在等你算成本账：亿级好友关系全放 Redis 等于拿内存当磁盘用，主动答出"不建议"才算读懂题。</p>
<p>替代方案三选：<strong>MySQL</strong> 分库分表 + JOIN（数据量不大时兜底）、<strong>Neo4j</strong> 图数据库（共同好友、"可能认识的人"首选，天然支持，可存亿到十亿节点）、<strong>HBase + Hadoop</strong>（海量数据离线计算的通用套件）。三方案通用补丁：定时任务预计算热点账号（网红、大 V）的共同好友缓存进 Redis。亿级规模没有单一技术包打，抖音、微信也从未公开实现，都是组合加自研。</p>
<blockquote>
  <p>📖 <a href="pages/redis-common-friends.html"><strong>《亿级 keys 统计共同好友：这题有坑》</strong></a>——单文件图文页，含答题模板与选型表，支持深浅色切换。</p>
</blockquote>
`,
  },
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
