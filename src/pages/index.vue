<script setup lang="ts">
import OeuvreCard from '@/components/OeuvreCard.vue'
import { RouterLink, RouterView } from 'vue-router'
import { useHead } from '@unhead/vue'
import { allprojets_video } from '@/backend'
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

useHead({
  title: 'Portfolio BINDA'
})

const projets_videoList = await allprojets_video();

const cardContainer = ref<HTMLElement | null>(null)

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
    <div class="flex items-center justify-center flex-col pb-16">
      <h1 class="font-extrabold">Timéo BINDA</h1>
      <h1 class="font-thin text-right text-base font">Vidéaste</h1>
    </div>

    <h2>Mes projets</h2>
  <ul class="grid grid-cols-1 lg:grid-cols-2 gap-4" ref="cardContainer">
        <li v-for="projets_video in projets_videoList" :key="projets_video.id">
          <RouterLink :to="{ name: 'Videos-id', params: { id: projets_video.id } }" class="text-red-700 hover:text-red-400">
            <OeuvreCard :key="projets_video.id" v-bind="{ ...projets_video }" />
          </RouterLink>
        </li>
      </ul>
  </main>
</template>