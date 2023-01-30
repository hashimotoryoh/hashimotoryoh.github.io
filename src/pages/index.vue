<script setup lang="ts">
import Link from '../types/Link'
import config from '../config'

const links: Link[] = [
  {
    url: 'mailto:' + config.profile.email,
    icon: 'mdi:email',
  },
  {
    url: config.profile.facebook_url,
    icon: 'mdi:facebook',
  },
  {
    url: config.profile.instagram_url,
    icon: 'mdi:instagram',
  },
  {
    url: config.profile.twitter_url,
    icon: 'mdi:twitter',
  },
]
</script>

<template>
  <div class="container mx-auto py-4">
    <div class="mb-8 text-center">
      <img src="/img/profile.jpg" srcset="/img/profile.jpg 1x, /img/profile@2x.jpg 2x, /img/profile@3x.jpg 3x" alt="Ryo Hashimoto" width="96" height="96" class="mx-auto mb-4 border rounded-full" />
      <h1 class="h1 font-bold text-xl">Ryo Hashimoto</h1>
    </div>
    <ul class="flex justify-center space-x-8 mx-auto my-2">
      <li v-for="link in links">
        <a :href="link.url" target="_blank" rel="nofollow" class="display text-slate-400 hover:text-black">
          <Icon :icon="link.icon" class="text-4xl" />
        </a>
      </li>
    </ul>
    <hr class="my-8 mx-2">
  </div>
</template>
