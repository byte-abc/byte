/// <reference types="vitest" />
/// <reference types="histoire" />

import {viteMonorepoAlias} from '@byte-abc/vite-monorepo-alias'
import vue from '@vitejs/plugin-vue'
import {defineConfig} from 'vite'

export default defineConfig(async () => {
  return {
    histoire: {
      // Alternative way of specifying histoire config
      setupFile: '/histoire.setup.ts',
    },
    plugins: [
      vue(),
      viteMonorepoAlias({
        workspaces: ['packages/*', 'apps/*'],
      }),
    ],
    test: {
      // ...
    },
  }
})
