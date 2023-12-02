<script setup lang="ts">
defineProps({
  msg: {
    default: 'Hi 11112222'
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
