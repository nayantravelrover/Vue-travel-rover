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
                          animated
                          control-color="primary"
                          navigation
                          >
            <q-carousel-slide  v-for="i in Math.ceil(this.itineraries_list_filtered.length/1)" :key="i" :name="i" class="column no-wrap">
                <div class="row fit justify-start items-center q-col no-wrap">
                <q-card v-for="item in itineraries_list_filtered.slice((i - 1) * 3, i * 3)" :key="item" class="iternarybox" style="width: 100%">

                    <q-img src="../assets/Goa/goa3.jpg" style="height: 282px;" />
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
                                label="Add to Compare " />
                            <q-btn class="compare" unelevated
                                style="background-color: #EFF4FF; color: #003FA3; font-family: Poppins;"
                                label="View Itinerary " @click="card = true" />
                        </div>
                    </div>
                </q-card>
            </div>


            </q-carousel-slide>      
        </q-carousel>
                        

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
import ComparisonTable from './ComparisonTable.vue';
import AppBar from './AppBar.vue';
import { places, load_place_itinerary_data } from "src/common/api_calls";
import ViewItinerary from './ViewItinerary.vue';

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
            full_itineraries_filtered: [],
        }
    },
    setup() {
        return {
            slide: ref(1),
            card: ref(false),
        };
    },
    components: {
    FooterPage,
    DestinationPageWeb,
    AppBar,
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
                "description": resp["description"].split("$$$")
            }
            this.place_description = place_dictionary
        });
        load_place_itinerary_data(place).then(response => {

            var itineraries_list = []
            var full_itineraries = []
            for (var i = 0; i < JSON.parse(response.data.data).length; i++) {

                var items = JSON.parse(response.data.data)[i]["fields"];
                full_itineraries[JSON.parse(response.data.data)[i].pk] = items;
                itineraries_list[JSON.parse(response.data.data)[i].pk] = {
                    "itinerary_name": items.itinerary_name,
                    "place_description": items.place_description.replaceAll("<ol><li>", "").replaceAll("</li></ol>", "").split("</li><li>"),
                    "place_img": items.place_img,
                    "inclusions": items.inclusions.replaceAll("<ol><li>", "").replaceAll("</li></ol>", "").split("</li><li>"),
                    "exclusions": items.exclusions.replaceAll("<ol><li>", "").replaceAll("</li></ol>", "").split("</li><li>"),
                    "tour_rates": items.tour_rates,
                    "full_itinerary": items
                }
            }
            var itineraries_list_filtered = itineraries_list.filter(function (el) {
                return el != null;
            });
            var full_itineraries_filtered = full_itineraries.filter(function (el) {
                return el != null;
            });

            this.itineraries_list_filtered = itineraries_list_filtered;
            this.full_itineraries_filtered = full_itineraries_filtered;
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
</style>