import {computed, ComputedRef, isRef} from 'vue'
import {MaybeRef} from '@/use/types'
export const resolveRef = <T>(value: MaybeRef<T>): ComputedRef<T> => {
  return computed(() => {
    if (isRef(value)) {
      return value.value
    }
    return value
  })
}
