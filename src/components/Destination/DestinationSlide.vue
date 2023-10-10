<script setup>
import { ref, defineProps, onMounted } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
const props = defineProps(["name", "one_liner", "images"]);

const options = ref({
  rewind: true,
  autoplay: true,
  drag: true,
  pagination: true,
  classes: {
    page: 'splide__pagination__page top-slide-pagination',
  }
});
</script>

<template>
  <div class="destinations-wrappper">
    <Splide :options="options" aria-label="Destinations" class="is-overflow">
      <SplideSlide v-for="(items, index) in images" :key="index">
        <img class="destinations-images" :src="require(`../../assets/images/destination/${items}`)" />
      </SplideSlide>
    </Splide>
    <div class="destinations-title">
      <h1>{{ name }}</h1>
      <h2>{{ one_liner }}</h2>
    </div>
  </div>
</template>

<style>
.destinations-wrappper {
  margin-top: -10em;
  position: relative;
}

.destinations-images {
  width: 100%;
  height: 45em;
  object-fit: cover;
}

.destinations-title {
  position: absolute;
  text-align: center;
  padding: 32px 63px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.5);
  width: 58em;
  height: fit-content;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.destinations-title h1 {
  color: #ffffff;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 0px;
}

.destinations-title h2 {
  color: #ffffff;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0px;
}

.splide__pagination {
  display: flex !important;
}

.top-slide-pagination {
  background: transparent;
  border: 2px solid white;
  height: 15px;
  width: 15px;
  opacity: 1;
}


.top-slide-pagination.is-active {
  transform: unset;
}

.splide:not(.is-overflow) .splide__pagination {
  display: flex !important;
}
</style>
