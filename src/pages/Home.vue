<template>
  <div id="home">
    <div class="main-container row justify-center q-pa-md gt-sm">
      <div class="col-md-8 content">
        <div class="row items-center justify-center">
          <div class="input-area-1 col-md-5 col-xs-12" style="background-color: white">
           <q-select filled v-model="where_to" :options="options" label="Where to?">
              <template v-slot:prepend>
                <q-icon style="margin-left: 5px;" name="place" />
              </template>
            </q-select>
          </div>
          <div class="input-area-2 col-md-4 col-xs-12" style="background-color: white">
            <q-input borderless bg-color="white" label="Date ?" v-model="date">
              <template v-slot:prepend>
                <q-icon style="margin-left: 5px;" name="event" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="date" mask="YYYY-MM-DD">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <!-- <div class="input-area-3 col-md-3 col-xs-12" style="background-color: white">
            <q-input borderless bg-color="white" label="To ?" v-model="date">
              <template v-slot:prepend>
                <q-icon style="margin-left: 5px;" name="event" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="date" mask="YYYY-MM-DD">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div> -->
          <div class="input-area-4 col-md-3 col-xs-12" style=""><q-btn color="" class="search-btn" icon="search" label="Search" @click="go_to_images(this.where_to,this.date)" />
          </div>
        </div>
      </div>
      <div class="row items-center justify-between" style="width: 1000px">
        <div class="left-section col-md-7 q-pa-md-lg-xl">
          <h2><b>{{basic_data["header_content"]}}</b></h2>
          <h4>{{basic_data["intro_content"]}}</h4>
          <q-btn color="" text-color="black" class="explore-btn" label="Explore Destinations"
            :icon-right="matTrendingFlat" @click="scroll('destinations')" />
        </div>
        <div class="col-md-5 gt-sm">
          <q-img style="width: 420px; height: 308px" src="../assets/travel.svg" />
        </div>
      </div>
    </div>

<!------   Mobile Header   ------->

    <div class="main-container-mobile row justify-center q-pa-md lt-md">
      <div class="col-md-8 content ">
        <div class="row items-center justify-center">
          <div
            class="input-area-1 col-md-3 col-xs-12"
            style="background-color: white">
           <q-select filled v-model="where_to" :options="options" label="Where to?">
              <template v-slot:prepend>
                <q-icon name="place" />
              </template>
            </q-select>
          </div>
          
          <div
            class="input-area-2 col-md-3 col-xs-12"
            style="background-color: white">
            <q-input borderless bg-color="white" label="Date ?" v-model="date">
              <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="date" mask="YYYY-MM-DD">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>

          <div class="input-area-4 col-md-3 col-xs-12" style="">
            <q-btn color="" class="search-btn" icon="search" label="Search" @click="go_to_images(this.where_to,this.date)" />
          </div>
        </div>
      </div>
      <div class="row items-center justify-between">
        <div class="col-md-5 lt-md justify-center">
          <q-img style="width: 300px; height: 200px; margin:20px; margin-left: 30px;" src="../assets/travel.svg" />
        </div>
        <div class="left-section-mobile col-md-5 q-pa-md">
          <h4>{{basic_data["intro_content"]}}
          </h4>
          <q-btn color="" text-color="black" class="explore-btn" label="Explore Destinations" :icon-right="matTrendingFlat" @click="scroll('destinations')" />
          
        </div>
      </div>
    </div>
  

<!--- End of Mobile Header  ------>


    <!-- top 5 destinations -->
    <div class="q-pa-sm" style="margin-top: 50px;" id="destinations">
      <div class="carousel-heading">
        <h5 class="text-center">Top Destinations</h5>
      </div>
      <Carousel :itemsToShow="isMobile?1.3: 5.3">
        <Slide v-for="items,index in basic_data['explore_destination_images']" :key="items">
