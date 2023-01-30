import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/tailwind.scss'
import { Icon } from '@iconify/vue'

createApp(App)
  .use(router)
  .component('Icon', Icon)
  .mount('#app')
