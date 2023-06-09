<template>
  <div>hello counter{{ counter }}</div>
</template>
<script lang="ts" setup>
  import {} from 'vue'

  const props = defineProps({})
  const emit = defineEmits({})

  const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>
