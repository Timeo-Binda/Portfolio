<script setup lang="ts">
import OeuvreCard from '@/components/OeuvreCard.vue'
import { RouterLink } from 'vue-router'
import { useHead } from '@unhead/vue'
import { allprojets_video } from '@/backend'
import { ref, onMounted } from 'vue'
import mute from '../components/icons/mute.vue';
import unmute from '../components/icons/unmute.vue';

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

useHead({
  title: 'Portfolio BINDA'
})

const projets_videoList = await allprojets_video();
const cardContainer = ref<HTMLElement | null>(null)
const isMuted = ref(true)

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  if (cardContainer.value && cardContainer.value.children) {
    gsap.from(cardContainer.value.children, {
      opacity: 0,
      y: 75,
      stagger: 0.2,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: cardContainer.value,
        start: 'top 70%',
        end: 'bottom 20%',
        scrub: 1
      }
    })
  }
})


</script>

<template>
  <main>
    <div class="relative">
      <video id="videoPlayer" autoplay :muted="isMuted" loop class="object-cover w-full h-full -px-40">
        

        <!-- Utilise un lecteur vidéo en fonction de l'orientation -->
        <source src="https://res.cloudinary.com/db9tou4ck/video/upload/v1711477674/p7gllkpn5lddeiekuhyq.mp4"
          type="video/mp4" media="(orientation: landscape)">
        <source src="https://res.cloudinary.com/db9tou4ck/video/upload/v1711477764/gcepzrifijba7hcfupt2.mp4"
          type="video/mp4" media="(orientation: portrait)">
        Your browser does not support the video tag.
      </video>
      <div class="absolute bottom-4 right-4 flex items-center space-x-2 ">
        <p class="text-white text-xs lg:text-sm">showreel 2023</p>
        <div>
          <unmute class="w-6 h-6 cursor-pointer" @click="isMuted = true" v-if="!isMuted" />
          <mute class="w-6 h-6 cursor-pointer" @click="isMuted = false" v-else />
        </div>
      </div>
      <div class="absolute top-0 left-0 p-4">
        <h2 class="text-white text-6xl lg:text-9xl">Timéo BINDA</h2>
        <h3 class="text-white lg:text-xl lg:ml-4 lg:-mt-4">Filmmaker / Designer</h3>
      </div>
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center ">
        <svg class="w-8 h-8 text-white animate-bounce" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>



    <h2 class="pt-32">Quelques projets</h2>
    <ul class="grid grid-cols-1 lg:grid-cols-2 gap-4" ref="cardContainer">
      <li v-for="(projets_video, index) in projets_videoList.slice(0, 6)" :key="projets_video.id">
        <RouterLink :to="{ name: 'Videos-id', params: { id: projets_video.id } }"
          class="text-red-700 hover:text-red-400">
          <OeuvreCard :key="projets_video.id" v-bind="{ ...projets_video }" />
        </RouterLink>
      </li>
    </ul>

    <div class="grid grid-cols-2 gap-4">
      <div class="flex justify-center mt-8">
        <RouterLink class="menu-link" to="/videos">
          <div
            class="w-80% border border-white py-2 px-4 text-white text-center transition-all duration-300 hover:bg-white hover:text-black">
            Plus de Vidéos
          </div>
        </RouterLink>
      </div>
      <div class="flex justify-center mt-8">
        <RouterLink class="menu-link" to="/designs">
          <div
            class="w-80% border border-white py-2 px-4 text-white text-center transition-all duration-300 hover:bg-white hover:text-black">
            Plus de Designs
          </div>
        </RouterLink>
      </div>
    </div>




  </main>
</template>
