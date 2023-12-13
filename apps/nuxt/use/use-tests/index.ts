import {computed, reactive} from 'vue'
import {MaybeRef, ReactiveOptions} from '../types'
import {resolveRef} from './resolve-ref'

export const useTest = (value: MaybeRef<string>) => {
  const valueRef = resolveRef(value)
  return computed(() => `${valueRef.value}-`)
}

export interface UseTest2Props {
  bar?: string
  foo?: string
}

export const useTest2 = (props: ReactiveOptions<UseTest2Props>) => {
  const _props = reactive(props)

  return computed(() => `${_props.foo}-${_props.bar}`)
}

export const useTest3 = (props: ReactiveOptions<UseTest2Props>) => {
  const _props = reactive(props)

  return reactive({
    bar: computed(() => `${_props.foo}-${_props.bar}@`),
    foo: computed(() => `${_props.foo}-${_props.bar}#`),
  })
}
