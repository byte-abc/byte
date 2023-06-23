/// <reference types="vitest" />
/// <reference types="histoire" />

import vue from '@vitejs/plugin-vue'
import {defineConfig} from 'vite'
import {createAlias, createWorkspaceInfo} from '@byte-abc/vite-monorepo-alias'

export default defineConfig(async () => {
  const workspaceInfo = await createWorkspaceInfo({
    workspaces: ['packages/*', 'apps/*'],
  })
  return {
    histoire: {
      // Alternative way of specifying histoire config
      setupFile: '/histoire.setup.ts',
    },
    plugins: [vue()],
    resolve: {
      alias: [createAlias(workspaceInfo)],
    },
    test: {
      // ...
    },
  }
})
