<script setup lang="ts">
import FooterPage from '@/components/FooterPage.vue'
import HeaderPage from '@/components/HeaderPage.vue'
import { RouterLink, RouterView } from 'vue-router' 
</script>

<template>
  <HeaderPage />
  <main class="bg-gray-900 flex pt-28 px-5 flex-col min-h-screen lg:pt-16 lg:px-40">
    <Suspense>
      <RouterView />
    </Suspense>
  </main>
  <FooterPage />
</template>
/