<template>
  <main>
    <h1 class="text-3xl text-r-red font-bold underline">Hello world!: {{ countersStore.getDoubleCount }}</h1>
    <Button label="Click me" />
  </main>
</template>

<script setup lang="ts">
import Button from 'primevue/button';

import {useCounter} from '@/stores/counter'

const countersStore = useCounter();


</script>
