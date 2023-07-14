<template>
  <div class="box">
    <input class="input" @input="onInput" />
  </div>
</template>

<script setup lang="ts">
  import {PropType} from 'vue'

  const props = defineProps({
    filterFn: {type: Function},
  })
  const emit = defineEmits(['input'])

  const onInput = (event: Event & {target: {value: string}}) => {
    const [value] = event.target.value
    event.target.value = ''
    if (props.filterFn) {
      props.filterFn(value) && emit('input', value)
      return
    }
    emit('input', value)
  }
</script>
<style scoped>
  .box {
    overflow: hidden;
  }
  .box > .input {
    width: 100%;
    height: 100%;
    text-indent: -1rem;
    border: 0;
    background-color: transparent;
    outline: 0;
  }
</style>
