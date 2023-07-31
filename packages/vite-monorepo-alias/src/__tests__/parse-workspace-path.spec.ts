import {parseWorkspacePath} from '../parse-workspace-path'
import {describe, expect, it} from 'vitest'

describe('parse-workspace-path', () => {
  it('should return regexp', () => {
    const regexp = parseWorkspacePath('/foo/bar', 'packages/hello')

    expect(regexp.test('/foo/bar/packages/hello/foo')).toBeTruthy()
    expect(regexp.test('/foo/john/packages/hello/foo')).toBeFalsy()
    expect(regexp.test('/foo/bar/apps/hello/bar')).toBeFalsy()
  })

  it('should return alias regexp', () => {
    const regexp = parseWorkspacePath('', 'components/*')

    expect('components/hello'.replace(regexp, '')).toBe('hello')
    expect(regexp.test('store/hello')).toBeFalsy()
    expect(regexp.test('foo/components/hello')).toBeFalsy()
  })
  it('should return ~', () => {
    const regexp = parseWorkspacePath('', '~')

    expect('~/components/hello'.replace(regexp, '')).toBe('components/hello')
    expect(regexp.test('store/hello')).toBeFalsy()
    expect(regexp.test('foo/components/hello')).toBeFalsy()
  })
})
