/// <reference types="vitest" />
/// <reference types="histoire" />

import vue from '@vitejs/plugin-vue'
import {defineConfig} from 'vite'

// eslint-disable-next-line prefer-regex-literals
const packages = ['/Users/gimbichi/Documents/Apps/byte/apps/nuxt/']

export default defineConfig({
  histoire: {
    // Alternative way of specifying histoire config
    setupFile: '/histoire.setup.ts',
  },
  plugins: [vue()],
  resolve: {
    alias: [
      {
        customResolver(source: string, importer: undefined | string) {
          if (!importer || !source.startsWith('components')) {
            return null
          }

          const path = packages.find((path) => {
            return importer.startsWith(path)
          })

          if (path) {
            return `${path}/${source}`
          }

          // todo
          // console.log('source', source, 'importer', importer)
          // return `${importer}/${source}`
          return null
        },
        // find: /^(?!virtual|\/|\.\/|\.\.\/)(.*)&/u,
        // eslint-disable-next-line prefer-named-capture-group,require-unicode-regexp
        find: /^(?!virtual:|\/|\.\/|\.\.\/|@vite\/env|@vite\/client)(.*)/,
        // find: /^componnets\/(.*)/,
        replacement: '$1',
      },
    ],
  },
  test: {
    // ...
  },
})
