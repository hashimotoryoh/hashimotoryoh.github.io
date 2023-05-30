import { defineConfig } from 'vite'
import Plugins from './vite_config/_plugins'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: Plugins,
  resolve: {
    alias: [
      {
        find: '@/',
        replacement: `${__dirname}/src/`,
      },
    ],
  },
})
