<template>
    <div>
        <div>
            <q-carousel class="q-pa full-screen" style="height: 750px;" animated v-model="slide" arrows navigation infinite :autoplay="autoplay" transition-prev="slide-right" transition-next="slide-left">
                    <q-carousel-slide  v-for="items,index in this.place_description['images']" :key="index" :name="index" :img-src=items>
                    <AppBar/>
                    <div class="gt-xs">
                     <div class="container40" style="display: flex;flex-direction: column;align-items: center;padding: 32px 63px;position: absolute;width: 511px;height: 222px;left: 465px;top: 300px;">
        <text class="text50" style="width: 500px;height: 108px;font-family: 'Poppins';font-style: normal;font-weight: 700;font-size: 72px;line-height: 108px;color: #FFFFFF;flex: none;order: 0;flex-grow: 0;margin: -10px 0px;text-align: center;">{{this.place_description['name']}}</text>

        <text class="text51" style="width: 500px;height: 60px;font-family: 'Poppins';font-style: normal;font-weight: 500;font-size: 40px;line-height: 60px;color: #FFFFFF;flex: none;order: 1;flex-grow: 0;text-align: center;">{{this.place_description['places_one_liner']}}</text>
                    </div>
                    </div>
                    </q-carousel-slide>
            </q-carousel>
        </div>
        <div class="q-pa-md full-width">
            <div style="margin-left: 100px; margin-right: 100px; margin-bottom: 50px;">
            <div style="margin-top: 48px; margin-left: 48px;">
                <text class="textguide">{{this.place_description["name"]}} Travel Guide</text>
                <text class="textinit">
                <div style="margin-top: 32px;" v-for="items in this.place_description['description']" :key="items">
                    {{items}}
                </div>
                </text>
            </div>
            </div>
        </div>
        <div class="full-width" style="margin-bottom: 20px;">
            <text class="text10" style="margin-left: 10%;">Our top-selling Itineraries</text>
        </div>
        <div >
        <q-carousel style="height: fit-content;padding: 50px;display: flex;justify-content: center;" class="q-pa" v-model="slide_itineraries" transition-prev="slide-right" transition-next="slide-left"
      swipeable
      animated
      control-color="primary"
      navigation
      arrows>
            <q-carousel-slide  v-for="i in Math.ceil(this.itineraries_list.length/3)" :key="i" :name="i" class="column no-wrap">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                <q-card v-for="item in itineraries_list.slice((i - 3) * 3, i * 3)" :key="item" class="iternarybox" style="margin-left:65px;">
                    <q-img :src="item.place_img" style="height: 282px;" />
                    <div class="heartbox"><q-img :src="this.$parent.heart_transparent" class="heart" @click="this.$parent.like_unlike_itinerary($event,item.itinerary_pk)" />
                    </div>
                    <div style="margin-top: 25px; margin-left: 20px;">
                        <text class="text12">{{item.itinerary_name}}</text>
                    </div>
                    <div style="height: 270px;overflow-x: scroll;">
                        <ul class="text13" style="height: auto;">
                            <li v-for="list_item in item.place_description" :key="list_item">
                                {{ list_item }}
                            </li>
                        </ul>
                    </div>
                    
                    <div class="line_break" style="margin-left: 10px; margin-top:10px;"></div>
                    <div style="margin-top: 20px; margin-left: 30px;">
                        <text class="text16">

