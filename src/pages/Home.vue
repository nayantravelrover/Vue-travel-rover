<template>
  <div id="home">
    <div class="main-container row justify-center q-pa-md gt-sm">
      <div class="col-md-8 content">
        <div class="row items-center justify-center">
          <div class="input-area-1 col-md-5 col-xs-12" style="background-color: white; border-radius: 29px 0 0 29px">
            <q-select
              bg-color="white"
              rounded
              outlined
              v-model="where_to"
              :options="options"
              label="Where to?"
              style="font-family: Poppins;"
            >
              <template v-slot:prepend>
                <q-icon style="margin-left: 5px" name="place" />
              </template>
            </q-select>
          </div>
          <div
            class="input-area-1 col-md-4 col-xs-12"
            style="background-color: white; border-radius: 0px"
          >

          <q-select
              bg-color="white"
              rounded
              outlined
              v-model="category"
              :options="options_category"
              label="Category?"
              style="font-family: Poppins;"
            >
              <template v-slot:prepend>
                <q-icon style="margin-left: 5px" name="category" />
              </template>
            </q-select>
            
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
          <div
            class="input-area-4 col-md-3 col-xs-12"
            style="border-radius: 0 29px 29px 0; font-family: Poppins"
          >
            <q-btn
              rounded
              standout
              flat
              color=""
              text-color="white"
              class="search-btn"
              icon="search"
              label="Search"
              @click="go_to_category_itinerary(this.where_to, this.category)"
              style="font-size: 17px"
            />
          </div>
        </div>
      </div>
      <div class="row items-center justify-between" style="width: 1000px">
        <div
          class="left-section col-md-7 q-pa-md-lg-xl"
          style="margin-top: 30px"
        >
          <text class="maintxt">
            <b>{{ basic_data["header_content"] }}</b>
          </text>
          <h4>{{ basic_data["intro_content"] }}</h4>
          <!-- <q-btn color="" text-color="black" class="explore-btn" label="Explore Destinations"
            :icon-right="matTrendingFlat" @click="scroll('destinations')" /> -->

          <!-- <button @click="showModal = true" class="button explore-btn">
            AI-Powered Journey Planner
          </button> -->
          <transition name="fade" appear>
            <div
              class="modal-overlay"
              v-if="showModal"
              @click="showModal = false"
            ></div>
          </transition>
          <transition name="pop" appear>
            <div
              class="modal"
              role="dialog"
              v-if="showModal"
              style="max-width: fit-content"
            >
              <div class="chatgpt-prompt">
                <h5>Write your travel related needs below</h5>
                <q-input
                  v-model="area"
                  class="text-area"
                  type="textarea"
                  float-label="Textarea"
                  :max-height="100"
                  :min-rows="3"
                  placeholder="I want to go to Himachal Pradesh for 5 days with my family."
                />
              </div>
              <button
                @click="create_chatgpt_prompt()"
                class="button submit-btn"
              >
                Submit
              </button>
            </div>
          </transition>
          <!-- <button @click="showModal = true" text-color="black" class="button explore-btn">AI Itinerary Creator</button>
          <transition name="fade" appear>
            <div class="modal-overlay" 
                 v-if="showModal" 
                 @click="showModal = false"></div>
          </transition>
          <transition name="pop" appear>
            <div class="modal" 
                 role="dialog" 
                 v-if="showModal"
                 style="max-width: fit-content;" 
                 >
              <h5>Write your prompt below</h5>

              <q-input
                v-model="area"
                type="textarea"
                float-label="Textarea"
                :max-height="100"
                :min-rows="3"
              />
              <button @click="create_chatgpt_prompt()" class="button">Submit</button>

            </div>
          </transition> -->
        </div>
        <div class="col-md-5 gt-sm">
          <q-img
            style="width: 520px; height: 408px; margin-bottom: 100px"
            src="../assets/travel.svg"
          />
        </div>
      </div>
    </div>

    <!------   Mobile Header   ------->

    <div class="main-container-mobile row justify-center q-pa-md lt-md">
      <div class="col-md-8 content">
        <div class="row items-center justify-center">
          <div
            class="input-area-1 col-md-3 col-xs-12"
            style="background-color: white; border-radius: 14px 14px 0 0"
          >
            <q-select
              bg-color="white"
              filled
              v-model="where_to"
              :options="options"
              label="Where to?"
              style="font-family: Poppins"
            >
              <template v-slot:prepend>
                <q-icon name="place" />
              </template>
            </q-select>
          </div>

          <div
            class="input-area-2 col-md-3 col-xs-12"
            style="background-color: white"
          >
           <q-select
              bg-color="white"
              filled
              v-model="category"
              :options="options_category"
              label="Category"
              style="font-family: Poppins"
            >
              <template v-slot:prepend>
                <q-icon name="category" />
              </template>
            </q-select>
          </div>

          <div
            class="input-area-4 col-md-3 col-xs-12"
            style="border-radius: 0 0 14px 14px"
          >
            <q-btn
              style="font-family: Poppins"
              color=""
              class="search-btn"
              icon="search"
              label="Search"
              @click="go_to_category_itinerary(this.where_to, this.category)"
            />
          </div>
        </div>
      </div>
      <div class="row items-center justify-between">
        <div class="col-md-5 lt-md justify-center">
          <q-img
            style="width: 300px; height: 200px; margin: 20px; margin-left: 30px"
            src="../assets/travel.svg"
          />
        </div>
        <div class="left-section-mobile col-md-5 q-pa-md">
          <h4>{{ basic_data["intro_content"] }}</h4>
          <!-- <q-btn color="" text-color="black" class="explore-btn" label="Explore Destinations" :icon-right="matTrendingFlat" @click="scroll('destinations')" /> -->

          <!-- <button @click="showModal = true" class="button explore-btn">
            AI-Powered Journey Planner
          </button> -->
          <transition name="fade" appear>
            <div
              class="modal-overlay"
              v-if="showModal"
              @click="showModal = false"
            ></div>
          </transition>
          <transition name="pop" appear>
            <div
              class="modal"
              role="dialog"
              v-if="showModal"
              style="max-width: fit-content"
            >
              <div class="chatgpt-prompt">
                <h5>Write your travel related needs below</h5>
                <q-input
                  v-model="area"
                  class="text-area"
                  type="textarea"
                  float-label="Textarea"
                  :max-height="100"
                  :min-rows="3"
                  placeholder="I want to go to Himachal Pradesh for 5 days with my family."
                />
              </div>
              <button
                @click="create_chatgpt_prompt()"
                class="button submit-btn"
              >
                Submit
              </button>
            </div>
          </transition>
          <!-- <button @click="showModal = true" text-color="black" class="button explore-btn">AI Itinerary Creator</button>
          <transition name="fade" appear>
            <div class="modal-overlay" 
                 v-if="showModal" 
                 @click="showModal = false"></div>
          </transition>
          <transition name="pop" appear>
            <div class="modal" 
                 role="dialog" 
                 v-if="showModal"
                 style="max-width: fit-content;" 
                 >
              <h5>Write your prompt below</h5>

              <q-input
                v-model="area"
                type="textarea"
                float-label="Textarea"
                :max-height="100"
                :min-rows="3"
              />
              <button @click="create_chatgpt_prompt()" class="button">Submit</button>

            </div>
          </transition>
           -->
        </div>
      </div>
    </div>

    <!--- End of Mobile Header  ------>

    <!-- top itineraries -->
    <div class="q-pa-sm" style="margin-top: 50px;" id="destinations" >
      <div class="carousel-heading">
        <h5 class="text-center">Our Top Itineraries</h5>
      </div>

      <Carousel :itemsToShow="isMobile ? 1.3 : 6" v-model="slide">
        <Slide
          v-for="(items) in top_selling_itineraries"
          :key="items"
          arrows
        >

          <div
            class="carousel__item-1"
            style="margin-top: 0px"
            @click="this.view_itinerary(items.pk)"
          >
            <q-card class="destination-carousel-card" style="cursor: pointer">
              <img :src="items.fields.place_img" />

              <q-card-section>
                <div class="row no-wrap justify-between">
                  <div class="col-md-10 text-black text-caption text-weight-fat bold" style="width: fit-content;font-size: 10px;" >
                    {{ items.fields.itinerary_name }}
                  </div>

                  
                </div>
            
              </q-card-section>
            </q-card>
          </div>
        </Slide>
      </Carousel>
      
    </div>


    <q-dialog v-model="card">
          <ViewItinerary/>
    </q-dialog>

    <!-- top 5 destinations -->
    <div class="q-pa-sm" style="margin-top: 50px" id="destinations">
      <div class="carousel-heading">
        <h5 class="text-center">Top Destinations</h5>
      </div>
      <Carousel :itemsToShow="isMobile ? 1.3 : 6" v-model="slide">
        <Slide
          v-for="(items, index) in basic_data['explore_destination_images']"
          :key="items"
          arrows
        >
