<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue'
import GlobalFooter from '@/components/GlobalFooter.vue'
import config from '@/config'

useHead({
  title: config.app.app_name,
})

// システムテーマによってダークモードにする
const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
if (isDarkMode) {
  const htmlElem = document.getElementsByTagName('html')[0]
  htmlElem.classList.add('dark')
}
</script>

<template>
  <GlobalHeader />
  <main>
    <router-view />
  </main>
  <GlobalFooter />
</template>
