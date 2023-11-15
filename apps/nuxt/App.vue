<template>
  <nuxt-page />
</template>
<script lang="ts" setup>
  import {onMounted} from 'vue'
  import {worker} from './worker'
  const amount = 1000
  useState('counter', () => Math.round(Math.random() * amount))
  const MAX_COUNT = 1_000_000
  const createUuid = () => {
    let uuid = 0
    return () => {
      uuid = (uuid + 1) % MAX_COUNT
      return uuid
    }
  }

  const uuid = createUuid()

  onMounted(() => {
    worker.postMessage({foo: 'foo', id: uuid()})
    worker.addEventListener('message', ({data}) => {
      console.log(data)
    })
  })
</script>
