<template>
  <div class="box">
    <input
      class="input"
      :disabled="disabled"
      @input="onInput"
      @keyup="onKeyup"
      @focus="onFocus(true)"
      @blur="onFocus(false)"
    />
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    disabled: {default: false, type: Boolean},
    filterFn: {type: Function},
  })
  const emit = defineEmits({
    enter: () => true,
    input: (value: string) => value || true,
    remove: () => true,
  })

  const onInput = (event: Event & {target: {value: string}}) => {
    const [value] = event.target.value
    event.target.value = ''
    if (props.filterFn) {
      props.filterFn(value) && emit('input', value)
      return
    }
    emit('input', value)
  }

  const onKeyup = (event) => {
    const keyName = event.key ?? event.code
    if (keyName === 'Backspace') {
      emit('remove')
      return
    }
    if (keyName === 'Enter') {
      emit('enter')
    }
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
