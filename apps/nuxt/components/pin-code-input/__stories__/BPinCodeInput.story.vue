<template>
  <Story>
    <Variant>
      <b-pin-code-input />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
  import {PropType} from 'vue'
  import BPinCodeInput from 'components/pin-code-input/BPinCodeInput.vue'

  const props = defineProps({})
  const emit = defineEmits([])
</script>
