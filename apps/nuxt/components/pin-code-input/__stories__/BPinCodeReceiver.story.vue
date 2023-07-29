<template>
  <Story>
    <Variant>
      <div class="container">
        <b-pin-code-receiver class="bg-red" @input="onInput" />
        <span>{{ valueRef }}</span>
      </div>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
  import {PropType, ref} from 'vue'
  import BPinCodeReceiver from '~/components/pin-code-input/BPinCodeReceiver.vue'

  const props = defineProps({})
  const emit = defineEmits([])

  const valueRef = ref('')

  const onInput = (value: string) => {
    valueRef.value = value
  }
</script>

<style>
  .container {
    width: 200px;
    height: 200px;
  }
  .bg-red {
    background: red;
  }
</style>
