<script setup lang="ts">
import { useFetchMedia } from '../classes/InstagramMedia'

const { loading, media, fetchMedia } = useFetchMedia()

onMounted(() => {
  fetchMedia()
})
</script>

<template>
  <p v-if="loading">Loading...</p>
  <div else>
    {{ media }}
  </div>
</template>
