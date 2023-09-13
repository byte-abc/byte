<template>
  <input :value.prop="modelValue" @input="onInput" />
</template>

<script setup lang="ts">
  import {computed} from 'vue'
  import {createGetValue} from '../get-value'

  const props = defineProps({
    max: {type: Number},
    modelValue: {type: String},
    number: {default: false, type: Boolean},
  })
  const emit = defineEmits(['update:modelValue'])
  const getValue = computed(() => createGetValue({max: props.max, number: props.number}))
  const onInput = (event: Event & {target: any}) => {
    const value = getValue.value(event.target.value)
    event.target.value = value
    emit('update:modelValue', value)
  }
</script>
