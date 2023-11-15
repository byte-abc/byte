<template>
  <div>
    <flex direction="row" class="w-96 h-96">
      <flex class="bg-green-100">hello</flex>
      <flex class="bg-red-100" grow
        >hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello</flex
      >
    </flex>
  </div>
</template>

<script setup lang="ts">
  import {PropType} from 'vue'
  import Flex from '@/components/flex/Flex.vue'

  const props = defineProps({})
  const emit = defineEmits([])
</script>
