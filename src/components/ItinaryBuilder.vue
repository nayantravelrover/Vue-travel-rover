<template>
  <div class="row q-pa-md">
  <div class="col-6">
    <div class="text-bold">Place Name</div>
    <div class="text-bold">Place Name</div>
    <div class="text-bold">Place Name</div>
    <div class="text-bold q-ma-sm row" style="font-size: large">Place Name</div>
    <q-input class="q-ma-sm row" outlined v-model="place_name" label="Place Name"/>
    <div class="text-bold q-ma-sm row" style="font-size: large">Place Description</div>
    <q-input class="q-ma-sm row" outlined v-model="place_description" label="Place Description"/>
    <div class="q-pa-sm row">
      <q-file
        v-model="place_img"
        label="Pick files"
        outlined
        use-chips
        multiple
        style="max-width: 300px"
      />
    </div>
    <div class="text-bold q-ma-sm row" style="font-size: large">Itinerary Name</div>
    <q-input class="q-ma-sm row" outlined v-model="itinerary_name" label="Itinerary Name"/>
    <div class="q-ma-sm text-bold row" style="font-size: large">
      <div class="col-6">
        <div class="q-ma-sm text-bold row" style="font-size: large">Start Date</div>
        <q-input class="q-mr-md row" filled v-model="start_date" mask="date" :rules="['date']">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="date">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat/>
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="col-6">
        <div class="q-ma-sm text-bold row" style="font-size: large">Number of Days</div>
        <q-input class="row" outlined v-model="text" label="Itinerary Name"/>
      </div>
      <div class="row text-bold q-ma-sm" style="font-size: large">Itinerary</div>
      <div class="row" v-for="(day, index) in days" v-bind:key="index">
        <DayEditor :day_index="index" :day_content="day.description" :day_images="day.images"></DayEditor>
      </div>
      <q-btn class="column" @click="days_add()"> Add day</q-btn>
      <br/>
      <PicturedWYISG class="row" heading="Places to Visit"></PicturedWYISG>
     <PicturedWYISG heading="Accomodation Arrangements"></PicturedWYISG>
     <PicturedWYISG heading="Travel Arrangements"></PicturedWYISG>
     <PicturedWYISG heading="Inclusions"></PicturedWYISG>
     <PicturedWYISG heading="Exclusions"></PicturedWYISG>
     <PicturedWYISG heading="Terms and Conditions"></PicturedWYISG>
     <PicturedWYISG heading="Cancellations Policy"></PicturedWYISG>
     <PicturedWYISG heading="Things to Carry"></PicturedWYISG>
     <PicturedWYISG heading="Tour Rates"></PicturedWYISG>

<!--    </div>-->
  </div>
    </div>
    <div class="col-6 q-pa-md bg-grey">
    <ItineraryPreview ></ItineraryPreview>
      </div>
  </div>

</template>

<script>
import DayEditor from "components/DayEditor";
import ItineraryPreview from "components/ItineraryPreview";
import PicturedWYISG from "components/PicturedWYISG";
export default {
  name: "Itinary-Builder",
  components: {PicturedWYISG, ItineraryPreview, DayEditor},
  setup() {
    return {
      // days:1
      // date: ref('2019/02/01')
    }
  },
  methods: {
      days_add:function (){
        console.log("add days called")
        this.$store.commit('day_add', 1)
        console.log(this.$store.state.itinerary_preview.days)

      }
  },
  computed:{
    place_name: {
      set(val){
        this.$store.commit('place_name_update', val)
      },
      get() {
        return this.$store.state.itinerary_preview.place_name
      }
    },
    place_description: {
      set(val){
        this.$store.commit('place_description_update', val)
      },
      get() {
        return this.$store.state.itinerary_preview.place_description
      }
    },
    place_img: {
      set(val){
        this.$store.commit('place_img_update', val)
      },
      get() {
        return this.$store.state.itinerary_preview.place_img
      }
    },
    itinerary_name: {
      set(val){
        this.$store.commit('itinerary_name_update', val)
      },
      get() {
        return this.$store.state.itinerary_preview.itinerary_name
      }
    },
    start_date: {
      set(val){
        this.$store.commit('start_date_update', val)
      },
      get() {
        return this.$store.state.itinerary_preview.start_date
      }
    },

    itinerary_update: {
      set(val){
        this.$store.commit('itinerary_update', val)
      },
      get() {
        return this.$store.state.itinerary_preview
      }
    },
    days: {
      set(val){
        this.$store.commit('day_update', val)
      },
      get() {
        return this.$store.state.itinerary_preview.days
      }
    },
  },
  created() {
    console.log(this.days)
  }
}
</script>

<style scoped>

</style>