<div class="carousel__item-1" style="margin-top: 0px" @click="go_to_images(basic_data['explore_destination'][index])">
            <q-card class="destination-carousel-card" style="cursor: pointer">
              <img :src="items" />

              <q-card-section>
                <div class="row no-wrap justify-between">
                  <div class="col-md-6 text-black text-caption text-weight-fat bold" style="width: fit-content;" 
                  >
                    {{ basic_data["explore_destination"][index] }}
                  </div>
                  <div
                    class="col-md-3 text-black text-caption row no-wrap items-center"
                  >
                    <q-icon name="visibility" />
                    <div style="margin-left: 5px">
                      {{ basic_data["top_five_likes"][index] }}
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </Slide>
      </Carousel>
    </div>
    

    


    <!-- why choose us  -->




    <div id="why_choose_us" class="q-pa-md section-3-main justify-center">
      <!-- <div class="main-section-3" id="why_choose_us">
        <h5 class="text-center mobile-section-3" style="width: 486px">
          Steps to join your ultimate and trustworthy travel partner with us
        </h5>
      </div> -->
      <div class="row justify-center section-3">
        <div class="col-md-5">
          <h3 style="margin-left: 25px">About Us</h3>
          <h4 style="margin-left: 25px">
            {{ basic_data["why_choose_us_header"] }}
          </h4>
          <div class="q-pa-md" style="max-width: 550px">
            <q-list
              v-for="(items, index) in basic_data['headers_of_why_choose_us']"
              :key="items"
            >
              <q-item v-ripple style="cursor: pointer;">
                <q-item-section avatar>
                  <q-avatar
                    rounded
                    :color="svgs_color[index]"
                    text-color="white"
                  >
                  <img :src="basic_data['svgs_of_why_choose_us'][index]" alt=""/>
                </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label>{{ items }}</q-item-label>
                  <q-item-label caption
                    >{{ basic_data["content_of_why_choose_us"][index] }}
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
                src="https://media.istockphoto.com/photos/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-picture-id1285301614?b=1&k=20&m=1285301614&s=612x612&w=0&h=oL04ACGYXP5cepM8NLZIyJaeUjuYoXYIrTT-Ej2jTAQ="
              />

              <div class="row no-wrap items-center">
                <div class="col text-h6 ellipsis">Trip To Goa</div>

                <div
                  class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
                ></div>
              </div>
              <div class="text-caption text-grey">
                31st December | Checkout Goa for more such trips
              </div>
              <!-- <q-rating v-model="stars" :max="5" size="32px" /> -->
              <div class="q-pa-xs q-gutter-sm">
                <q-avatar
                  color="grey"
                  size="24px"
                  text-color="white"
                  icon="home"
                />
                <q-avatar
                  color="grey"
                  size="24px"
                  text-color="white"
                  icon="tag"
                />
                <q-avatar
                  color="grey"
                  size="24px"
                  text-color="white"
                  icon="send"
                />
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none row no-wrap items-center">
              <div class="col text-caption text-grey">
                <q-avatar
                  color="white"
                  size="30px"
                  text-color="gray"
                  icon="directions"
                />50 people trip
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
      <Carousel
        :itemsToShow="isMobile ? 1 : 2.2"
        :itemsToScroll="1"
        :wrap-around="true"
        v-bind:autoplay="5000"
        v-bind:pause-autoplay-on-hover="true"
        style="margin-top: -30px"
      >
        <Slide v-for="(items, index) in review_content" :key="items">
          <div class="carousel__item">
            <q-card class="carousel-card">
              <img src="../assets/Apostrophe.svg" />
              <q-card-section>
                <div class="text-subtitle2" style="margin-top: 10px">
                  {{ items }}
                </div>
              </q-card-section>
              <q-card-section>
                <q-rating readonly value="5" color="orange" size="32px" no-dimming />
                <div class="text-h6">{{ reviewers[index] }}</div>
              </q-card-section>
            </q-card>
          </div>
        </Slide>
      </Carousel>
    </div>
    <!-- Blog section -->
    <div id="blogs">
      <div class="blog-heading">
        <text class="blog-text" style="font-size: 34px">Blogs</text>
      </div>
      <div class="blog-heading">
        <h3 class="blog-text-description">
          Some Blogs from traveller around the world
        </h3>
      </div>

      <div class="q-pa-md blogs-carousel">
        <Carousel v-model="currentIndex" :itemsToShow="isMobile ? 1.3 : 4.3">
          <Slide
            v-for="(item, index) in carouselItems"
            :key="index"
            style="margin-bottom: 30px"
            class="blogs-card"
          >
            <q-card
              class="my-card rounded-borders col-3 full-height"
              @click="redirectToAnotherPage(item.redirection_url)"
              style="cursor: pointer;"
            >
              <img
                :src="require(`../assets/${item.image}`)"
                class="image_style"
              />
              <q-card-section>
                <div class="text-h6">{{ item.title }}</div>
                <div class="text-subtitle2">{{ item.subtitle }}</div>
              </q-card-section>
            </q-card>
          </Slide>
        </Carousel>
      </div>
    </div>
    <!-- card -->
    <div class="q-pa-md">
      <q-card class="row justify-center items-center subscribe">
        <q-img class="mask-left" src="../assets/MaskGroup.png" />
        <q-img class="mask-right" width="" src="../assets/MaskGroup-1.png" />
        <div class="q-pa-md">
          <div class="subscribe-container">
            <span class="subscribe-description q-pa-md"
              >Subscribe to get information, latest news and other interesting
              offers about Travel Rover</span
            >
          </div>
          <div class="q-gutter-md row justify-center subscribe-inputs">
            <!-- <q-input class="subscribe-input-email" style="" rounded outlined v-model="text" label="Your Email" /> -->
            <q-btn
              class="subscribe-input-btn"
              style=""
              unelevated
              rounded
              color="primary"
              label="Subscribe"
              @click="subscribe()"
            />
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
                <h3 class="col-title" style="font-family: Poppins">
                  Corporate Office
                </h3>
                <nav class="col-list">
                  <ul>
                    <li>
                      <a href="#" style="font-family: Poppins">
                        <!-- <li>Sitaram Nagane House, Zakeria Rd,</li>
                        <li>Opp Tulsi Hotel, Opp Zee Nest Cyber,</li>
                        <li>Malad (west),Mumbai -400064,</li>
                        <li>Maharashtra</li> -->
                        <li>Phone number : +917977790353</li>
                        <li>Email - info@travelrover.in</li>
                      </a>
                    </li>
                    <li>
                      <h3
                        class="social-col-title"
                        style="
                          margin-top: 30px;
                          font-family: Poppins;
                          font-size: 19px;
                        "
                      >
                        Follow us
                      </h3>
                      <div class="social-media-list">
                        <!-- <a href="#" class="facebook">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-facebook"
                            viewBox="0 0 16 16">
                            <path
                              d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                            />
                          </svg></a>
                        <a href="#" class="twitter"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-twitter"
                            viewBox="0 0 16 16">
                            <path
                              d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                            /></svg></a> -->
                        <a href="https://instagram.com/travel_rovers?igshid=MzRlODBiNWFlZA==" class="instagram"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-instagram"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                            /></svg></a>

                <a href="https://api.whatsapp.com/send?phone=7977790353&text=We're here to assist with your travel needs and make your journey unforgettable!" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="500px" height="500px" fill="white">    <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"/></svg></a>


                      </div>
                    </li>
                  </ul>
                </nav>
              </span>
            </div>
            <div class="col-3"></div>
            <div class="col-md-5 col-xs-12 mobile-view-footer">
              <div class="row">
                <span>
                  <h3 class="col-title" style="font-family: Poppins;">Company</h3>
                  <nav class="col-list">
                    <ul>
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Terms of Service</a></li>
                      <li><a href="#">Privacy</a></li>
                    </ul>
                  </nav>
                </span>
              </div>
            </div>
          </div>
          <div class="row" style="font-family: Poppins;">
            <div
              class="col-md-3 col-xs-12"
              style="display: flex; justify-content: center;"
            >
              <h3 class="col-title-bottom" style="font-family: Poppins;">Made in India</h3>
            </div>
            <div
              class="col-md-3 col-xs-12"
              style="display: flex; justify-content: center"
            >
              <h3 class="col-title-bottom" style="font-family: Poppins;">© 2023 All Rights Reserved</h3>
            </div>
            <div
              class="col-md-3 col-xs-12"
              style="display: flex; justify-content: center"
            >
              <h3 class="col-title-bottom" style="font-family: Poppins;">Terms & Conditions</h3>
            </div>
            <div
              class="col-md-3 col-xs-12"
              style="display: flex; justify-content: center"
            >
              <h3 class="col-title-bottom" style="font-family: Poppins;">Privacy Policy</h3>
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
import _ from "lodash";



