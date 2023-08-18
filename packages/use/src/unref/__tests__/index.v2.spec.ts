import {ref, version} from 'vue'
import {unref} from '../'
import {vi, expect, it, describe} from 'vitest'

vi.mock('vue', async () => {
  const original: any = await vi.importActual('@wavve/vue2')
  return {
    ...original,
  }
})

describe('unref', () => {
  it('should be vue version 2.7.14', () => {
    expect(version).toBe('2.7.14')
  })
  it('should return value', () => {
    expect(unref(undefined)).toBe(undefined)
    expect(unref('foo')).toBe('foo')
  })
  it('should return value with ref', () => {
    expect(unref(ref(undefined))).toBe(undefined)
    expect(unref(ref('foo'))).toBe('foo')
  })
})
