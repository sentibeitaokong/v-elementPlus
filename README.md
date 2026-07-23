# XB Element

一个基于 Vue 3、TypeScript 和 Vite 开发的轻量级 UI 组件库。项目提供常用的表单、反馈与数据展示组件，支持完整引入、按需引入、TypeScript 类型声明以及 ES Module / UMD 两种构建产物。

## 特性

- 基于 Vue 3 Composition API 与 TypeScript 开发
- 提供完整引入和按需引入两种使用方式
- 内置组件类型声明，提供良好的编辑器类型提示
- 使用 Vitest 与 Vue Test Utils 编写组件单元测试
- 输出 ES Module 与 UMD 格式，便于不同场景集成
- 使用 CSS 变量管理主题色与基础样式

## 组件

| 组件 | 说明 |
| --- | --- |
| Button | 支持类型、尺寸、朴素、圆角、加载和图标等状态的按钮 |
| Collapse / CollapseItem | 支持手风琴模式的折叠面板 |
| Dropdown | 基于 Tooltip 的下拉菜单，支持禁用项和分割线 |
| Form / FormItem | 基于 `async-validator` 的表单与校验能力 |
| Icon | 基于 Font Awesome 的图标组件 |
| Input | 支持清空、密码显示等功能的输入框 |
| Message | 支持多种状态、自动关闭与手动关闭的消息提示 |
| Progress | 支持不同状态与文字展示的进度条 |
| Select | 支持筛选、自定义渲染和远程搜索的选择器 |
| Switch | 支持自定义值、文案和尺寸的开关 |
| Tooltip | 基于 Floating UI 实现的文字提示 |

## 环境要求

- Node.js `^20.19.0` 或 `>=22.12.0`
- Vue `^3.5.25`

## 安装

```bash
pnpm add xb-element
```

如需使用 `Icon` 或按钮的图标能力，请同时安装 Font Awesome 相关依赖：

```bash
pnpm add @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/vue-fontawesome
```

## 快速开始

### 完整引入

在应用入口文件中注册组件库并引入样式：

```ts
import { createApp } from 'vue'
import App from './App.vue'
import XBElement from 'xb-element'
import 'xb-element/dist/x-element.css'

const app = createApp(App)

app.use(XBElement)
app.mount('#app')
```

注册后即可直接使用以 `Vk` 开头的全局组件：

```vue
<template>
  <VkButton type="primary">确认</VkButton>
</template>
```

### 按需引入

```vue
<script setup lang="ts">
import { Button, Input } from 'xb-element'
import 'xb-element/dist/x-element.css'
import { ref } from 'vue'

const keyword = ref('')
</script>

<template>
  <Input v-model="keyword" type="text" placeholder="请输入内容" clearable />
  <Button type="primary">搜索</Button>
</template>
```

### 消息提示

```ts
import { createMessage, closeAll } from 'xb-element'
import 'xb-element/dist/x-element.css'

createMessage({
  message: '保存成功',
  type: 'success',
  duration: 3000,
  showClose: true,
})

// 关闭当前页面中的全部消息
closeAll()
```

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发环境
pnpm dev

# 运行单元测试
pnpm test:unit

# 类型检查
pnpm type-check

# 代码检查
pnpm lint

# 构建组件库
pnpm build
```

构建完成后，产物将生成在 `dist/` 目录：

```text
dist/
├── es/                 # ES Module 产物
├── umd/                # UMD 产物
├── types/              # TypeScript 类型声明
└── x-element.css       # 组件库样式
```

## 项目结构

```text
src/
├── components/         # 组件源码、样式与测试
├── hooks/              # 可复用的组合式函数
├── styles/             # 全局样式、变量与重置样式
├── index.ts            # 组件库统一导出入口
├── App.vue             # 本地组件调试页面
└── main.ts             # 开发环境入口
```

## 技术栈

- Vue 3
- TypeScript
- Vite
- Vitest
- Vue Test Utils
- Floating UI
- async-validator
- Font Awesome

## 许可证

[MIT](https://opensource.org/licenses/MIT)
