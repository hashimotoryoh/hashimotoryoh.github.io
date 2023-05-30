import vue from '@vitejs/plugin-vue'
import AutoImport from './unplugin-auto-import'
import Pages from './vite-plugin-pages'
import VitePWA from './vite-plugin-pwa'
import VueI18nPlugin from "./unplugin-vue-i18n"

export default [
  vue(),
  AutoImport,
  Pages,
  VitePWA,
  VueI18nPlugin
]
