import {Alias} from 'vite'
import {WorkspaceInfo} from './types'

export const createAlias = (workspaces: WorkspaceInfo[]): Alias => {
  return {
    customResolver(source: string, importer: undefined | string) {
      if (!importer) {
        return null
      }

      const workspaceInfo = workspaces.find((packageInfo) => {
        return packageInfo.path.test(importer)
      })

      if (!workspaceInfo) {
        return null
      }

      const rootPath = importer.match(workspaceInfo.path)?.[0] ?? '/'

      const alias = workspaceInfo.alias.find(([pattern]) => {
        return pattern.test(source)
      })

      if (!alias) {
        return null
      }

      const replacedSource = source.replace(alias[0], alias[1])

      return `${rootPath}/${replacedSource}`
    },
    // eslint-disable-next-line prefer-named-capture-group,require-unicode-regexp
    find: /^(?!virtual:|\/|\.\/|\.\.\/|@vite\/env|@vite\/client)(.*)/,
    replacement: '$1',
  }
}
