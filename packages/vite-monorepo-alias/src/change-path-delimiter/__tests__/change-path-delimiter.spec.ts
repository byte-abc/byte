import {changePathDelimiter} from '../'
import {describe, expect, it} from 'vitest'

describe('changePathDelimiter', () => {
  it('should change the path delimiter', () => {
    expect(changePathDelimiter('\\a\\b\\c\\', '\\')).toBe('/a/b/c/')
  })
})
