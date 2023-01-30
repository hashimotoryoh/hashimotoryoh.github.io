import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'hashimotoryoh.github.io',
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
      ],
      dts: './src/auto-imports.d.ts',
    }),
  ],
})
