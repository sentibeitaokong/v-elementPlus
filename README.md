# v-elementPlus
1.npm install @fortawesome/vue-fontawesome@latest-3  //fontawesome添加 Vue 组件
2.npm install @fortawesome/fontawesome-svg-core    //添加 SVG 核心  
3.npm install @fortawesome/free-solid-svg-icons
npm install @fortawesome/free-regular-svg-icons
npm install @fortawesome/free-brands-svg-icons    //添加三种不同风格的图标包

//main.ts中导入
import { library } from '@fortawesome/fontawesome-svg-core'      //导入核心
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'  //导入组件
import { fas } from '@fortawesome/free-solid-svg-icons'       //导入图标库
library.add(fas)              //添加到核心
app.component('font-awesome-icon', FontAwesomeIcon)      //全局挂载组件

