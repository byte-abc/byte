/// <reference types="vitest" />
import {fileURLToPath, URL} from 'node:url'
import {defineConfig} from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      src: fileURLToPath(new URL('src', import.meta.url)),
    },
  },
  test: {
    // ...
  },
})
