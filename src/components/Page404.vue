<script setup lang="ts">
import { useHead } from '@unhead/vue'
useHead({
  title: 'Page not found'
})
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div class="max-w-md w-full p-4 text-center">
      <h1 class="text-4xl font-bold mb-4">404 - Page Introuvable</h1>
      <p class="mb-4">La page que vous recherchez a peut-être été supprimée ou est temporairement indisponible.
      </p>
      <a class="underline" href="/">Retourner à l'accueil</a>
    </div>
  </div>
</template>
