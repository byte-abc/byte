<template>
  <div>
    hello {{ counter }}
    <nuxt-page />
  </div>
</template>
<script lang="ts" setup>
  const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>