<text v-for="list_item in item.inclusions_headers" :key="list_item">✔️ {{list_item}} </text> 
<br>
<text v-for="list_item in item.exclusions_headers" :key="list_item">❌ {{list_item}} </text> 
                        </text>
                    </div>
                    <div class="line_break" style="margin-left: 20px; margin-top:20px;"></div>
                    <div class="price_main" style="margin-top: 20px; margin-left: 30px;">
                        <div class="price_container">
                            <text class="text14" style="width: 80px;">Starts from</text>
                        </div>
                        <div class="text15">
                            <text>{{item.tour_rates}}</text>
                            <text class="text14">/Per Person</text>
                        </div>
                    </div>
                    <div class="line_break" style="margin-left: 20px; margin-top:20px;"></div>
                    <div style="margin-top: 30px; margin-left: 28px; margin-bottom: 30px;">
                        <div class="btns">
                            <q-btn class="compare" unelevated
                                style="background-color: #EFF4FF; color: #003FA3; font-family: Poppins;"
                                label="Add to Compare" @click="this.$parent.add_to_compare(item)" />
                            <q-btn class="compare" unelevated
                                style="background-color: #EFF4FF; color: #003FA3; font-family: Poppins;"
                                label="View Itinerary " @click="this.view_itinerary(item.itinerary_pk)" />
                        </div>
                    </div>
                </q-card>
                <q-dialog v-model="card">
                    <ViewItinerary/>
                </q-dialog>
            </div>


            </q-carousel-slide>      
        </q-carousel>
        </div>
        <div style="display: flex;justify-content: center;margin: 40px;">
            <text style="max-width: 700px;font-family: Poppins;font-size: large;font-weight: 600;">"Embrace the convenience and efficiency of AI and embark on an unforgettable travel experience today!" beside the button "AI-powered journey button"</text>
            <button @click="showModal = true" class="button explore-btn" style="border: none;margin:10px 0 0 10px;font-family: Poppins;">AI-Powered Journey Planner</button>
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
        </div>
        <div style="margin-left: 0px;">
             <div>
    <div class="q-pa-md">
        <q-card class="column">
            <div class="compare_main_title" style="padding: 10px 0 10px 20px;">Itinerary Comparison</div>
            <div class="row compare_content">
                <div class="compare_inner_content2">
                    <div class="compare_main_subtitle">Compare Exotic Goa 9 Nights / 10 Days Tour vs 2 others</div>
                </div>
                <div class="compare_inner_content2">
                    <div class="column compare_images">
                        <div class="compare_remove_btn">
                            <div> <img src="../assets/comparison/Removebtn.svg" alt=""
                                    @click="this.$parent.remove_itinerary('compare_itinerary_one')"></div>
                        </div>
                        <q-img class="compare_img_container">
                            <img :src="this.$parent.compare_itinerary_one.place_img" alt="" class="compare_img"/>
                        </q-img>
                        <div class="compare_title1">{{this.$parent.compare_itinerary_one.itinerary_name}}</div>
                        <div class="compare_title2">Starts From</div>
                        <div class="row">
                            <div class="compare_price">{{this.$parent.compare_itinerary_one.tour_rates}}</div>
                            <div class="compare_title3">/per person</div>
                        </div>
                    </div>
                </div>
                <div class="compare_inner_content2">
                    <div class="column compare_images">
                        <div class="compare_remove_btn">
                            <div> <img src="../assets/comparison/Removebtn.svg" alt=""
                                    @click="this.$parent.remove_itinerary('compare_itinerary_two')"></div>
                        </div>
                        <q-img class="compare_img_container">
                            <img :src="this.$parent.compare_itinerary_two.place_img" alt="" class="compare_img" />
                        </q-img>
                        <div class="compare_title1">{{this.$parent.compare_itinerary_two.itinerary_name}}</div>
                        <div class="compare_title2">Starts From</div>
                        <div class="row">
                            <div class="compare_price">{{this.$parent.compare_itinerary_two.tour_rates}}</div>
                            <div class="compare_title3">/per person</div>
                        </div>
                    </div>
                </div>
                <div class="compare_inner_content2">
                    <div class="column compare_images">
                        <div class="compare_remove_btn">
                            <div> <img src="../assets/comparison/Removebtn.svg" alt=""
                                    @click="this.$parent.remove_itinerary('compare_itinerary_three')"></div>
                        </div>
                        <q-img class="compare_img_container">
                            <img :src="this.$parent.compare_itinerary_three.place_img" alt="" class="compare_img" />
                        </q-img>
                        <div class="compare_title1">{{this.$parent.compare_itinerary_three.itinerary_name}}</div>
                        <div class="compare_title2">Starts From</div>
                        <div class="row">
                            <div class="compare_price">{{this.$parent.compare_itinerary_three.tour_rates}}</div>
                            <div class="compare_title3">/per person</div>
                        </div>
                    </div>
                </div>
            </div> 
            <q-separator />
            <div class="column" style="padding: 10px 0 0 0;">
    
                <!-- <div class="column compare_box"> -->
                    <!-- <div class="compare_mains">
                        <div class="compare_title">Tour Departure</div>
                    </div> -->
                    <!-- <div class="row compare_content">
                        <div class="compare_inner_content"></div>
                        <div class="compare_inner_content">
                            <q-table
                            bordered
                            flat
                            hide-pagination
                              :rows="this.$parent.groupByMonth(this.$parent.compare_itinerary_one.travel_dates)"
                              :columns="columns"
                              row-key="name"
                            />
                        </div>
                        <div class="compare_inner_content">
                            <q-table
                            bordered
                            flat
                            hide-pagination
                              :rows="this.$parent.groupByMonth(this.$parent.compare_itinerary_two.travel_dates)"
                              :columns="columns"
                              row-key="name"
                            />
                        </div>
                        <div class="compare_inner_content">
                            <q-table
                            bordered
                            flat
                            hide-pagination
                              :rows="this.$parent.groupByMonth(this.$parent.compare_itinerary_three.travel_dates)"
                              :columns="columns"
                              row-key="name"
                            />
                        </div>
                    </div> -->
                <!-- </div> -->
                <div class="column compare_box">
                    <div class="compare_mains">
                        <div class="compare_title">Tour Highlights</div>
                    </div>
                    <div class="row compare_content">
                        <div class="compare_inner_content"></div>
                        <div class="column compare_inner_content">
                            <ul class="compare_text"
                                v-html="this.$parent.compare_itinerary_one.tour_highlights">
                            </ul>
                        </div>
                        <div class="compare_inner_content">
                            <ul class="compare_text" v-html="this.$parent.compare_itinerary_two.tour_highlights">
                            </ul>
                        </div>
                        <div class="compare_inner_content">
                            <ul class="compare_text" v-html="this.$parent.compare_itinerary_three.tour_highlights">
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="column compare_box">
                    <div class="compare_mains">
                        <div class="compare_title">Places To Visit</div>
                    </div>
                    <div class="row compare_content">
                        <div class="compare_inner_content"></div>
                        <div class="column compare_inner_content">
                            <ol class="compare_text"
                                v-html="this.$parent.compare_itinerary_one.places_to_visit">
                            </ol>
                        </div>
                        <div class="compare_inner_content">
                            <ol class="compare_text" v-html="this.$parent.compare_itinerary_two.places_to_visit">
                            </ol>
                        </div>
                        <div class="compare_inner_content">
                            <ol class="compare_text" v-html="this.$parent.compare_itinerary_three.places_to_visit">
                            </ol>
                        </div>
                    </div>
                </div>
                <!-- <div class="column compare_box">
                    <div class="compare_mains">
                        <div class="compare_title">Accomodation</div>
                    </div>
                    <div class="row compare_content">
                        <div class="compare_inner_content"></div>
                        <div class="column compare_inner_content">
                            <ol class="compare_text"
                                v-html="this.$parent.compare_itinerary_one.accomodation_arrangements">
                            </ol>
                        </div>
                        <div class="compare_inner_content">
                            <ol class="compare_text" v-html="this.$parent.compare_itinerary_two.accomodation_arrangements">
                            </ol>
                        </div>
                        <div class="compare_inner_content">
                            <ol class="compare_text" v-html="this.$parent.compare_itinerary_three.accomodation_arrangements">
                            </ol>
                        </div>
                    </div>
                </div> -->
                <!-- <div class="column compare_box">
                    <div class="compare_mains">
                        <div class="compare_title">Travel Arrangements</div>
                    </div>
                    <div class="row compare_content">
                        <div class="compare_inner_content"></div>
                        <div class="column compare_inner_content">
                            <ol class="compare_text" 
                                v-html="this.$parent.compare_itinerary_one.travel_arrangements">
                            </ol>
                        </div>
                        <div class="compare_inner_content">
                            <ol class="compare_text" 
                                v-html="this.$parent.compare_itinerary_two.travel_arrangements">
                            </ol>
                        </div>
                        <div class="compare_inner_content">
                            <ol class="compare_text" 
                                v-html="this.$parent.compare_itinerary_three.travel_arrangements">
                            </ol>
                        </div>
                    </div>
                </div> -->
                <!-- <div class="column compare_box">
                    <div class="compare_mains">
                        <div class="compare_title">Things to carry</div>
                    </div>
                    <div class="row compare_content">
                        <div class="compare_inner_content"></div>
                        <div class="column compare_inner_content">
                            Clothing
                            <ul class="compare_text" v-html="this.$parent.compare_itinerary_one.travel_arrangements">
                            </ul>
                        </div>
                        <div class="compare_inner_content">
                            Clothing
                            <ul class="compare_text" v-html="this.$parent.compare_itinerary_two.travel_arrangements">
                            </ul>
                        </div>
                        <div class="compare_inner_content">
                            Clothing
                            <ul class="compare_text" v-html="this.$parent.compare_itinerary_three.travel_arrangements">
                            </ul>
                        </div>
                    </div>
                </div> -->
                <!-- <div class="column compare_box">
                    <div class="compare_mains">
                        <div class="compare_title">Inclusions</div>
                    </div>
                    <div class="row compare_content">
                        <div class="compare_inner_content"></div>
                        <div class="column compare_inner_content">
                            <ul class="compare_text"
                                v-html="this.$parent.compare_itinerary_one.inclusions_html">
                            </ul>
                        </div>
                        <div class="compare_inner_content">
                            <ul class="compare_text" v-html="this.$parent.compare_itinerary_two.inclusions_html">
                            </ul>
                        </div>
                        <div class="compare_inner_content">
                            <ul class="compare_text" v-html="this.$parent.compare_itinerary_three.inclusions_html">
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="column compare_box">
                    <div class="compare_mains">
                        <div class="compare_title">Exclusions</div>
                    </div>
                    <div class="row compare_content">
                        <div class="compare_inner_content"></div>
                        <div class="column compare_inner_content">
                            <ul class="compare_text"
                                v-html="this.$parent.compare_itinerary_one.exclusions_html">
                            </ul>
                        </div>
                        <div class="compare_inner_content">
                            <ul class="compare_text" v-html="this.$parent.compare_itinerary_two.exclusions_html">
                            </ul>
                        </div>
                        <div class="compare_inner_content">
                            <ul class="compare_text" v-html="this.$parent.compare_itinerary_three.exclusions_html">
                            </ul>
                        </div>
                    </div>
                </div> -->
                <!-- <div class="column compare_box">
                    <div class="compare_mains">
                        <div class="compare_title">Cancellations Policy</div>
                    </div>
                    <div class="row compare_content">
                        <div class="compare_inner_content"></div>
                        <div class="column compare_inner_content">
                            <ul class="compare_text"
                                v-html="this.$parent.compare_itinerary_one.cancellations_policy">
                            </ul>
                        </div>
                        <div class="compare_inner_content">
                            <ul class="compare_text" v-html="this.$parent.compare_itinerary_two.cancellations_policy">
                            </ul>
                        </div>
                        <div class="compare_inner_content">
                            <ul class="compare_text" v-html="this.$parent.compare_itinerary_three.cancellations_policy">
                            </ul>
                        </div>
                    </div>
                </div> -->
            </div>
        </q-card>
    </div>
    </div>



        </div>
        <div class="q-pa-md column" style="margin-left: 100px;margin-top: 50px; width: 2000px;height: 400px;">
            <text class="text-satisfied" style="margin-left: 30px;margin-top: 20px;">Ain’t satisfied with the Top-Selling itinerary.
                    Want to customise your itinerary?
                    <q-img class="cartoon" style="margin-left: 20px;" src="../assets/Goa/cartoon.svg"/>
                </text>
            <a :href="`https://api.whatsapp.com/send?phone=7977790353&text=I am excited to plan an upcoming trip and would appreciate your expertise in creating a customized itinerary for me.`" target="_blank">
            <q-btn rounded color="primary" style="height: 50px; width: 200px; margin-top: 180px;margin-left: 30px;">
                <text style="font-size: 24px; ">Click Here</text>
            </q-btn>
        </a>
        </div>
        <q-dialog v-model="edititinerary">
            <EditItineraryCardw/>
        </q-dialog>
        <div class="q-pa-md full-width">
        <div style="margin-left: 100px; margin-right: 100px; margin-bottom: 50px;">
            <text class="textguide" style="margin-left: 32px; margin-top: 30.39px;">FAQ About {{this.place_description["name"]}}</text>

            <div style="margin-top: 40px;" v-for="items,index in this.place_description['faqs_question']" :key="index">
                <text class="number">{{index+1}}</text>
                <text class="questions" style="margin-left: 20px;">{{items}}</text>
                <div style="margin-left: 50px; margin-top: 20px;">
                <text class="answers">
                {{this.place_description['faqs_answer'][index]}}
                </text>
                </div>
            </div>

           
            <!-- <div class="view_all justify-right" style="margin-top: 50px; margin-left: 80%;">
                <a href="#">View all</a>
            </div> -->
        </div>
        </div>
        <div>
            <footer class="footer" id="footer">
                <div class="q-pa-md">
        
                    <div class="row" style="font-family: Poppins;">
                        <div class="col-md-4 col-xs-12">
                            <span>
                                <h3 class="col-title" style="font-family: Poppins;">Corporate Office</h3>
                                <nav class="col-list">
                                    <ul>
                                        <li><a href="#">
                            <!-- <li>Sitaram Nagane House, Zakeria Rd,</li>
                            <li>Opp Tulsi Hotel, Opp Zee Nest Cyber,</li>
                            <li>Malad (west),Mumbai -400064,</li>
                            <li>Maharashtra</li> -->
                            <li>Phone number : +917977790353</li>
                            <li>Email - info@travelrover.in</li>
                          </a></li>
                                        <li>
                                            <h3 class="social-col-title">Follow us</h3>
                                            <div class="social-media-list">
                                                <a href="#" class="facebook"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                        height="16" fill="currentColor" class="bi bi-facebook"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                    </svg></a>
                                                <a href="#" class="twitter"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                        height="16" fill="currentColor" class="bi bi-twitter"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                    </svg></a>
                                                <a href="https://instagram.com/travel_rovers?igshid=MzRlODBiNWFlZA==" class="instagram"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                        height="16" fill="currentColor" class="bi bi-instagram"
                                                        viewBox="0 0 16 16">
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
                        <div class="col-md-4 col-xs-12" style="display: flex; justify-content: center;">
                            <h3 class="col-title-bottom" style="font-family: Poppins;">Made in India </h3>
                        </div>
                        <div class="col-md-4 col-xs-12" style="display: flex; justify-content: center;">
                            <h3 class="col-title-bottom" style="font-family: Poppins;">© 2022 All Rights Reserved</h3>
                        </div>
                        <div class="col-md-4 col-xs-12" style="display: flex; justify-content: center;">
                            <h3 class="col-title-bottom" style="font-family: Poppins;">Terms & Conditions &nbsp; &nbsp; Privacy Policy</h3>
                        </div>
                    </div>
        
                </div>
            </footer>
        </div>
    </div>
