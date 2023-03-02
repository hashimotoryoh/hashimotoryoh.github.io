import { createApp } from 'vue'
import App from './App.vue'
import head from './classes/setup/head'
import router from './classes/setup/router'
import './assets/styles/app.scss'
import { Icon } from '@iconify/vue'

createApp(App)
  .use(head)
  .use(router)
  .component('Icon', Icon)
  .mount('#app')
