<script setup lang="ts">
import IconLinkedin from './icons/IconLinkedin.vue';
import YoutubeIcon from '@/components/icons/IconYoutube.vue'
import InstagramIcon from '@/components/icons/IconInstagram.vue'
import IconPhone from './icons/IconPhone.vue';
import IconMail from './icons/IconMail.vue';

</script>


<template>
    <footer class="mt-8 bg-gray-900 border-t  border-white py-8">
      
        <ul class=" flex flex-row justify-center pb-8 gap-8 ">
          <li>
            <a href="https://www.linkedin.com/in/tim%C3%A9o-binda-734324255/" target="_blank" rel="noopener noreferrer" class="w-16 h-16">
              <IconLinkedin class="w-6 h-6 scale-150" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCQ6Zr5qXJ7Z8XQ7QX6Z9Z0w" target="_blank" rel="noopener noreferrer" class="w-16 h-16">
              <YoutubeIcon class="w-6 h-6 scale-150" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/etudiant_timeob/" target="_blank" rel="noopener noreferrer" class="w-16 h-16">
              <InstagramIcon class="w-6 h-6 scale-150" />
            </a>
          </li>
          <li>
            <a href="mailto:etudiant.tbinda@gmail.com" class="w-16 h-16">
              <IconMail class="w-6 h-6 scale-150" />
            </a>
          </li>
          <li>
            <a href="tel:+33783814951" class="w-16 h-16">
              <IconPhone class="w-6 h-6 scale-150" />
            </a>
          </li>
        </ul>
      <p class="flex justify-center">&copy; Timéo BINDA - 2023</p>
    </footer>
</template>