import {defineNuxtConfig} from 'nuxt/config'
export default defineNuxtConfig({
  modules: [
    'nuxt-quasar-ui',
    [
      '@nuxtjs/apollo',
      {
        clients: {
          default: {
            httpEndpoint: 'http://localhost:3000/api/graphql',
          },
        },
      },
    ],
    '@nuxtjs/tailwindcss',
  ],
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    hooks: {
      'rollup:before': (context) => {
        context.options.moduleSideEffects.push('reflect-metadata')
      },
    },
  },
})
