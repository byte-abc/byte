// @vitest-environment jsdom
import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import {computed, defineComponent, effectScope, ref, toRef, toRefs} from 'vue'
import {isWritableRef} from '../'

describe('isWritableRef', () => {
  const setupProps = () => {
    let props
    const Component = defineComponent({
      name: 'Component',
      props: {
        foo: {default: 'foo', type: String},
      },
      setup(_props) {
        props = _props
        return () => null
      },
    })
    mount(Component)

    return {props}
  }
  const setup = (ref: any) => {
    const scope = effectScope()
    const result = scope.run(() => {
      return isWritableRef(ref)
    })
    return {result, scope}
  }
  it('should return true with writable computed', () => {
    const valueRef = ref(0)
    const {result} = setup(
      computed({
        get() {
          return valueRef.value
        },
        set(value) {
          valueRef.value = value
        },
      }),
    )

    expect(result).toBe(true)
  })
  it('should return true with ref', () => {
    const valueRef = ref(0)
    const {result} = setup(valueRef)

    expect(result).toBe(true)
  })
  it('should return false with computed', () => {
    const valueRef = ref(0)
    const {result} = setup(computed(() => valueRef.value))

    expect(result).toBe(false)
  })
  it('should return false with toRef (props)', () => {
    const {props} = setupProps()
    const {result} = setup(toRef(props, 'foo'))

    expect(result).toBe(false)
  })
  it('should return false with toRefs (props)', () => {
    const {props} = setupProps()
    const {result} = setup(toRefs(props).foo)

    expect(result).toBe(false)
  })
})