</template>
<script>
import { ref, watch } from 'vue'
// import ComparisonTable from './ComparisonTable.vue';
import AppBar from './AppBar.vue';
import ViewItinerary from './ViewItinerary.vue';
import CompareTable from './CompareTable.vue';
import { places, load_place_itinerary_data,base_url,check_if_access_token_is_valid,check_if_refresh_token_is_valid,liked_itinerary, viewed_itinerary_api, create_prompt } from "src/common/api_calls";
import { useQuasar, Notify } from 'quasar'
let $q
import EditItineraryCardw from './EditItineraryCardw.vue';


export default {
    name: 'DestinationPageWeb',
    setup() {
        return {
            slide: ref(1),
            card: ref(false),
            edititinerary: ref(false),
            slide_itineraries: ref(1)
        };
    },
    data(){
        return{
            itineraries_list:this.$parent.itineraries_list_filtered,
            place_description:this.$parent.place_description,
            showModal: false,
        }
    },
    computed:{
        itineraries_list_update(){
            return this.$parent.itineraries_list_filtered
        },
        place_description_update(){
            return this.$parent.place_description
        }
    },
    watch: {
        itineraries_list_update (newitineraries, olditineraries) {
            this.itineraries_list = this.$parent.itineraries_list_filtered;

        },
        place_description_update(newplace, oldplace){
            this.place_description=this.$parent.place_description
        },
    },
    mounted(){
        $q = useQuasar()
    },
    methods:{
        view_itinerary(itinerary_pk){
            var data = {
                "itinerary_pk":itinerary_pk
            }
            
            this.card = true
            var itinerary = []
            for(var items in this.$parent.itineraries_list_filtered){
                if(itinerary_pk == this.$parent.itineraries_list_filtered[items].itinerary_pk){
                    itinerary = this.$parent.itineraries_list_filtered[items].complete_itinerary
                    break;
                }
            }
            this.$store.commit('itinerary_preview_update', itinerary)        
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
            console.log(response);
            var access_token = window.localStorage.getItem(
              "travel_rover_access"
            );
            console.log(this.area);
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
            console.log(err);
            check_if_refresh_token_is_valid()
              .then((response) => {
                var access_token = response["data"]["access"];
                console.log(access_token);
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
    }
    },
    components: { AppBar, ViewItinerary, EditItineraryCardw }
}


</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
:root {
    --footer-bg: #0C111F;
    --color: #ffffff;
    --color-smooth: #dddddd;
    --input-border: #3a456a;
    --btn-bg-color: #f1f2fc;
    --btn-hover-bg: #d5d9f6;
    --btn-color: #1e2641;
}
.cartoon{
    width: 236px;
        height: 289px;
    
    
    
        /* Inside auto layout */
        flex: none;
        order: 0;
        flex-grow: 0;
}
.text-satisfied{
        width: 1488px;
        height: 23px;
    
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 800;
        font-size: 23px;
        line-height: 33px;
        /* identical to box height */
    
        color: #333333;
    
    
        /* Inside auto layout */
        flex: none;
        order: 0;
        flex-grow: 0;
}
.view_all{
    width: 78px;
        height: 30px;
    
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        /* identical to box height */
        text-decoration-line: underline;
    
        color: #003FA3;
    
    
        /* Inside auto layout */
        flex: none;
        order: 0;
        flex-grow: 0;
}
.answers{
    width: 1152px;
        height: 72px;
    
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    
        color: #343434;
    
    
        /* Inside auto layout */
        flex: none;
        order: 0;
        flex-grow: 1;
}
.questions{
    width: 314px;
        height: 27px;
    
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 27px;
        /* identical to box height */
    
        color: #252525;
    
    
        /* Inside auto layout */
        flex: none;
        order: 1;
        flex-grow: 0;
}
.number{
    width: 31px;
        height: 48px;
    
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 48px;
        /* identical to box height */
    
        color: #000000;
    
    
        /* Inside auto layout */
        flex: none;
        order: 0;
        flex-grow: 0;
}
.textinit{
    width: 1144px;
        height: 252px;
    
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
        /* or 175% */
        text-align: justify;
    
        color: #777777;
    
    
        /* Inside auto layout */
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
}
.textguide{
        width: 279px;
        height: 48px;
    
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 48px;
        /* identical to box height */
    
        color: #333333;
    
    
        /* Inside auto layout */
        flex: none;
        order: 0;
        flex-grow: 0;
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

.carousel-heading h5 {
    font-family: "Poppins";
    font-weight: 500;
    font-size: 45px;
    line-height: 53.5px;
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
    line-height: 54px;
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
    font-family: "Merriweather", serif;
    color: var(--color);
    font-size: 18px;
    font-weight: 500;
    padding: 0.5em 0;
    padding-left: 40px;
    font-weight: bold;
}

.col-title-bottom {
    font-family: "Merriweather", serif;
    color: var(--color);
    font-size: 14px;
    font-weight: 500;
    padding: 0.5em 0;
    padding-left: 40px;
    font-weight: bold;
}

.col-list a {
    color: var(--color-smooth);
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
    .text51{
            width: 500px;
            height: 60px;
        
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 40px;
            line-height: 60px;
            /* identical to box height */
        
            /* White/White 100 */
            color: #FFFFFF;
        
        
            /* Inside auto layout */
            flex: none;
            order: 1;
            flex-grow: 0;
            text-align: center;
    }
    .text50{
            width: 500px;
            height: 108px;
        
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            font-size: 72px;
            line-height: 108px;
            /* identical to box height */
        
            /* White/White 100 */
            color: #FFFFFF;
        
        
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
            margin: -10px 0px;
            text-align: center;
    }
    .text40{
        font-family: 'Poppins';
        font-style: bold;
        font-size: 17px;
        margin-left: 100px;
        margin-top: 50px;
    }
.text39{
        width: 260px;
            height: 336px;
        
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 28px;
            /* or 200% */
        
            color: #4B5563;
        
        
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
    }
.container31{
        display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0px;
            gap: 6px;
        
            width: 260px;
            height: 180px;
        
        
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
    }
.text38{
        width: 230px;
            height: 24px;
        
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            /* identical to box height */
        
            color: #000000;
        
        
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
    }
.container30{
        display: flex;
            flex-direction: row;
            align-items: flex-start;
            padding: 10px;
            gap: 10px;
        
            width: 1207px;
            height: 43.32px;
        
            background: #F9F9F9;
        
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
    }
.card39{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            padding: 0px;
            gap: 14px;
    
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
    }
.line33{
        position: absolute;
        
            height: 4069px;
            margin-left: 917px;
            top: 450px;
        
            border: 1px solid #DFDFDF;
    }
.line32{
        position: absolute;
        
            height: 4069px;
            margin-left: 627px;
            top: 450px;
        
            border: 1px solid #DFDFDF;
    }
.line31{
        position: absolute;
            
            height: 4069px;
            margin-left: 335px;
            top: 450px;
        
            border: 1px dashed #DFDFDF;
            
    }
.line30{
        position: absolute;
            width: 1207px;
            height: 0px;
            left: 0px;
            top: 0px;
        
            border: 1px solid #DFDFDF;
    }
.text37{
        font-family: 'Poppins';
            font-style: normal;
            font-size: 14px;
    }
.text36{
        width: 100px;
            height: 42px;
        
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 28px;
            line-height: 42px;
            /* identical to box height */
            text-align: justify;
        
            color: #2F2F42;
        
        
            /* Inside auto layout */
            flex: none;
            order: 1;
            flex-grow: 0;
    }
.text35{
        width: 78px;
            height: 21px;
        
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
            /* identical to box height */
            text-align: justify;
        
            color: #999999;
        
        
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
    }
.card38{
        display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0px;
        
            position: absolute;
            width: 159.39px;
            height: 63px;
            left: 0px;
            top: 284px;
    }
.text34{
        position: absolute;
            width: 255.81px;
            height: 48px;
            left: 0px;
            top: 216px;
        
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
        
            color: #000000;
    }
.img30{
        position: absolute;
            width: 266px;
            height: 186px;
            left: 0px;
            top: 0.46px;
    }
.card37{
        position: absolute;
            width: 255.81px;
            height: 176px;
            left: 0px;
            top: 28px;
            border-radius: 13.6382px;
    }
.text33{
        width: 49px;
            height: 18px;
        
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 18px;
            /* identical to box height */
        
            color: #262626;
        
        
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
    }
.text32{
        display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0px;
            gap: 2px;
        
            position: absolute;
            width: 65.92px;
            height: 18px;
            margin-left: 189.89px;
            top: 0px;
    }
.card36{
        width: 255.81px;
        height: 347px;
    
    
        /* Inside auto layout */
        flex: none;
        order: 0;
        flex-grow: 0;
}
.text31{
        width: 300.98px;
            height: 54px;
        
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 17px;
        
            color: #000000;
        
        
            /* Inside auto layout */
            flex: none;
            order: 1;
            flex-grow: 0;
    }
.text30{
        width: 352.01px;
            height: 48px;
        
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 48px;
            /* identical to box height */
        
            color: #333333;
        
        
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
    }
    .card35{
        display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            padding: 0px;
            gap: 39px;
        
            position: absolute;
            width: 847px;
            height: 347.78px;
            margin-left: 342px;
            top: 77.2px;
    }
.card34{
        display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 30px 0px 0px 10px;
            gap: 22px;
        
            position: absolute;
            width: 362.01px;
            height: 154.35px;
            left: 0px;
            top: 0px;
    }
.card33{
        width: 1189px;
            height: 424.98px;
        
        
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
    }
.card32{
        display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0px;
            gap: 10px;
        
            width: 1208px;
            height: 424.98px;
        
        
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
    }
.card31{
        display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0px;
            gap: 10px;
        
            width: 1208px;
            height: 424.98px;
        
        
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
    }
.card30{
        box-sizing: border-box;
        
            /* Auto layout */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 15px;
            gap: 10px;
        
            width: auto;
            height: auto;
        
            /* White/White 100 */
            background: #FFFFFF;
            border: 1px solid #E6E7EA;
            box-shadow: 4px 0px 16px rgba(158, 158, 158, 0.25), 0px 4px 16px rgba(158, 158, 158, 0.25);
            border-radius: 16px;
        
            /* Inside auto layout */
            flex: none;
            order: 1;
            flex-grow: 0;
    }
}

// for comparison
.compare_inner_content {
    justify-content: center;
    padding: 20px;
    width: 25%;
    border: 1px dotted #DFDFDF;
}

.compare_inner_content2 {
    justify-content: center;
    padding: 20px;
    width: 25%;

}

.compare_content {
    width: 100%;
}

.compare_title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    padding: 5px 0 5px 10px;
}

.compare_box {
    padding: 0 16px 0 16px !important;
}

.compare_mains {
    background: #F9F9F9;
}

.compare_main_title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 48px;

    color: #333333;
}

.compare_main_subtitle {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;

    color: #000000;
}

.compare_images {

    padding: 10px;
}

.compare_remove_btn {
    float: left;
}

.compare_img {
    width: auto;
    height: auto;
    max-width: 100%;
}

.compare_img_container {
    border-radius: 10px;
}

.compare_title1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;

    color: #000000;
}

.compare_title2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */
    text-align: justify;

    color: #999999;
}

.compare_price {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 42px;
    /* identical to box height */
    text-align: justify;

    color: #2F2F42;
}

.compare_title3 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    margin-top: 12px;

    color: #999999;
}

.vertical_separator {
    border: 1px dashed #DFDFDF;
    transform: rotate(90deg);
}
.compare_text{
    font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 28px;
    
        color: #4B5563;
}
.modal {
  position: fixed;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.chatgpt-prompt {
  margin-bottom: 20px;
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