<template>
  <div class="vk-select" :class="{ 'is-disabled': disabled }" @click="toggleDropdown">
    <Tooltip placement="bottom-start" manual ref="tooltipRef" :popper-options="popperOptions">
      <Input
        type="select"
        v-model="states.inputValue"
        :disabled="disabled"
        :placeholder="placeholder"
      />
      <template #content>
        <ul class="vk-select__menu">
          <template v-for="(item, index) in options" :key="index">
            <li
              class="vk-select__menu-item"
              :class="{
                'is-disabled': item.disabled,
                'is-selected': states.selectedOption?.value === item.value,
              }"
              :id="`select-item-${item.value}`"
              @click.stop="itemSelect(item)"
            >
              {{ item.label }}
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { offset, shift,size } from '@floating-ui/vue'
import type {
  SelectEmits,
  SelectProps,
  SelectOption,
  SelectStates,
} from '@/components/Select/types.ts'
import type { TooltipInstance } from '@/components/Tooltip/type.ts'
import { reactive, ref } from 'vue'
import Tooltip from '../Tooltip/Tooltip.vue'
import Input from '../Input/Input.vue'
defineOptions({
  name: 'VkSelect',
})

const { modelValue, placeholder = '', disabled, options } = defineProps<SelectProps>()
const emits = defineEmits<SelectEmits>()
const tooltipRef = ref<TooltipInstance>()

const findOption = (value: string) => {
  const option = options.find((item) => item.value === value)
  return option ? option : null
}
const initialOption = findOption(modelValue)
const isDropdownShow = ref(false)
const states = reactive<SelectStates>({
  inputValue:initialOption ? initialOption.label : '',
  selectedOption:initialOption
})
const popperOptions: any = {
  middleware: [
    size({
      apply({ rects, elements }) {
        Object.assign(elements.floating.style, {
          // rects.reference.width 就是你输入框的真实 DOM 宽度
          width: `${rects.reference.width}px`,
        })
      }
    })
  ]
}
const controlDropdown = (show: boolean) => {
  if (show) {
    tooltipRef.value!.show()
  } else {
    tooltipRef.value!.hide()
  }
  isDropdownShow.value = show
  emits('visible-change', show)
}

const toggleDropdown = () => {
  if (disabled) {
    return
  }
  if (isDropdownShow.value) {
    controlDropdown(false)
  } else {
    controlDropdown(true)
  }
}

const itemSelect = (e: SelectOption) => {
  if (e.disabled) {
    return
  }
  states.inputValue=e.label
  states.selectedOption=e
  emits('change', e.value)
  emits('update:modelValue', e.value)
  controlDropdown(false)
}
</script>

<style scoped></style>
