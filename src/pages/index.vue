<script setup lang="ts">
import Link from '../types/Link'
import config from '../config'

const links: Link[] = [
  {
    url: 'mailto:' + config.profile.email,
    icon: 'mdi:email',
  },
  {
    url: config.sns.facebook_url,
    icon: 'mdi:facebook',
  },
  {
    url: config.sns.instagram_url,
    icon: 'mdi:instagram',
  },
  {
    url: config.sns.twitter_url,
    icon: 'mdi:twitter',
  },
  {
    url: config.sns.note_url,
    icon: '/img/note/square.svg',
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
        <a :href="link.url" target="_blank" rel="nofollow" class="display text-slate-400 rounded hover:text-black">
          <img v-if="link.icon.startsWith('http') || link.icon.startsWith('/')" :src="link.icon" class="w-9 border border-black rounded-full" />
          <Icon v-else :icon="link.icon" class="text-4xl" />
        </a>
      </li>
    </ul>
    <hr class="my-8 mx-2">
  </div>
</template>
