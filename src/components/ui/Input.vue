<template>
  errors: {{ errors }}
  <div class="flex flex-col gap-4">
    <label :for="name">{{ label }}</label>
    <InputText
      :id="name"
      v-bind="$attrs"
      :class="{ 'p-invalid': errors[name] }"
      :aria-describedby="`${name}-help`"
    />
    <small :id="`${name}-help`" class="text-r-red">
      {{ errors[name] }}
    </small>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  errors: Record<string, string>
  label: string
  name: string
}

defineOptions({
  inheritAttrs: false
})

withDefaults(defineProps<IProps>(), {})
</script>
