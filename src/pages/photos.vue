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
    <img src="/img/gallery/1_webp.webp" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/2_webp.webp" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/3_webp.webp" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/4_webp.webp" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/5_webp.webp" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/6_webp.webp" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/7_webp.webp" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/8_webp.webp" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/9_webp.webp" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/10_webp.webp" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/11_webp.webp" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/12_webp.webp" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/13_webp.webp" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/14_webp.webp" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/15_webp.webp" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/16_webp.webp" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/17_webp.webp" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/18_webp.webp" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/19_webp.webp" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/20_webp.webp" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/21_webp.webp" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/22_webp.webp" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/23_webp.webp" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/24_webp.webp" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/25_webp.webp" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/26_webp.webp" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/27_webp.webp" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/28_webp.webp" class="img-responsive w-full md:w-1/4 object-cover">
    <img src="/img/gallery/29_webp.webp" class="img-responsive w-full md:w-1/4 object-cover">
      </div>
</template>