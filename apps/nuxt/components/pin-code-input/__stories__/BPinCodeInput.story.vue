<template>
  <Story>
    <Variant>
      <b-pin-code-input v-model="valueRef" />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
  import BPinCodeInput from 'components/pin-code-input/BPinCodeInput.vue'
  import {ref} from 'vue'

  const props = defineProps({})
  const emit = defineEmits([])

  const valueRef = ref()
</script>
