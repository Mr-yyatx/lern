<script setup lang="ts">
import { clog } from '@/utils';
import { ref } from 'vue'
interface Prop {
  msg?: number
}
defineProps<Prop>()

const count = ref(0)
</script>

<template>
  <h1>Hello</h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
