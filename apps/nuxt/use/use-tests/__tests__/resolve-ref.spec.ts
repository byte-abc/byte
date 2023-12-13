import {} from '@vue/test-utils'
import {resolveRef} from '../resolve-ref'
import {effectScope, ref} from 'vue'
import {describe, expect, it} from 'vitest'

describe('resolve-ref', () => {
  it.each([
    //
    ['hello', 'hello'],
    [ref('hello'), 'hello'],
  ])('should resolve %s to %s', (value, expected) => {
    expect(resolveRef(value).value).toBe(expected)
  })
})
