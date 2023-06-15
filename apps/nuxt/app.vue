<template>
  <chakra.div m="2">
    hello {{ counter }}
    <NuxtPage />
  </chakra.div>
</template>
<script lang="ts" setup>
  import {chakra} from '@chakra-ui/vue-next'
  const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>
