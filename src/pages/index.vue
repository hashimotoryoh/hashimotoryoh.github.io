<script setup lang="ts">
import links from '@/assets/json/links.json'
</script>

<template>
  <div class="container mx-auto">
    <section class="mb-8 text-center">
      <img
        src="/img/profile.png"
        srcset="/img/profile.png 1x, /img/profile@2x.png 2x, /img/profile@3x.png 3x"
        :alt="$t('pages.index.fullname')"
        width="96"
        height="96"
        class="mx-auto my-4 border rounded-full pointer-events-none dark:border-slate-800"
      >
      <h1 class="h1 font-bold text-xl">
        {{ $t('pages.index.fullname') }}
      </h1>
    </section>

    <section class="max-w-screen-md mx-auto px-2">
      <ul class="flex flex-wrap space-y-4">
        <li
          v-for="link in links"
          :key="link.name"
          class="w-full"
        >
          <a
            :href="link.uri"
            :title="$t(link.name)"
            rel="nofollow"
            target="_blank"
            class="block border border-slate-400 rounded-full px-6 py-3 text-slate-400 hover:border-black dark:hover:border-light hover:text-inherit"
          >
            <div class="flex items-center relative text-lg">
              <fai
                v-if="link.fai"
                :icon="link.fai"
                class="absolute left-0"
              />
              <span class="w-full text-center font-bold">{{ $t(link.name) }}</span>
            </div>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>
