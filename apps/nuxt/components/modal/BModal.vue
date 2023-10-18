<template>
  <component :is="as" ref="modalRef">
    <slot name="prepend"></slot>
    <slot v-bind="{}">
      <div>{{ modalTargetId }}</div>
    </slot>
    <slot name="append"></slot>
  </component>
</template>

<script setup lang="ts">
  import {Foo} from './types'
  import {ref} from 'vue'
  import {useComponentSystem} from '../system'

  const props = defineProps({
    as: {default: 'div', type: [String, Object, Function]},
  })

  const modalRef = ref(null)

  const {modalTargetId} = useComponentSystem()
</script>
