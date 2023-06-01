import { createApp } from 'vue'
import App from '@/App.vue'
import head from '@/plugins/vueuse-head'
import router from '@/plugins/vue-router'
import i18n from '@/plugins/vue-i18n'
import VueCookies from 'vue3-cookies'
import { faComponentName, FontAwesomeIcon } from '@/plugins/fontawesome'
import '@/assets/styles/app.scss'

createApp(App)
  .use(head)
  .use(router)
  .use(i18n)
  .use(VueCookies, {
    secure: true,
  })
  .component(faComponentName, FontAwesomeIcon)
  .mount('#app')
