<script setup lang="ts">
import links from '@/assets/json/sns.json'
import InlineSvg from 'vue-inline-svg'
import InstagramFeed from '@/components/InstagramFeed.vue'

defineComponent({
  InlineSvg
})
</script>

<template>
  <div class="container mx-auto">
    <div class="mb-8 text-center">
      <img
        src="/img/profile.jpg"
        srcset="/img/profile.jpg 1x, /img/profile@2x.jpg 2x, /img/profile@3x.jpg 3x"
        :alt="$t('pages.index.fullname')"
        width="96"
        height="96"
        class="mx-auto my-4 border rounded-full pointer-events-none dark:border-slate-800"
      >
      <h1 class="h1 font-bold text-xl">
        {{ $t('pages.index.fullname') }}
      </h1>
      <p>
        {{ $t('pages.index.caption') }}
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
          class="display rounded text-slate-400 border-slate-400 hover:text-inherit hover:border-black dark:hover:border-light"
        >
          <template v-if="link.content_type === 'text'">{{ link.content }}</template>
          <img
            v-else-if="link.content_type === 'img'"
            :src="link.content"
            :alt="link.name"
            class="w-9 h-9 border border-inherit rounded-full"
          >
          <InlineSvg
            v-else-if="link.content_type === 'svg'"
            :src="link.content"
            class="w-9 h-9 border border-inherit rounded-full"
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
      <InstagramFeed />
    </div>
  </div>
</template>
