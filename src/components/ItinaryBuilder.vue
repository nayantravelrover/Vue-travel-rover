<template>
  <div class="row">
  <q-scroll-area   class="col-6 q-pa-md" style="height: 100vh;">
  <div  class="col q-pa-md">
<!--    <div class="q-ma-sm">-->
    <div class="text-bold  row sectionheading" >Place Name</div>
    <q-select outlined v-model="place_name" :options="[
        'Ladakh', 'Himalayas'
      ]"  />
<!--    </div>-->
    <div id="place_description" class="q-pt-lg ">
      <div class="text-bold row sectionheading" >Place Description</div>
      <q-input class="row" outlined v-model="place_description" />

<!--    <PicturedWYISG property_key="place_description" heading="Place Description"></PicturedWYISG>-->
    <div class="q-pt-sm">
      <q-uploader
        bordered
        color="white"
        text-color="grey"
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
      </div>
  <div id="itinerary_name" class="q-pt-lg ">

    <div class="text-bold sectionheading row" >Itinerary Name</div>
    <q-input class=" row" outlined v-model="itinerary_name" />
  </div>
    <div class="q-pt-lg ">
    <div class="row">
      <div class="col-6">
        <div class=" text-bold row sectionheading" >Start Dates</div>
        <!-- <q-input class="row" filled v-model="start_date" mask="date" :rules="['date']">
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
        </q-input> -->
        <Datepicker class="q-pr-md" v-model="start_dates" :enableTimePicker="false" multiDates />
      </div>
      <div class="col-6">
        <div class=" text-bold row sectionheading">Number of Days</div>
        <q-input dense class="row" outlined />
      </div>
      </div>
    </div>
    <div class="q-pt-lg ">
      <div class="sectionheading" style="font-size: large">Itinerary</div>
    </div>
      <div class="" v-for="(day, index) in days" v-bind:key="index">
        <div  class="q-pt-lg ">
        <DayEditor :day_index="index" :day_content="day.description" :day_images="day.images"></DayEditor>
        </div>
        </div>
      <q-btn  class="row" @click="days_add()">Add day</q-btn>
      <br>
      <PicturedWYISG class="q-pt-lg " property_key="places_to_visit" heading="Places to Visit"></PicturedWYISG>
     <PicturedWYISG class="q-pt-lg " property_key="accomodation_arrangements" heading="Accomodation Arrangements"></PicturedWYISG>
     <PicturedWYISG class="q-pt-lg " property_key="travel_arrangements" heading="Travel Arrangements"></PicturedWYISG>
     <PicturedWYISG class="q-pt-lg " property_key="inclusions" heading="Inclusions"></PicturedWYISG>
     <PicturedWYISG class="q-pt-lg " property_key="exclusions" heading="Exclusions"></PicturedWYISG>
     <PicturedWYISG class="q-pt-lg " property_key="terms_and_conditions" heading="Terms and Conditions"></PicturedWYISG>
     <PicturedWYISG class="q-pt-lg " property_key="cancellations_policy" heading="Cancellations Policy"></PicturedWYISG>
     <PicturedWYISG class="q-pt-lg " property_key="things_to_carry" heading="Things to Carry"></PicturedWYISG>
     <PicturedWYISG class="q-pt-lg " property_key="tour_rates" heading="Tour Rates"></PicturedWYISG>
    </div>
   </q-scroll-area>
    <div class="col-6 q-pa-md" style="background-color: #4B5563">
      <div style="background-color: transparent">
        <q-btn flat  text-color="white" icon="download" label="Download" @click="generateReport()"></q-btn>
        <q-btn flat  text-color="white" icon="save" label="Save"  class="" @click="print()"></q-btn>
      </div>
      <q-scroll-area style="height: 100vh;">
        <ItineraryPreview class="q-ma-lg"  id="preview"></ItineraryPreview>
      </q-scroll-area>
    </div>
  </div>
</template>
<script>
import DayEditor from "components/DayEditor";
import ItineraryPreview from "components/ItineraryPreview";
import PicturedWYISG from "components/PicturedWYISG";
import { save_itinerary_api } from "src/common/api_calls";
import { ref } from 'vue'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import html2pdf from "html2pdf.js/src";

export default {
  name: "Itinary-Builder",
  components: {PicturedWYISG, ItineraryPreview, DayEditor,Datepicker, },
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
    generateReport () {
        console.log("generate report done")
        html2pdf(document.getElementById("preview"), {
            // margin: 1,
            pagebreak: { mode: 'avoid-all', before: '#page2el' },
            filename: this.$store.state.itinerary_preview.place_name,
            // image: { type: 'jpeg', quality: 0.98 },
            // html2canvas: { dpi: 192, letterRendering: true },
            // jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
				  })
      },
    addScript(url) {
     var script = document.createElement('script');
     script.type = 'application/javascript';
     script.src = url;
     document.head.appendChild(script);
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
      date: [],
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
    start_dates: {
      set(val){
        var updated_dates = []
        val.map((date)=>{
          updated_dates.push(date.toISOString().slice(0,10))
        })
        this.$store.commit('start_dates_update', updated_dates)
      },
      get() {
        return this.$store.state.itinerary_preview.start_dates
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
    // this.addScript('https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js');
  },

}
</script>

<style scoped>
  .sectionheading{
    color: #4B5563;
    font-size: large;
    font-weight: bold;
  }
  div{
    font-family: "Helvetica Neue";
  }
  .dp__button{
    display: none;
  }
</style>
