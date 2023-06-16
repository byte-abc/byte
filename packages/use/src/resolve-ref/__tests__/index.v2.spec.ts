import {version, watch} from 'vue'
import {resolveRef} from '../'

jest.mock('vue-demi', () => {
  const original = jest.requireActual('@wavve/vue2')
  return {
    ...original,
  }
})

jest.mock('vue', () => {
  const original = jest.requireActual('@wavve/vue2')
  return {
    ...original,
  }
})

describe('resolveRef', () => {
  const setup = (target, updateOrigin?) => {
    const callback = jest.fn()
    const result = resolveRef(target, updateOrigin)
    watch(result, callback, {flush: 'sync'})
    return {
      callback,
      result,
    }
  }
  it('should return a ref with null', () => {
    expect(version).toBe('2.7.14')
    const {result} = setup(null)
    expect(result.value).toBeNull()
  })
})
