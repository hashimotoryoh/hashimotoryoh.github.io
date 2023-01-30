import { createApp } from 'vue'
import './assets/styles/tailwind.scss'
import App from './App.vue'
import router from './router'
import { Icon } from '@iconify/vue'

createApp(App)
  .use(router)
  .component('Icon', Icon)
  .mount('#app')
