<script setup>
import WhatAppSvg from "../../assets/icons/footer/whatsappIcon.vue";
import FacebookSvg from "../../assets/icons/footer/facebookIcon.vue";
import TwitterSvg from "../../assets/icons/footer/twitterIcon.vue";
import InstagramSvg from "../../assets/icons/footer/instagramIcon.vue";
</script>

<template>
  <div class="social-media-list">
    <a href="javascript:void(0);" disabled>
      <FacebookSvg />
    </a>
    <a href="javascript:void(0);" disabled>
      <TwitterSvg />
    </a>
    <a href="https://instagram.com/travel_rovers?igshid=MzRlODBiNWFlZA==">
      <InstagramSvg />
    </a>
    <a
      href="https://api.whatsapp.com/send?phone=7977790353&text=Hello! I'm looking for assistance in planning my upcoming trip. Would you be able to help me create a customised itinerary?"
      target="_blank"
    >
      <WhatAppSvg />
    </a>
  </div>
</template>

<style scoped>
.social-media-list {
  display: flex;
  gap: 0.5rem;
  margin-left: -0.5rem;
}

.social-media-list a {
  padding: 0.5em;
  color: var(--color-smooth);
  display: flex;
  border-radius: 0.3em;
  transition: all 0.25s ease 0s;
}

.social-media-list a:hover,
.social-media-list a:focus {
  color: var(--color);
  background: #ffffff1a;
}

.social-media-list svg {
  width: 1.5em;
  height: 1.5em;
  transition: all 0.25s ease 0s;
}
</style>
