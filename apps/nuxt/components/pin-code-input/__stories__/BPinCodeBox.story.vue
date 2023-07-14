<template>
  <Story>
    <Variant>
      <b-pin-code-box />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
  import {PropType} from 'vue'
  import BPinCodeBox from '../BPinCodeBox.vue'

  const props = defineProps({})
  const emit = defineEmits([])
</script>
