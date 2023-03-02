<script setup lang="ts">
import { useFetchMedia } from '../classes/InstagramMedia'

const { loading, media, fetchMedia } = useFetchMedia()
const mediaToShow = computed(() => {
  const filtered = media.value?.filter(m => m.media_type === 'IMAGE' || m.media_type === 'CAROUSEL_ALBUM')
  const sliced = filtered?.slice(0, 9)
  return sliced
})

onMounted(() => {
  fetchMedia()
})
</script>

<template>
  <p v-if="loading">Loading...</p>
  <div else>
    <ul class="grid grid-cols-3 gap-1">
      <li v-for="theMedia in mediaToShow" class="aspect-square">
        <a :href="theMedia.permalink.toString()" target="_blank">
          <img :src="theMedia.media_url.toString()" :alt="theMedia.caption" class="w-full h-full object-cover rounded">
        </a>
      </li>
    </ul>
  </div>
</template>
