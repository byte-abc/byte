import {isNumber} from '../is-number'
import {describe, expect, it} from 'vitest'

describe('is-number', () => {
  it('should return true', () => {
    expect(isNumber(1)).toBe(true)
    expect(isNumber('1')).toBe(true)
    expect(isNumber('')).toBe(false)
    expect(isNumber(' ')).toBe(false)
    expect(isNumber(null)).toBe(false)
    expect(isNumber(undefined)).toBe(false)
    expect(isNumber({})).toBe(false)
    expect(isNumber(Symbol())).toBe(false)
    expect(isNumber([])).toBe(false)
  })
})
