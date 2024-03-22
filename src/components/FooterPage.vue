<script setup lang="ts">
import IconLinkedin from './icons/IconLinkedin.vue';
import YoutubeIcon from '@/components/icons/IconYoutube.vue'
import InstagramIcon from '@/components/icons/IconInstagram.vue'
import IconPhone from './icons/IconPhone.vue';
import IconMail from './icons/IconMail.vue';

</script>


<template>
    <footer class="mt-8 bg-gray-900 border-t  border-white py-8">
      
        <ul class="flex flex-row justify-center pb-8 gap-8">
      <li class="flex items-center">
          <a href="https://www.linkedin.com/in/tim%C3%A9o-binda-734324255/" target="_blank" rel="noopener noreferrer" class="w-16 h-16 flex justify-center items-center transition-transform duration-300 ease-in-out hover:transform hover:translate-y-[-5px]">
              <IconLinkedin class="w-6 h-6 scale-150" />
          </a>
      </li>
      <li class="flex items-center">
          <a href="https://www.instagram.com/etudiant_timeob/" target="_blank" rel="noopener noreferrer" class="w-16 h-16 flex justify-center items-center transition-transform duration-300 ease-in-out hover:transform hover:translate-y-[-5px]">
              <InstagramIcon class="w-6 h-6 scale-150" />
          </a>
      </li>
      <li class="flex items-center">
          <a href="mailto:etudiant.tbinda@gmail.com" class="w-16 h-16 flex justify-center items-center transition-transform duration-300 ease-in-out hover:transform hover:translate-y-[-5px]">
              <IconMail class="w-6 h-6 scale-150" />
          </a>
      </li>
      <li class="flex items-center">
          <a href="tel:+33783814951" class="w-16 h-16 flex justify-center items-center transition-transform duration-300 ease-in-out hover:transform hover:translate-y-[-5px]">
              <IconPhone class="w-6 h-6 scale-150" />
          </a>
      </li>
  </ul>

      <p class="flex justify-center">&copy; Timéo BINDA - 2024</p>
    </footer>
</template>