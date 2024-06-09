import './assets/styles/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import plugins from './plugins'

import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'
import lara from '@/presets/lara'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue, {
  unstyled: true,
  pt: lara
})
app.use(router)
app.use(plugins)

app.mount('#app')
