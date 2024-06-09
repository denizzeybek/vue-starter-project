<template>
  <div class="flex items-center gap-4">
    <label :for="$attrs.inputId">{{ label }}</label>
    <InputSwitch v-bind="$attrs" />
  </div>
</template>

<script setup>
defineOptions({
  inheritAttrs: false
})

defineProps(['label'])
</script>
