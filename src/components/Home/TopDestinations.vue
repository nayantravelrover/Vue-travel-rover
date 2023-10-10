<script setup>
import DestinationDecore from "../../assets/icons/svg/ItinerariesDecore.vue";
import { ref, defineProps } from "vue";
import { useRouter } from "vue-router";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

defineProps(["top_destinations"]);

const router = useRouter();
const options = ref({
  padding: "1rem",
  perPage: 5,
  gap: 8,
  arrows: false,
  drag: true,
  autoplay: true,
  pagination: false,
  focus: "center",
  breakpoints: {
    720: {
      perPage: 3,
      arrows: true,
    },
    640: {
      perPage: 1.8,
      arrows: true,
    },
  },
});

function get_default_date() {
  return (
    new Date().toLocaleString("default", { year: "numeric" }) +
    "-" +
    new Date().toLocaleString("default", { month: "2-digit" }) +
    "-" +
    new Date().toLocaleString("default", { day: "2-digit" })
  );
}

function view_destination(item) {
  router.push({
    path: "/search-destination/",
    query: { place: item, date: get_default_date() },
  });
}
</script>

<template>
  <!-- Top Destinations -->
  <div id="destinations" class="q-pa-sm top-destinations q-pa-md">
    <h5 class="header-font">Our Top Destinations</h5>
    <Splide :options="options" aria-label="Top Destinations">
      <SplideSlide v-for="(item, index) in top_destinations" :key="index">
        <div
          class="top-destinations-items"
          @click="view_destination(item.name)"
        >
          <img :src="item.image_link" />
          <div class="top-destinations_item_text row no-wrap justify-between">
            <div>{{ item.name }}</div>
            <div><q-icon name="visibility" />{{ item.views }}</div>
          </div>
          <div class="top-destinations_item_text2">
            <div>{{ item.description }}</div>
            <q-btn unelevated rounded color="primary" label="See more" />
          </div>
        </div>
      </SplideSlide>
    </Splide>
    <DestinationDecore />
  </div>
  <!-- Top Destinations Ends -->
</template>

<style>
.top-destinations {
  width: 90%;
  margin: 0 auto;
  position: relative;
}

.top-destinations-items {
  background: #fff;
  box-shadow: unset;
  cursor: pointer;
  margin: 2em 1px;
}

.top-destinations img {
  border-radius: 10px !important;
  background: linear-gradient(180deg, #f29c72 0%, rgba(255, 255, 255, 0) 100%);
  mix-blend-mode: multiply;
  object-fit: cover;
  height: 20em;
  width: 100%;
}

.top-destinations_item_text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  color: #5e6282;
  padding: 10px 0px;
}

.top-destinations_item_text div:nth-child(1) {
  color: #25233a;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.top-destinations_item_text i {
  margin-right: 5px;
}

.top-destinations_item_text2 {
  text-align: left;
}

.top-destinations_item_text2 div:nth-child(1) {
  color: #868383;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.top-destinations_item_text2 button {
  padding: 5px 10px;
  border-radius: 5px;
  background: #004ecb !important;
  text-transform: initial;
  margin-top: 10px;
}

.top-destinations_item_bottom_text {
  color: #14183e;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: bolder;
  line-height: normal;
  text-transform: capitalize;
  width: 486px;
  margin: 0 auto;
}

.decore {
  position: absolute;
  right: -45px;
  bottom: 5px;
}

@media all and (max-width: 600px) {
  .top-destinations{
    width: 100%;
    padding: 16px 0px;
  }

  .top-destinations h5{
    color: #334155;
    font-family: Poppins;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 107%;
    text-align: center;
    width: 90%;
  }
  .top-destinations img{
    height: 16em;
  }

  .carousel__prev,
  .carousel__next {
    margin: 0em;
  }

  .decore {
    right: -24px;
    bottom: -44px;
  }
}
</style>
