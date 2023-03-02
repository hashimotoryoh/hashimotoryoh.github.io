<script setup lang="ts">
import GlobalHeader from './components/GlobalHeader.vue'
import GlobalFooter from './components/GlobalFooter.vue'
import config from './config'

useHead({
  title: config.app.app_name,
})
</script>

<template>
  <GlobalHeader />
  <main>
    <router-view />
  </main>
  <GlobalFooter />
</template>
