import {defineSetupVue3} from '@histoire/plugin-vue'
import {createPinia} from 'pinia'

export const setupVue3 = defineSetupVue3(({app}) => {
  const pinia = createPinia()

  app.use(pinia)
})
