import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import { createI18n } from 'vue-i18n'
import FlagIcon from 'vue-flag-icon'

import fr from './locales/fr.json'
import en from './locales/en.json'

import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapVue3 from 'bootstrap-vue-3'

const i18n = createI18n({
  locale: localStorage.getItem('language') || 'fr',
  fallbackLocale: 'fr',
  messages: {
    fr,
    en
  }
})

const app = createApp(App)

app.use(router)
app.use(BootstrapVue3)
app.use(i18n)
app.use(FlagIcon)
app.mount('#app')
