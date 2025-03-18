<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold text-center text-blue-600">Contact Book</h1>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
