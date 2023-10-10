<script setup>
import { ref } from "vue";
const props = defineProps(["itineraries"]);
const emits = defineEmits(["remove-from-compare"]);
</script>

<template>
  <section>
    <main>
      <h1>Itinerary Comparison</h1>
      <table class="comparison-table">
        <!-- Table Header Starts -->
        <tr>
          <th class="empty-cell"></th>
          <th
            class="title-card-wrapper"
            v-for="(item, index) in itineraries"
            :key="index"
          >
            <div class="title-card">
              <button @click="$emit('remove-from-compare', item)">
                Remove ❌
              </button>
              <img :src="item.place_img" />
              <h1>{{ item.itinerary_name }}</h1>
              <div class="buy-wrapper">
                <h5>Starts from</h5>
                <p>
                  <b>{{ item.tour_rates }} </b>₹
                </p>
              </div>
            </div>
          </th>
        </tr>
        <!-- Table Header Ends -->

        <!-- Tour Highlights Starts -->
        <tr class="comparison-table-section-header">
          <td>Tour Highlights</td>
          <td v-for="(item, index) in itineraries" :key="index"></td>
        </tr>
        <tr class="comparison-table-row">
          <td class="empty-cell"></td>
          <td
            class="tour-highlights"
            v-for="(item, index) in itineraries"
            :key="index"
          >
            {{ item.tour_highlights.replace(/<\/?[^>]+(>|$)/g, "") }}
          </td>
        </tr>
        <!-- Tour Highlights Ends -->

        <!-- Places to visit Starts -->
        <tr class="comparison-table-section-header">
          <td>Places to visit</td>
          <td v-for="(item, index) in itineraries" :key="index"></td>
        </tr>
        <tr class="comparison-table-row">
          <td class="empty-cell"></td>
          <td
            class="places-to-visit"
            v-for="(item, index) in itineraries"
            :key="index"
            v-html="item.places_to_visit"
          ></td>
        </tr>
        <!-- Places to visit Ends -->

        <!-- Accommodation Starts -->
        <tr class="comparison-table-section-header">
          <td>Accommodation</td>
          <td v-for="(item, index) in itineraries" :key="index"></td>
        </tr>
        <tr class="comparison-table-row">
          <td class="empty-cell"></td>
          <td
            class="accommodation"
            v-for="(item, index) in itineraries"
            :key="index"
            v-html="item.accomodation"
          ></td>
        </tr>
        <!-- Accommodation Ends -->

        <!-- Travel Arrangements Starts -->
        <tr class="comparison-table-section-header">
          <td>Travel Arrangements</td>
          <td v-for="(item, index) in itineraries" :key="index"></td>
        </tr>
        <tr class="comparison-table-row">
          <td class="empty-cell"></td>
          <td
            class="travel-arrangements"
            v-for="(item, index) in itineraries"
            :key="index"
            v-html="item.arrangements"
          ></td>
        </tr>
        <!-- Travel Arrangements Ends -->

        <!-- Things to carry Starts -->
        <tr class="comparison-table-section-header">
          <td>Things to carry</td>
          <td v-for="(item, index) in itineraries" :key="index"></td>
        </tr>
        <tr class="comparison-table-row">
          <td class="empty-cell"></td>
          <td
            class="things-to-carry"
            v-for="(item, index) in itineraries"
            :key="index"
            v-html="item.things_to_carry"
          ></td>
        </tr>
        <!-- Things to carry Ends -->

        <!-- Inclusions Starts -->
        <tr class="comparison-table-section-header">
          <td>Inclusions</td>
          <td v-for="(item, index) in itineraries" :key="index"></td>
        </tr>
        <tr class="comparison-table-row">
          <td class="empty-cell"></td>
          <td
            class="inclusions"
            v-for="(item, index) in itineraries"
            :key="index"
            v-html="item.inclusions"
          ></td>
        </tr>
        <!-- Inclusions Ends -->

        <!-- Exclusions Starts -->
        <tr class="comparison-table-section-header">
          <td>Exclusions</td>
          <td v-for="(item, index) in itineraries" :key="index"></td>
        </tr>
        <tr class="comparison-table-row">
          <td class="empty-cell"></td>
          <td
            class="exclusions"
            v-for="(item, index) in itineraries"
            :key="index"
            v-html="item.exclusions"
          ></td>
        </tr>
        <!-- Exclusions Ends -->
      </table>
    </main>
  </section>
</template>

<style scoped>
section {
  background: #f8fefd;
  padding: 50px 100px;
}

section > main {
  border-radius: 10px;
  background: #fff;
  padding: 30px;
  box-shadow: 0px 0px 12px 0px #0000001a;
}

main > h1 {
  margin-top: 0;
  color: #333;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.comparison-table {
  border-collapse: collapse;
  width: 100%;
}
.comparison-table .empty-cell {
  border: none;
  background: none;
}
.comparison-table td,
.comparison-table th {
  padding: 10px 15px;
  border: 1px solid #e9e9e9;
  color: #4b5563;
  min-width: 30%;
  vertical-align: baseline;
  border-top: none;
  border-bottom: none;
}

th.empty-cell,
.comparison-table-section-header > td:nth-child(1),
.comparison-table-row > td:nth-child(1) {
  /* width: 10%; */
  min-width: 10%;
}

.comparison-table-section-header > td:nth-child(2),
.comparison-table-row > td:nth-child(2) {
  border-left-style: dashed;
}

.comparison-table-section-header > td:last-child,
.comparison-table-row > td:last-child {
  border-right-style: none;
}

.comparison-table .comparison-table-section-header td {
  padding: 10px;
  background: #f9f9f9;
  color: #000;
  font-weight: 500;
}
.comparison-table .comparison-table-desc {
  display: block;
  font-size: 11px;
  color: #aaa;
  max-height: 0;
  overflow: hidden;
  margin: 0;
}

.comparison-table th {
  background: #f9f9f9;
  font-weight: 500;
  text-transform: uppercase;
  color: #666;
  padding-top: 20px;
  padding-bottom: 20px;
  letter-spacing: 2px;
  font-size: 14px;
}

.comparison-table td:first-child {
  text-align: left;
  border: none;
}
.comparison-table .fa-check {
  color: #7ab55c;
}
.comparison-table .fa-close {
  color: #b55c68;
}

.tour-highlights {
  color: #4b5563;
  font-size: 14px;
}

td.accommodation > div {
  padding-left: 10px;
}

.title-card {
  text-align: left;
}

.title-card button {
  float: right;
  background: transparent;
  cursor: pointer;
  border: none;
}

.title-card h1 {
  color: #000;
  font-size: 16px;
  font-weight: 400;
  text-transform: capitalize;
  height: 3em;
  line-height: inherit;
}

.title-card img {
  height: 12em;
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
}

.buy-wrapper h5 {
  margin-bottom: -10px;
}

.buy-wrapper p {
  margin-bottom: 0px;
}

.title-card-wrapper {
  border-bottom: 1px solid #8080801f !important;
  border-left: none !important;
  border-right: none !important;
  background: none !important;
}
</style>
