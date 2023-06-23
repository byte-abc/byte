<template>
  <Story>
    <div>
      <span>hello</span>
      <foo />
    </div>
  </Story>
</template>

<script setup lang="ts">
  import {PropType} from 'vue'
  import Foo from 'components/Foo.vue'

  const props = defineProps({})
  const emit = defineEmits([])
</script>
