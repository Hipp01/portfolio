import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapVue3 from 'bootstrap-vue-3'

const app = createApp(App)

app.use(router)
app.use(BootstrapVue3)
app.mount('#app')
