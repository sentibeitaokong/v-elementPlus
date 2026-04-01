import type { App } from 'vue'
import Message from '@/components/Message/Message.vue'
import { createMessage } from '@/components/Message/method'
Message.install = (app: App) => {
  app.component(Message.name||'VkMessage', Message)
}

export default Message
export { createMessage }
export * from './types'
