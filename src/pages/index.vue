<script setup lang="ts">
import Link from '../types/Link'

const links: Link[] = [
  {
    url: import.meta.env.LINK_FACEBOOK,
    icon: 'mdi:facebook',
  },
  {
    url: import.meta.env.LINK_INSTAGRAM,
    icon: 'mdi:instagram',
  },
  {
    url: import.meta.env.LINK_TWITTER,
    icon: 'mdi:twitter',
  },
]
</script>

<template>
  <div class="container mx-auto py-4">
    <div class="text-center">
      <!-- <img src="/img/profile.png" srcset="/img/profile.png 1x, /img/profile@2x.png 2x, /img/profile@3x.png 3x" alt="Ryo Hashimoto" /> -->
      <h1 class="h1 font-bold text-xl">Ryo Hashimoto</h1>
    </div>
    <ul class="flex justify-center space-x-4 mx-auto my-2">
      <li v-for="link in links" >
        <a :href="link.url" target="_blank" rel="nofollow">
          <Icon :icon="link.icon" class="text-4xl" />
        </a>
      </li>
    </ul>
  </div>
</template>
