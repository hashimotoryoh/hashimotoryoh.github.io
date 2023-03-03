<script setup lang="ts">
import links from '../assets/json/sns.json'
import media from '../assets/json/instagram_media.json'

const instagramLink = links.find(i => i.name === 'Instagram')
</script>

<template>
  <div class="container mx-auto">
    <div class="mb-8 text-center">
      <img
        src="/img/profile.jpg"
        srcset="/img/profile.jpg 1x, /img/profile@2x.jpg 2x, /img/profile@3x.jpg 3x"
        alt="Ryoh Hashimoto"
        width="96"
        height="96"
        class="mx-auto my-4 border rounded-full pointer-events-none"
      >
      <h1 class="h1 font-bold text-xl">
        Ryoh Hashimoto
      </h1>
      <p>
        I'm in Vancouver on working holiday! &#127464;&#127462;
      </p>
    </div>

    <ul class="flex justify-center space-x-8 mx-auto my-2">
      <li
        v-for="link in links"
        :key="link.name"
      >
        <a
          :href="link.url"
          :title="link.name"
          target="_blank"
          rel="nofollow"
          class="display rounded text-slate-400 border-slate-400 hover:text-inherit hover:border-black"
        >
          <template v-if="link.content_type === 'text'">{{ link.content }}</template>
          <img
            v-else-if="link.content_type === 'img'"
            :src="link.content"
            :alt="link.name"
            class="w-9 border border-inherit rounded-full"
          >
          <object
            v-else-if="link.content_type === 'svg'"
            type="image/svg+xml"
            :data="link.content"
            :alt="link.name"
            class="w-9 border border-inherit rounded-full"
          />
          <Icon
            v-else-if="link.content_type === 'mdi'"
            :icon="link.content"
            class="text-4xl"
          />
          <template v-else>{{ link.content }}</template>
        </a>
      </li>
    </ul>

    <hr class="my-8 mx-1">

    <div class="max-w-screen-md mx-auto my-8 px-1">
      <ul class="grid grid-cols-3 gap-1">
        <li
          v-for="theMedia in media"
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
              <Icon icon="mdi:checkbox-multiple-blank" />
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
        >See more...</a>
      </div>
    </div>
  </div>
</template>
