import {createGetValue} from '../'
import {describe, expect, it} from 'vitest'

describe('getValue', () => {
  it('should get number only value', () => {
    const getValue = createGetValue({
      number: true,
    })
    expect(getValue('12A345')).toBe('12345')
  })
  it('should get number only value and max 3', () => {
    const getValue = createGetValue({
      max: 3,
      number: true,
    })
    expect(getValue('12A345')).toBe('123')
  })
})
