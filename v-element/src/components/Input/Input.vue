<template>
  <div
    class="vk-input"
    :class="{
      [`vk-input--${type}`]: type,
      [`vk-input--${size}`]: size,
      'is-disabled': disabled,
      'is-prepend': $slots.prepend,
      'is-append': $slots.append,
      'is-suffix': $slots.suffix,
      'is-prefix': $slots.prefix,
    }"
  >
    <!-- input   -->
    <template v-if="type !== 'textarea'">
      <!--    prepend slots    -->
      <div v-if="$slots.prepend" class="vk-input__prepend">
        <slot name="prepend"></slot>
      </div>
      <!--   input container     -->
      <div class="vk-input__wrapper">
        <!--    prefix slots    -->
        <div v-if="$slots.prefix" class="vk-input__prefix">
          <slot name="prefix"></slot>
        </div>
        <!--    input content    -->
        <input
          class="vk-input__inner"
          :disabled="disabled"
          :type="type"
        />
        <!--    suffix slots    -->
        <div v-if="$slots.suffix" class="vk-input__suffix">
          <slot name="suffix"></slot>
        </div>
      </div>
      <!--    append slots    -->
      <div v-if="$slots.append" class="vk-input__append">
        <slot name="append"></slot>
      </div>
    </template>
    <!-- textarea   -->
    <template v-else>
      <textarea class="vk-textarea__wrapper" :disabled="disabled"></textarea>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { InputProps } from '@/components/Input/types.ts'
defineOptions({
  name: 'VkInput',
})
const { type = 'text' } = defineProps<InputProps>()
</script>

<style scoped></style>
