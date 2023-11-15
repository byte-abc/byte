<template>
  <Story>
    <Variant>
      <flex direction="row">
        <flex class="bg-green">hello</flex>
        <flex class="bg-red" grow></flex>
      </flex>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
  import {PropType} from 'vue'
  import Flex from '../Flex.vue'

  const props = defineProps({})
  const emit = defineEmits([])
</script>

<style scoped></style>
