import AutoImport from 'unplugin-auto-import/vite'

export default AutoImport({
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
  dts: 'src/auto-imports.d.ts',
})
