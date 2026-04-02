import Progress, { type ProgressProps } from './Progress'
import type { App } from 'vue'

export default {
  install (app: App) {
    app.component('VkProgress', Progress)
  },
  name: 'VKProgress',
}

export { Progress, type ProgressProps }