import {
  basicconfig,
  subscribe_user,
  check_if_access_token_is_valid,
  check_if_refresh_token_is_valid,
  create_prompt,
  load_top_selling_itineraries,
  get_category_itinerary
} from "src/common/api_calls";

import DestinationPageWeb from "./DestinationPageWeb.vue";
import DestinationPage from "./DestinationPage.vue";
import ViewItinerary from './ViewItinerary.vue';
import { useQuasar, Notify } from "quasar";

let $q;
export default defineComponent({
  name: "IndexPage",
  components: {
    Carousel,
    Slide,
    ViewItinerary
    // MobileHeader,
  },
  props: {
    isMobile: Boolean,
  },
  plugins: { Notify },
  data() {
    return {
      default_date:
        new Date().toLocaleString("default", { year: "numeric" }) +
        "-" +
        new Date().toLocaleString("default", { month: "2-digit" }) +
        "-" +
        new Date().toLocaleString("default", { day: "2-digit" }),
      header_content: "",
      top_selling_itineraries: [],
      basic_data: {},
      svgs_color: ["orange", "light-green", "brown", "purple"],
      options: [
        "Uttarakhand",
        "Leh Ladakh",
        "Himachal Pradesh",
        "Goa",
        "Kashmir",
        "Rajasthan",
        "Others"
      ],
      where_to: ref(null),
      category : ref(null),
      options_category: [
        "Honeymoon",
        "Workation",
        "Backpackers",
        "Family Trip",
        "Friends Trip",
        "Others"
      ],
      reviewers: [
        "Anuj Vadecha",
        "Nitin Bhansali",
        "Aman Dedhia",
        "Neel Shah",
        "Aayush Jain",
      ],
      review_content: [
        "The agents I talked with through Travel Rover were really genuine.",
        "The wide varieties of itineraries and type of content really helped me.",
        "Really like the add to compare feature which allows me to get the best itinerary.",
        "Stumbled upon this website and found it satisfies all my travel requirements",
        "As a solo traveller, this website was a really a great consultant.",
      ],
      area: "",
      qDateProxy: ref(null),
      showModal: false,
      carouselItems: [
        {
          title: "The Transformative Era of Travel in India",
          subtitle: "Exploring the Post-COVID Landscape",
          image: "blog_1.jpeg",
          redirection_url: "embracing_blog",
        },
        {
          title: "Agent or Do it Yourself (DIY)?",
          subtitle: "Making the Right Choice for Your Travel Experience",
          image: "blog_6.jpeg",
          redirection_url: "agent_or_diy",
        },
        {
          title: "Rising Popularity of Hostels",
          subtitle: "Why Gen Z Prefers the Social and Adventurous Experience",
          image: "blog_10.jpeg",
          redirection_url: "popularity_zostel",
        },
        {
          title: "Work + Vacation = Workation",
          subtitle: "Unlocking Productivity and Serenity",
          image: "blog_17.jpeg",
          redirection_url: "workation",
        },
      ],
      card: false
    };
  },
  methods: {
    view_itinerary(itinerary_pk){
                var data = {
                    "itinerary_pk":itinerary_pk
                }
                this.card = true
                var itinerary = []
                for(var items in this.top_selling_itineraries){
                    if(itinerary_pk == this.top_selling_itineraries[items]["pk"]){
                        itinerary = this.top_selling_itineraries[items]["fields"]
                        break;
                    }
                }
                this.$store.commit('itinerary_preview_update', itinerary)
                this.$store.commit('itinerary_pk_update',itinerary_pk)
    },
    go_to_images(item) {
        this.$router.push({
            path: "/destination/",
            name: "DestinationPage",
            query: { place: item, date: this.default_date }
        });
    },
    subscribe() {
      if (this.$store.state.user_logged_in == false) {
        $q.notify({
          type: "negative",
          message: "Kindly log-in/sign-up to enable this functionality",
          position: "top",
        });
      } else {
        check_if_access_token_is_valid()
          .then((response) => {
            
            var access_token = window.localStorage.getItem(
              "travel_rover_access"
            );
            subscribe_user(access_token)
              .then((response) => {
                $q.notify({
                  type: "positive",
                  message: "You will get timely updates about travel now",
                  position: "top",
                });
              })
              .catch((err) => {
                $q.notify({
                  type: "negative",
                  message: "Some internal issues are going on",
                  position: "top",
                });
              });
            this.$store.commit("user_logged_in_update", true);
          })
          .catch((err) => {
            
            check_if_refresh_token_is_valid()
              .then((response) => {
                var access_token = response["data"]["access"];
                
                window.localStorage.setItem(
                  "travel_rover_access",
                  access_token
                );
                subscribe_user(access_token)
                  .then((response) => {
                    $q.notify({
                      type: "positive",
                      message: "You will get timely updates about travel now",
                      position: "top",
                    });
                  })
                  .catch((err) => {
                    $q.notify({
                      type: "negative",
                      message: "Some internal issues are going on",
                      position: "top",
                    });
                  });
                this.$store.commit("user_logged_in_update", true);
                console.log(response);
              })
              .catch((err) => {
                $q.notify({
                  type: "negative",
                  message: "Kindly log-in/sign-up to enable this functionality",
                  position: "top",
                });
                this.$store.commit("user_logged_in_update", false);
                console.log(err);
              });
          });
      }
    },
    create_chatgpt_prompt() {
      if (this.$store.state.user_logged_in == false) {
        $q.notify({
          type: "negative",
          message: "Kindly log-in/sign-up to enable this functionality",
          position: "top",
        });
      } else {
        check_if_access_token_is_valid()
          .then((response) => {
            
            var access_token = window.localStorage.getItem(
              "travel_rover_access"
            );
            
            create_prompt({ prompt: this.area }, access_token)
              .then((response) => {
                var pk_of_prompt = response["data"]["pk_of_prompt"];

                $q.notify({
                  type: "positive",
                  message: "Saved succesfully.",
                  position: "top",
                });
                window.open(
                  "/#/itinarybuilder?pk=-1&pk_of_prompt=" + pk_of_prompt,
                  "_blank"
                );
              })
              .catch((err) => {
                $q.notify({
                  type: "negative",
                  message:
                    "Some internal issues are going on, please try by reloading again",
                  position: "top",
                });
              });
          })
          .catch((err) => {
            
            check_if_refresh_token_is_valid()
              .then((response) => {
                var access_token = response["data"]["access"];
                
                window.localStorage.setItem(
                  "travel_rover_access",
                  access_token
                );
                create_prompt({ prompt: this.area }, access_token)
                  .then((response) => {
                    var pk_of_prompt = response["data"]["pk_of_prompt"];
                    $q.notify({
                      type: "positive",
                      message: "Saved succesfully.",
                      position: "top",
                    });
                    window.open(
                      "/#/itinarybuilder?pk=-1&pk_of_prompt=" + pk_of_prompt,
                      "_blank"
                    );
                  })
                  .catch((err) => {
                    $q.notify({
                      type: "negative",
                      message: "Some internal issues are going on",
                      position: "top",
                    });
                  });
                console.log(response);
              })
              .catch((err) => {
                $q.notify({
                  type: "negative",
                  message: "Kindly log-in/sign-up to enable this functionality",
                  position: "top",
                });
                this.$store.commit("user_logged_in_update", false);
                console.log(err);
              });
          });
      }
    },

    go_to_category_itinerary(item, category) {

      if(item == "Others" || category == "Others"){

        window.open(
          "https://api.whatsapp.com/send?phone=7977790353&text=I want your help in creating a customised itinerary",
          "_blank" // <- This is what makes it open in a new window.
        );
      }

      else if(category == "" || category == null){
        $q.notify({
              type: "negative",
              message: "Kindly select a category",
              position: "top",
            });
      }


      else{
        get_category_itinerary({"category":category,"place_name":item})
                  .then((response) => {
                    
                    this.card = true
                    var itinerary = []
                    
                    itinerary = JSON.parse(response.data.data)[0]["fields"]
                    this.$store.commit('itinerary_preview_update', itinerary)
                    this.$store.commit('itinerary_pk_update',JSON.parse(response.data.data)[0]['pk'])

                  })
                  .catch((err) => {
                    $q.notify({
                      type: "negative",
                      message: "Some internal issues are going on",
                      position: "top",
                    });
                  });
      }
    },

    scroll(id) {
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: "smooth" });
    },
    handleDateSelection() {
      this.$refs.qDateProxy.hide(); // Close the modal after selecting a date
    },
    redirectToAnotherPage(param) {
      if (param == "embracing_blog") {
        this.$router.push("/embracing_blog");
      }
      if (param == "agent_or_diy") {
        this.$router.push("/agent_or_diy");
      }
      if (param == "popularity_zostel") {
        this.$router.push("/popularity_zostel");
      }
      if (param == "workation") {
        this.$router.push("/workation");
      }
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
  mounted() {
    $q = useQuasar();
    load_top_selling_itineraries().then((response) => {
          this.top_selling_itineraries = JSON.parse(response.data.data)
          console.log(this.top_selling_itineraries)
        });
  },
  created() {
    document.onreadystatechange = () => {
      // console.log("HEREE")
      if (document.readyState === "complete") {
        // console.log("document ready state complete")
        basicconfig().then((response) => {
          this.basic_data = JSON.parse(response.data.data)[0]["fields"];
          this.basic_data["explore_destination"] =
            this.basic_data["explore_destination"].split("$$$");
          this.basic_data["explore_destination_images"] =
            this.basic_data["explore_destination_images"].split("$$$");
          this.basic_data["headers_of_why_choose_us"] =
            this.basic_data["headers_of_why_choose_us"].split("$$$");
          this.basic_data["svgs_of_why_choose_us"] =
            this.basic_data["svgs_of_why_choose_us"].split("$$$");
          this.basic_data["content_of_why_choose_us"] =
            this.basic_data["content_of_why_choose_us"].split("$$$");
          this.basic_data["top_five_likes"] =
            this.basic_data["top_five_likes"].split("$$$");
          //console.log(this.basic_data)

          // console.dir(JSON.stringify(this.basic_data), {'maxArrayLength': 10000000000});
        });


      }
    };

    // console.log(document.readyState)

    this.basic_data = {
      header_content:
        "CREATE YOUR DREAM ITINERARY WITH TRAVELROVER. PLAN, CUSTOMIZE, PUBLISH AND GET AGENT FEEDBACK. ONE-STOP PLATFORM TO BUILD YOUR PERFECT TRIP. START NOW!",
      intro_content:
        "Unforgettable travel itineraries for adventure, relaxation, and culture. Browse curated trips or create bespoke experiences.",
      top_destination_content:
        "Steps to join your ultimate and trustworthy travel partner with us",
      why_choose_us_header:
        "You should choose us because we give you the best agents",
      svgs_of_why_choose_us: ["https://admin.travelrover.in/media/files/expert-advice-icon-linear-isolated-vector-35007621.jpeg","https://cdn-icons-png.flaticon.com/512/7057/7057824.png","https://cdn-icons-png.flaticon.com/128/3343/3343387.png","https://cdn.iconscout.com/icon/premium/png-512-thumb/customer-insights-2443714-2029126.png?f=avif&w=512","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR--nL2QL33LmxKHUmmO7wT5X261XNxza5j4A7KcdJ-A&s","https://cdn-icons-png.flaticon.com/128/8163/8163551.png"],
      headers_of_why_choose_us: [
        "Personalized Itineraries",
        "Expert Guidance",
        "Budget-Friendly Options",
        "Local Insights",
        "Hassle-Free Planning",
        "Customer Satisfaction"
      ],

      content_of_why_choose_us: [
        "We specialize in creating custom itineraries tailored to your specific budget and travel preferences. Our experienced travel experts work closely with you to understand your needs, interests, and limitations, ensuring that you have a trip that's perfectly suited to you.",
        "We provide you with expert guidance throughout the entire trip planning process. Whether you're unsure about choosing a destination, selecting accommodations, or deciding on activities, our team is here to offer insights and recommendations that will make your journey unforgettable.",
        "We make it our priority to work within your budget while still delivering an incredible travel experience. Our team has the expertise to find the best deals, negotiate prices, and suggest cost-effective alternatives, ensuring that you get the most value out of your money.",
        "By choosing us, you'll gain access to insider knowledge and hidden gems that only locals know about, allowing you to discover the authentic side of your chosen destination.",
        "Our team helps with all the intricate details, including transportation, accommodation bookings, activities, and more. Sit back, relax, and let us take care of everything, so you can focus on enjoying your journey.",
        "We go the extra mile to ensure that every aspect of your trip meets or exceeds your expectations. From the initial consultation to the end of your journey, we strive to provide exceptional service, prompt communication, and seamless execution."
      ],
      gif_of_why_choose_us_link: "app.clickup.com",
      explore_destination: [
        "Uttarakhand ",
        " Leh Ladakh ",
        " Himachal Pradesh ",
        " Goa ",
        " Kashmir",
        " Rajasthan"
      ],
      explore_destination_images: [
        "https://admin.travelrover.in/media/files/uttarakhand_ocauCp1.jpg ",
        " https://admin.travelrover.in/media/files/leh_ladakh_s2V3mcH.jpg ",
        " https://admin.travelrover.in/media/files/himachal.jpg ",
        " https://admin.travelrover.in/media/files/goa_TCoSYe6.jpg ",
        " https://admin.travelrover.in/media/files/kashmir_C0NEKPM.jpg ",
        " https://admin.travelrover.in/media/files/rajasthan.jpg",
      ],
      top_five_destination:
        "Kullu $$$ Maldives $$$ Kerala $$$ Manali $$$ Rishikesh",
      top_five_destination_images:
        "https://unsplash.com/photos/oL3-V8xhqlI $$$ https://unsplash.com/photos/oL3-V8xhqlI $$$ https://unsplash.com/photos/oL3-V8xhqlI $$$ https://unsplash.com/photos/oL3-V8xhqlI $$$ https://unsplash.com/photos/oL3-V8xhqlI",
      top_five_likes: ["1.3K", "1.7K", "1.1K", "1.9K", "1.2K", "2.1K"],
      video_link: "www.google.com",
      watch_latest_tour_content: "Watch our latest tour content it is amazing",
    };

    this.top_selling_itineraries = [
        {
            "pk": 73,
            "fields": {
                "place_img": "https://admin.travelrover.in/media/files/WhatsApp_Image_2023-03-08_at_22.18.44.jpeg",
                "itinerary_name": "15 Days Workation Trip in Goa",
            }
        },
        {
            "pk": 73,
            "fields": {
                "place_img": "https://admin.travelrover.in/media/files/WhatsApp_Image_2023-03-08_at_22.18.44.jpeg",
                "itinerary_name": "15 Days Workation Trip in Goa",
            }
        },
        {
            "pk": 73,
            "fields": {
                "place_img": "https://admin.travelrover.in/media/files/WhatsApp_Image_2023-03-08_at_22.18.44.jpeg",
                "itinerary_name": "15 Days Workation Trip in Goa",
            }
        },
        {
            "pk": 73,
            "fields": {
                "place_img": "https://admin.travelrover.in/media/files/WhatsApp_Image_2023-03-08_at_22.18.44.jpeg",
                "itinerary_name": "15 Days Workation Trip in Goa",
            }
        },
        {
            "pk": 73,
            "fields": {
                "place_img": "https://admin.travelrover.in/media/files/WhatsApp_Image_2023-03-08_at_22.18.44.jpeg",
                "itinerary_name": "15 Days Workation Trip in Goa",
            }
        }
    ]



  },
});
</script>
<style>
html,
body {
  overflow-x: hidden;
}
:root {
  --footer-bg: #0c111f;
  --color: #ffffff;
  --color-smooth: #dddddd;
  --input-border: #3a456a;
  --btn-bg-color: #f1f2fc;
  --btn-hover-bg: #d5d9f6;
  --btn-color: #1e2641;
}

