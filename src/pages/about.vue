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
        <div class="mt-4 lg:mt-6 grid lg:grid-cols-2 ">
            <div>
                <h2>Bonjour !</h2>
                <p>je suis Timéo, créateur français passionné basé à Montréal. Ma vie est une symphonie de musique, de
                    captures photographiques et de créations vidéo. Chaque projet est une fusion artistique où je marie ma
                    passion pour l'esthétique visuelle et mon amour pour la narration immersive.</p>
            </div>
            <img class="mt-6 lg:mt-0 lg:pl-20 aspect-[5/3] object-cover" src="/img/about/pp1.png" alt="">

        </div>

        <h2 class="mt-24 lg:mt-48">Mon Parcours</h2>

        <div class="mt-4 lg:mt-6 grid lg:grid-cols-2 ">
            <p>étudiant français passionné actuellement basé à Montréal au Cégep de Vanier. Au-delà de mes études en
                création numérique, ma vie est nourrie par le rythme de la musique, la capture de moments uniques à travers
                la photographie, et l'art de réaliser des vidéos originales.</p>
            <div>
                <img class="mt-6 lg:mt-0 lg:pl-20 aspect-[5/3] object-cover" src="/img/about/vanier.png" alt="">
            </div>
        </div>

        <h2 class="mt-24 lg:mt-48">Mon but</h2>

        <div class="mt-4 lg:mt-6 grid lg:grid-cols-2 ">
            <p>Redéfinir la communication visuelle pour les entreprises. Ce qui me distingue n'est pas simplement ce que je
                fais, mais comment je le fais. Chaque vidéo que je crée est bien plus qu'un projet ; c'est une expérience
                méticuleusement façonnée. Au-delà de l'expertise technique, je m'engage à transformer des idées en histoires
                visuelles laissant une empreinte.</p>
            <div>
                <img class="mt-6 lg:mt-0 lg:pl-20 aspect-[5/3] object-cover" src="/img/about/image5.png" alt="">
            </div>
        </div>

        <h2 class="mt-24 lg:mt-48">Contact</h2>

        <div class="mt-4 lg:mt-6 grid lg:grid-cols-2 ">
            <ul class="flex flex-col gap-y-4">
                <li class="font-normal">Mail:<a class="font-bold" href="mailto:etudiant.tbinda@gmail.com">
                        etudiant.tbinda@gmail.com</a></li>
            <li class="font-normal">Téléphone:<a class="font-bold" href="tel:+33783814951"> +33 7 83 81 49 51</a></li>
            <li class="font-normal">Linkedin:<a class="font-bold"
                    href="https://www.linkedin.com/in/tim%C3%A9o-binda-734324255/"> linkedin.com/timeobinda</a></li>
            <li class="font-normal">Instagram:<a class="font-bold" href="https://www.instagram.com/etudiant_timeob/">
                    @etudiant_timeob</a></li>
        </ul>
    </div>
</main></template>