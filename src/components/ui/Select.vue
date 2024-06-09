<template>
  <div class="flex flex-col gap-4">
    <label :for="$attrs.inputId">{{ label }}</label>
    <Dropdown
      v-bind="$attrs"
      :options="options"
      :class="{ 'p-invalid': errors[name] }"
      :type="type"
      :aria-describedby="`${$attrs.inputId}-help`"
      optionLabel="name"
      optionValue="value"
      :placeholder="placeholder"
    />
    <small :id="`${$attrs.inputId}-help`" class="p-error">
      {{ errors[name] }}
    </small>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  errors: Record<string, string>
  label: string
  name: string
  placeholder?: string
  options: {
    name: string
    value: string
  }[]
}

defineOptions({
  inheritAttrs: false
})

withDefaults(defineProps<IProps>(), {})
</script>
