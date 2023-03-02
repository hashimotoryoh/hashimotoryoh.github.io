<script setup lang="ts">
import SnsLinks from '../components/SnsLinks.vue'
import InstagramMedia from '../components/InstagramMedia.vue'
import config from '../config'
</script>

<template>
  <div class="container mx-auto py-4">
    <div class="mb-8 text-center">
      <img src="/img/profile.jpg" srcset="/img/profile.jpg 1x, /img/profile@2x.jpg 2x, /img/profile@3x.jpg 3x" alt="Ryoh Hashimoto" width="96" height="96" class="mx-auto mb-4 border rounded-full" />
      <h1 class="h1 font-bold text-xl">Ryoh Hashimoto</h1>
    </div>
    <SnsLinks />
    <hr class="my-8 mx-2">
    <div class="max-w-screen-md mx-auto px-2">
      <InstagramMedia />
      <div class="my-2 text-center">
        <a :href="config.sns.instagram_url" target="_blank" class="text-slate-400">See more...</a>
      </div>
    </div>
  </div>
</template>
