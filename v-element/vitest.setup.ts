import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
// 为了测试方便，建议直接把所有的 solid 图标都加进去 (fas)，免得以后加一个报错一个
// 注意：在测试环境中全量引入不会影响你最终打包的体积！

library.add(fas)
