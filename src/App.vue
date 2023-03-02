<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import config from './config'

useHead({
  title: config.app.app_name,
})
</script>

<template>
  <Header />
  <main>
    <router-view />
  </main>
  <Footer />
</template>
