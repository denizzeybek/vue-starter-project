import './assets/styles/index.css'
import { createApp } from 'vue'
import plugins from './plugins'
import PrimeVue from 'primevue/config';
import Lara from '@/presets/lara'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(plugins)
app.use(PrimeVue, {
    unstyled: true,
    pt: Lara
});
app.use(router)

app.mount('#app')
