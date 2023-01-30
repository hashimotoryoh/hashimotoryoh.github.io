<script setup lang="ts">
import config from '../config'
</script>

<template>
  <footer class="fixed bottom-0 w-full">
    <div class="container mx-auto px-1 py-2 text-center md:px-0">
      <p class="mb-0">
        <small>&copy; 2023 Ryo Hashimoto</small>
      </p>
      <p class="text-muted">
        <small>{{ config.app.app_name }} v{{ config.app.app_version }}</small>
      </p>
    </div>
  </footer>
</template>
