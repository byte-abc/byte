<template>
  <Story>
    <b-input v-model="valueRef"></b-input>
    <button @click="onClick">ok{{ toggleRef }}</button>
  </Story>
</template>

<script setup lang="ts">
  import {PropType, ref} from 'vue'
  import BInput from '../BInput.vue'

  const props = defineProps({})
  const emit = defineEmits([])

  const valueRef = ref('')
  const toggleRef = ref(false)

  const onClick = () => {
    toggleRef.value = !toggleRef.value
  }
</script>
