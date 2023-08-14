<template>
  <q-layout>
    <q-page-container>
      <nuxt-page />
    </q-page-container>
  </q-layout>
</template>
<script lang="ts" setup>
  const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>
