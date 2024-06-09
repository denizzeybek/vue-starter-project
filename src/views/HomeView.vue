<template>
  <main>
    <h1 class="text-3xl text-r-red font-bold underline">
      Hello world!: {{ countersStore.getDoubleCount }}
    </h1>
    <Button>
      <span>Click Me</span>
      <i class="pi pi-check"></i>
    </Button>
    <Calendar v-model="date" />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCounter } from '@/stores/counter'

const date = ref(new Date())
const countersStore = useCounter()
</script>
