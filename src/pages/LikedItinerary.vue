<template>
    <div>
        <div class="q-pa-md lt-md">
            <!-- <AppBar /> -->
            <div class="col-12" style="margin-top: 50px;">
                <text class="new2" style="margin-left: 10px;">Liked Itineraries</text>
                <q-card class="column" style="padding: 5px;">
                    <q-list class="column" style="justify-items: space-evenly;">
                    <div class="column" style="padding: 10px;width: 100%;border-radius: 10px;" v-for="item,index in itineraries_list_filtered" :key="item" :name="(index+1)">
                            <div class="row">
                                <div style="width: 40%;">
                                    <q-img style="border-radius: 10px;">
                                        <img :src="item.place_img" alt="" class="profile_itinerary_image_mobile">
                                    </q-img>
                                </div>
                                <div style="width: 60%;padding: 0 0 0 10px;">
                                    <div class="viewed_itinerary_mobile_text">{{item.itinerary_name}}
                                    </div>
                                </div>
                            </div>
                            <div class="row" style="margin-top: 20px;width: 100%;">
                                <div style="width: 50%;"></div>
                                <div style="width: 50%;">
                                    <q-btn class="viewed_itineray_btn">View Itinerary</q-btn>
                                </div>
                            </div>
                        </div>
                        <q-separator />
                    </q-list>
                </q-card>
            </div>
        </div>

        <!-- for web -->

        <div class="gt-sm">
            <q-card class="column" style="min-width: 800px;border-radius: 14px;max-width: 800px;">
                <div class="column">
                    <div class="profile_liked">Liked Itineraries</div>
                    <div style="padding: 10px;">
            
                        <q-list class="column" style="justify-items: space-evenly;" v-for="item,index in itineraries_list_filtered" :key="item" :name="(index+1)">

                            <div class="row" style="padding: 10px;width: 100%;justify-content: space-evenly;border-radius: 10px;" >


                                <div class="column" style="width: 33%;padding: 5px;">
                                    <q-img class="profile_itinerary_image_container">
                                        <img :src="item.place_img" alt="" class="profile_itinerary_image">
                                    </q-img>
                                </div>
                                <div class="column" style="width: 33%;padding: 5px;">
                                    <div class="profile_itinerary_card_text1">{{item.itinerary_name}}</div>
                                    <div class="profile_itinerary_card_text2">
                                         
                                        <li v-for="list_item in item.place_description" :key="list_item">
                                            {{list_item}}
                                        </li>
                                        
                                    </div>
                                </div>
                                <div class="column" style="width: 33%;padding: 5px;">
                                    <div class="column">
                                        <div class="profile_itinerary_card_text3">
                                            Inclusion
                                        </div>
                                        <div class="profile_itinerary_card_text4">
                                            <text v-for="list_item in item.inclusions" :key="list_item">✔️ {{list_item}} </text> 
                                            <text v-for="list_item in item.exclusions" :key="list_item">❌ {{list_item}} </text> 
                                        </div>
                                    </div>
                                    <div class="profile_itinerary_card_text5" style="margin-top:10px;">Starts</div>
                                    <div class="row">
                                        <div class="profile_itinerary_card_text6" style="margin-top:10px;">{{item.tour_rates}}</div>
                                        <div class="profile_itinerary_card_text4" style="margin-top:20px;">/Per Person</div>
                                    </div>
                                    <q-btn class="profile_view_itinerary_btn">View Itinerary</q-btn>
                                </div>
                            </div>
                            <q-separator />
            
                        </q-list>
            
                    </div>
                </div>
            </q-card>
        </div>
    </div>
</template>
<script>
import { defineComponent } from "vue";
// import AppBar from "./AppBar.vue";
import {get_liked_itineraries, check_if_access_token_is_valid,check_if_refresh_token_is_valid,get_viewed_itineraries} from "src/common/api_calls";
import { useQuasar, Notify } from 'quasar'

let $q

