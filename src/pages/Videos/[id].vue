<script setup lang="ts">
import { pb } from '@/backend'
import { projets_videoId } from '@/backend';
const props = defineProps<{
  id: string,
}>();

const projets_videoInfo = await projets_videoId(props.id);
const img = projets_videoInfo.cover
const urlImg = img && pb.getFileUrl(projets_videoInfo, img, { thumb: '100x250' })
const video = projets_videoInfo.url

import { formatDate } from '@/helper'


import { useHead } from '@unhead/vue'
useHead({
  title: `${projets_videoInfo.titre}`
})


</script>

<template>
  <h2>{{ projets_videoInfo.titre }}</h2>
  <div class="flex items-center justify-center max-h-80vh">
    <div class="aspect-w-16 aspect-h-9">
      <video controls class="object-cover w-full h-full">
        <source :src="(video)" type="video/mp4">
        Votre navigateur ne prend pas en charge la balise vidéo.
      </video>
    </div>
  </div>

  <div class="lg:grid lg:grid-cols-2">
    <p>Rôle: {{ projets_videoInfo.role }}</p>
    <div class="lg:text-right">
      <p>{{ formatDate(projets_videoInfo.date) }}</p>
      <p>{{ projets_videoInfo.categorie }}</p>
    </div>
  </div>

  <h2 class="mt-12 lg:mt-48">Le projet</h2>
  <div class="lg:columns lg:columns-2 lg:gap-20">
    <p>{{ projets_videoInfo.context }} </p>
  </div>

  <h2 class="mt-12 lg:mt-48">Sa Réalisation</h2>
  <div class="lg:columns lg:columns-2 lg:gap-20">
    <p>{{ projets_videoInfo.result }} </p>
  </div>
</template>




