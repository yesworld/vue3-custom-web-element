<script setup lang="ts">

defineProps({
  msg: {
    default: 'Hi!'
  }
})

</script>

<template>
  <h1 class="read-the-docs">{{ msg }}</h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
