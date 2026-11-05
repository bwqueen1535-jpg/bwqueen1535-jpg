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