export default defineComponent({
    name: "LikedItinerary",

    // components: {
    //     AppBar
    // },
    data(){
        return{
            itineraries_list_filtered:[]
        }
    },
    mounted(){
        $q = useQuasar()

    },
    created(){


        check_if_access_token_is_valid().then(response=>{
                  var access_token = window.localStorage.getItem("travel_rover_access");
                  get_liked_itineraries(access_token).then(response =>{
                        

                        var itineraries_list = []
                        for (var i = 0; i < JSON.parse(response.data.data).length; i++) {

                            var items = JSON.parse(response.data.data)[i]["fields"];
                            itineraries_list[JSON.parse(response.data.data)[i].pk] = {
                                "itinerary_name": items.itinerary_name,
                                "place_description": items.place_description.replaceAll("<ol><li>", "").replaceAll("</li></ol>", "").split("</li><li>"),
                                "place_img": items.place_img,
                                "inclusions": items.inclusions.replaceAll("<ol><li>", "").replaceAll("</li></ol>", "").split("</li><li>"),
                                "exclusions": items.exclusions.replaceAll("<ol><li>", "").replaceAll("</li></ol>", "").split("</li><li>"),
                                "tour_rates": items.tour_rates,
                                "tour_highlights":items.tour_highlights,
                                "places_to_visit": items.places_to_visit,
                                "accomodation_arrangements":items.accomodation_arrangements,
                                "travel_arrangements":items.travel_arrangements,
                                "inclusions_html": items.inclusions,
                                "exclusions_html": items.exclusions,
                                "things_to_carry": items.things_to_carry,
                                "cancellation_policy":items.cancellation_policy,
                                "itinerary_pk":JSON.parse(response.data.data)[i].pk,
                            }
                        }
                        var itineraries_list_filtered = itineraries_list.filter(function (el) {
                            return el != null;
                        });
                        this.itineraries_list_filtered = itineraries_list_filtered;

                        console.log(this.itineraries_list_filtered)
                    });
                  this.$store.commit('user_logged_in_update', true)
                }).catch(err =>{
                    check_if_refresh_token_is_valid().then(response => {
                      var access_token = response["data"]["access"];
                      window.localStorage.setItem("travel_rover_access", access_token);
                      get_liked_itineraries(access_token).then(response =>{
                        

                        var itineraries_list = []
                        for (var i = 0; i < JSON.parse(response.data.data).length; i++) {

                            var items = JSON.parse(response.data.data)[i]["fields"];
                            itineraries_list[JSON.parse(response.data.data)[i].pk] = {
                                "itinerary_name": items.itinerary_name,
                                "place_description": items.place_description.replaceAll("<ol><li>", "").replaceAll("</li></ol>", "").split("</li><li>"),
                                "place_img": items.place_img,
                                "inclusions": items.inclusions.replaceAll("<ol><li>", "").replaceAll("</li></ol>", "").split("</li><li>"),
                                "exclusions": items.exclusions.replaceAll("<ol><li>", "").replaceAll("</li></ol>", "").split("</li><li>"),
                                "tour_rates": items.tour_rates,
                                "tour_highlights":items.tour_highlights,
                                "places_to_visit": items.places_to_visit,
                                "accomodation_arrangements":items.accomodation_arrangements,
                                "travel_arrangements":items.travel_arrangements,
                                "inclusions_html": items.inclusions,
                                "exclusions_html": items.exclusions,
                                "things_to_carry": items.things_to_carry,
                                "cancellation_policy":items.cancellation_policy,
                                "itinerary_pk":JSON.parse(response.data.data)[i].pk,
                            }
                        }
                        var itineraries_list_filtered = itineraries_list.filter(function (el) {
                            return el != null;
                        });
                        this.itineraries_list_filtered = itineraries_list_filtered;



                        console.log(this.itineraries_list_filtered)
                        console.log(response)
                        });
                      this.$store.commit('user_logged_in_update', true)
                    }).catch(err =>{
                      $q.notify({
                        type: 'negative',
                        message: 'Kindly log-in/sign-up to enable this functionality',
                        position: 'top'
                      })
                      this.$store.commit('user_logged_in_update', false)
                    });
                });
            }
}) 
</script>
<style>
.new3 {
    box-sizing: border-box;

    /* Auto layout */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    gap: 20px;

    width: auto;
    height: auto;
    top: 10px;
    overflow-y: scroll;

    background: #FFFFFF;
    border: 1px solid #E6E7EA;
    border-radius: 10px;
}

.new2 {
    width: fit-content;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 36px;
    /* identical to box height */
    display: flex;
    align-items: center;

    /* Cool Grey/600 */
    color: #4B5563;


    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
}

/* view itinerary */
.profile_itinerary_image_mobile {
    width: auto;
    height: auto;
    max-width: 100%;
}

.viewed_itinerary_mobile_text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;

    color: #000000;
}

.viewed_itineray_btn {
    background: #003FA3;
    border-radius: 6px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;

    color: #FFFFFF;
}

/* for web */

.profile_liked {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    padding: 10px 0 0 20px;
    color: #4B5563;
}

.profile_name_text2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;

    color: #505050;
}

.profile_name_text1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;

    color: #BFBFBF;
}

.profile_itinerary_image {
    width: auto;
    height: auto;
    max-width: 100%;
}

.profile_itinerary_image_container {
    border-radius: 8px;
}

.profile_itinerary_card_text1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;

    color: #000000;
}

.profile_itinerary_card_text2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;

    color: #343434;
}

.profile_itinerary_card_text3 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;


    color: #4B5563;
}

.profile_itinerary_card_text4 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;


    color: #4B5563;
}

.profile_itinerary_card_text5 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;


    color: #484848;
}

.profile_itinerary_card_text6 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;


    color: #2F2F42;
}

.profile_view_itinerary_btn {
    background-color: #2659C3;
    border-radius: 26px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    width: 70%;
    margin-top: 10px;

    color: #FFFFFF;
}

.custom_btn_text {
    color: white;
}

.custom_itinerary_text1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;

    color: #000000;
}

.custom_itinerary_text2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;

    color: #000000;
}

.custom_itinerary_text3 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    color: #757575;
}

.custom_btn_text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;

    color: #FFFFFF;
}
</style>