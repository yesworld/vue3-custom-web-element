<script setup lang="ts">
defineProps({
  msg: {
    default: 'Hi from Custom element!'
  }
})
</script>

<template>
  <h1 class="title">{{ msg }}</h1>
</template>

<style scoped>
.title {
  color: #888;
}
</style>
