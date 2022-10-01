<template>
  <div class="row">
  <q-scroll-area class="col-6 q-pa-md" style="height: 100vh;">
  <div >
    <div class="text-bold q-ma-sm row" style="font-size: large">Place Name</div>
    <q-input class="q-ma-sm row" outlined v-model="place_name" label="Place Name"/>
    <div class="text-bold q-ma-sm row" style="font-size: large">Place Description</div>
    <q-input class="q-ma-sm row" outlined v-model="place_description" label="Place Description"/>
    <div class="q-pa-sm row">
      <q-uploader
        color="grey"
        url="http://admin.travelrover.in/travel-rover/api-files/"
        style=""
        auto-upload
        label="Add image if any"
        field-name="file"
        @uploaded="place_file_uploaded"/>
<!--      <q-card style="width:100px">-->
<!--          <q-card-section class="text-subitle2">-->
<!--            <div :style="{ 'background-image': `url(${imageData})` }" @click="choosepicture">-->
<!--              <span-->
<!--                v-if="!imageData"-->
<!--                class="placeholder"-->
<!--                style="cursor: pointer"-->
<!--              >Choose a picture</span>-->
<!--              <input hidden class="file-input" ref="fileInput" type="file" @input="onSelectFile" />-->
<!--            </div>-->
<!--            <q-img :src="imageData" style="cursor: pointer" @click="choosepicture" />-->
<!--          </q-card-section>-->
<!--      </q-card>-->
    </div>
    <div class="text-bold q-ma-sm row" style="font-size: large">Itinerary Name</div>
    <q-input class="q-ma-sm row" outlined v-model="itinerary_name" label="Itinerary Name"/>
    <div class="q-ma-sm row" style="font-size: large">
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
      <q-btn  class="row" @click="days_add()">Add day</q-btn>
      <br>
      <PicturedWYISG property_key="places_to_visit" heading="Places to Visit"></PicturedWYISG>
     <PicturedWYISG property_key="accomodation_arrangements" heading="Accomodation Arrangements"></PicturedWYISG>
     <PicturedWYISG property_key="travel_arrangements" heading="Travel Arrangements"></PicturedWYISG>
     <PicturedWYISG property_key="inclusions" heading="Inclusions"></PicturedWYISG>
     <PicturedWYISG property_key="exclusions" heading="Exclusions"></PicturedWYISG>
     <PicturedWYISG property_key="terms_and_conditions" heading="Terms and Conditions"></PicturedWYISG>
     <PicturedWYISG property_key="cancellations_policy" heading="Cancellations Policy"></PicturedWYISG>
     <PicturedWYISG property_key="things_to_carry" heading="Things to Carry"></PicturedWYISG>
     <PicturedWYISG property_key="tour_rates" heading="Tour Rates"></PicturedWYISG>

<!--    </div>-->
  </div>
    </div>
   </q-scroll-area>
    <div class="col-6 q-pa-md bg-grey">
      <q-scroll-area style="height: 100vh;">
    <ItineraryPreview ></ItineraryPreview>
        </q-scroll-area>
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
    }
  },
  methods: {
      place_file_uploaded: function(info) {
        var file_response = JSON.parse(info.xhr.response).file
        file_response = 'http://admin.travelrover.in' + file_response
        this.$store.commit('place_img_update', file_response)
      },
      days_add:function (){
        console.log("add days called")
        this.$store.commit('day_add', 1)
        console.log(this.$store.state.itinerary_preview.days)

      },
    onSelectFile() {
      const input = this.$refs.fileInput;
      const files = input.files;
      this.FileImage = files[0];
      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = e => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(files[0]);
        this.$emit("input", files[0]);
      }
      console.log(this.imageData)
    },
    choosepicture() {
      this.$refs.fileInput.click();
    },
  },
  data(){
    return {
      imageData: null,
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
