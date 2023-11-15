import {defineSetupVue3} from '@histoire/plugin-vue'
import {createPinia} from 'pinia'
import './tailwind.css'

export const setupVue3 = defineSetupVue3(({app}) => {
  const pinia = createPinia()

  app.use(pinia)
})
