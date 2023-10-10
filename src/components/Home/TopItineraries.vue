<script setup>
import ItinerariesDecore from "../../assets/icons/svg/ItinerariesDecore.vue";
import PreviewItinerary from "../../pages/PreviewItinerary.vue";
import { ref, defineProps, onMounted } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import '@splidejs/vue-splide/css';

import { useStore } from "vuex";
import { load_top_selling_itineraries } from "src/common/api_calls";


defineProps(["top_itineraries"]);

const store = useStore();
const top_itineraries_list = ref([]);
const options = ref({
  padding: "1rem",
  perPage: 5,
  gap: 15,
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
      perPage: 1.5,
      arrows: true,
    },
  },
});

function view_itinerary(id) {
  let itinerary = [];
  console.log(top_itineraries_list.value);
  top_itineraries_list.value.forEach(function (item) {
    if (item.pk == id) {
      itinerary = item.fields;
      return;
    }
  });
  if (itinerary) {
    console.log(itinerary);
    store.commit("itinerary_preview_update", itinerary);
    store.commit("itinerary_pk_update", id);
    store.commit("toggle_preview_itinerary_modal", true);
  }
}

onMounted(() => {
  // Load Top Itineraries
  load_top_selling_itineraries().then((response) => {
    let response_data = JSON.parse(response.data.data);
    top_itineraries_list.value = response_data;
  });
});

</script>

<template>
  <!-- Top Itineraries -->
  <div id="itineraries" class="q-pa-sm top-itineraries q-pa-md">
    <h5 class="header-font">Our Top Itineraries</h5>
    <Splide :options="options" aria-label="Top Itineraries">
      <SplideSlide v-for="(items, index) in top_itineraries" :key="index">
        <div class="carousel_item_wrapper">
          <div
            class="carousel_item itineraries-free-badge"
            @click="view_itinerary(items.pk)"
          >
            <img :src="items.fields.place_img" alt="place" />
            <h4 class="carousel_item_text">
              {{ items.fields.itinerary_name }}
            </h4>
          </div>
        </div>
      </SplideSlide>
    </Splide>
    <ItinerariesDecore />
  </div>
  <!-- Top Itineraries Ends -->
  <!-- Preview Itinerary -->
  <PreviewItinerary />
  <!-- Preview Itinerary Ends -->
</template>

<style>
.top-itineraries {
  width: 90%;
  margin: 0 auto;
  position: relative;
}

.top-itineraries img {
  height: 20em;
  width: 100%;
  background-color: lightgray;
  background-position-x: 0%, 0.897px;
  background-position-y: 0%, -56.714px;
  background-repeat: repeat, no-repeat;
  background-attachment: scroll, scroll;
  background-size: auto, 100.016% 130.348%;
  background-origin: padding-box, padding-box;
  background-clip: border-box, border-box;
  overflow: hidden;
  border-radius: 16px 16px 0px 0px;
}

.itineraries-free-badge::after {
  position: absolute;
  content: "";
  right: -3px;
  top: -3px;
  background-image: url("../../assets/icons/free-tab-badge.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 50px;
  height: 42px;
}

.carousel_item {
  cursor: pointer;
  width: 100%;
  box-shadow: none;
  border: 1px solid #d4d4d8;
  border-radius: 16px;
  position: relative;
}

.carousel_item:hover {
  transform: scale(1.05);
  box-shadow: 0px 0px 15px -2px #80808080;
}

.carousel_item_text {
  font-size: 14px;
  margin: 0px;
  color: #5e6282;
  line-height: unset;
  text-align: center;
  padding: 14px;
  height: 5em;
}

.carousel_item_wrapper {
  margin: 2em 1px;
}

.decore {
  position: absolute;
  right: -45px;
  bottom: 5px;
}

.splide__arrow:disabled{
  display: none;
}

@media all and (max-width: 600px) {
  .top-itineraries{
    width: 100%;
    padding: 16px 0px 0px 0px;
    margin-top: 1em;
  }

  .top-itineraries h5{
    color: #334155;
    font-family: Poppins;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 107%;
    text-align: center;
    width: 90%;
    margin-top: 0px;
  }

  .carousel__prev,
  .carousel__next {
    margin: 0em;
  }

  .top-itineraries img{
    height: 18em;
  }

  .carousel_item_text{
    font-size: 1em;
    padding: 5px;
    height: 4em;
  }

  .decore {
    display: none;
  }
}
</style>
