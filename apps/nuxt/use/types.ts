import {Ref, ComputedRef, WritableComputedRef} from 'vue'
export type MaybeRef<T> = Ref<T> | ComputedRef<T> | T | WritableComputedRef<T>
export type ReactiveOptions<T> = {
  [K in keyof T]: MaybeRef<T[K]>
}
