import { createApp } from 'vue'
import App from './App.vue'
import head from './classes/setup/head'
import router from './classes/setup/router'
import i18n from './classes/setup/i18n'
import './assets/styles/app.scss'
import { Icon } from '@iconify/vue'

createApp(App)
  .use(head)
  .use(router)
  .use(i18n)
  .component('Icon', Icon)
  .mount('#app')
