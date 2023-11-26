<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import LogoIcon from '@/components/icons/IconLogo.vue'
import { RouterLink } from 'vue-router'
// Créer une référence réactive pour suivre l'état du menu
const activeMenu = ref(false)
function closeMenu() {
    activeMenu.value = false
}
</script>

<template>
    <header class="fixed z-10 flex w-full translate-y-0 items-stretch justify-between bg-gray-900 text-white px-6 py-2 transition-all duration-300 ease-in-out lg:py-0 border-b border-white">
        <div class="flex items-center p-0">
            <a class="scale-50" href="/">
                <LogoIcon />
            </a>
        </div>

        <div class="flex items-center gap-4 lg:flex-row-reverse">
            

    <button class="relative z-10 flex h-5 w-8 flex-col justify-between lg:hidden" @click="activeMenu = !activeMenu">
        
            <div class="ease h-[2px] w-full transform rounded-full bg-white transition duration-300" :class="{ 'translate-y-[9px] rotate-45 bg-white': activeMenu } "></div>
            <div class="ease h-[2px] w-full transform rounded-full bg-white transition duration-300" :class="{ 'bg-white opacity-0': activeMenu }"></div>
            <div class="ease h-[2px] w-full transform rounded-full bg-white transition duration-300" :class="{ '-translate-y-[9px] -rotate-45 bg-white': activeMenu }"></div>
          </button>

            <nav     class="invisible opacity-0 fixed inset-0 h-screen w-screen bg-gray-900 text-2xl text-white transition-all duration-300 ease-in-out lg:visible lg:relative lg:flex lg:h-auto lg:w-auto lg:items-center lg:bg-transparent lg:text-sm lg:font-bold lg:uppercase lg:tracking-wide  lg:opacity-100"
        :class="{ '!visible opacity-100': activeMenu }" v-scroll-lock="activeMenu">
                <ul class="mt-[25vh] ml-16 lg:m-0 lg:flex">
                    <li class="menu-item"><RouterLink class="menu-link" to="/Videos" @click="closeMenu">Vidéos</RouterLink></li>
                    <li class="menu-item"><RouterLink class="menu-link" to="/conservatoire" @click="closeMenu">Photos</RouterLink></li>
                    <li class="menu-item"><RouterLink class="menu-link" to="/" @click="closeMenu">Design</RouterLink></li>
                    <li class="menu-item"><RouterLink class="menu-link" to="/events" @click="closeMenu">A propos</RouterLink></li>
                </ul>
            </nav>
        </div>
    </header>
</template>