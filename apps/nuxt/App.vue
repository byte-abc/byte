<template>
  <q-layout>
    <q-page-container>
      <nuxt-page />
    </q-page-container>
  </q-layout>
</template>
<script lang="ts" setup>
  const amount = 1000
  useState('counter', () => Math.round(Math.random() * amount))
</script>
