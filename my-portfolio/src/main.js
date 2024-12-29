import { createApp } from 'vue'
import { createBootstrap } from 'bootstrap-vue-next'
import router from './utils/router'
// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import './assets/custom.scss'

import App from './App.vue'

const app = createApp(App)
app.use(createBootstrap()) // Important
app.use(router)
app.mount('#app')
