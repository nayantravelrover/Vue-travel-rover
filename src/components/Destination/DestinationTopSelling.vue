<script setup>
import { ref } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import { event } from "quasar";
const props = defineProps(["itineraries"]);
const emits = defineEmits(["add-to-compare"]);

const options = ref({
  padding: "2rem",
  perPage: 1,
  gap: 15,
  autoplay: true,
  rewind: true,
  classes: {
    page: 'splide__pagination__page top-dest-pagination',
  },
});

</script>

<template>
  <section>
    <h1 class="itineraries-title">Our Itineraries</h1>
    <div class="itineraries-wrapper">
      <Splide :options="options" aria-label="Itineraries">
        <SplideSlide v-for="(items, index) in itineraries" :key="index">
          <div class="itineraries-list row">
            <div class="itineraries-image col-4">
              <img :src="items.place_img" alt="place_img" />
              <div class="heartbox">
                <input type="checkbox" :id="items.heart_class" />
                <label :for="items.heart_class"></label>
              </div>
            </div>
            <div class="col-8">
              <div class="row">
                <h1>{{ items.itinerary_name }}</h1>
                <p>{{ items.place_description }}</p>
                <div class="col-9">
                  <div class="row">
                    <div class="col-6">
                      <h2>Inclusions</h2>
                      <div class="in-header" v-html="items.inclusions_headers"></div>
                    </div>
                    <div class="col-6">
                      <h2>Exclusions</h2>
                      <div class="in-header ou-header" v-html="items.exclusions_headers"></div>
                    </div>
                  </div>
                </div>
                <div class="col-3">
                  <div class="buy-wrapper">
                    <h5>Starts from</h5>
                    <p>
                      <b>{{ items.tour_rates }} </b>₹
                    </p>
                  </div>
                  <div class="buy-wrapper-btn">
                    <button>View Itinerary</button>
                    <button :class="{
                      disableBtn: items.added_to_compare
                    }" @click="$emit('add-to-compare', items)">Add to Compare</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </section>
</template>

<style>
.itineraries-title {
  color: #333;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 6em;
  margin-bottom: 0px;
}

.itineraries-list {
  padding: 24px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(158, 158, 158, 0.25);
  margin: 3em 0em;
}

.itineraries-list img {
  width: 100%;
  height: 100%;
  position: relative;
  object-fit: cover;
  border-radius: 16px;
}

.itineraries-list h1 {
  color: #000;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0px;
  padding-left: 24px;
}

.itineraries-list h2 {
  color: #4b5563;
  text-align: justify;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-left: 24px;
}

.itineraries-list p {
  color: #343434;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left: 24px;
}

.itineraries-image {
  position: relative;
}

.heartbox {
  position: absolute;
  top: 0;
  right: 2em;
}

.in-header ol {
  padding-inline-start: 20px;
}

.in-header li {
  color: #4b5563;
  text-align: justify;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  list-style: none;
}

.in-header li:before {
  content: "✔️  ";
}

.ou-header li:before {
  content: "❌  ";
}

.buy-wrapper h5 {
  color: #484848;
  text-align: justify;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 10px;
  text-transform: initial;
}

.buy-wrapper p {
  color: #777;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.buy-wrapper b {
  color: #2f2f42;
  text-align: justify;
  font-family: Poppins;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.buy-wrapper-btn button {
  display: flex;
  padding: 10px 20px;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 8px;
  border-radius: 32px;
  background: #2659c3;
  color: white;
  text-decoration: none;
  border: none;
  margin: 10px;
  cursor: pointer;
}

input[type="checkbox"] {
  display: none;
}

input[type="checkbox"]+label {
  position: relative;
  padding-left: 35px;
  display: inline-block;
  font-size: 16px;
}

input[type="checkbox"]+label:before {
  content: "\2661";
  top: -11px;
  left: -8px;
  border: 1px solid transparent;
  padding: 10px;
  border-radius: 3px;
  display: block;
  position: absolute;
  transition: 0.5s ease;
  font-size: 58px;
  margin-top: -12px;
  cursor: pointer;
}

input[type="checkbox"]:checked+label:before {
  border: 1px solid transparent;
  background-color: transparent;
}

input[type="checkbox"]:checked+label:after {
  content: "\2764";
  font-size: 38px;
  position: absolute;
  top: 3px;
  left: 4px;
  color: red;
  transition: 0.5s ease;
  cursor: pointer;
}

.top-dest-pagination {
  background: transparent;
  border: 2px solid #2659c3;
  height: 15px;
  width: 15px;
  opacity: 1;
}

.top-dest-pagination.is-active {
  background-color: #2659c3;
  transform: unset;
}


.disableBtn {
  cursor: not-allowed;
  background-color: rgb(229, 229, 229) !important;
}

.disableBtn>* {
  pointer-events: none;
}
</style>
