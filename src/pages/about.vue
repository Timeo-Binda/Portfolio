<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Enregistrez le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

useHead({
    title: 'Portfolio BINDA'
})

onMounted(() => {
    gsap.utils.toArray('.section').forEach(section => {
        gsap.from(section as HTMLElement, {
            opacity: 0,
            y: 100,
            duration: 1,
            scrollTrigger: {
                trigger: section as HTMLElement,
                start: 'top 80%', // Commence l'animation lorsque le haut de la section est à 80% de la vue
                end: 'bottom top', // Fin de l'animation lorsque le bas de la section atteint le haut de la vue
                scrub: true, // "Scrub" active le défilement de type "pin"
                markers: true // Affiche des marqueurs pour le débogage
            }
        })
    })
})

onUnmounted(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>



<template>
    <main>
        <section id="section1">
            <div class=" mx-4 lg:mt-12 grid lg:grid-cols-2 flex items-center ">
                <div>
                    <h2>Bonjour !</h2>
                    <p class="mt-4">Je suis Timéo, un vidéaste et designer français passionné par l'art de raconter des histoires à travers un mélange captivant de visuels et de narration. Je suis ravi de vous accueillir dans mon univers créatif.</p>
                    <p class="mt-8">Ma personnalité curieuse et ouverte sur le monde se reflète dans mon travail, où je m'inspire constamment de nouvelles technologies et de tendances pour créer des œuvres innovantes. Chaque projet sur lequel je travaille est une exploration artistique où je m'efforce de créer des expériences immersives et engageantes.
                    </p>
                    <p class="mt-8">
                        J'espère que vous apprécierez mon travail autant que j'ai aimé le créer.
                    </p>
                </div>
                <img class=" lg:mt-0 lg:pl-20  object-cover" src="/img/about/bonjour_webp.webp" alt="">
            </div>
        </section>



        <section id="section2">
            <div class="mt-4 lg:mt-6 grid lg:grid-cols-2 gap-8">
                <div class="mx-4">
                    <h2 class="mt-24 lg:mt-48 lg:mr-4">Mon Parcours</h2>
                    <p>
                        Je suis actuellement étudiant en BUT Métiers du Multimédia et de l'Internet à Montbéliard, avec une
                        spécialisation en création numérique. Mon parcours m'a également conduit à passer un semestre à
                        Montréal, au Cégep Vanier, en "Micropublishing and Hypermedia". Ma
                        passion réside dans la création numérique, et je m'investis pleinement dans différentes facettes de
                        ce domaine, que ce soit à travers la musique, la photographie, le design ou la réalisation de
                        vidéos.
                    </p>
                </div>
                <div class="mx-4">
                    <h2 class="mt-12 lg:mt-48">Mon but</h2>
                    <p>Redéfinir votre communication visuelle. Ce qui me distingue n'est pas simplement ce
                        que
                        je
                        fais, mais comment je le fais. Chaque projets dans lequel je me lance est une expérience
                        méticuleusement façonnée pour atteindre l'objectif ciblé. Au-delà de l'expertise technique, je
                        m'engage
                        à transformer des idées en histoires
                        visuelles laissant un impact.</p>
                </div>

            </div>
        </section>

        <section id="section3">
            <div class="flex justify-center mt-16">
                <img class="lg:w-1/2" src="../../public/img/about/work_together_webp.webp" alt="">
            </div>
        




        
            <div class="mx-4 mt-16 grid lg:grid-cols-2">
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
                                    href="https://www.linkedin.com/in/tim%C3%A9o-binda-734324255/">
                                    linkedin.com/timeobinda</a>
                            </li>
                            <li class="font-normal">Instagram:<a class="font-bold"
                                    href="https://www.instagram.com/etudiant_timeob/">
                                    @etudiant_timeob</a></li>
                        </ul>
                    </div>
                </div>
                <div class="flex justify-center items-center mt-8 lg:mt-0">
                    <a href="https://portfolio.timeobinda.fr/img/about/CV_BINDA.pdf" 
                        class="bg-transparent border border-white hover:bg-white hover:text-black px-4 py-2 text-white transition-colors duration-300 ease-in-out" download>
                        Télécharger mon CV
                    </a>
                </div>

            </div>
        </section>


    </main>
</template>