<div class="carousel__item-1" style="margin-top: 0px;" @click="go_to_images(basic_data['explore_destination'][index],default_date)">
            
            <q-card class="destination-carousel-card" >
              <img :src=items />
              
              <q-card-section>
                <div class="row no-wrap justify-between">
                  <div class="col-md-6 text-black text-caption text-weight-fat bold">
                    {{basic_data["explore_destination"][index]}}
                  </div>
                  <div class="col-md-3 text-black text-caption row no-wrap items-center">
                    <q-icon name="visibility" />
                    <div style="margin-left: 5px;">300</div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </Slide>
      </Carousel>
    </div>
    <!-- why choose us  -->

    <div class="q-pa-md section-3-main  justify-center" >
      <div class="main-section-3" id="why_choose_us">
        <h5 class="text-center mobile-section-3" style="width: 486px">
          Steps to join your ultimate and trustworthy travel partner with us
        </h5>
      </div>
      <div class="row justify-center section-3">
        <div class="col-md-5">
          <h3 style="margin-left: 25px;">Why Choose Us</h3>
          <h4 style="margin-left: 25px;">{{basic_data["why_choose_us_header"]}}</h4>
          <div class="q-pa-md" style="max-width: 350px">

            <q-list v-for="items,index in basic_data['headers_of_why_choose_us']" :key="items">
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-avatar rounded :color="svgs_color[index]" text-color="white" :icon="basic_data['svgs_of_why_choose_us'][index]" />
                </q-item-section>

                <q-item-section>
                  <q-item-label>{{items}}</q-item-label>
                  <q-item-label caption>{{basic_data['content_of_why_choose_us'][index]}}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>




           
          </div>
        </div>
        <div class="col-md-5 items-center self-center">
          <q-card class="my-card">
            <q-card-section>
              <q-img
                src="https://media.istockphoto.com/photos/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-picture-id1285301614?b=1&k=20&m=1285301614&s=612x612&w=0&h=oL04ACGYXP5cepM8NLZIyJaeUjuYoXYIrTT-Ej2jTAQ=" />

              <div class="row no-wrap items-center">
                <div class="col text-h6 ellipsis">Trip To Goa</div>

                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"></div>
              </div>
              <div class="text-caption text-grey">
                31st December | Checkout Goa for more such trips
              </div>
              <!-- <q-rating v-model="stars" :max="5" size="32px" /> -->
              <div class="q-pa-xs q-gutter-sm">
                <q-avatar color="grey" size="24px" text-color="white" icon="home" />
                <q-avatar color="grey" size="24px" text-color="white" icon="tag" />
                <q-avatar color="grey" size="24px" text-color="white" icon="send" />
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none row no-wrap items-center">
              <div class="col text-caption text-grey">
                <q-avatar color="white" size="30px" text-color="gray" icon="directions" />50 People going
              </div>
              <div class="col-auto text-grey text-caption">
                <q-icon size="15px" name="favorite" />
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="q-pa-xs carousel-main" id="testimonials">
      <div class="carousel-heading">
        <h5 class="text-center">What our users say about us</h5>
      </div>
      <Carousel :itemsToShow="isMobile?1:2.2" :wrapAround="true">

        <Slide v-for="items,index in review_content" :key="items">
          <div class="carousel__item">
            <q-card class="carousel-card">
              <img src="../assets/Apostrophe.svg"/>
              <q-card-section>
                <div class="text-subtitle2" style="margin-top: 10px;">
                  {{items}}
                </div>
              </q-card-section>
              <q-card-section>
                <q-rating color="orange" v-model="stars" :max="5" size="32px" />
                <div class="text-h6">{{reviewers[index]}}</div>
              </q-card-section>

            </q-card>
          </div>
        </Slide>
      </Carousel>
    </div>
    <!-- Blog section -->
    <div id="blogs">
      <div class="blog-heading">
        <text class="blog-text" style="font-size: 34px;">Blogs</text>
      </div>
      <div class="blog-heading">
        <h3 class="blog-text-description ">Some Blogs from traveller around the world</h3>
      </div>
      
      <div class="row q-pa-md">


        <q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" swipeable animated class="rounded-borders">
          <q-carousel-slide :name="1" class="column no-wrap">
            <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
              <q-card class="my-card rounded-borders col-3 full-height">
                <img src="https://cdn.quasar.dev/img/mountains.jpg">
        
                <q-card-section>
                  <div class="text-h6">Our Changing Planet</div>
                  <div class="text-subtitle2">by John Doe</div>
                </q-card-section>
        
                <q-card-section class="q-pt-none">
                  We need to understand the shirt
                </q-card-section>
              </q-card>
        
              <q-card class="my-card rounded-borders col-3 full-height">
                <img src="https://cdn.quasar.dev/img/mountains.jpg">
        
                <q-card-section>
                  <div class="text-h6">Our Changing Planet</div>
                  <div class="text-subtitle2">by John Doe</div>
                </q-card-section>
        
                <q-card-section class="q-pt-none">
                  We need to understand the shirt
                </q-card-section>
              </q-card>
        
        
              <q-card class="my-card rounded-borders col-3 full-height">
                <img src="https://cdn.quasar.dev/img/mountains.jpg">
        
                <q-card-section>
                  <div class="text-h6">Our Changing Planet</div>
                  <div class="text-subtitle2">by John Doe</div>
                </q-card-section>
        
                <q-card-section class="q-pt-none">
                  We need to understand the shirt
                </q-card-section>
              </q-card>

              <q-card class="my-card rounded-borders col-3 full-height">
                <img src="https://cdn.quasar.dev/img/mountains.jpg">
              
                <q-card-section>
                  <div class="text-h6">Our Changing Planet</div>
                  <div class="text-subtitle2">by John Doe</div>
                </q-card-section>
              
                <q-card-section class="q-pt-none">
                  We need to understand the shirt
                </q-card-section>
              </q-card>
            </div>
          </q-carousel-slide>
        </q-carousel>
    </div>




    </div>
    <!-- card -->
    <div class="q-pa-md ">
      <q-card class="row justify-center items-center subscribe">
        <q-img class="mask-left" src="../assets/MaskGroup.png" />
        <q-img class="mask-right" width="" src="../assets/MaskGroup-1.png" />
        <div class="q-pa-md">
          <div class="subscribe-container">

            <span class="subscribe-description q-pa-md">Subscribe to get information, latest news and other
              interesting offers about Travel Rover</span>
          </div>
          <div class="q-gutter-md row justify-center subscribe-inputs">
            <!-- <q-input class="subscribe-input-email" style="" rounded outlined v-model="text" label="Your Email" /> -->
            <q-btn class="subscribe-input-btn" style="" unelevated rounded color="primary" label="Subscribe" @click="subscribe()" />

          </div>
        </div>
      </q-card>
    </div>
    <!-- footer -->
    <div id="contact_us">
      <footer class="footer" id="footer">
        <div class="q-pa-md">
          <div class="row">
            <div class="col-md-4 col-xs-12">
              <span>
                <h3 class="col-title" style="font-family: Poppins;">Corporate Office</h3>
                <nav class="col-list">
                  <ul>
                    <li><a href="#" style="font-family: Poppins;">Sitaram Nagane House, Zakeria Rd, Opp Tulsi Hotel, Opp Zee Nest Cyber, Malad (west),
                        Mumbai -400064, Maharashtra
                        Phone number : 02228810028
                        Email - sales@travelrover.in</a></li>
                    <li>
                      <h3 class="social-col-title" style="margin-top: 30px; font-family:Poppins; font-size: 19px;">Follow us</h3>
                      <div class="social-media-list">
                        <a href="#" class="facebook"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                            <path
                              d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                          </svg></a>
                        <a href="#" class="twitter"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                            <path
                              d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg></a>
                        <a href="#" class="instagram"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                            <path
                              d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                          </svg></a>
                      </div>

                    </li>

                  </ul>
                </nav>
              </span>
            </div>
            <div class="col-3">

            </div>
            <div class="col-md-5 col-xs-12 mobile-view-footer">
              <div class="row">
                <span>
                  <h3 class="col-title">Company</h3>
                  <nav class="col-list">
                    <ul>
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Sustainability</a></li>
                      <li><a href="#">Terms of Service</a></li>
                      <li><a href="#">Privacy</a></li>
                    </ul>
                  </nav>
                </span>
                <span>
                  <h3 class="col-title">Company</h3>
                  <nav class="col-list">
                    <ul>
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Sustainability</a></li>
                      <li><a href="#">Terms of Service</a></li>
                      <li><a href="#">Privacy</a></li>
                    </ul>
                  </nav>
                </span>
                <span>
                  <h3 class="col-title">Company</h3>
                  <nav class="col-list">
                    <ul>
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Sustainability</a></li>
                      <li><a href="#">Terms of Service</a></li>
                      <li><a href="#">Privacy</a></li>
                    </ul>
                  </nav>
                </span>
              </div>
            </div>

          </div>
          <div class="row">
            <div class="col-md-3 col-xs-12" style="display: flex; justify-content: center;">
              <h3 class="col-title-bottom">Made in India</h3>
            </div>
            <div class="col-md-3 col-xs-12" style="display: flex; justify-content: center;">
              <h3 class="col-title-bottom">?? 2022 All Rights Reserved</h3>
            </div>
            <div class="col-md-3 col-xs-12" style="display: flex; justify-content: center;">
              <h3 class="col-title-bottom">Terms & Conditions</h3>
            </div>
            <div class="col-md-3 col-xs-12" style="display: flex; justify-content: center;">
              <h3 class="col-title-bottom">Privacy Policy</h3>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { ref, computed } from "vue";
