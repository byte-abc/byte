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
})
