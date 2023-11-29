<script setup lang="ts">
import OeuvreCard from '@/components/OeuvreCard.vue'
import { RouterLink, RouterView } from 'vue-router'
import { useHead } from '@unhead/vue'
useHead({
  title: 'Accuei LeafArtisans'
})
import { allprojets_video } from '@/backend'

const projets_videoList = await allprojets_video();
</script>

<template>
    <main>
    <ul>
      <li v-for="projets_video in projets_videoList" :key="projets_video.id">
        <RouterLink :to="{ name: 'Videos-id', params: { id: projets_video.id } }" class="text-red-700 hover:text-red-400">
          <OeuvreCard :key="projets_video.id" v-bind="{ ...projets_video }" />
        </RouterLink>
      </li>
    </ul>
    </main>
</template>