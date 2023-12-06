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

     <div class="lg:mt-16 container mx-auto flex flex-wrap gap-20">
        <!-- Replace the image URLs with the correct paths -->
    <img src="/img/gallery/1.png" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/2.png" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/3.png" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/4.png" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/5.png" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/6.png" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/7.png" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/8.png" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/9.png" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/10.png" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/11.png" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/12.png" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/13.png" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/14.png" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/15.png" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/16.png" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/17.png" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/18.png" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/19.png" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/20.png" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/21.png" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/22.png" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/23.png" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/24.png" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/25.png" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/26.png" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/27.png" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/28.png" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/29.png" class="img-responsive w-full md:w-1/4 object-cover">
      </div>
</template>