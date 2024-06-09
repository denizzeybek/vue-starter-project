<template>
  <div class="flex flex-col gap-4">
    <label :for="name">{{ label }}</label>
    <Dropdown
      :id="name"
      v-bind="$attrs"
      :options="options"
      :class="{ 'p-invalid': errors[name] }"
      :aria-describedby="`${name}-help`"
      optionLabel="name"
      optionValue="value"
    />
    <small :id="`${name}-help`" class="p-error">
      {{ errors[name] }}
    </small>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  errors: Record<string, string>
  label: string
  name: string
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
