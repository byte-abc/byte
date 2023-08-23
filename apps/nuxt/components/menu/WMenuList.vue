<template>
  <div>
    <w-menu-item
      v-for="item in list"
      :key="item.id"
      :item="item"
      :select="select"
      @click="onClick"
      @update:select="onSelect"
    />
  </div>
</template>

<script setup lang="ts">
  import {PropType} from 'vue'
  import WMenuItem from './WMenuItem.vue'
  import {MenuData} from './types'

  const props = defineProps({
    list: {default: () => [], type: Array as PropType<MenuData[]>},
    select: {type: String},
  })
  const emit = defineEmits(['click', 'update:select'])

  const onClick = (id: string) => {
    emit('click', id)
  }

  const onSelect = (id: string) => {
    emit('update:select', id)
  }
</script>
