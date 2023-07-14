<template>
  <div class="pin-code-input">
    <b-pin-code-box v-for="item in count" :key="item" />
  </div>
</template>

<script setup lang="ts">
  import {computed, PropType} from 'vue'
  import BPinCodeBox from './BPinCodeBox.vue'

  const props = defineProps({
    count: {default: 4, type: Number},
  })
  const emit = defineEmits([])
</script>

<style>
  .pin-code-input {
    background-color: red;
  }
</style>
