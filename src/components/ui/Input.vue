<template>
  <div class="flex flex-col gap-4">
    <label :for="$attrs.inputId">{{ label }}</label>
    <InputText
      v-bind="$attrs"
      :class="{ 'p-invalid': errors[name] }"
      :type="type"
      :aria-describedby="`${$attrs.inputId}-help`"
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
  type?: string
  placeholder?: string

}

defineOptions({
  inheritAttrs: false
})

withDefaults(defineProps<IProps>(), {
  type: 'text'
})
</script>
