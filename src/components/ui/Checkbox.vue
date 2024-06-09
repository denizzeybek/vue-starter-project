<template>
  <div>
    <label
      :for="name"
      class="flex items-start gap-2 text-sm font-normal cursor-pointer select-none text-r-black"
      :class="{
        'opacity-50 !cursor-not-allowed': disabled
      }"
    >
      <input
        :id="name"
        :name="name"
        type="checkbox"
        :value="checkedValue"
        :checked="checked"
        :trueValue="checkedValue"
        :falseValue="uncheckedValue"
        :disabled="disabled"
        @change="handleChange"
        class="hidden"
      />
      <span
        class="flex items-center justify-center w-5 h-5 transition-colors duration-100 border rounded min-w-5 min-h-5 active:ring-2 active:ring-r-stroke"
        :class="{
          'border-r-stroke hover:border-r-primary bg-r-white hover:bg-r-primary/5': !checked,
          'border-r-primary bg-r-primary text-white hover:bg-r-primary-hovered hover:border-r-primary-hovered':
            checked
        }"
      >
        <i v-if="checked" class="pi pi-check"></i>
      </span>

      {{ label }}
      <slot></slot>
    </label>
    <small v-if="errorMessage" class="text-r-red">
      {{ errorMessage }}
    </small>
  </div>
</template>

<script lang="ts" setup>
import { useField } from 'vee-validate'

type CheckValueType = string | number | boolean

export interface IProps {
  label?: string
  name: string
  checkedValue?: CheckValueType
  uncheckedValue?: CheckValueType
  disabled?: boolean
  modelValue?: CheckValueType
  syncVModel?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  disabled: false,
  checkedValue: true,
  uncheckedValue: false,
  syncVModel: false
})

const { errorMessage, checked, handleChange } = useField(() => props.name, undefined, {
  type: 'checkbox',
  checkedValue: props.checkedValue,
  uncheckedValue: props.uncheckedValue,
  syncVModel: props.syncVModel
})
</script>
