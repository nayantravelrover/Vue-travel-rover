<template>
    <div>

        <DestinationPageWeb class="gt-xs" />
        <div class="lt-md">
            <div>
                <q-carousel class="goaslide q-pa" animated v-model="slide" navigation infinite
                    :autoplay="autoplay" arrows transition-prev="slide-right" transition-next="slide-left">

                    <q-carousel-slide v-for="items,index in this.place_description['images']" :key="index" :name="index"
                        :img-src=items>
                        <AppBar />
                        <div id="inner" style="display: table;margin: 0 auto; margin-top: 35%;color: white;font-weight: bold;">
                            <div style="font-size:30px;font-family: Poppins;text-align: center;">{{this.place_description["name"]}}</div>
                            <div style="text-align: center;font-size:20px;font-family: Poppins;"> {{this.place_description['places_one_liner']}}</div>
                        </div>

                    </q-carousel-slide>

                </q-carousel>
            </div>
            <div class="description q-pa-md full-width">
                <div class="about full-width" style="margin-bottom: 30px;">
                    <div style="margin-left: 5px;">
                        <text class="text10">{{this.place_description["name"]}} travel guide</text>
                        <div class="" style="margin-top: 12px;">
                            <text class="text11">{{this.place_description["description"][0]}}
                            </text>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div style="padding: 10px 0 0 20px;">
                        <text class="text10">Our top-selling Itineraries</text>
                    </div>
                    <div>

                        <q-carousel class="q-pa" style="margin-right: 5px;" v-model="slide" transition-prev="slide-right" transition-next="slide-left"
                          swipeable
                          >
            <q-carousel-slide  v-for="i in Math.ceil(this.itineraries_list_filtered.length)" :key="i-1" :name="i-1" class="column no-wrap">
                <div class="row fit justify-start items-center q-col no-wrap">
                <q-card v-for="item in itineraries_list_filtered" :key="item" class="iternarybox" style="width: 100%">

                    <q-img :src="item.place_img" style="height: 282px;" />
                    <div class="heartbox">
                        <q-img src="../assets/Goa/heart.svg" class="heart" />
                    </div>
                    <div style="margin-top: 25px; margin-left: 20px;">
                        <text class="text12">{{item.itinerary_name}}</text>
                    </div>
                    
                    <ul class="text13">
                        <li v-for="list_item in item.place_description" :key="list_item">
                            {{list_item}}
                        </li>
                    </ul>
                    <div class="line_break" style="margin-left: 10px; margin-top:10px;"></div>
                    <div style="margin-top: 20px; margin-left: 30px;">
                        <text class="text16">

