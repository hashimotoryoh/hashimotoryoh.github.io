<script setup lang="ts">
import links from '../assets/json/sns.json'
</script>

<template>
  <div class="container mx-auto">
    <div class="mb-8 text-center">
      <img src="/img/profile.jpg" srcset="/img/profile.jpg 1x, /img/profile@2x.jpg 2x, /img/profile@3x.jpg 3x" alt="Ryoh Hashimoto" width="96" height="96" class="mx-auto my-4 border rounded-full" />
      <h1 class="h1 font-bold text-xl">Ryoh Hashimoto</h1>
      <p>
        I'm in Vancouver on working holiday! &#127464;&#127462;
      </p>
    </div>

    <ul class="flex justify-center space-x-8 mx-auto my-2">
      <li v-for="link in links">
        <a :href="link.url" :title="link.name" target="_blank" rel="nofollow" class="display rounded slate hover:filter-none">
          <img v-if="link.icon.startsWith('http') || link.icon.startsWith('/')" :src="link.icon" :alt="link.name" class="w-9 border border-black rounded-full" />
          <Icon v-else :icon="link.icon" class="text-4xl" />
        </a>
      </li>
    </ul>

    <hr class="my-8 mx-2">
    <div class="max-w-screen-md mx-auto my-8 px-2">
    </div>
  </div>
</template>
