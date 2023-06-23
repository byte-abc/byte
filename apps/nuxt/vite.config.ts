/// <reference types="vitest" />
import {fileURLToPath, URL} from 'node:url'
import {defineConfig} from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      components: fileURLToPath(new URL('components', import.meta.url)),
    },
  },
  test: {
    // ...
  },
})
