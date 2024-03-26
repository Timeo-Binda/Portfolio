<script setup lang="ts">
import { pb } from '@/backend';
import { projets_designId } from '@/backend';
import { formatDate } from '@/helper';
import { useHead } from '@unhead/vue'
useHead({
    title: 'Portfolio BINDA'
})

const props = defineProps<{
    id: string;
}>();

const projets_designInfo = await projets_designId(props.id);


const imagebonus = projets_designInfo.photo_bonus;
console.log(imagebonus);
const urlImagesBonus = Array.isArray(imagebonus)
    ? imagebonus.map(nomImage => pb.getFileUrl(projets_designInfo, nomImage, { thumb: '100x250' }))
    : [];
console.log(urlImagesBonus);





const img = projets_designInfo.cover;
const urlImg = img && pb.getFileUrl(projets_designInfo, img, { thumb: '100x250' });


const images = Array.isArray(projets_designInfo.photo_bonus) ? projets_designInfo.photo_bonus : [];

// Créez des URL pour chaque image
const imageDetails = images.map(img => ({
    url: img ? pb.getFileUrl(projets_designInfo, img, { thumb: '100x250' }) : '/image-not-found.png',
    description: img ? img.description : 'Description par défaut',
}));

// Accédez directement à des indices spécifiques du tableau
const firstImage = imageDetails[0] || { url: '/image-not-found.png', description: 'Description par défaut', alt: 'image' };
const secondImage = imageDetails[1] || { url: '/image-not-found.png', description: 'Description par défaut' };



// Récupération de l'ID de la collection de projets_design à partir de la liste fournie
const collectionInfo = [
    {
        "id": "zan1lz7gol8c2pi",
        "name": "projets_video",
        // autres champs...
    },
    {
        "id": "k28nkvipbxk3hwm",
        "name": "projets_design",
        // autres champs...
    }
];

// Recherche de l'entrée correspondant à projets_design
const projets_designCollection = collectionInfo.find(collection => collection.name === 'projets_design');

if (!projets_designCollection) {
    console.error("La collection projets_design n'a pas été trouvée.");
}

// Construction de l'URL pour télécharger le fichier PDF depuis votre API
const collectionId = projets_designCollection ? projets_designCollection.id : '';
const filename = projets_designCollection ? projets_designInfo.doc : ''; // Utilisation d'un nom de fichier par défaut
const token = ''; // Remplacez par votre jeton d'authentification si nécessaire
const url = `https://portfolio.timeobinda.fr/api/files/${collectionId}/${props.id}/${filename}?token=${token}`;


</script>

<template>
    <h2 class="mt-8">{{ projets_designInfo.titre }}</h2>

    <div class="flex items-center justify-center w-full h-full pt-2 pb-4">
        <img :src="urlImg" alt="">
    </div>

    <div class="lg:grid lg:grid-cols-2">
        <p>Rôle: {{ projets_designInfo.role }}</p>
        <div class="lg:text-right">
            <p class="capitalize">{{ formatDate(projets_designInfo.date) }}</p>
            <p class="capitalize">{{ projets_designInfo.categorie }}</p>
        </div>
    </div>


    <h2 class="mt-24 lg:mt-48">Le projet</h2>

    <div class="mt-4 lg:mt-6 grid lg:grid-cols-2 ">
        <p class="mr-4">{{ projets_designInfo.projet }} </p>
        <div>
            <img class="mt-6 lg:mt-0 lg:pl-20 aspect-[16/9] object-cover" :src="urlImagesBonus[0]">
        </div>
    </div>

    <h2 class="mt-24 lg:mt-48">Sa Réalisation</h2>

    <div class="mt-4 lg:mt-6 grid lg:grid-cols-2 ">
        <p class="mr-4">{{ projets_designInfo.realisation }} </p>
        <div>
            <img class="mt-6 lg:mt-0 lg:pl-20 aspect-[16/9] object-cover" :src="urlImagesBonus[1]">
        </div>
    </div>


    <div class="mt-4 lg:mt-12 grid lg:grid-cols-2 gap-4 ">
        <div v-if="projets_designInfo.recommandation">
            <h2>Recommandation</h2>
            <div class="lg:px-16 flex content-center justify-center flex-col lg:text-2xl">
                <p class="italic mt-16">"{{ projets_designInfo.recommandation }}"</p>
                <p class="text-right"> {{ projets_designInfo.nom_personne_reco }}</p>
            </div>
        </div>
        <div v-for="(url, index) in urlImagesBonus.slice(2)" :key="index" class="lg:col-span-1">
            <img :src="url" :alt="'Image bonus ' + (index + 1)" class="w-full h-full aspect-[5/3] object-cover ">
        </div>
    </div>
    <div v-if="projets_designInfo.doc" class="flex justify-center items-center mt-16">
        <a :href="url" download
            class="bg-transparent border border-white hover:bg-white hover:text-black px-4 py-2 text-white transition-colors duration-300 ease-in-out">
            Télécharger le projet
        </a>
    </div>

</template>