<text v-for="list_item in item.inclusions" :key="list_item">✔️ {{list_item}} </text> 
<br>
<text v-for="list_item in item.exclusions" :key="list_item">❌ {{list_item}} </text> 
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
                    <div style="margin-top: 25px; margin-left: 28px; margin-bottom: 30px;">
                        <div class="btns">
                            <q-btn class="compare" unelevated
                                style="background-color: #EFF4FF; color: #003FA3; font-family: Poppins;"
                                label="Add to Compare" @click="add_to_compare()" />
                            <q-btn class="compare" unelevated
                                style="background-color: #EFF4FF; color: #003FA3; font-family: Poppins;"
                                label="View Itinerary" @click="card = true" />
                        </div>
                    </div>
                </q-card>
                <q-dialog v-model="card">
                    <q-card class="box20 lt-md absolute-center">
                        <div class="box21">
                            <div class="box22">
                                <ItineraryPreview id="preview" style="margin:0px;"></ItineraryPreview>
                            </div>
                        </div>
                        <div class="box23">
                            <div class="box24">
                                <div class="box25">
                                    <text class="type20">Contact Us</text>
                                    <img class="share20" src="../assets/editcard/whatsapp.svg" alt="">
                                </div>
                                <div class="box25">
                                    <text class="type20">Buy Now</text>
                                    <img class="card2" src="../assets/editcard/cart1.svg" alt="">
                                </div>
                            </div>
                        </div>
                    </q-card>
                </q-dialog>
            </div>
            </q-carousel-slide>      
        </q-carousel>
                    </div>

                    <div style="margin-left: 10px;margin-right: 10px;">
                        


                        <div>
            <q-card class="card30" style="margin-top: 30px;">
                <div class="card31">
                    <div class="card32">
                        <div class="card33">
                            <div class="card34">
                                <text class="text30" style="font-size:30px;">Itinerary Comparison</text>
                                <text class="text31">Compare Exotic Goa 9 Nights / 10 Days Tour vs 2 others</text>
                            </div>
                            <div class="card35" style="flex-direction: column;">
                                {{compare_itinerary_one}}
                                <div class="card36">
                                    <div class="text32">
                                        <text class="text33">
                                            <img src="../assets/comparison/Removebtn.svg" alt="">
                                        </text>
                                    </div>
                                    <q-card class="card37">
                                        <img src="../assets/Goa/goa1.jpg" alt="" class="img30">
                                    </q-card>
                                    <text class="text34" style="margin-top: 10px;">Exotic Goa 9 Nights / 10 Days Tour</text>
                                    <div class="card38" style="margin-top: 20px;">
                                        <text class="text35">Starts</text>
                                        <div class="text36 column" >49,999
                                            <text class="text37">/Per Person</text>
                                        </div>
                                    </div>
                                </div>
                                <div class="card36" style="margin-left: 290px;" >
                                    <div class="text32">
                                        <text class="text33">
                                            <img src="../assets/comparison/Removebtn.svg" alt="">
                                        </text>
                                    </div>
                                    <q-card class="card37" style="margin-left: 290px;">
                                        <img src="../assets/Goa/goa1.jpg" alt="" class="img30">
                                    </q-card>
                                    <text class="text34" style="margin-top: 10px; margin-left: 290px;">Exotic Goa 9 Nights / 10 Days Tour</text>
                                    <div class="card38" style="margin-top: 20px;margin-left: 290px;">
                                        <text class="text35">Starts</text>
                                        <div class="text36 column">49,999
                                            <text class="text37">/Per Person</text>
                                        </div>
                                    </div>
                                </div>
                                <div class="card36" style="margin-left: 580px;" >
                                    <div class="text32">
                                        <text class="text33">
                                            <img src="../assets/comparison/Removebtn.svg" alt="">
                                        </text>
                                    </div>
                                    <q-card class="card37" style="margin-left: 580px;">
                                        <img src="../assets/Goa/goa1.jpg" alt="" class="img30">
                                    </q-card>
                                    <text class="text34" style="margin-top: 10px; margin-left: 580px;">Exotic Goa 9 Nights / 10 Days Tour</text>
                                    <div class="card38" style="margin-top: 20px;margin-left: 580px;">
                                        <text class="text35">Starts</text>
                                        <div class="text36 column">49,999
                                            <text class="text37">/Per Person</text>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="line30" style="margin-top: 450px; margin-left:10px;"></div>
                    </div>
                    <div class="line31"></div>
                    <div class="line32"></div>
                    <div class="line33"></div>
                </div>
                <div class="card39" style="margin-bottom: 1300px;">
                    <div class="container30">
                        <text class="text38">Tour Departures</text>
                        <div class="container31" style="margin-top: 50px; margin-left:101px;"><img
                                src="../assets/comparison/DatesTable.svg" alt=""></div>
                        <div class="container31" style="margin-top: 50px; margin-left:21px;"><img
                                src="../assets/comparison/DatesTable.svg" alt=""></div>
                        <div class="container31" style="margin-top: 50px; margin-left:21px;"><img
                                src="../assets/comparison/DatesTable.svg" alt=""></div>
                    </div>
                    <div class="container30" style="margin-top: 200px;">
                        <text class="text38">Tour Highlights</text>
                        <ul class="text39" style="margin-top: 50px; margin-left: 90px;">
                            <li>Day 1 - Arrival Leh Kushok Bakula Airport.</li>
                            <li>Day 2 - Leh Local Sightseeing.</li>
                            <li>Day 3 - Leh Nubra Valley Overnight.</li>
                            <li>Day 4 - Nubra Valley Pongong Lake Overnight.</li>
                            <li>Day 5 - Pongong Lake - Leh.</li>
                            <li>Day 6 - Leh Drop.</li>
                        </ul>
                        <ul class="text39" style="margin-top: 50px; margin-left: 20px;">
                            <!-- <li>Day 1 - Arrival Leh Kushok Bakula Airport.</li>
                            <li>Day 2 - Leh Local Sightseeing.</li>
                            <li>Day 3 - Leh Nubra Valley Overnight.</li>
                            <li>Day 4 - Nubra Valley Pongong Lake Overnight.</li>
                            <li>Day 5 - Pongong Lake - Leh.</li>
                            <li>Day 6 - Leh Drop.</li> -->
                        </ul>
                        <ul class="text39" style="margin-top: 50px; margin-left: 20px;">
                            <!-- <li>Day 1 - Arrival Leh Kushok Bakula Airport.</li>
                            <li>Day 2 - Leh Local Sightseeing.</li>
                            <li>Day 3 - Leh Nubra Valley Overnight.</li>
                            <li>Day 4 - Nubra Valley Pongong Lake Overnight.</li>
                            <li>Day 5 - Pongong Lake - Leh.</li>
                            <li>Day 6 - Leh Drop.</li> -->
                        </ul>
                    </div>
                    <div class="container30" style="margin-top: 270px;">
                        <text class="text38">Places to visit</text>
                        <ol class="text39" style="margin-top: 50px; margin-left:90px;">
                            <li>Pangong Lake</li>
                            <li>Khadung La Pass</li>
                            <li>Nubra Valley</li>
                            <li>Sangam</li>
                            <li>Shanti Stupa</li>
                            <li>Tso Moriri Lake</li>
                            <li>Magnetic Hill</li>
                            <li>Hall of Fame Museum</li>
                            <li>Thiksey Monastery</li>
                            <li>Zanskar Valley</li>
                            <li>Shey Monastery and Palace</li>
                            <li>Stok Palace</li>
                        </ol>
                        <ol class="text39" style="margin-top: 50px; margin-left:20px;">
                            <li>Pangong Lake</li>
                            <li>Khadung La Pass</li>
                            <li>Nubra Valley</li>
                            <li>Sangam</li>
                            <li>Shanti Stupa</li>
                            <li>Tso Moriri Lake</li>
                            <li>Magnetic Hill</li>
                            <li>Hall of Fame Museum</li>
                            <li>Thiksey Monastery</li>
                            <li>Zanskar Valley</li>
                            <li>Shey Monastery and Palace</li>
                            <li>Stok Palace</li>
                        </ol>
                        <ol class="text39" style="margin-top: 50px; margin-left:20px;">
                            <li>Pangong Lake</li>
                            <li>Khadung La Pass</li>
                            <li>Nubra Valley</li>
                            <li>Sangam</li>
                            <li>Shanti Stupa</li>
                            <li>Tso Moriri Lake</li>
                            <li>Magnetic Hill</li>
                            <li>Hall of Fame Museum</li>
                            <li>Thiksey Monastery</li>
                            <li>Zanskar Valley</li>
                            <li>Shey Monastery and Palace</li>
                            <li>Stok Palace</li>
                        </ol>
                    </div>
                    <div class="container30" style="margin-top: 360px;">
                        <text class="text38">Accommodation</text>
                       <!-- <ol class="text39">    
                            <li>Apart from regular flights between Cities, most of your travelling requires quality Road Transport.</li>
                            <li>We understand that as important as quality Accommodation, a reliable Vehicle and a caring Chauffeur is required for a pleasant tour.
                            The following are the different types of transport at your disposal:</li>
                            <ul>
                                <li>Toyota Innova</li>
                                <li>Chevrolet Tavera</li>
                                <li>Mahindra Xylo</li>
                                <li>Mini Bus 26 Seater</li>
                            </ul>
                        </ol> -->
                    </div>
                    <div class="container30" style="margin-top: 200px;">
                        <text class="text38">Travel Arrangements</text>
                    </div>
                    <div class="container30" style="margin-top: 200px;">
                        <text class="text38">Things to carry</text>
                        <text class="text40">
                            Clothing
                            <ul class="text39">
                                <li>Rucksack, Carry Bag & Plastic bags.</li>
                                <li>7-8 pair of full sleeve cloths(shirt/T-shirts + trousers).</li>
                                <li>Warm clothing (jacket, gloves, woolen cap, socks, thermal inner wear, Wind cheater).</li>
                                <li>Raincoat/Poncho.</li>
                                <li>Sports shoes with good rubber sole & full socks.</li>
                            </ul>
                        </text>
                        <text class="text40" style="margin-left: 20px;">
                            Clothing
                            <ul class="text39">
                                <li>Rucksack, Carry Bag & Plastic bags.</li>
                                <li>7-8 pair of full sleeve cloths(shirt/T-shirts + trousers).</li>
                                <li>Warm clothing (jacket, gloves, woolen cap, socks, thermal inner wear, Wind cheater).</li>
                                <li>Raincoat/Poncho.</li>
                                <li>Sports shoes with good rubber sole & full socks.</li>
                            </ul>
                        </text>
                        <text class="text40" style="margin-left: 20px;">
                            Clothing
                            <ul class="text39">
                                <li>Rucksack, Carry Bag & Plastic bags.</li>
                                <li>7-8 pair of full sleeve cloths(shirt/T-shirts + trousers).</li>
                                <li>Warm clothing (jacket, gloves, woolen cap, socks, thermal inner wear, Wind cheater).</li>
                                <li>Raincoat/Poncho.</li>
                                <li>Sports shoes with good rubber sole & full socks.</li>
                            </ul>
                        </text>
                    </div>
                    <div class="container30" style="margin-top: 400px;">
                        <text class="text38">Inclusions</text>
                        <ul class="text39" style="margin-left: 80px; margin-top: 50px;">
                            <li>Travelling by Train & Bus/Winger.</li>
                            <li>Food (8 Breakfast, 5 Lunch, 8 Dinner).</li>
                            <li>Accommodation in Tent/Wooden Huts/Guest House (Sharing basis).</li>
                            <li>Site Seeing.</li>
                            <li>First Aid Support.</li>
                            <li>Volunteers or Instructors.</li>
                        </ul>
                        <ul class="text39" style="margin-left: 20px; margin-top: 50px;">
                            <li>Travelling by Train & Bus/Winger.</li>
                            <li>Food (8 Breakfast, 5 Lunch, 8 Dinner).</li>
                            <li>Accommodation in Tent/Wooden Huts/Guest House (Sharing basis).</li>
                            <li>Site Seeing.</li>
                            <li>First Aid Support.</li>
                            <li>Volunteers or Instructors.</li>
                        </ul>
                        <ul class="text39" style="margin-left: 20px; margin-top: 50px;">
                            <li>Travelling by Train & Bus/Winger.</li>
                            <li>Food (8 Breakfast, 5 Lunch, 8 Dinner).</li>
                            <li>Accommodation in Tent/Wooden Huts/Guest House (Sharing basis).</li>
                            <li>Site Seeing.</li>
                            <li>First Aid Support.</li>
                            <li>Volunteers or Instructors.</li>
                        </ul>
                    </div>
                    <div class="container30" style="margin-top: 300px;">
                        <text class="text38">Exclusions</text>
                        <ul class="text39" style="margin-left: 80px; margin-top: 50px;">
                            <li>Food during travel & Day of Amritsar – Wagha Border.</li>
                            <li>Paragliding, River Rafting or any other paid Rides/Activities.</li>
                            <li>Entry fees at site seeing Place (if any).</li>
                            <li>Anything not mentioned in above.</li>
                            <li>Emergency medical after First Aid Support.</li>
                        </ul>
                        <ul class="text39" style="margin-left: 20px; margin-top: 50px;">
                            <li>Food during travel & Day of Amritsar – Wagha Border.</li>
                            <li>Paragliding, River Rafting or any other paid Rides/Activities.</li>
                            <li>Entry fees at site seeing Place (if any).</li>
                            <li>Anything not mentioned in above.</li>
                            <li>Emergency medical after First Aid Support.</li>
                        </ul>
                        <ul class="text39" style="margin-left: 20px; margin-top: 50px;">
                            <li>Food during travel & Day of Amritsar – Wagha Border.</li>
                            <li>Paragliding, River Rafting or any other paid Rides/Activities.</li>
                            <li>Entry fees at site seeing Place (if any).</li>
                            <li>Anything not mentioned in above.</li>
                            <li>Emergency medical after First Aid Support.</li>
                        </ul>
                    </div>
                    <div class="container30" style="margin-top: 300px;">
                        <text class="text38">Cancellation Policy</text>
                        <ul class="text39" style="margin-left: 80px; margin-top: 50px;">
                            <li>Cancellation would be granted by the Chief Instructor or higher authorities on receiving cancellation request on
                            info@travelrover.in through participant registered mail ID.</li>
                            <li>The refund amount will be paid in 10-15 working days through an AC payee cheque/Account Transfer.</li>
                            <li>The cancellation Amount will be counted on the full camp fees only.</li>
                            <li>No refund will be given in case the participant terminates the tour at any point due to any reason.</li>
                            <li>Camp fees is not transferable to another person / other camp or camp date.</li>
                        </ul>
                        <ul class="text39" style="margin-left: 20px; margin-top: 50px;">
                            <li>Cancellation would be granted by the Chief Instructor or higher authorities on receiving cancellation request on
                                info@travelrover.in through participant registered mail ID.</li>
                            <li>The refund amount will be paid in 10-15 working days through an AC payee cheque/Account Transfer.</li>
                            <li>The cancellation Amount will be counted on the full camp fees only.</li>
                            <li>No refund will be given in case the participant terminates the tour at any point due to any reason.</li>
                            <li>Camp fees is not transferable to another person / other camp or camp date.</li>
                        </ul>
                        <ul class="text39" style="margin-left: 20px; margin-top: 50px;">
                            <li>Cancellation would be granted by the Chief Instructor or higher authorities on receiving cancellation request on
                                info@travelrover.in through participant registered mail ID.</li>
                            <li>The refund amount will be paid in 10-15 working days through an AC payee cheque/Account Transfer.</li>
                            <li>The cancellation Amount will be counted on the full camp fees only.</li>
                            <li>No refund will be given in case the participant terminates the tour at any point due to any reason.</li>
                            <li>Camp fees is not transferable to another person / other camp or camp date.</li>
                        </ul>
                    </div>
                </div>
            </q-card>
    </div>







                    </div>
                    
                    <div class="box1" style="margin-top: 30px;">
                        <q-img src="../assets/Goa/cartoon.svg" />
                        <text class="text17">Ain’t satisfied with the Top-Selling itinerary. Want to customise your
                            itinerary?</text>
                        <q-btn class="btn12" unelevated rounded color="primary" @click="openDialogBox()"><text
                                style="font-family: Poppins; font-size: 20px; font-style: normal;">Click Here</text>
                        </q-btn>
                    </div>
                    <div class="faq_card" style="margin-left: 20px; margin-top: 20px; ">
                        <text class="text10">FAQ about {{this.place_description["name"]}}</text>
                        <br>
                        <div style="margin-top: 10px;" v-for="items,index in this.place_description['faqs_question']"
                            :key="index">
                            <text class="number">{{index + 1}}</text>
                            <text class="questions" style="margin-left: 10px;">{{items}}</text>
                            <div style="margin-left: 35px; margin-top: 10px;">
                                <text class="answers">
                                    {{this.place_description['faqs_answer'][index]}}
                                </text>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <FooterPage />
        </div>
    </div>
