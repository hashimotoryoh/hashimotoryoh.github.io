<script setup lang="ts">
import { useDarkMode } from '@/classes/utilities/DarkModeUtil'
import { useLocale } from '@/classes/utilities/LocaleUtil'
import config from '@/config'

const { switchDarkMode } = useDarkMode()
const { switchLocale } = useLocale()

const localeMenuVisible = ref<boolean>(false)
const shareMenuVisible = ref<boolean>(false)

const messageForCopy = ref<string>('Copy')
function copyURL() {
  navigator.clipboard.writeText(config.app.base_url)
  messageForCopy.value = 'Copied'
  setTimeout(() => {
    messageForCopy.value = 'Copy'
  }, 3000);
}
</script>

<template>
  <header>
    <div class="container mx-auto px-1 py-2 md:px-0">
      <ul class="flex justify-end space-x-1">
        <li>
          <button
            class="p-3 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800"
            @click="switchDarkMode"
          >
            <Icon
              icon="mdi:theme-light-dark"
              class="text-2xl font-thin text-slate-400"
            />
          </button>
        </li>
        <li>
          <button
            class="p-3 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800"
            @click="localeMenuVisible = true"
          >
            <Icon
              icon="mdi:translate-variant"
              class="text-2xl font-thin text-slate-400"
            />
          </button>
        </li>
        <li>
          <button
            class="p-3 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800"
            @click="shareMenuVisible = true"
          >
            <Icon
              icon="material-symbols:ios-share"
              class="text-2xl font-thin text-slate-400"
            />
          </button>
        </li>
      </ul>
    </div>
  </header>

  <!-- 言語メニュー -->
  <div
    v-if="localeMenuVisible"
    class="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-50"
  >
    <div class="container mx-auto p-8 h-full">
      <div class="flex justify-center items-center h-full">
        <div class="relative w-full p-4 bg-white rounded-lg md:w-auto md:max-w-screen-sm md:px-12 dark:bg-dark">
          <h5 class="h5 text-center font-bold">
            {{ $t('components.GlobalHeader.choose_your_locale') }}
          </h5>
          <button
            class="absolute top-2 right-2 p-2 rounded hover:bg-slate-200 dark:hover:bg-slate-800"
            @click="localeMenuVisible = false"
          >
            <Icon
              icon="material-symbols:close"
              class="text-xl font-thin text-slate-400"
            />
          </button>

          <ul class="text-center my-4">
            <li
              v-for="locale in $i18n.availableLocales"
              :key="locale"
              class="flex justify-center items-center space-x-2 space-y-1"
              @click="switchLocale(locale)"
            >
              <Icon
                v-if="$i18n.locale === locale"
                icon="mdi:check-bold"
                class="text-slate-400"
              />
              <span
                v-else
                class="display w-[1em] h-[1em]"
              />
              <button class="px-3 py-2 rounded hover:bg-slate-200 dark:hover:bg-slate-800">
                {{ $t(`locale.${locale}`) }}
              </button>
              <span class="display w-[1em] h-[1em]" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- 共有メニュー -->
  <div
    v-if="shareMenuVisible"
    class="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-50"
  >
    <div class="container mx-auto p-8 h-full">
      <div class="flex justify-center items-center h-full">
        <div class="relative w-full p-4 bg-white rounded-lg md:w-auto md:max-w-screen-sm dark:bg-dark">
          <h5 class="h5 text-center font-bold">
            {{ $t('components.GlobalHeader.share_this_page') }}
          </h5>
          <button
            class="absolute top-2 right-2 p-2 rounded hover:bg-slate-200 dark:hover:bg-slate-800"
            @click="shareMenuVisible = false"
          >
            <Icon
              icon="material-symbols:close"
              class="text-xl font-thin text-slate-400"
            />
          </button>
          <img
            src="/img/qr.png"
            srcset="/img/qr.png 1x, /img/qr@2x.png 2x, /img/qr@3x.png 3x"
            :alt="$t('global.qr_code')"
            class="mx-auto my-8 rounded dark:x-invert"
          >
          <div
            class="flex space-x-2 px-2 py-4 border rounded cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-800"
            @click="copyURL"
          >
            <div class="grow min-w-0 md:min-w-[12rem]">
              <p class="whitespace-nowrap overflow-hidden text-ellipsis">
                {{ config.app.base_url }}
              </p>
            </div>
            <div class="grow-0 px-2">
              <p class="text-center text-green-400 font-bold">
                {{ messageForCopy }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
