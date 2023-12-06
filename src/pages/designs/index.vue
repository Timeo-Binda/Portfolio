<script setup lang="ts">
import OeuvreCard from '@/components/OeuvreCardDesign.vue'
import { RouterLink, RouterView } from 'vue-router'
import { useHead } from '@unhead/vue'
useHead({
    title: 'Accuei LeafArtisans'
})
import { allprojets_design } from '@/backend'

const projets_designList = await allprojets_design();
</script>

<template>
    <h2 class="lg:mt-8">Mes Designs</h2>
    <ul class="grid grid-cols-1 lg:grid-cols-2 gap-4" ref="cardContainer">
        <li v-for="projets_design in projets_designList" :key="projets_design.id">
            <RouterLink :to="{ name: 'Videos-id', params: { id: projets_design.id } }"
                class="text-red-700 hover:text-red-400">
                <OeuvreCard :key="projets_design.id" v-bind="{ ...projets_design }" />
            </RouterLink>
        </li>
    </ul>
</template>