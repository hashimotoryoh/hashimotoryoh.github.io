<script setup lang="ts">
import links from '@/assets/json/sns.json'
import media from '@/assets/json/instagram_media.json'

const NUM_OF_MEDIA_TO_VIEW = 9

const mediaToView = media.slice(0, NUM_OF_MEDIA_TO_VIEW)
const instagramLink = links.find(i => i.name === 'Instagram')
</script>

<template>
  <ul class="grid grid-cols-3 gap-1">
    <li
      v-for="theMedia in mediaToView"
      :key="theMedia.id"
      class="aspect-square grayscale relative"
    >
      <a
        :href="theMedia.permalink.toString()"
        target="_blank"
      >
        <img
          :src="theMedia.media_url.toString()"
          :alt="theMedia.caption"
          class="w-full h-full object-cover rounded pointer-events-none"
        >
        <span
          v-if="theMedia.media_type === 'CAROUSEL_ALBUM'"
          class="absolute top-2 right-2 -rotate-90 text-white text-lg"
        >
          <fai icon="fas fa-images" />
        </span>
      </a>
    </li>
  </ul>
  <div class="my-2 text-center">
    <a
      v-if="instagramLink"
      :href="instagramLink?.url"
      target="_blank"
      class="text-slate-400"
    >
      {{ $t('pages.index.see_more') }}
    </a>
  </div>
</template>
