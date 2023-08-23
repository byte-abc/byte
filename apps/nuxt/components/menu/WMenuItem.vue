<template>
  <div>
    <button :class="rootStyle({select: isSelect})" @click="onClick">{{ item?.label }}</button>
    <button @click="onSelect">select</button>
  </div>
</template>

<script setup lang="ts">
  import {cva} from 'class-variance-authority'
  import {computed, PropType} from 'vue'
  import {MenuData} from './types'

  const props = defineProps({
    item: {type: Object as PropType<MenuData>},
    select: {type: String},
  })
  const emit = defineEmits(['click', 'update:select'])

  const rootStyle = cva('flex', {
    variants: {
      select: {
        true: 'text-red',
      },
    },
  })

  const isSelect = computed(() => {
    return props.select === props.item?.id
  })

  const onClick = () => {
    if (props.item) {
      emit('click', props.item.id)
    }
  }

  const onSelect = () => {
    if (props.item) {
      emit('update:select', props.item.id)
    }
  }
</script>
