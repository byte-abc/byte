<template>
  <q-page>
    index page
    <q-btn color="primary" label="Primary" />
    <div class="container text-red-700">container</div>
    <span>{{ JSON.stringify(data) }}</span>
    <b-pin-code-input v-model="valueRef" />
  </q-page>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  import BPinCodeInput from '~/components/pin-code-input/BPinCodeInput.vue'
  import {GetHelloDocument} from '~/queries/codegen'

  const valueRef = ref()

  const {data} = await useAsyncQuery(GetHelloDocument)
</script>
<style>
  .container {
    padding: 20px;
  }
</style>
