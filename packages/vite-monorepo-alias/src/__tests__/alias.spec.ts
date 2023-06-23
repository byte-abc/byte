import {createAlias} from '../alias'
import {WorkspaceInfo} from '../types'
import {describe, expect, it} from 'vitest'

describe('alias', () => {
  it('should create vite alias', () => {
    const info: WorkspaceInfo[] = [
      {
        alias: [[/^components\//u, 'components/']],
        path: /^\/foo\/bar/u,
      },
    ]
    const alias = createAlias(info)

    expect(alias.replacement).toBe('$1')
    expect(alias.find).toBeInstanceOf(RegExp)
    if (alias.find instanceof RegExp) {
      expect(alias.find.test('virtual:foo')).toBeFalsy()
      expect(alias.find.test('./foo/bar')).toBeFalsy()
      expect(alias.find.test('../foo/bar')).toBeFalsy()
      expect(alias.find.test('/foo/bar')).toBeFalsy()
      expect(alias.find.test('@vite/env')).toBeFalsy()
      expect(alias.find.test('@vite/client')).toBeFalsy()
      expect(alias.find.test('app/foo/bar')).toBeTruthy()
    }

    expect(alias.customResolver).toBeInstanceOf(Function)
    if (typeof alias.customResolver === 'function') {
      const customResolver: any = alias.customResolver
      expect(customResolver('components/Foo.vue', undefined)).toBe(null)
      expect(customResolver('store/Foo.vue', '/foo/bar/john/Bar.vue')).toBe(null)
      expect(customResolver('components/Foo.vue', '/foo/bar/john/Bar.vue')).toBe(
        '/foo/bar/components/Foo.vue',
      )
    }
  })
})
