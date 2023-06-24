import type {Plugin} from 'vite'
import {createAlias} from './alias'
import {CreateWorkspaceInfoOptions} from './normalize-workspace-info-options'
import {createWorkspaceInfo} from './workspace-info'

export type ViteMonorepoAliasPluginOptions = CreateWorkspaceInfoOptions
export const viteMonorepoAlias = (options: CreateWorkspaceInfoOptions): Plugin => {
  return {
    async config() {
      const workspaceInfo = await createWorkspaceInfo(options)
      return {
        resolve: {
          alias: [createAlias(workspaceInfo)],
        },
      }
    },
    enforce: 'pre',
    name: 'vite-monorepo-alias',
  }
}
