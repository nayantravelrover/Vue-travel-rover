<script setup>
import TheLoader from "./TheLoader.vue";
import TheHeader from "./TheHeader.vue";
import TheFooter from "./TheFooter.vue";
import { ref } from "vue";

const show_loader = ref(true);
setTimeout(() => {
  show_loader.value = false;
}, 1500);

</script>

<template>
  <the-loader v-show="show_loader"></the-loader>
  <div :class="{ hide: show_loader }">
    <the-header></the-header>
    <main>
      <slot></slot>
    </main>
    <the-footer></the-footer>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

html,
body {
  overflow-x: hidden;
  font-family: "Poppins", sans-serif;
}

:root {
  --primary: #003fa3;
  --white: #ffffff;
  --footer-bg: #0c111f;
}

.hide {
  display: none;
}

.header-font{
  color: #121212;
  text-align: center;
  font-family: Poppins;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 1em auto;
  margin-bottom: 0px;
}
@media all and (max-width: 600px) {
  
}
</style>
