<template>
  <div class="pin-code-input">
    <b-pin-code-box v-for="item in count" :key="item" />
  </div>
</template>

<script setup lang="ts">
  import {computed} from 'vue'
  import BPinCodeBox from './BPinCodeBox.vue'
  import BPinCodeReceiver from './BPinCodeReceiver.vue'

  const props = defineProps({
    count: {default: 4, type: Number},
    focused: {type: Boolean},
    modelValue: null,
    type: {type: String},
  })
  const emit = defineEmits(['update:model-value', 'enter'])

  const valueStringRef = computed(() => String(props.modelValue ?? ''))
  const lengthRef = computed(() => valueStringRef.value.length)

  const onInput = (value: string) => {
    emit('update:model-value', (valueStringRef.value + value).slice(0, props.count))
  }

  const onRemove = () => {
    emit('update:model-value', valueStringRef.value.slice(0, -1))
  }

  const onEnter = () => {
    emit('enter')
  }
</script>

<style>
  .pin-code-input {
    background-color: red;
    display: flex;
  }
</style>
