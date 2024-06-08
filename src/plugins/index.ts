import type { App } from 'vue'

import globalComponents from './globalComponents'
import pinia from './pinia'

export default {
  install(app: App) {
    app.use(pinia)
    app.use(globalComponents)
  }
}
