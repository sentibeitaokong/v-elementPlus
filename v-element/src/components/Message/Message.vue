<template>
  <div
    v-show="visible"
    :class="{
      [`vk-message--${type}`]:type,
      'is-close':showClose,
      'vk-messgae':true
    }"
    role="alert"
  >
    <div class="vk-message__content">
      <slot>
        <RenderVnode :v-node="message" v-if="message"></RenderVnode>
      </slot>
    </div>
    <div class="vk-message__close" v-if="showClose">
      <Icon @click.stop="close" icon="xmark"></Icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MessageProps } from '@/components/Message/types.ts'
import RenderVnode from '@/components/Common/RenderVnode.ts'
import {ref} from 'vue'
import Icon from '@/components/Icon'
import { onMounted } from 'vue'
const { type='info',duration=3000 } = defineProps<MessageProps>()
const visible=ref(false)

const startTime=()=>{
  if(duration===0){
    return
  }
  setTimeout(()=>{
    visible.value=false
  },duration)
}
const close=()=>{
  visible.value=false
}
onMounted(()=>{
  visible.value=true
  startTime()
})
</script>

<style scoped></style>
