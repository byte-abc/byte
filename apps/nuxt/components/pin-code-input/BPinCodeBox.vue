<template>
  <div>$END$</div>
</template>

<script setup lang="ts">
  import {computed, PropType} from 'vue'

  const props = defineProps({
    focused: {type: Boolean},
    hover: {type: Boolean},
    type: {type: String},
    value: {
      type: String,
    },
  })
  const emit = defineEmits([])

  const isPasswordRef = computed(() => {
    return props.type === 'password'
  })

  const isFilled = computed(() => {
    return Boolean(props.value)
  })
</script>
