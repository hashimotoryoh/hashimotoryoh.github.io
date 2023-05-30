import { VitePWA } from 'vite-plugin-pwa'

export default VitePWA({
  devOptions: {
    enabled: true,
  },
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
})
