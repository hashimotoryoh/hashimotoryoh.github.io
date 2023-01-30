import { createRouter, createWebHistory } from 'vue-router'
import config from './config'
import pages from 'virtual:generated-pages'

const router = createRouter({
  history: createWebHistory(config.app.base_url),
  routes: pages,
})

export default router
