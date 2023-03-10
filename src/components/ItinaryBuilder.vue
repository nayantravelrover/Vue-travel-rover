<template>
  <div>
        <q-toolbar>
            
            <q-btn color="primary" label="Back" @click="go_to_create_itinerary" />
            <q-toolbar-title class="q-pa-md row item-center">
                <img src="../assets/logo.svg" style="max-width: 200px;"/>
            </q-toolbar-title>
            <q-btn flat dense round class="q-ml-md" :icon="matAccountCircle" aria-label="Menu" color="primary" >
                <q-menu>
                    <q-list style="min-width: 100px;max-height:89px">
                        <!-- <q-item clickable v-close-popup>
                                    <q-item-section>Login</q-item-section>
                                  </q-item> -->
                        <LoginPage2 v-if="this.$store.state.user_logged_in===false"/>
                          <div class="q-pa-xs" v-if="this.$store.state.user_logged_in===false">
                            <RegisterPage/>
                          </div>


                          <!-- <q-btn label="Profile" color="primary"  style="margin-top:3px; width: 91px; margin: 4px;" v-if="this.$store.state.user_logged_in" @click="go_to_profile" /> -->
                          <div class="q-pa-xs">
                          <q-btn label="Logout" color="primary"  style="width: 100%;" v-if="this.$store.state.user_logged_in" @click="logout"/>
                           </div>
            
                    </q-list>
                </q-menu>
            </q-btn>
        </q-toolbar>
    </div>
  <div class="row">
  <q-scroll-area   class="col-6 q-pa-md" style="height: 100vh;">
  <div  class="col q-pa-md">
<!--    <div class="q-ma-sm">-->
    <div class="text-bold  row sectionheading" >Place Name</div>
    <q-select outlined v-model="place_name" :options="[
        'Himachal Pradesh','Leh Ladakh','Goa','Kashmir','Uttarakhand'
      ]"  />
<!--    </div>-->
    <div id="place_description" class="q-pt-lg ">
      <div class="text-bold row sectionheading" >Place Description</div>
      <q-input class="row" outlined v-model="place_description" />

    

<!--    <PicturedWYISG property_key="place_description" heading="Place Description"></PicturedWYISG>-->
    <div class="q-pt-sm">
      <q-uploader
        flat
        bordered
        color="white"
        text-color="black"
        url="https://admin.travelrover.in/travel-rover/api-files/"
        style=""
        auto-upload
        label="Add image if any"
        field-name="file"
        max-files="1"
        @uploaded="place_file_uploaded"/>

    </div>
      </div>
  <div id="itinerary_name" class="q-pt-lg ">

    <div class="text-bold sectionheading row">Itinerary Name</div>
    <q-input class="row" outlined v-model="itinerary_name" />
  </div>

  <PicturedWYISG class="q-pt-lg" property_key="tour_highlights" heading="Tour Highlights"></PicturedWYISG>


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
        <q-input dense class="row" v-model="number_of_days" outlined />
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

    <PicturedWYISG :image="false" class="q-pt-lg" property_key="places_to_visit" heading="Places to Visit"></PicturedWYISG>

     <OnlyPicture :image="true" class="q-pt-lg" property_key="places_to_visit_1" heading="Places to Visit Image One"></OnlyPicture>

     <OnlyPicture :image="true" class="q-pt-lg" property_key="places_to_visit_2" heading="Places to Visit Image Two"></OnlyPicture>

     <OnlyPicture :image="true" class="q-pt-lg" property_key="places_to_visit_3" heading="Places to Visit Image Three"></OnlyPicture>

     <OnlyPicture :image="true" class="q-pt-lg" property_key="places_to_visit_4" heading="Places to Visit Image Four"></OnlyPicture>


     <PicturedWYISG  class="q-pt-lg " property_key="accomodation_arrangements" heading="Accomodation Arrangements"></PicturedWYISG>

     <OnlyPicture :image="true" class="q-pt-lg" property_key="accomodation_arrangements_1" heading="Accomodations Arrangements Image One"></OnlyPicture>

     <OnlyPicture :image="true" class="q-pt-lg" property_key="accomodation_arrangements_2" heading="Accomodations Arrangements Image Two"></OnlyPicture>

     <OnlyPicture :image="true" class="q-pt-lg" property_key="accomodation_arrangements_3" heading="Accomodations Arrangements Image Three"></OnlyPicture>

     <OnlyPicture :image="true" class="q-pt-lg" property_key="accomodation_arrangements_4" heading="Accomodations Arrangements Image Four"></OnlyPicture>


     <PicturedWYISG class="q-pt-lg " property_key="travel_arrangements" heading="Travel Arrangements"></PicturedWYISG>
     <PicturedWYISG class="q-pt-lg " property_key="inclusions" heading="Inclusions"></PicturedWYISG>
     <PicturedWYISG class="q-pt-lg " property_key="exclusions" heading="Exclusions"></PicturedWYISG>
     <PicturedWYISG class="q-pt-lg " property_key="terms_and_conditions" heading="Terms and Conditions"></PicturedWYISG>
     <PicturedWYISG class="q-pt-lg " property_key="cancellations_policy" heading="Cancellations Policy"></PicturedWYISG>
     <PicturedWYISG class="q-pt-lg " property_key="things_to_carry" heading="Things to Carry"></PicturedWYISG>
     <PicturedWYISG class="q-pt-lg " property_key="tour_rates" heading="Tour Rates"></PicturedWYISG>
    </div>
   </q-scroll-area>
    <div class="col-6 q-pa-md" style="background-color: #4B5563;">
      <div style="background-color: transparent">
        <q-btn flat  text-color="white" icon="download" label="Download" @click="generateReport()"></q-btn>
        <q-btn flat  text-color="white" icon="save" label="Save"  class="" @click="save_itinerary()"></q-btn>
      </div>
      <q-scroll-area style="height: 92vh">
        <ItineraryPreview class="q-ma-lg"  id="preview"></ItineraryPreview>
      </q-scroll-area>
    </div>
  </div>
