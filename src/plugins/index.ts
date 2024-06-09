import type { App } from 'vue'

import pinia from './pinia'

export default {
  install(app: App) {
    app.use(pinia)
  }
}
