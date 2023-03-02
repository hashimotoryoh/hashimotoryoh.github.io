import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'

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
        '@vueuse/head',
      ],
      dts: './src/auto-imports.d.ts',
    }),
  ],
})
