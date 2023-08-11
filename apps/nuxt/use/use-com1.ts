import {inject, InjectionKey, provide, reactive, ref} from 'vue'
import {ReactiveOptions} from '@byte-abc/use'

export interface Com1Context {
  bar: string | undefined
  foo: string | undefined
}

export const COM1_CONTEXT_KEY: InjectionKey<ReactiveOptions<Com1Context>> = Symbol('com1')

export const createCom1 = (): ReactiveOptions<Com1Context> => {
  return {
    bar: ref<string | undefined>(),
    foo: ref<string | undefined>(),
  }
}
export const useCom1 = () => {
  return reactive(inject(COM1_CONTEXT_KEY) ?? createCom1())
}

export const provideCom1 = () => {
  const context = createCom1()

  provide(COM1_CONTEXT_KEY, context)

  return reactive(context)
}
