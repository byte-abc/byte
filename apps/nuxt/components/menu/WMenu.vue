<template>
  <div class="">
    <w-menu-list v-model:select="selectRef" :list="list" @click="onClick" />
  </div>
</template>

<script setup lang="ts">
  import {PropType} from 'vue'
  import {cva} from 'class-variance-authority'
  import {MenuData} from './types'
  import WMenuList from './WMenuList.vue'

  const props = defineProps({
    select: {default: false, type: Boolean},
  })
  const emit = defineEmits(['update:select'])

  const selectRef = ref('foo')

  const list: MenuData[] = [
    {id: 'foo', label: 'foo'},
    {id: 'bar', label: 'bar'},
    {id: 'john', label: 'john'},
  ]

  const onClick = (id: string) => {
    switch (id) {
      case 'foo': {
        console.log('foo!!!1')
        break
      }
      case 'bar': {
        console.log('!!!bar!!!1')
        break
      }
      case 'john': {
        console.log('!!!----john!!!1')
        break
      }
    }
  }
</script>