import { matTrendingFlat } from "@quasar/extras/material-icons";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
// import MobileHeader from '../components/MobileHeader.vue';
import axios from "axios";
import {basicconfig, subscribe_user,check_if_access_token_is_valid,check_if_refresh_token_is_valid} from "src/common/api_calls";
import DestinationPageWeb from "./DestinationPageWeb.vue";
import DestinationPage from "./DestinationPage.vue";
import { useQuasar,Notify } from 'quasar'
let $q
export default defineComponent({
  name: "IndexPage",
  components: {
    Carousel,
    Slide,
    // MobileHeader,
  },
  props: {
    isMobile: Boolean
  },
  plugins: { Notify },
  data(){
    return {
      default_date: new Date().toLocaleString("default", { year: "numeric" }) + '-' + new Date().toLocaleString("default", { month: "2-digit" }) + '-' + new Date().toLocaleString("default", { day: "2-digit" }),
      header_content: '',
      basic_data: {},
      svgs_color:["orange","light-green","brown","purple"],
      options: [
        'Uttarakhand', 'Leh Ladakh', 'Himachal Pradesh', 'Goa', 'Kashmir'
      ],
      where_to: ref(null),
      date: ref(""),
      reviewers: ["Anuj Vadecha","Nitin Bhansali","Aman Dedhia","Neel Shah", "Aayush Jain"],
      review_content: ["The agents I talked with through Travel Rover were really genuine.","The wide varieties of itineraries and type of content really helped me.","Really like the add to compare feature which allows me to get the best itinerary.","Stumbled upon this website and found it satisfies all my travel requirements","As a solo traveller, this website was a really a great consultant."]
    }
  },
  methods:{
    go_to_images(item,date){
      if(this.$store.state.user_logged_in==false){
          $q.notify({
              type: 'negative',
              message: 'Kindly log-in/sign-up to enable this functionality',
              position: 'top'
              })
      }else{
        check_if_access_token_is_valid().then(response=>{

          console.log(response);
          var access_token = window.localStorage.getItem("travel_rover_access");
          this.$store.commit('user_logged_in_update', true)
          this.$router.push({
                  path: '/destination/',
                  name:'DestinationPage',
                  query: { place: item, date:date }
                })
          
        }).catch(err =>{
            console.log(err)
            check_if_refresh_token_is_valid().then(response => {
              var access_token = response["data"]["access"];
              console.log(access_token)
              window.localStorage.setItem("travel_rover_access", access_token);

              this.$store.commit('user_logged_in_update', true)
              this.$router.push({
                  path: '/destination/',
                  name:'DestinationPage',
                  query: { place: item, date:date }
                })
              
              console.log(response);
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
      }
    },
    subscribe(){
      if(this.$store.state.user_logged_in==false){
          $q.notify({
              type: 'negative',
              message: 'Kindly log-in/sign-up to enable this functionality',
              position: 'top'
              })
      }else{
        check_if_access_token_is_valid().then(response=>{
          console.log(response);
          var access_token = window.localStorage.getItem("travel_rover_access");
          subscribe_user(access_token).then(response=>{
                $q.notify({
                  type: 'positive',
                  message: 'You will get timely updates about travel now',
                  position: 'top'
              })
              }).catch(err=>{
                $q.notify({
                  type: 'negative',
                  message: 'Some internal issues are going on',
                  position: 'top'
              })
              });
          this.$store.commit('user_logged_in_update', true)
        }).catch(err =>{
            console.log(err)
            check_if_refresh_token_is_valid().then(response => {
              var access_token = response["data"]["access"];
              console.log(access_token)
              window.localStorage.setItem("travel_rover_access", access_token);
              subscribe_user(access_token).then(response=>{
                $q.notify({
                  type: 'positive',
                  message: 'You will get timely updates about travel now',
                  position: 'top'
              })
              }).catch(err=>{
                $q.notify({
                  type: 'negative',
                  message: 'Some internal issues are going on',
                  position: 'top'
              })
              });
              this.$store.commit('user_logged_in_update', true)
              console.log(response);
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
      }
    },
    scroll(id){
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: 'smooth' });
    },
  },
  setup() {
    const data = ref({});
    const loading = ref(true);
    const error = ref(null);
    const myCarousel = ref(null);

    return {
      data,
      loading,
      error,
      matTrendingFlat,
      slide: ref(1),
    };
  },
  mounted(){
    $q = useQuasar()
    console.log("Here in Mounted");
    basicconfig().then(response =>{
        this.basic_data = JSON.parse(response.data.data)[0]["fields"]
        this.basic_data["explore_destination"] = this.basic_data["explore_destination"].split("$$$")
        this.basic_data["explore_destination_images"] = this.basic_data["explore_destination_images"].split("$$$")
        this.basic_data["headers_of_why_choose_us"] = this.basic_data["headers_of_why_choose_us"].split("$$$")
        this.basic_data["svgs_of_why_choose_us"] = this.basic_data["svgs_of_why_choose_us"].split("$$$")
        this.basic_data["content_of_why_choose_us"] = this.basic_data["content_of_why_choose_us"].split("$$$")

        console.log(this.basic_data)
      });
  },
  created() {

    console.log(document.readyState)
    console.log(this.basic_data)

    document.onreadystatechange = () => {
      console.log("HEREE")
      if (document.readyState === 'complete') {
        console.log("document ready state complete")


        var test_arr = ["Himachal Pradesh","Leh Ladakh","Goa","Kashmir","Uttarakhand"]
        this.basic_data["explore_destination"] = test_arr
        this.basic_data["explore_destination_images"] = test_arr
        this.basic_data["headers_of_why_choose_us"] = test_arr
        this.basic_data["svgs_of_why_choose_us"] = test_arr
        this.basic_data["content_of_why_choose_us"] = test_arr

        basicconfig().then(response =>{
        this.basic_data = JSON.parse(response.data.data)[0]["fields"]
        this.basic_data["explore_destination"] = this.basic_data["explore_destination"].split("$$$")
        this.basic_data["explore_destination_images"] = this.basic_data["explore_destination_images"].split("$$$")
        this.basic_data["headers_of_why_choose_us"] = this.basic_data["headers_of_why_choose_us"].split("$$$")
        this.basic_data["svgs_of_why_choose_us"] = this.basic_data["svgs_of_why_choose_us"].split("$$$")
        this.basic_data["content_of_why_choose_us"] = this.basic_data["content_of_why_choose_us"].split("$$$")

        console.log(this.basic_data)
      });
    }
  }

    // console.log(document.readyState)

    var test_arr = ["Uttarakhand","Himachal Pradesh"]
    this.basic_data["explore_destination"] = test_arr
    this.basic_data["explore_destination_images"] = test_arr
    this.basic_data["headers_of_why_choose_us"] = test_arr
    this.basic_data["svgs_of_why_choose_us"] = test_arr
    this.basic_data["content_of_why_choose_us"] = test_arr

    console.log("HERE");
  }
});
</script>
<style>
html,body{
    overflow-x: hidden;
  }
:root {
  --footer-bg: #0C111F;
  --color: #ffffff;
  --color-smooth: #dddddd;
  --input-border: #3a456a;
  --btn-bg-color: #f1f2fc;
  --btn-hover-bg: #d5d9f6;
  --btn-color: #1e2641;
}

.card-see-more {
  background-color: blue;
  padding: 10px;
  border: none;
  color: white;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 0.5rem;
  font-size: 14px;
}


.row-card{
  margin-left: 16px;
}

.text19{
  position: absolute;
    width: 525.02px;
    height: 46px;
    left: 20.04px;
    top: 39.21px;
  
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 28.8559px;
    line-height: 160%;
}

.carousel-heading text {
  font-family: "Poppins";
    font-weight: 500;
    font-size: 45px;
    line-height: 53.5px;
}

.carousel-heading h5 {
  font-family: "Poppins";
  font-weight: 400;
  font-size: 35px;
  line-height: 0px;
}

.subscribe-container {
  height: 96.97183227539062px;
  width: 859px;
  left: 243px;
  top: 82.60546875px;
  border-radius: null;
  margin-bottom: 3rem;


}

.subscribe-description {
  font-family: Poppins;
  font-size: 33px;
  font-weight: 600;
  line-height: 50px;
  letter-spacing: 0em;
  text-align: center;
  color: #5E6282;


}

footer {
  font-size: 16px;
  background: var(--footer-bg);
  padding: 1em 1em;
  font-family: "IBM Plex Sans", sans-serif;
}

footer ul {
  list-style: none;
}

.col {
  flex: 1;
}

.col-title {
  font-family: Poppins;
  color: var(--color);
  font-size: 18px;
  font-weight: 500;
  padding: 0.5em 0;
  padding-left: 40px;
  font-weight: bold;
}

.col-title-bottom {
  font-family: Poppins;
  color: var(--color);
  font-size: 14px;
  font-weight: 500;
  padding: 0.5em 0;
  padding-left: 40px;
  font-weight: bold;
}

.col-list a {
  color: var(--color-smooth);
  font-family: Poppins;
  text-decoration: none;
  line-height: 1.4;
  font-weight: 400;
}

.col-list a:hover,
.col-list a:focus {
  text-decoration: underline;
}

.subscribe-form,
.social-media {
  display: flex;
  gap: 0.5em;
  padding: 0.5em 0;
}


.subscribe-input {
  width: auto;
  flex: 1;
  background: transparent;
  border: 0.06em solid var(--input-border);
  font-size: 1em;
  font-weight: 500;
  padding: 0.5em;
  border-radius: 0.3em;
  transition: all 0.25s ease 0s;
  display: inline-block;
  color: var(--color-smooth);
}

.subscribe-input:focus {
  outline: none;
  border-color: var(--color);
  color: var(--color);
}

.subscribe-btn {
  background: var(--btn-bg-color);
  border: none;
  font-size: 1em;
  font-weight: 600;
  padding: 0.5em;
  border-radius: 0.3em;
  transition: all 0.25s ease 0s;
  display: inline-block;
  color: var(--btn-color);
  cursor: pointer;
}

.subscribe-btn:hover,
.subscribe-btn:focus {
  background: var(--btn-hover-bg);
}

.form-title,
.social-col-title {
  font-size: 1em;
  color: var(--color);
  font-weight: 500;
  margin: 0px;
  color: #F9EC7D;
}

.social-media {
  flex-direction: column;
}

.social-media-list {
  display: flex;
  gap: 0.5rem;
}

.social-media-list a {
  padding: 0.5em;
  color: var(--color-smooth);
  display: flex;
  border-radius: 0.3em;
  transition: all 0.25s ease 0s;
}

.social-media-list a:hover,
.social-media-list a:focus {
  color: var(--color);
  background: #ffffff1a;
}

.social-media-list svg {
  width: 1.5em;
  height: 1.5em;
  transition: all 0.25s ease 0s;
}

@media screen and (max-width: 750px) {
  footer {
    /* padding: 2em; */
    flex-direction: column;
  }
}

.blog-container {
  width: 70%;
  margin: 0px auto;
}

.my-card {
  width: 100%;
  max-width: 250px
}

.blog-heading {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 70%;
  margin: 0px auto;
}

.blog-text {
  font-family: "Poppins";
  font-size: 50px;
  font-weight: 500;
  line-height: 54px;
  letter-spacing: 0em;
  text-align: center;

}

.blog-text-description {
  font-family: "Poppins";
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
  color: #76797A;

}

.exploreImage {
  height: 65% !important;
  border-radius: 1rem;

}

.blogexploreImage {
  height: 65% !important;
  border-radius: 1rem;
  width: 100% !important
}

.row>.col-3 {
  height: auto;
  width: 20%;
}
.main-section-3 {
    display: flex;
    justify-content: center;
  }


@media only screen and (max-width: 600px) {
  .q-carousel--arrows-horizontal.q-carousel--with-padding .q-carousel__slide {
    padding-left: 0px !important;
  }

    .parallax {
      display: flex;
      padding-left: 0px;
      padding-right: 0px;

    }

  .col-title-bottom {
    font-family: "Merriweather", serif;
    color: var(--color);
    font-size: 14px;
    font-weight: 500;
    padding: 0.5em 0;
    padding-left: 0px;
    font-weight: bold;
  }

  .mobile-view-footer {
    display: flex;
  }

  .col-list ul {
    padding: 0px;
  }

  footer {
    font-size: 16px;
    background: var(--footer-bg);
    padding: 0px;
    font-family: "IBM Plex Sans", sans-serif;
  }

  .col-title {
    font-family: "Merriweather", serif;
    color: var(--color);
    font-size: 18px;
    font-weight: 500;
    padding: 0.5em 0;
    padding-left: 5px;
    font-weight: bold;
  }

  .mobile-section-3 {
    font-size: 18px;
  }

  .subscribe-description {
    display: flex;
    font-size: 15px;
    line-height: 30px;
    margin-left: 250px;
    margin-right: 250px;
  }

  .carousel-heading h5 {
    font-family: "Poppins";
    font-weight: 500;
    font-size: 32px;
    line-height: 53.5px;
  }

  .section-3 div h3 {
    font-weight: 700;
    font-size: 32px;
    line-height: 75px;
    text-transform: capitalize;
  }

  .row>.col-xs-3 {
    height: auto;
    width: 65%;
  }

  .row>.col-3 {
    height: auto;
    width: 65%;
  }

  .exploreImage {
    height: 70% !important;
    border-radius: 1rem;

  }

  .full-height {
    height: auto !important;
    overflow: hidden !important;
  }

  .destinations-section h3 {
    font-family: "Poppins";
    font-weight: 600;
    font-size: 32px;
    line-height: 34.24px;
    padding: 0px;
  }

  .explore-destinations{
    display: flex;
    flex-direction: column;
    padding: 0px;
    gap: 11px;
    width: 253px;
    height: 459.32px;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
  }

  .q-carousel{
    height: fit-content;
  }

}
</style>