.maintxt {
  font-family: "Poppins";
  font-style: normal;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 30.8559px;
  line-height: 160%;
  letter-spacing: -0.02em;
  color: #ffffff;
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

.row-card {
  margin-left: 16px;
}

.text19 {
  position: absolute;
  width: 525.02px;
  height: 46px;
  left: 20.04px;
  top: 39.21px;

  font-family: "Poppins";
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
  color: #5e6282;
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
  color: #f9ec7d;
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
@media screen and (min-width: 700px)
{
  .blogs-carousel{
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    
  }
  .blogs-card{
    margin-left: 20px;
    padding-right: 30px;
  }
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
  max-width: 250px;
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
  color: #76797a;
}

.exploreImage {
  height: 65% !important;
  border-radius: 1rem;
}

.blogexploreImage {
  height: 65% !important;
  border-radius: 1rem;
  width: 100% !important;
}

.row > .col-3 {
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

  .row > .col-xs-3 {
    height: auto;
    width: 65%;
  }

  .row > .col-3 {
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

  .explore-destinations {
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

  .q-carousel {
    height: fit-content;
  }
}

.modal {
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  text-align: center;
  width: fit-content;
  height: fit-content;
  max-width: 22em;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  background: #fff;
  z-index: 999;
  transform: none;
}
.modal h1 {
  margin: 0 0 1rem;
}

.modal-overlay {
  content: "";
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background: #2c3e50;
  opacity: 0.6;
  cursor: pointer;
}

/* ---------------------------------- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
.explore-btn {
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  font-family: Poppins;
  border: none;
  margin-right: 10px;
}

/* .explore-btn:hover {
    background-color: white;
    color: #ffc106;
    font-weight: 600;
    border-color: #ffc106;
    border: solid 1px;
  } */

/* Styles for the modal overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
}

/* Styles for the modal */
.modal {
  position: fixed;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

/* Styles for the chatgpt prompt */
.chatgpt-prompt {
  margin-bottom: 20px;
}

/* Styles for the submit button */
.submit-btn {
  background-color: #007aff;
  color: #fff;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
}

.submit-btn:hover {
  background-color: #0055ff;
}

.text-area {
  display: block;
  width: 100%;
  font-size: 16px;
  color: #333;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  margin-bottom: 20px;
}

.text-area:focus {
  outline: none;
  border-color: #007aff;
  box-shadow: 0 0 0 2px rgba(0, 122, 255, 0.5);
}

.image_style {
  height: 180px;
}
.modal {
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  text-align: center;
  width: fit-content;
  height: fit-content;
  max-width: 22em;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  background: #fff;
  z-index: 999;
  transform: none;
}
.modal h1 {
  margin: 0 0 1rem;
}

.modal-overlay {
  content: "";
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background: #2c3e50;
  opacity: 0.6;
  cursor: pointer;
}

/* ---------------------------------- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
</style>
