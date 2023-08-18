<template>
  <div class="pin-code-input">
    <b-pin-code-box
      v-for="(item, index) in count"
      :key="item"
      :value="valueStringRef[index]"
      :type="type"
      :focused="focused && index === lengthRef"
    />
    <b-pin-code-receiver
      class="pin-code-receiver"
      @input="onInput"
      @remove="onRemove"
      @enter="onEnter"
    />
  </div>
</template>

<script setup lang="ts">
  import {computed} from 'vue'
  import BPinCodeBox from './BPinCodeBox.vue'
  import BPinCodeReceiver from './BPinCodeReceiver.vue'
  import {mutRef} from '@byte-abc/use'

  const props = defineProps({
    count: {default: 4, type: Number},
    disabled: {default: false, type: Boolean},
    focused: {type: Boolean},
    modelValue: null,
    type: {type: String},
  })
  const emit = defineEmits(['update:model-value', 'enter', 'focus'])

  const focusedRef = mutRef(computed(() => props.focused))

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
    background-color: black;
    overflow: hidden;
    display: inline-flex;
    position: relative;
  }
  .pin-code-receiver {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
