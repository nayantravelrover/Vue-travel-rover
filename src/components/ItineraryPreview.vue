<template>
  <div id="preview" class="column bg-white">
    <q-img style="height: 30vh" :src="itinarary_data.place_img">
<!--       <img class="q-pa-md top-left" src="../assets/logo.svg" style="max-width: 200px" />
 -->      
      <div class="column absolute-full flex flex-center text-subtitle2" >
<!--         <div class="row"><img class="q-pa-md" src="../assets/logo.svg"/></div>
 -->        
        <div class="row" style="font-size: x-large; color: white">{{itinarary_data.place_name}}</div>
        <div class="row" style="color: white">{{itinarary_data.place_description}}</div>
      </div>
    </q-img>
    <div class="text-bold q-pa-md row">{{itinarary_data.itinerary_name}}</div>
    <div class="text-bold q-pa-md row" style="font-size: medium" v-html="itinarary_data.tour_highlights"></div>

    <ItineraryDates></ItineraryDates>
    <div v-for="(day, index) in itinarary_data.days" v-bind:key="index" style="width: 100%;">
      <DayPreview :day="day" :day_index="index"></DayPreview>
    </div>
    <ItineraryContentPreview :content="itinarary_data.places_to_visit" label="Places to visit"></ItineraryContentPreview>

    <div :class="{'grid-container': nonEmptyImagesCountPlacesToVisit > 1}">
    <div v-for="(img, index) in itinarary_data.places_to_visit_img[0].images" :key="index" class="grid-item">
      <img v-if="img !== ''" :src="img" alt="place to visit" style="border-radius: 10px" width="200" height="200">
    </div>
  </div>

    

    <!-- <ItineraryContentPreview  :content="itinarary_data.places_to_visit_img" label="Places to visit"></ItineraryContentPreview> -->
    <ItineraryContentPreview :content="itinarary_data.accomodation_arrangements" label="Accomodation Arrangements"></ItineraryContentPreview>

    <div :class="{'grid-container': nonEmptyImagesCountAccomodationArrangement > 1}">
    <div v-for="(img, index) in itinarary_data.accomodation_arrangements_img[0].images" :key="index" class="grid-item">
      <img v-if="img !== ''" :src="img" alt="accomodation_arrangements_img" style="border-radius: 10px" width="200" height="200">
    </div>
  </div>
    
    <ItineraryContentPreview :content="itinarary_data.travel_arrangements" label="Travel Arrangements"></ItineraryContentPreview>
    <ItineraryContentPreview :content="itinarary_data.inclusions" label="Inclusions"></ItineraryContentPreview>
    <ItineraryContentPreview :content="itinarary_data.exclusions" label="Exclusions"></ItineraryContentPreview>
    <ItineraryContentPreview :content="itinarary_data.terms_and_conditions" label="Terms and Conditions"></ItineraryContentPreview>
    <ItineraryContentPreview :content="itinarary_data.cancellations_policy" label="Cancellations Policy"></ItineraryContentPreview>
    <ItineraryContentPreview :content="itinarary_data.things_to_carry" label="Things to Carry"></ItineraryContentPreview>
    <ItineraryContentPreview :content="itinarary_data.tour_rates" label="Tour rates"></ItineraryContentPreview>
   <!--  <ExtraSections v-if="$store.state.itinerary_preview.extra_sections.length>0" class="q-pa-lg"></ExtraSections> -->
  </div>
</template>


<script>
import DayPreview from "components/DayPreview";
import ItineraryContentPreview from "components/ItineraryContentPreview";
import ItineraryDates from "components/ItineraryDates";
// import ExtraSections from "components/ExtraSections";


export default {
  name: "ItineraryPreview",
  components: {ItineraryDates, ItineraryContentPreview, DayPreview},
  methods: {
    print () {
      // Pass the element id here
      this.d.print('#preview')
    },
  },
  mounted() {
  },
  computed:{
    itinarary_data:function (){
      return this.$store.state.itinerary_preview
    },
    nonEmptyImagesCountPlacesToVisit() {
      return this.itinarary_data.places_to_visit_img[0].images.filter(img => img !== '').length;
    },
    nonEmptyImagesCountAccomodationArrangement(){
      return this.itinarary_data.accomodation_arrangements_img[0].images.filter(img => img !== '').length;
    }
  },
  setup(){},
  created(){}
}
</script>

<style scoped>
div{
    font-family: "Helvetica Neue";
   color: #4B5563;
  }

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: minmax(200px, auto);
  grid-gap: 10px;
}

.grid-item {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 10px;
  overflow: hidden;
}

.grid-item img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

</style>
