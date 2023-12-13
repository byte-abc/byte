<template>
  <q-page>
    index page
    <div class="container text-red-700">container</div>
    <span>{{ JSON.stringify(data) }}</span>
    <b-pin-code-input v-model="valueRef" />
    <b-modal></b-modal>
    <b-component />
  </q-page>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  import BPinCodeInput from '~/components/pin-code-input/BPinCodeInput.vue'
  import {GetHelloDocument} from '~/queries/codegen'
  import {BModal} from '@/components/modal'
  import {BComponent} from '@/use/use-tests/Component'

  const valueRef = ref()

  const {data} = await useAsyncQuery(GetHelloDocument)
</script>
<style>
  .container {
    padding: 20px;
  }
</style>
