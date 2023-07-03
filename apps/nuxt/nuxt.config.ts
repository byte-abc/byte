import {defineNuxtConfig} from 'nuxt/config'
export default defineNuxtConfig({
  modules: ['nuxt-quasar-ui', 'nuxt-graphql-client'],
  // quasar: {},
  runtimeConfig: {
    public: {
      GQL_HOST: 'http://localhost:3000/graphql',
    },
  },
})