</template>


<script>
import { ref, defineComponent } from 'vue'
import FooterPage from './FooterPage.vue'
import DestinationPageWeb from './DestinationPageWeb.vue';
// import ComparisonTable from './ComparisonTable.vue';
import AppBar from './AppBar.vue';
import { places, load_place_itinerary_data } from "src/common/api_calls";
import { useQuasar } from 'quasar'
import ViewItinerary from './ViewItinerary.vue';
import ItineraryPreview from '../components/ItineraryPreview.vue'

export default defineComponent({
    name: "DestinationPage",
    methods: {
        openDialogBox() {
            this.$router.push('/editcardm');
        }
    },
    data() {
        return {
            place_description: "",
            itineraries_list_filtered: [],
            compare_itinerary_one:[],
            compare_itinerary_two:[],
            compare_itinerary_three:[],
        }
    },
    setup() {
        const $q = useQuasar()
        return {
            slide: ref(1),
            card: ref(false),
        };
    },
    components: {
        FooterPage,
        DestinationPageWeb,
        AppBar,  
        ItineraryPreview
    },
    created() {
        var place = this.$route.query.place.trim()
        places(place).then(response => {
            var resp = JSON.parse(response.data.data)[0]["fields"]
            var place_dictionary = {
                "name": resp["name"],
                "faqs_question": resp["faqs"].split("$$$"),
                "faqs_answer": resp["faqs_answer"].split("$$$"),
                "images": resp["images"].split("$$$"),
                "places_one_liner": resp["one_liner"],
                "description": resp["description"].split("$$$"),
            }
            this.place_description = place_dictionary
            console.log(this.place_description)
        });
        load_place_itinerary_data(place).then(response => {

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
                    "cancellation_policy":items.cancellation_policy
                }
            }
            var itineraries_list_filtered = itineraries_list.filter(function (el) {
                return el != null;
            });
            this.itineraries_list_filtered = itineraries_list_filtered;
            try{
                this.compare_itinerary_one = this.itineraries_list_filtered[0]
            }catch(e){};

            try{
                this.compare_itinerary_two = this.itineraries_list_filtered[1]
            }catch(e){};

            try{
                this.compare_itinerary_three = this.itineraries_list_filtered[2]
            }catch(e){};
            console.log(this.compare_itinerary_one)
            console.log(this.compare_itinerary_two)
            console.log(this.compare_itinerary_three)
        });


    },
})

