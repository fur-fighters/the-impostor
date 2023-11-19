<script setup>
  import { onMounted, onUnmounted, ref, watchEffect } from 'vue'
  
  const intervalId = ref(null)
  const now = ref(null)
  const date = ref(null)
  const time = ref(null)

  onMounted(() => {
    intervalId.value = setInterval(step, 1000)
  })

  onUnmounted(() => {
    clearInterval(intervalId)
  })

  watchEffect(() => {
    if (now.value) {
      const [ _date, _time ] = now.value.split('T')

      date.value = _date
      time.value = _time.slice(0, 8)
    }
  })

  function step() {
    now.value = (new Date()).toISOString()
  }
</script>

<template>
  <h1 v-if="date && time">{{date}} / {{time}}</h1>
</template>

<style>
  body {
    text-align: center;
    font-family: sans-serif;
  }
</style>