<template>
  <div class="input-box" :class="{hover, focused, filled: isFilled}">
    <span v-if="isPasswordRef && isFilled" class="dot">
      <em class="blind">*</em>
    </span>
    <span v-else class="input-text">{{ value }}</span>
  </div>
</template>

<script setup lang="ts">
  import {computed} from 'vue'

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
<style scoped>
  .input-box {
    position: relative;
    display: flex;
    box-sizing: border-box;
    width: 72px;
    height: 72px;
    border: 2px solid transparent;
    background-color: #252525;
    vertical-align: top;
    align-items: center;
    justify-content: center;
  }
  .input-box:not:last-child {
    margin-right: 1rem;
  }
  .input-box.selected,
  .input-box.focused {
    border-color: #eee;
  }

  .input-box.filled {
    border-color: #eee;
    background-color: #eee;
  }

  .dot {
    overflow: hidden;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 16px;
    height: 16px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: #252525;
    color: transparent;
  }

  .input-text {
    font-size: 24px;
    text-align: center;
  }

  .blind {
    position: absolute;
    overflow: hidden;
    width: 1px;
    height: 1px;
    font-size: 1px;
    clip: rect(0, 0, 0, 0);
  }
</style>
