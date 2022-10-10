<template>
  <div id="preview" class="column bg-white">
    <q-img class="row" :src="itinarary_data.place_img">
      <div class="column absolute-full flex flex-center text-subtitle2" >
        <img class="q-pa-md top-left" src="../assets/logo.svg" />
        <div class="row" style="font-size: x-large; color: white">{{itinarary_data.place_name}}</div>
        <div class="row" style="color: white">{{itinarary_data.place_description}}</div>
      </div>
    </q-img>
    <div class="text-bold q-pa-md row" style="font-size: large">{{itinarary_data.itinerary_name}}</div>
    <div v-for="(day, index) in itinarary_data.days" v-bind:key="index" class ="row">
      <DayPreview :day="day" :day_index="index"></DayPreview>
    </div>
    <ItineraryContentPreview :image="itinarary_data.places_to_visit_img" :content="itinarary_data.places_to_visit" label="Places to visit"></ItineraryContentPreview>
    <ItineraryContentPreview :image="itinarary_data.accomodation_arrangements_img" :content="itinarary_data.accomodation_arrangements" label="Accomodation Arrangements"></ItineraryContentPreview>
    <ItineraryContentPreview :image="itinarary_data.travel_arrangements_img"  :content="itinarary_data.travel_arrangements" label="Travel Arrangements"></ItineraryContentPreview>
    <ItineraryContentPreview :image="itinarary_data.inclusions_img" :content="itinarary_data.inclusions" label="Inclusions"></ItineraryContentPreview>
    <ItineraryContentPreview :image="itinarary_data.exclusions_img" :content="itinarary_data.exclusions" label="Exclusions"></ItineraryContentPreview>
    <ItineraryContentPreview :image="itinarary_data.terms_and_conditions_img" :content="itinarary_data.terms_and_conditions" label="Terms and Conditions"></ItineraryContentPreview>
    <ItineraryContentPreview :image="itinarary_data.cancellations_policy_img" :content="itinarary_data.cancellations_policy" label="Cancellations Policy"></ItineraryContentPreview>
    <ItineraryContentPreview :image="itinarary_data.things_to_carry_img" :content="itinarary_data.things_to_carry" label="Things to Carry"></ItineraryContentPreview>
</div>
</template>


<script>
import {save_itinerary_api} from "src/common/api_calls";
import DayPreview from "components/DayPreview";
import ItineraryContentPreview from "components/ItineraryContentPreview";

export default {
  name: "ItineraryPreview",
  components: {ItineraryContentPreview, DayPreview},
  methods: {
    print () {
      // Pass the element id here
      this.d.print('#preview')
    },
    save_itinerary: function(){
        console.log(this.$store.state.itinerary_preview)
        save_itinerary_api(this.$store.state.itinerary_preview)
      },
  },
  mounted() {
  },
  computed:{
    itinarary_data:function (){
      return this.$store.state.itinerary_preview
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
</style>
