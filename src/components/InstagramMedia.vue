<script setup lang="ts">
import { useFetchMedia } from '../classes/InstagramMedia'

const { loading, media, fetchMedia } = useFetchMedia()
const filteredMedia = computed(() => media.value?.filter(m => m.media_type === 'IMAGE' || m.media_type === 'CAROUSEL_ALBUM'))

onMounted(() => {
  fetchMedia()
})
</script>

<template>
  <p v-if="loading">Loading...</p>
  <div else>
    <ul class="grid grid-cols-3 gap-1">
      <li v-for="theMedia in filteredMedia" class="">
        <a :href="theMedia.permalink.toString()" target="_blank" class="block">
          <img :src="theMedia.media_url.toString()" :alt="theMedia.caption" class="rounded">
        </a>
      </li>
    </ul>
  </div>
</template>
