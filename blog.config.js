const BLOG = {
  title: '鸡翅の小窝', // 博客标题
  author: '鸡翅', // 作者名称
  email: '1159502243@qq.com', // 作者邮箱
  link: 'https://gfeather.xyz', // 博客链接
  newsletter: 'Gfeather Weekly', // 新闻通讯名称
  description: 'gfeather的数字生活手账。随手记录打游戏的快乐瞬间、生活里的琐碎趣事，以及那些让效率飙升的小工具。欢迎你来玩！', // 博客描述：
  lang: 'zh-CN', // 语言设置：['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  timezone: 'Asia/Shanghai', // 时区设置：亚洲/上海，参见 https://en.wikipedia.org/wiki/List_of_tz_database_time_zones 获取所有选项
  appearance: 'auto', // 外观模式：['light', 'dark', 'auto'] - 亮色、暗色、自动
  font: 'sans-serif', // 字体设置：['sans-serif', 'serif'] - 无衬线字体、衬线字体
  lightBackground: '#F6F8FA', // 亮色模式背景色：使用十六进制值，不要忘记'#'，例如#fffefc
  darkBackground: '#212936', // 暗色模式背景色：使用十六进制值，不要忘记'#'
  path: '', // 路径：除非你想将Notionic部署在子文件夹中，否则留空
  since: 2022, // 博客成立年份：如果留空，将使用当前年份
  postsPerPage: 10, // 每页显示文章数量
  sortByDate: true, // 按日期排序文章
  pagesShow: { // 显示的页面配置
    newsletter: true, // 显示新闻通讯页面
    notes: true, // 显示笔记页面
    projects: true, // 显示项目页面
    contact: true, // 显示联系页面
    books: true, // 显示书籍页面
    friends: true // 显示友链页面
  },
  showWeChatPay: true, // 显示微信支付赞赏
  previewImagesEnabled: true, // 启用预览图片
  autoCollapsedNavBar: false, // 自动折叠导航栏
  ogImageGenerateHost: 'og-zl.vercel.app', // 生成OG图片的链接，不要以斜杠结尾
  defaultCover: '/cover.jpg', // 默认封面图片
  socialLink: { // 社交媒体链接
    twitter: 'https://twitter.com/izuolan', // Twitter链接
    github: 'https://github.com/izuolan', // GitHub链接
    telegram: 'https://t.me/zuolan' // Telegram链接
  },
  seo: { // SEO配置
    keywords: ['gfeather' , 'Blog'], // 关键词
    googleSiteVerification: '' // 移除该值或替换为你自己的Google站点验证代码
  },
  notionPageId: process.env.NOTION_PAGE_ID, // Notion页面ID：不要修改！编辑.env文件！
  notionSpacesId: process.env.NOTION_SPACES_ID, // Notion空间ID：不要修改！编辑.env文件！
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Notion访问令牌：如果你不想公开数据库，这个很有用
  notionDomain: 'gfeather9527.notion.site', // Notion域名
  telegramToken: process.env.TELEGRAM_TOKEN, // Telegram机器人令牌
  telegramChatId: '263895784', // Telegram机器人聊天ID
  telegramChannelUrl: 'https://channel.zuolan.me/', // Telegram频道链接
  telegramChannelName: 'zuolan_me', // Telegram频道名称
  craftConfigShareUrl: 'https://www.craft.do/s/kQtcWqkv98cHhB', // Craft配置分享链接
  analytics: { // 分析工具配置
    provider: 'ga', // 目前支持Google Analytics、Ackee、Umami和Cloudflare Insights，请填写'ga'、'ackee'、'umami'或'cf'，留空则禁用
    ackeeConfig: { // Ackee配置
      tracker: '', // 例如 'https://ackee.example.com/tracker.js'
      dataAckeeServer: '', // 例如 https://ackee.example.com ，不要以斜杠结尾
      domainId: '' // 例如 '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    cfConfig: { // Cloudflare配置
      scriptUrl: 'https://static.cloudflareinsights.com/beacon.min.js', // 默认
      token: '' // 类似 '{"token": "xxxxxxxxxxxxxxxxxx"}'
    },
    gaConfig: { // Google Analytics配置
      measurementId: 'G-S88938VTGC' // 例如: G-XXXXXXXXXX
    },
    umamiConfig: { // Umami配置
      scriptUrl: '', // 你的Umami脚本URL
      websiteId: '' // 你的Umami实例的网站ID
    }
  },
  comment: { // 评论系统配置
    // 支持的提供商：utterances, supacomments
    provider: '', // 如果不需要评论插件，请留空
    supaCommentsConfig: { // SupaComments配置
      supabaseUrl: '', // 你的Supabase实例URL
      supabaseAnonKey: '' // 你的Supabase实例匿名密钥
    },
    utterancesConfig: { // Utterances配置
      repo: '' // GitHub仓库名称
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // 区分开发和生产环境（参考：https://vercel.com/docs/environment-variables#system-environment-variables）
}
// export default BLOG
module.exports = BLOG