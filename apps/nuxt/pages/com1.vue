<template>
  <div>
    com1
    {{ foo }}
    {{ bar }}
    -----
    <foo v-if="showFoo" />
    <bar v-if="showBar" />
    <button @click="onToggleFoo">toggle foo</button>
    <button @click="onToggleBar">toggle bar</button>
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  import {provideCom1} from '~/use/use-com1'
  import Bar from '~/components/Bar.vue'
  import Foo from '~/components/Foo.vue'

  const props = defineProps({})
  const emit = defineEmits([])

  const showFoo = ref(false)
  const showBar = ref(false)

  const com1 = provideCom1()

  const foo = computed(() => {
    return com1.foo
  })

  const bar = computed(() => {
    return com1.bar
  })

  const onToggleFoo = () => {
    showFoo.value = !showFoo.value
  }

  const onToggleBar = () => {
    showBar.value = !showBar.value
  }
</script>