</script>

<style lang="scss">
.faq_card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;

    width: 350px;
    height: 0 auto;


    /* Inside auto layout */
    flex: none;
    order: 4;
    flex-grow: 0;
}

.heartbox {
    position: absolute;
    width: 32px;
    height: 32px;
    left: 282px;
    top: 24px;
}

.heart {
    left: 7.23%;
    right: 6.1%;
    top: 10.8%;
    bottom: 12.5%;
    backdrop-filter: blur(0.5px);
}

.btn12 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 60px;
    gap: 8px;

    width: 252px;
    height: 50px;

    background: #003FA3;
    border-radius: 30px;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
}

.text17 {
    width: 380px;
    height: 90px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    text-align: center;

    color: #515151;


    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
}

.text16 {

    width: 200px;
    height: 44px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 22px;
    /* or 183% */

    color: #4B5563;


    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
}

.box1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 20px;

    width: 380px;
    height: 0 auto;


    /* Inside auto layout */
    flex: none;
    order: 3;
    flex-grow: 0;
}

.text15 {
    width: 240px;
    height: 42px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 42px;
    /* identical to box height */
    text-align: justify;
    letter-spacing: 0.02em;

    color: #2F2F42;


    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 1;
}

.line_break {
    width: 298px;
    height: 0px;

    border: 1px dashed #EEEEEE;

    /* Inside auto layout */
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}

