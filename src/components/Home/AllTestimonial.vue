<script setup>
import TestimonialDecore from "../../assets/icons/svg/TestimonialDecore.vue";
import { ref, defineProps } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

defineProps(["testimonials"]);

const options = ref({
  rewind: true,
  type: "loop",
  perPage: 1.5,
  padding: "10rem",
  focus: "center",
  arrows: false,
  autoplay: true,
  interval: 3000,
  breakpoints: {
    640: {
      padding: "1em",
    },
  },
});
</script>

<template>
  <!-- Testimonials -->
  <div id="testimonials" class="testimonials">
    <TestimonialDecore />
    <h5 class="header-font">What our users say about us</h5>
    <Splide :options="options" aria-label="Testimonials">
      <SplideSlide
        class="testimonials_carousel_item"
        v-for="(item, index) in testimonials"
        :key="index"
      >
        <div>
          <img src="../../assets/Apostrophe.svg" />
          <q-card-section>{{ item.review }}</q-card-section>
          <q-card-section
            ><q-rating
              v-model="item.rating"
              color="orange"
              size="32px"
              no-dimming
          /></q-card-section>
          <q-card-section>{{ item.name }}</q-card-section>
        </div>
      </SplideSlide>
    </Splide>
  </div>
  <!-- Testimonials Ends -->
</template>

<style scoped>
.testimonials h5 {
  width: 36%;
}

.testimonials > svg {
  position: absolute;
  left: 0;
  height: 30em;
}

.testimonials_carousel_item {
  padding: 3em 1em;
}

.testimonials_carousel_item > div {
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 12px 24px 0px rgba(255, 167, 55, 0.06);
  padding: 2em 3em;
}

.testimonials_carousel_item > div > img {
  width: 45px;
  height: 45px;
  flex-shrink: 0;
  position: absolute;
  right: 6px;
  top: -26px;
}

.testimonials_carousel_item > div > div:nth-child(2) {
  color: #000;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 127%;
  padding: 0px;
}

.testimonials_carousel_item > div > div:nth-child(3) {
  text-align: center;
}

.testimonials_carousel_item > div > div:nth-child(4) {
  color: #000;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 127%;
  padding: 0;
}

.testimonials_carousel_item.is-active > div {
  border: 3px solid #23bdee;
  transform: scale(1.1);
}

.testimonials_carousel_item > div {
  border-radius: 13.467px;
  border: 1.5px solid #ffa737;
  transform: scale(0.8);
}

.splide__pagination__page {
  background: #ffebd1;
  margin: 4px;
  height: 10px;
  width: 10px;
  border-radius: 50%;
}

.splide__pagination__page.is-active {
  background: #ffa737;
  position: relative;
  width: 20px;
  border-radius: 5px;
}

@media all and (max-width: 600px) {
  .testimonials h5{
    color: #334155;
    font-family: Poppins;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 107%;
    text-align: center;
    width: 90%;
  }

  .testimonials > svg {
    display: none;
  }

  .testimonials_carousel_item {
    padding: 2em 0em;
  }

  .testimonials_carousel_item > div {
    padding: 2em 1em;
  }

  .testimonials_carousel_item > div > div:nth-child(2) {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 127%;
  }

  .testimonials_carousel_item > div > div:nth-child(3) > div {
    font-size: 14px !important;
  }

  .testimonials_carousel_item > div > div:nth-child(4) {
    font-size: 13.029px;
    font-style: normal;
    font-weight: 500;
    line-height: 127%;
  }
}
</style>
