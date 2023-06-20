import {fileURLToPath, URL} from 'node:url'
import {defineConfig} from 'vite'
import packageJson from './package.json'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import {camelCase} from 'lodash'

const {dependencies = {}, name} = packageJson ?? {}

const depsKey = Object.keys(dependencies)

const isProduction = process.env.NODE_ENV === 'production'

const config = defineConfig(() => {
  return {
    build: {
      lib: {
        entry: fileURLToPath(new URL('src/index.ts', import.meta.url)),
        fileName: 'index',
        formats: ['es', 'cjs'],
        name: camelCase(name),
      },
      minify: isProduction,
      rollupOptions: {
        external: [...depsKey],
      },
    },
    optimizeDeps: {
      exclude: ['vue-demi', 'vue'],
    },
    plugins: [
      vue(),
      dts({
        compilerOptions: {
          checkJs: false,
          declaration: true,
          declarationMap: false,
          emitDeclarationOnly: true,
          noEmit: false,
          noEmitOnError: true,
          preserveSymlinks: false,
          skipLibCheck: true,
        },
      }) as any,
    ],
    resolve: {
      alias: {
        src: fileURLToPath(new URL('src', import.meta.url)),
      },
    },
  }
})

export default config
