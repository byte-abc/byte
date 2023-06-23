import {describe, expect, it} from 'vitest'
import {normalizeWorkspaceInfoOptions} from '../normalize-workspace-info-options'

describe('normalize-workspace-info-options', () => {
  it('should normalize workspace info options', () => {
    expect(
      normalizeWorkspaceInfoOptions({
        root: '/foo/bar',
        workspaces: ['packages/*', 'apps/*'],
      }),
    ).toEqual({
      workspaces: ['/foo/bar/packages/*', '/foo/bar/apps/*'],
    })
  })
})
