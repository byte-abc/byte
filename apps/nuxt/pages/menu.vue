<template>
  <div>
    <w-menu />
  </div>
</template>

<script setup lang="ts">
  import {PropType} from 'vue'
  import WMenu from '~/components/menu/WMenu.vue'

  const props = defineProps({})
  const emit = defineEmits([])
</script>
