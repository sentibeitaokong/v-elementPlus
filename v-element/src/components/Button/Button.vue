<template>
  <button
    ref="buttonRef"
    class="vk-button"
    :class="{
      [`vk-button--${type}`]:type,
      [`vk-button--${size}`]:size,
      'is-circle':circle,
      'is-plain':plain,
      'is-round':round,
      'is-loading':loading,
      'is-disabled':disabled,
    }"
    :disabled="disabled||loading"
    :autofocus="autofocus"
    :nativeType="nativeType"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import type {ButtonProps,ButtonInstance} from "@/components/Button/type.ts";
import {ref} from 'vue'
defineOptions({
  name:'VkButtons'
})
withDefaults(defineProps<ButtonProps>(),{
  nativeType:'button'
})
const buttonRef = ref<ButtonInstance>()
defineExpose({
  ref:buttonRef
})
</script>

<style scoped>

</style>
