<script setup lang="ts">
  import {useCom1} from '~/use/use-com1'

  const props = defineProps({})
  const emit = defineEmits([])

  const com1 = useCom1()

  onMounted(() => {
    com1.foo = 'foo!'
  })

  onUnmounted(() => {
    com1.foo = ''
  })
</script>
