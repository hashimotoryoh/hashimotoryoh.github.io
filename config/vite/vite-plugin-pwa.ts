import { VitePWA } from 'vite-plugin-pwa'

export default VitePWA({
  devOptions: {
    enabled: process.env.NODE_ENV === 'development',
  },
  manifest: {
    id: process.env.npm_package_name,
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
})
