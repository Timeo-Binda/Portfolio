<script setup lang="ts">
import { pb } from '@/backend';
import { projets_videoId } from '@/backend';
import { defineProps } from 'vue';
import { formatDate } from '@/helper';

const props = defineProps<{
  id: string;
}>();

const projets_videoInfo = await projets_videoId(props.id);
const video = projets_videoInfo.url;

const imagebonus = projets_videoInfo.photo_bonus;
console.log(imagebonus);
const urlImagesBonus = imagebonus.map(nomImage => {
  return pb.getFileUrl(projets_videoInfo, nomImage, { thumb: '100x250' });
});
console.log(urlImagesBonus);

function isYouTubeLink(link: string): boolean {
  return link.includes('youtube.com') || link.includes('youtu.be');
}

function getYouTubeEmbedLink(link: string): string | null {
  const videoId = extractYouTubeVideoId(link);
  return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
}

function extractYouTubeVideoId(link: string): string | null {
  const url = new URL(link);
  if (url.hostname === 'youtu.be') {
    return url.pathname.substring(1);
  } else if (url.hostname === 'www.youtube.com') {
    const searchParams = new URLSearchParams(url.search);
    return searchParams.get('v') || null;
  }
  return null;
}


const images = Array.isArray(projets_videoInfo.photo_bonus) ? projets_videoInfo.photo_bonus : [];

// Créez des URL pour chaque image
const imageDetails = images.map(img => ({
  url: img ? pb.getFileUrl(props, img, { thumb: '100x250' }) : '/image-not-found.png',
  description: img ? img.description : 'Description par défaut',
}));

// Accédez directement à des indices spécifiques du tableau
const firstImage = imageDetails[0] || { url: '/image-not-found.png', description: 'Description par défaut', alt: 'image' };
const secondImage = imageDetails[1] || { url: '/image-not-found.png', description: 'Description par défaut' };

</script>

<template>
  <h2 class="mt-8">{{ projets_videoInfo.titre }}</h2>

  <div class="flex items-center justify-center w-full h-full pt-2 pb-4">
    <div v-if="isYouTubeLink(video)" class="aspect-video w-full">
      <iframe :src="getYouTubeEmbedLink(video)?.toString()" frameborder="0" allowfullscreen
        class="w-full h-full object-cover"></iframe>
    </div>
    <div v-else class="aspect-w-16 aspect-h-9">
      <video controls class=" w-full max-h-screen">
        <source :src="video" type="video/mp4">
        Votre navigateur ne prend pas en charge la balise vidéo.
      </video>
    </div>
  </div>




  <div class="lg:grid lg:grid-cols-2">
    <p>Rôle: {{ projets_videoInfo.role }}</p>
    <div class="lg:text-right">
      <p class="capitalize">{{ formatDate(projets_videoInfo.date) }}</p>
      <p class="capitalize">{{ projets_videoInfo.categorie }}</p>
    </div>
  </div>


  <h2 class="mt-24 lg:mt-48">Le projet</h2>

  <div class="mt-4 lg:mt-6 grid lg:grid-cols-2 ">
    <p>{{ projets_videoInfo.projet }} </p>
    <div>
      <img class="mt-6 lg:mt-0 lg:pl-20 aspect-[5/3] object-cover" :src="urlImagesBonus[0]" >
    </div>
  </div>

  <h2 class="mt-24 lg:mt-48">Sa Réalisation</h2>

  <div class="mt-4 lg:mt-6 grid lg:grid-cols-2 ">
    <p>{{ projets_videoInfo.realisation }} </p>
    <div>
      <img class="mt-6 lg:mt-0 lg:pl-20 aspect-[5/3] object-cover" :src="urlImagesBonus[1]" >
    </div>
  </div>


  <div class="mt-4 lg:mt-12 grid lg:grid-cols-2 gap-4 ">
    <div v-for="(url, index) in urlImagesBonus.slice(2)" :key="index" class="lg:col-span-1">
      <img :src="url" :alt="'Image bonus ' + (index + 1)" class="w-full h-full aspect-[5/3] object-cover ">
    </div>
  </div>





</template>




