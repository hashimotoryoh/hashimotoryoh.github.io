import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite"
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages(),
    AutoImport({
      include: [
        /\.ts$/,
        /\.tsx$/,
        /\.js$/,
        /\.jsx$/,
        /\.vue$/
      ],
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/head',
      ],
      dts: './src/auto-imports.d.ts',
    }),
    VueI18nPlugin({
      include: '/Users/ryo.hashimoto/Developer/hashimotoryoh/hashimotoryoh.github.io/src/assets/locales/**',
    }),
  ],
})