.goaslide {
    height: 500px;
    left: 0px;
    right: 0px;
}

.price_main {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 10px;

    width: 328px;
    height: 42px;
}

.text14 {
    width: 78px;
    height: 21px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */
    text-align: justify;

    color: #484848;
}

.price_container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 10px;

    width: 328px;
    height: 42px;
}

.btns {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 10px;

    width: 90%;
    height: 44px;
}

.compare {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 10px 9px;
    gap: 5px;

    width: 496px;
    height: 44px;
    border-radius: 6px;
}

.itenarybtn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 10px 9px;
    gap: 5px;

    width: 0 auto;
    height: 0 auto;
    border-radius: 6px;
}

.iternarybox {
    box-sizing: border-box;

    width: 338px;
    left: 0px;
    top: 0px;
    height:950px;

    background: #FFFFFF;
    border: 1px solid #E6E7EA;
    box-shadow: 0px 4px 16px rgba(158, 158, 158, 0.25);
    border-radius: 16px;
}

.text13 {
    width: 298px;
    height: 134px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;

    color: #343434;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}

.text12 {
    width: 348px;
    height: 30px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 30px;
    /* identical to box height */
    display: flex;
    align-items: center;

    color: #000000;


    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
}

.text11.show-more .moreText {
    display: inline;

}

.viewBtn {
    cursor: pointer;
}

.moreText {
    display: none;
}

.description {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 20px;
    gap: 10px;

    margin-bottom: 10px;
    background: #F8FEFD;
}

.about {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 5px;
    gap: 24px;

    width: 388px;
    height: 198px;


    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
}

.text10 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;


    color: #333333;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.text11 {


    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 26px;
    /* or 173% */
    text-align: justify;

    color: #505050;


    /* Inside auto layout */
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}

.answers {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-align: justify;

    color: #343434;


    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 1;
}

.questions {
    width: 338px;
    height: 24px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */

    color: #252525;


    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 1;
    flex-grow: 0;
}

.number {
    width: 34px;
    height: 36px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    /* identical to box height */

    color: #000000;


    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
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
        
            width: 1240px;
            height: 4533.98px;
        
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
</style>