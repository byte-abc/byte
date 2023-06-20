import {describe, expect, it} from 'vitest'
import {computed, effectScope, reactive, ref, toRef} from 'vue'
import {isToRef} from '../'

describe('isToRef', () => {
  const setup = (ref: any) => {
    const scope = effectScope()
    const result = scope.run(() => {
      return isToRef(ref)
    })
    return {result, scope}
  }
  it('should return false with ref', () => {
    const {result} = setup(ref('bar'))
    expect(result).toBe(false)
  })
  it('should return true with toRef', () => {
    const {result} = setup(toRef(reactive({foo: ref('foo')}), 'foo'))
    expect(result).toBe(true)
  })
  it('should return false with computed', () => {
    const {result} = setup(computed(() => 'john'))
    expect(result).toBe(false)
  })
})
