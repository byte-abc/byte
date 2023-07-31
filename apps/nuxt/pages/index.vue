<template>
  <q-page>
    index page
    <q-btn color="primary" label="Primary" />
    <div class="container text-red-700">container</div>
    <span>{{ JSON.stringify(data) }}</span>
  </q-page>
</template>

<script setup lang="ts">
  import BPinCodeReceiver from '~/components/pin-code-input/BPinCodeReceiver.vue'
  import {isNumber} from './is-number'
  import {GetHelloDocument} from '~/queries/codegen'
  import {isNil} from '@byte-abc/lodash'
  const props = defineProps({})
  const emit = defineEmits({})
  const onInput = (value: string) => {
    // console.log(value, isNil(null))
  }

  const {data} = await useAsyncQuery(GetHelloDocument)
</script>
<style>
  .container {
    padding: 20px;
  }
</style>
