/// <reference types="vitest" />
import {fileURLToPath, URL} from 'node:url'
import {defineConfig} from 'vite'

/**
 * 모노레포에 alias 지정을 위해 vitest 용 설정 입니다
 * nuxt 가 사용 하지 않습니다
 */
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
