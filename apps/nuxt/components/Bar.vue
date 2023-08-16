<script setup lang="ts">
  import {useCom1} from '~/use/use-com1'

  const props = defineProps({})
  const emit = defineEmits([])

  const com1 = useCom1()

  onMounted(() => {
    com1.bar = 'bar!'
  })

  onUnmounted(() => {
    com1.bar = ''
  })
</script>
