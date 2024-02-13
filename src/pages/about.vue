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
        <div class="lg:mt-8 lg:mt-12 grid lg:grid-cols-2 ">
            <div class="mx-8 ">
                <h2>Bonjour !</h2>
                <p>Je m'appelle Timéo, un créateur français. Ma vie, c'est une combinaison de musique, de photos et de
                    vidéos. Chaque projet, c'est un mix artistique où je mêle le visuel à des histoires captivantes,
                    simplement parce que j'adore ça.</p>
            </div>
            <img class=" lg:mt-0 lg:pl-20  object-cover" src="/img/about/bonjour.png" alt="">

        </div>



        <div class="mt-4 lg:mt-6 grid lg:grid-cols-2 ">
            <div class="mx-4">
                <h2 class="mt-24 lg:mt-48">Mon Parcours</h2>
                <p>
                    Je suis actuellement étudiant en BUT Métiers du Multimédia et de l'Internet à Montbéliard, avec une
                    spécialisation en création numérique. Mon parcours m'a également conduit à passer un semestre à
                    Montréal, au Cégep Vanier, où j'ai exploré les domaines du micropublishing et de l'hypermédia. Ma
                    passion réside dans la création numérique, et je m'investis pleinement dans différentes facettes de ce
                    domaine, que ce soit à travers la musique, la photographie, le design ou la réalisation de vidéos.</p>
            </div>
            <div class="mx-4">
                <h2 class="mt-24 lg:mt-48">Mon but</h2>
                <p>Redéfinir la communication visuelle pour les entreprises. Ce qui me distingue n'est pas simplement ce que
                    je
                    fais, mais comment je le fais. Chaque projets dans lequel je me lance est une expérience
                    méticuleusement façonnée pour atteindre l'objectif ciblé. Au-delà de l'expertise technique, je m'engage
                    à transformer des idées en histoires
                    visuelles laissant un impact.</p>
            </div>
        </div>

        <div class="flex justify-center items-center lg:w-2/3 mt-24 lg:mt-48">
            <img class="flex justify-center items-center w-full" src="../../public/img/about/work_together.png" alt="">
        </div>



        <div class=" mt-12 grid lg:grid-cols-2">
            <div>
                <h2 class="">Contact</h2>
                <div class="mt-4 lg:mt-6 grid lg:grid-cols-2 ">
                    <ul class="flex flex-col gap-y-4">
                        <li class="font-normal">Mail:<a class="font-bold" href="mailto:etudiant.tbinda@gmail.com">
                                etudiant.tbinda@gmail.com</a></li>
                        <li class="font-normal">Téléphone:<a class="font-bold" href="tel:+33783814951"> +33 7 83 81 49
                                51</a>
                        </li>
                        <li class="font-normal">Linkedin:<a class="font-bold"
                                href="https://www.linkedin.com/in/tim%C3%A9o-binda-734324255/"> linkedin.com/timeobinda</a>
                        </li>
                        <li class="font-normal">Instagram:<a class="font-bold"
                                href="https://www.instagram.com/etudiant_timeob/">
                                @etudiant_timeob</a></li>
                    </ul>
                </div>
            </div>
            <div class="flex justify-center items-center mt-8 lg:mt-0">
            
                <button
                    class="bg-transparent border border-white hover:bg-white hover:text-black px-4 py-2 text-white transition-colors duration-300 ease-in-out"><a href="../../public/img/about/CV_BINDA.pdf" download></a>
                    Télécharger mon CV
                </button>
                </div>
            
        </div>
    </main>
</template>