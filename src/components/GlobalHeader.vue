<script setup lang="ts">
import config from '../config'

const shareMenuVisible = ref<boolean>(false)

const messageForCopy = ref<string>('Copy')
function copyURL()
{
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
      <ul class="flex justify-end">
        <li
          class="p-4 rounded-full cursor-pointer hover:bg-slate-200"
          @click="shareMenuVisible = true"
        >
          <Icon
            icon="material-symbols:ios-share"
            class="text-2xl font-thin text-slate-400"
          />
        </li>
      </ul>
    </div>
  </header>

  <div
    v-if="shareMenuVisible"
    class="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-50"
  >
    <div class="container mx-auto p-8 h-full">
      <div class="flex justify-center items-center h-full">
        <div class="relative max-w-full p-4 bg-white rounded-lg">
          <h5 class="h5 text-center font-bold">
            Share this page
          </h5>
          <div
            class="absolute top-2 right-2 p-2 cursor-pointer rounded hover:bg-slate-200"
            @click="shareMenuVisible = false"
          >
            <Icon
              icon="material-symbols:close"
              class="text-xl font-thin text-slate-400"
            />
          </div>
          <img
            src="/img/qr.png"
            srcset="/img/qr.png 1x, /img/qr@2x.png 2x, /img/qr@3x.png 3x"
            alt="QR Code"
            class="mx-auto my-8"
          >
          <div
            class="flex space-x-2 px-2 py-4 border rounded cursor-pointer hover:bg-slate-200"
            @click="copyURL"
          >
            <div class="grow min-w-0">
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
