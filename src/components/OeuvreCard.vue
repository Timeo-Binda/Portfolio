<script setup lang="ts">
import { pb } from '@/backend';
import { projets_videoId } from '@/backend';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const props = defineProps<{
  id: string,
}>();

const projets_videoInfo = await projets_videoId(props.id);
const img = projets_videoInfo.cover;
const urlImg = img && pb.getFileUrl(projets_videoInfo, img, { thumb: '100x250' });

import { useHead } from '@unhead/vue';
useHead({
  title: `${projets_videoInfo.titre}`
});
</script>


<template>
  <div class="relative group overflow-hidden pointer-events-auto">
     <img class="object-cover transition-transform aspect-video transform group-hover:scale-100 group-hover:brightness-75 group-hover:blur-sm " :src="urlImg" alt="">
     <p class="text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">{{ projets_videoInfo.titre }}</p>
  </div>
</template>
