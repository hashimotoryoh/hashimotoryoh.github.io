import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import { VitePWA } from 'vite-plugin-pwa'
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite"

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
    VitePWA({
      manifest: {
        id: 'ryohs-link-in-bio',
        name: 'Ryoh\'s Link in Bio',
        short_name: 'Ryoh\'s LiB',
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
    VueI18nPlugin({
      include: `${__dirname}/src/assets/locales/**`,
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@/',
        replacement: `${__dirname}/src/`,
      },
    ],
  },
})