</template>
<script>
import DayEditor from "components/DayEditor";
import ItineraryPreview from "components/ItineraryPreview";
import PicturedWYISG from "components/PicturedWYISG";
import OnlyPicture from "components/OnlyPicture";
import { ref } from 'vue'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import html2pdf from "html2pdf.js/src";
import { places, load_place_itinerary_data,base_url,liked_itinerary, viewed_itinerary_api ,save_itinerary_api, view_itinerary,check_if_refresh_token_is_valid,check_if_access_token_is_valid, my_itinerary} from "src/common/api_calls";
import { useQuasar, Notify } from 'quasar'
import { matAccountCircle } from "@quasar/extras/material-icons";
import {toDataURL} from "src/common/utils";

let $q

export default {
  name: "Itinary-Builder",
  components: {PicturedWYISG, ItineraryPreview, DayEditor,Datepicker,OnlyPicture },
  mounted(){
    const urlParams = window.location.href;
    var itinerary_pk = window.location.href.split("?pk=")[1];
    this.view_itinerary(itinerary_pk)
  },
  methods: {
      view_itinerary(itinerary_pk){
            var data = {
                "itinerary_pk":itinerary_pk
            }
            
            check_if_access_token_is_valid().then(response=>{

              var access_token = window.localStorage.getItem("travel_rover_access");

              this.card = true
              var itinerary = []
              console.log(itinerary_pk)

              if(itinerary_pk != -1){
                  my_itinerary(data,access_token).then(response=>{
                  console.log(JSON.parse(response["data"]["data"])[0]["fields"])
                  this.$store.commit('itinerary_preview_update', JSON.parse(response["data"]["data"])[0]["fields"])


                  var start_dates = JSON.parse(response["data"]["data"])[0]["fields"]["start_dates"]
                  start_dates = JSON.parse(start_dates)
                  console.log(start_dates)
                  this.$store.commit('start_dates_update', start_dates)  
              })
              }


              
                //this.$store.commit('itinerary_preview_update', itinerary)
              this.$store.commit('user_logged_in_update', true)
            }).catch(err =>{
                console.log(err)
                check_if_refresh_token_is_valid().then(response => {
                  var access_token = response["data"]["access"];

                  window.localStorage.setItem("travel_rover_access", access_token);

                  //this.$store.commit('itinerary_preview_update', itinerary)
                  if(itinerary_pk != -1){
                  my_itinerary(data,access_token).then(response=>{
                  console.log(JSON.parse(response["data"]["data"])[0]["fields"])
                  this.$store.commit('itinerary_preview_update', JSON.parse(response["data"]["data"])[0]["fields"])


                  var start_dates = JSON.parse(response["data"]["data"])[0]["fields"]["start_dates"]
                  start_dates = JSON.parse(start_dates)
                  console.log(start_dates)
                  this.$store.commit('start_dates_update', start_dates)
                  })
                  }
                  this.$store.commit('user_logged_in_update', true)
                  
                }).catch(err =>{
                  $q.notify({
                    type: 'negative',
                    message: 'Kindly log-in/sign-up to enable this functionality',
                    position: 'top'
                  })
                  this.$store.commit('user_logged_in_update', false)
                  console.log(err);
                });
            });
        },
      place_file_uploaded: function(info) {
        var file_response = JSON.parse(info.xhr.response).file
        file_response = 'https://admin.travelrover.in' + file_response
        this.$store.commit('place_img_update', file_response)
      },
      days_add:function (){
        console.log("add days called")
        this.$store.commit('day_add', 1)
        console.log(this.$store.state.itinerary_preview.days)
      },

    generateReport () {
        
        async function update_cover_image(images_list) {
          const data_cover_image = await toDataURL(images_list.state.itinerary_preview.place_img);
          images_list.commit('place_img_update', data_cover_image);
        }

        async function update_places_to_visit(images_list) {

          for(let i = 0; i < images_list.state.itinerary_preview.places_to_visit_img[0].images.length; i++) {
            
            if(images_list.state.itinerary_preview.places_to_visit_img[0].images[i] != ""){

              const dataUrl = await toDataURL(images_list.state.itinerary_preview.places_to_visit_img[0].images[i]);
              
              images_list.commit('places_to_visit_'+(i+1)+'_img_update', dataUrl);

              console.log(images_list);
            }
          }
        }

        async function accomodation_arrangements(images_list) {

          for(let i = 0; i < images_list.state.itinerary_preview.accomodation_arrangements_img[0].images.length; i++) {
            
            if(images_list.state.itinerary_preview.accomodation_arrangements_img[0].images[i] != ""){

              const dataUrl = await toDataURL(images_list.state.itinerary_preview.accomodation_arrangements_img[0].images[i]);
              
              images_list.commit('accomodation_arrangements_'+(i+1)+'_img_update', dataUrl);

              console.log(images_list);
            }
          }
        }


        async function updateDaysImages(images_list) {
          alert("PDF will be downloaded within " + 2*images_list.state.itinerary_preview.days.length + " seconds")

          for(let i = 0; i < images_list.state.itinerary_preview.days.length; i++) {
            
            const dataUrl = await toDataURL(images_list.state.itinerary_preview.days[i].images);
            const day_content_indexed = { index_day: i, value: dataUrl };
            images_list.commit('day_img_update', day_content_indexed);

            console.log(images_list);
            if(i==images_list.state.itinerary_preview.days.length-1){

              setTimeout(() => {
                html2pdf(document.getElementById("preview"), {
                pagebreak: { mode: 'avoid-all', before: '#page2el' },
                filename: images_list.state.itinerary_preview.place_name,
              })
              }, "1000")
            }
          }
        }




        update_cover_image(this.$store).then(response=>{
          console.log("done")
        })

        accomodation_arrangements(this.$store).then(response=>{
          console.log("done")
        })

        update_places_to_visit(this.$store).then(response=>{
          console.log("done")
        })

        updateDaysImages(this.$store).then(response=>{
          console.log("done")
        })

      },
      save_itinerary: function(){
        console.log(this.$store.state.itinerary_preview)


        check_if_access_token_is_valid().then(response=>{

              var access_token = window.localStorage.getItem("travel_rover_access");

              save_itinerary_api({"itinerary":this.$store.state.itinerary_preview,"itinerary_pk":window.location.href.split("?pk=")[1]},access_token)
              
              this.$store.commit('user_logged_in_update', true)
            }).catch(err =>{
                console.log(err)
                check_if_refresh_token_is_valid().then(response => {
                  var access_token = response["data"]["access"];

                  window.localStorage.setItem("travel_rover_access", access_token);
                  save_itinerary_api({"itinerary":this.$store.state.itinerary_preview,"itinerary_pk":window.location.href.split("?pk=")[1]},access_token)
                  this.$store.commit('user_logged_in_update', true)
                }).catch(err =>{
                  $q.notify({
                    type: 'negative',
                    message: 'Kindly log-in/sign-up to enable this functionality',
                    position: 'top'
                  })
                  this.$store.commit('user_logged_in_update', false)
                  console.log(err);
                });
            });
      },
      go_to_create_itinerary(){
        this.$router.push({
          path: '/itinerarybuilder',
          name:'ItineraryBuilder',
          query: { pk: -1 }
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
    tour_highlights: {
      set(val){
        this.$store.commit('tour_highlights_update', val)
      },
      get() {
        return this.$store.state.itinerary_preview.tour_highlights
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
        console.log(this.$store.state.itinerary_preview.start_dates)
      },
      get() {
        return this.$store.state.itinerary_preview.start_dates
      }
    },
    number_of_days:{
      set(val){
        this.$store.commit('number_of_days_update', val)
      },
      get() {
        return this.$store.state.itinerary_preview.number_of_days
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
    this.matAccountCircle = matAccountCircle;
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
