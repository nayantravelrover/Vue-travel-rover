<script setup>
import TheSocialMedia from "./TheSocialMedia.vue";
</script>

<template>
  <main class="loader-wrapper">
    <div class="loading-spinner">
      <img class="bounce" src="../../assets/icons/logo.svg" alt="logo" />
      <div class="loading-footer">
        <TheSocialMedia />
        <h3>Made in India with ❤️</h3>
      </div>
    </div>
  </main>
</template>

<style scoped>
.loader-wrapper {
  display: flex;
  justify-content: center;
  height: 100vh;
  margin: 0;
  overflow: hidden;
  background-color: #003486;
}

.loading-spinner {
  position: relative;
  margin: auto;
}

.bounce {
  animation: bounce 1s ease infinite;
}

@keyframes bounce {
  70% {
    transform: translateY(0%);
  }

  80% {
    transform: translateY(-15%);
  }

  90% {
    transform: translateY(0%);
  }

  95% {
    transform: translateY(-7%);
  }

  97% {
    transform: translateY(0%);
  }

  99% {
    transform: translateY(-3%);
  }

  100% {
    transform: translateY(0);
  }
}

.loading-footer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.loading-footer svg {
  width: 1.5em;
  height: 1.5em;
  transition: all 0.25s ease 0s;
}

.loading-footer h3 {
  color: #e7e7e7;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.205px;
  padding: 0px;
  margin: 0px;
}
</style>
