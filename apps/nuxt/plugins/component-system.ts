import {componentSystemPlugin} from '@/components/system'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(componentSystemPlugin)
})
