<template>
  <div class="column bg-white">
        <q-img class="" :src="itinarary_data.place_img">
          <div class="" >
           <span style="font-size: x-large">{{itinarary_data.place_name}}</span>
            <br>{{itinarary_data.place_description}}
          </div>
        </q-img>
    <div class="text-bold q-ma-sm row" style="font-size: large">{{itinarary_data.itinerary_name}}</div>
    <div v-for="(day, index) in itinarary_data.days" v-bind:key="index" class ="row">
      <div class="col-8">
        <p class="text-bold q-pa-md">Day {{index+1}}</p>
        <p class=" q-pa-md" v-html="day.description"></p>
      </div>
      <div class="col-4 q-pa-md">
        <q-img :src="day.images[0]" class="q-ma-md"></q-img>
      </div>
    </div>
    <div class="text-bold row q-ma-sm">Places to visit</div>
    <div class="q-ma-sm" v-html="itinarary_data.places_to_visit"></div>
    <div class="text-bold row q-ma-sm">Accomodation Arrangements</div>
    <div class="q-ma-sm" v-html="itinarary_data.accomodation_arrangements"></div>

    <div class="text-bold row q-ma-sm">Travel Arrangements</div>
    <div class="q-ma-sm" v-html="itinarary_data.travel_arrangements"></div>

    <div class="text-bold row q-ma-sm">Inclusions</div>
    <div class="q-ma-sm" v-html="itinarary_data.inclusions"></div>

    <div class="text-bold row q-ma-sm">Exclusions</div>
    <div class="q-ma-sm" v-html="itinarary_data.exclusions"></div>

    <div class="text-bold row q-ma-sm">Terms and Conditions</div>
    <div class="q-ma-sm" v-html="itinarary_data.terms_and_conditions"></div>

    <div class="text-bold row q-ma-sm">Cancellations Policy</div>
    <div class="q-ma-sm" v-html="itinarary_data.cancellations_policy"></div>

    <div class="text-bold row q-ma-sm">Things to Carry</div>
    <div class="q-ma-sm" v-html="itinarary_data.things_to_carry"></div>
</div>
</template>


<script>
export default {
  name: "ItineraryPreview",
  computed:{
    itinarary_data:function (){
      return this.$store.state.itinerary_preview
    }
  }
}
</script>

<style scoped>

</style>
