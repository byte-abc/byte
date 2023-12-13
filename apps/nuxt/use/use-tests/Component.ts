import {defineComponent, h, ref, onUnmounted} from 'vue'
import {useTest, useTest2, useTest3} from './index'

export const BComponent = defineComponent({
  props: [],
  setup() {
    const value = ref('hello')
    const result = useTest(value)
    const result2 = useTest2({bar: 'hi', foo: value})
    const result3 = useTest3({bar: 'hi', foo: value})

    return () =>
      h('div', {}, [
        //
        'adasdasdasdasda',
        h('span', result.value),
        h('span', result2.value),
        h('span', result3.bar),
        h('span', result3.foo),
        h('button', {onclick: () => (value.value += 'o')}, 'next'),
      ])
  },
})
