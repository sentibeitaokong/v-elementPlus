import { h,render } from "vue"
import type {MessageProps} from '@/components/Message/types.ts'
import MessageConstructor from "./Message.vue"

export const createMessage=(props:MessageProps)=>{
  const container=document.createElement('div')
  const vnode=h(MessageConstructor,props)
  const destory=()=>{
    render(null,container)
  }
  const newProps={
    ...props,
    onDestory:destory
  }
  render(vnode,container)
  //非空断言操作符
  document.body.appendChild(container.firstElementChild!)
}
