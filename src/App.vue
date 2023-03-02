<script setup lang="ts">
import GlobalHeader from './components/GlobalHeader.vue'
import GlobalFooter from './components/GlobalFooter.vue'
import config from './config'

useHead({
  title: config.app.app_name,
  meta: [
    {
      name: 'og:title',
      content: config.app.app_name,
    },
    {
      name: 'og:url',
      content: config.app.base_url,
    },
    {
      name: 'og:image',
      content: config.app.base_url + '/og-image.png'
    }
  ]
})
</script>

<template>
  <GlobalHeader />
  <main>
    <router-view />
  </main>
  <GlobalFooter />
</template>
