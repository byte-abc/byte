<template>
  <div :class="style({direction, grow, wrap})"><slot></slot></div>
</template>

<script setup lang="ts">
  import {PropType} from 'vue'
  import {cva, VariantProps} from 'class-variance-authority'

  const props = defineProps({
    direction: {default: 'row', type: String as PropType<Style['direction']>},
    grow: {default: false, type: Boolean},
    wrap: {default: false, type: Boolean},
  })
  const emit = defineEmits([])

  const style = cva('flex shrink-0 overflow-hidden', {
    variants: {
      direction: {
        column: 'min-h-0',
        row: 'min-w-0',
      },
      grow: {
        false: 'grow-0',
        true: 'grow',
      },
      wrap: {
        false: 'flex-nowrap',
        true: 'flex-wrap',
      },
    },
  })

  type Style = VariantProps<typeof style>
</script>
