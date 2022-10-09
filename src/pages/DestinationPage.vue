<template>
    <div>
    <MainHome class="gt-xs"/>
    <div class="lt-md">
        <div>
            <q-carousel class="goaslide q-pa full-screen" animated v-model="slide" navigation
                    infinite :autoplay="autoplay" arrows transition-prev="slide-right" transition-next="slide-left"
                    @mouseenter="autoplay = false" @mouseleave="autoplay = true">
                    <q-carousel-slide :name="1" img-src="../assets/Goa.jpg">
                        <AppBar/>
                        <MobileCard/>
                    </q-carousel-slide>
                    <q-carousel-slide :name="2" img-src="../assets/Goa/goa1.jpg">
                        <AppBar />
                        <MobileCard />
                    </q-carousel-slide>
                    <q-carousel-slide :name="3" img-src="../assets/Goa/goa2.jpg">
                        <AppBar />
                        <MobileCard />
                    </q-carousel-slide>
                    <q-carousel-slide :name="4" img-src="../assets/Goa/goa3.jpg">
                        <AppBar />
                        <MobileCard />
                    </q-carousel-slide>
                    <q-carousel-slide :name="5" img-src="../assets/Goa/goa4.jpg">
                        <AppBar />
                        <MobileCard />
                    </q-carousel-slide>
            </q-carousel>
        </div>
        <div class="description q-pa-md full-width">
            <div class="about full-width" style="margin-bottom: 30px;">
                <div style="margin-left: 5px;">
                    <text class="text10">Goa travel guide</text>
                    <div class="" style="margin-top: 12px;">
                    <text class="text11">A relaxing journey to Goa will enable you to appreciate the splendour of southern India. You may arrange a low-cost trip
                    to India's stunning backwater state with Travel Rover. As Goa is here to rejuvenate you, calm your inner mind. Goa is
                    situated in the southernmost portion of India, close to the Arabian Sea coast. <span class="moreText"> Keralites have a lovely way of living
                    that is separate from the bustling and busy everyday routine. Travelers from all over the world have been drawn to it by
                    its dramatic tropical landscape and sporadic rains. Get ready to be padding onboard for one of the best adventures in a
                    long time as we depart from the beaches, temples, cultural performances, and boathouses!
                    </span>
                    </text>
                    </div>
              <!--  <div>
                        <q-btn class="viewBtn">view more</q-btn>
                    </div> -->
                </div>
            </div>
        </div>
        <q-layout class="q-pa-md justify-center">
            <div>
                <div class="full-width" style="margin-left: 10px; margin-bottom:10px;">
                    <text class="text10" style="margin-left: 15px;">Our top-selling Itineraries</text>
                </div>
                <q-carousel style="height: 790px;" 
                    class="q-pa" 
                    v-model="slide"
                    transition-prev="slide-right"
                    transition-next="slide-left"
                    swipeable
                    control-color="primary"
                    navigation
                    padding
                    arrows>
                <q-carousel-slide :name="1">
                <q-card class="iternarybox">
                    <q-img src="../assets/Goa/goa3.jpg" style="height: 200px;"/>
                    <div class="heartbox">
                    <q-img src="../assets/Goa/heart.svg" class="heart"/>
                    </div>
                    <div style="margin-top: 25px; margin-left: 20px;">
                        <text class="text12">Exotic Goa 9 Nights / 10 Days Tour</text>
                    </div>
                    <ul class="text13">
                        <li>
                            The scenic and serene hill stations in Goa offer unlimited rejuvenation to a tired soul.
                        </li>
                        <li>
                            The picturesque emerald backwaters of Goa take you on a tour of the unique lifestyle of the villages in the
                            states.
                        </li>
                        <li>
                            The sandy beaches of Goa with azure waters are undoubtably the perfect places for beach holidays in south India.
                        </li>
                    </ul>
                    <div class="line_break" style="margin-left: 20px; margin-top:30px;"></div>
                    <div style="margin-top: 20px; margin-left: 30px;">
                        <text class="text16">✔️ Site Seeing. ✔️ First Aid Support. ✔️ Volunteers or Instructors. ❌ Entry fees at site seeing Place</text>
                    </div>
                    <div class="line_break" style="margin-left: 20px; margin-top:20px;"></div>
                    <div class="price_main" style="margin-top: 20px; margin-left: 30px;">
                        <div class="price_container">
                            <text class="text14" style="width: 80px;">Starts from</text>
                        </div>
                        <div class="text15">
                            <text>42,999</text>
                            <text class="text14">/Per Person</text>
                        </div>
                    </div>
                    <div class="line_break" style="margin-left: 20px; margin-top:20px;"></div>
                    <div style="margin-top: 25px; margin-left: 28px; margin-bottom: 30px;">
                        <div class="btns">
                            <q-btn class="compare" unelevated style="background-color: #EFF4FF; color: #003FA3; font-family: Poppins;" label="Add to Compare " />
                            <q-btn class="compare" unelevated style="background-color: #EFF4FF; color: #003FA3; font-family: Poppins;" label="View Itinerary " />
                        </div>
                    </div>
                </q-card>
                </q-carousel-slide>
                <q-carousel-slide :name="2">
                    <q-card class="iternarybox">
                        <q-img src="../assets/Goa/goa4.jpg" style="height: 200px;" />
                        <div class="heartbox">
                            <q-img src="../assets/Goa/heart.svg" class="heart" />
                        </div>
                        <div style="margin-top: 25px; margin-left: 20px;">
                            <text class="text12">Exotic Goa 9 Nights / 10 Days Tour</text>
                        </div>
                        <ul class="text13">
                            <li>
                                The scenic and serene hill stations in Goa offer unlimited rejuvenation to a tired soul.
                            </li>
                            <li>
                                The picturesque emerald backwaters of Goa take you on a tour of the unique lifestyle of the villages in the
                                states.
                            </li>
                            <li>
                                The sandy beaches of Goa with azure waters are undoubtably the perfect places for beach holidays in south
                                India.
                            </li>
                        </ul>
                        <div class="line_break" style="margin-left: 20px; margin-top:30px;"></div>
                        <div style="margin-top: 20px; margin-left: 30px;">
                            <text class="text16">✔️ Site Seeing. ✔️ First Aid Support. ✔️ Volunteers or Instructors. ❌ Entry fees at site
                                seeing Place</text>
                        </div>
                        <div class="line_break" style="margin-left: 20px; margin-top:20px;"></div>
                        <div class="price_main" style="margin-top: 20px; margin-left: 30px;">
                            <div class="price_container">
                                <text class="text14" style="width: 80px;">Starts from</text>
                            </div>
                            <div class="text15">
                                <text>42,999</text>
                                <text class="text14">/Per Person</text>
                            </div>
                        </div>
                        <div class="line_break" style="margin-left: 20px; margin-top:20px;"></div>
                        <div style="margin-top: 25px; margin-left: 28px; margin-bottom: 30px;">
                            <div class="btns">
                                <q-btn class="compare" unelevated style="background-color: #EFF4FF; color: #003FA3; font-family: Poppins;"
                                    label="Add to Compare " />
                                <q-btn class="compare" unelevated style="background-color: #EFF4FF; color: #003FA3; font-family: Poppins;"
                                    label="View Itinerary " />
                            </div>
                        </div>
                    </q-card>
                </q-carousel-slide>
                <q-carousel-slide :name="3">
                    <q-card class="iternarybox">
                        <q-img src="../assets/Goa/goa2.jpg" style="height: 200px;" />
                        <div class="heartbox">
                            <q-img src="../assets/Goa/heart.svg" class="heart" />
                        </div>
                        <div style="margin-top: 25px; margin-left: 20px;">
                            <text class="text12">Exotic Goa 9 Nights / 10 Days Tour</text>
                        </div>
                        <ul class="text13">
                            <li>
                                The scenic and serene hill stations in Goa offer unlimited rejuvenation to a tired soul.
                            </li>
                            <li>
                                The picturesque emerald backwaters of Goa take you on a tour of the unique lifestyle of the villages in
                                the
                                states.
                            </li>
                            <li>
                                The sandy beaches of Goa with azure waters are undoubtably the perfect places for beach holidays in
                                south
                                India.
                            </li>
                        </ul>
                        <div class="line_break" style="margin-left: 20px; margin-top:30px;"></div>
                        <div style="margin-top: 20px; margin-left: 30px;">
                            <text class="text16">✔️ Site Seeing. ✔️ First Aid Support. ✔️ Volunteers or Instructors. ❌ Entry fees at
                                site
                                seeing Place</text>
                        </div>
                        <div class="line_break" style="margin-left: 20px; margin-top:20px;"></div>
                        <div class="price_main" style="margin-top: 20px; margin-left: 30px;">
                            <div class="price_container">
                                <text class="text14" style="width: 80px;">Starts from</text>
                            </div>
                            <div class="text15">
                                <text>42,999</text>
                                <text class="text14">/Per Person</text>
                            </div>
                        </div>
                        <div class="line_break" style="margin-left: 20px; margin-top:20px;"></div>
                        <div style="margin-top: 25px; margin-left: 28px; margin-bottom: 30px;">
                            <div class="btns">
                                <q-btn class="compare" unelevated
                                    style="background-color: #EFF4FF; color: #003FA3; font-family: Poppins;" label="Add to Compare " />
                                <q-btn class="compare" unelevated
                                    style="background-color: #EFF4FF; color: #003FA3; font-family: Poppins;" label="View Itinerary " />
                            </div>
                        </div>
                    </q-card>
                </q-carousel-slide>
                <q-carousel-slide :name="4">
                    <q-card class="iternarybox">
                        <q-img src="../assets/Goa/goa1.jpg" style="height: 200px;" />
                        <div class="heartbox">
                            <q-img src="../assets/Goa/heart.svg" class="heart" />
                        </div>
                        <div style="margin-top: 25px; margin-left: 20px;">
                            <text class="text12">Exotic Goa 9 Nights / 10 Days Tour</text>
                        </div>
                        <ul class="text13">
                            <li>
                                The scenic and serene hill stations in Goa offer unlimited rejuvenation to a tired soul.
                            </li>
                            <li>
                                The picturesque emerald backwaters of Goa take you on a tour of the unique lifestyle of the villages in
                                the
                                states.
                            </li>
                            <li>
                                The sandy beaches of Goa with azure waters are undoubtably the perfect places for beach holidays in
                                south
                                India.
                            </li>
                        </ul>
                        <div class="line_break" style="margin-left: 20px; margin-top:30px;"></div>
                        <div style="margin-top: 20px; margin-left: 30px;">
                            <text class="text16">✔️ Site Seeing. ✔️ First Aid Support. ✔️ Volunteers or Instructors. ❌ Entry fees at
                                site
                                seeing Place</text>
                        </div>
                        <div class="line_break" style="margin-left: 20px; margin-top:20px;"></div>
                        <div class="price_main" style="margin-top: 20px; margin-left: 30px;">
                            <div class="price_container">
                                <text class="text14" style="width: 80px;">Starts from</text>
                            </div>
                            <div class="text15">
                                <text>42,999</text>
                                <text class="text14">/Per Person</text>
                            </div>
                        </div>
                        <div class="line_break" style="margin-left: 20px; margin-top:20px;"></div>
                        <div style="margin-top: 25px; margin-left: 28px; margin-bottom: 30px;">
                            <div class="btns">
                                <q-btn class="compare" unelevated
                                    style="background-color: #EFF4FF; color: #003FA3; font-family: Poppins;" label="Add to Compare " />
                                <q-btn class="compare" unelevated
                                    style="background-color: #EFF4FF; color: #003FA3; font-family: Poppins;" label="View Itinerary " />
                            </div>
                        </div>
                    </q-card>
                </q-carousel-slide>
                <q-carousel-slide :name="5">
                    <q-card class="iternarybox">
                        <q-img src="../assets/Goa/goa.jpg" style="height: 200px;" />
                        <div class="heartbox">
                            <q-img src="../assets/Goa/heart.svg" class="heart" />
                        </div>
                        <div style="margin-top: 25px; margin-left: 20px;">
                            <text class="text12">Exotic Goa 9 Nights / 10 Days Tour</text>
                        </div>
                        <ul class="text13">
                            <li>
                                The scenic and serene hill stations in Goa offer unlimited rejuvenation to a tired soul.
                            </li>
                            <li>
                                The picturesque emerald backwaters of Goa take you on a tour of the unique lifestyle of the villages in
                                the
                                states.
                            </li>
                            <li>
                                The sandy beaches of Goa with azure waters are undoubtably the perfect places for beach holidays in
                                south
                                India.
                            </li>
                        </ul>
                        <div class="line_break" style="margin-left: 20px; margin-top:30px;"></div>
                        <div style="margin-top: 20px; margin-left: 30px;">
                            <text class="text16">✔️ Site Seeing. ✔️ First Aid Support. ✔️ Volunteers or Instructors. ❌ Entry fees at
                                site
                                seeing Place</text>
                        </div>
                        <div class="line_break" style="margin-left: 20px; margin-top:20px;"></div>
                        <div class="price_main" style="margin-top: 20px; margin-left: 30px;">
                            <div class="price_container">
                                <text class="text14" style="width: 80px;">Starts from</text>
                            </div>
                            <div class="text15">
                                <text>42,999</text>
                                <text class="text14">/Per Person</text>
                            </div>
                        </div>
                        <div class="line_break" style="margin-left: 20px; margin-top:20px;"></div>
                        <div style="margin-top: 25px;margin-left: 28px; margin-bottom: 30px;">
                            <div class="btns">
                                <q-btn class="compare" unelevated
                                    style="background-color: #EFF4FF; color: #003FA3; font-family: Poppins;" label="Add to Compare " />
                                <q-btn class="compare" unelevated
                                    style="background-color: #EFF4FF; color: #003FA3; font-family: Poppins;" label="View Itinerary " />
                            </div>
                        </div>
                    </q-card>
                </q-carousel-slide>
                </q-carousel>
                <div style="margin-top: 20px;">
                    <ComparisonTable/>
                </div>
                <div class="box1" style="margin-top: 30px;"> 
                    <q-img src="../assets/Goa/cartoon.svg"/>
                    <text class="text17">Ain’t satisfied with the Top-Selling itinerary. Want to customise your itinerary?</text>
                    <q-btn class="btn12" unelevated rounded color="primary" @click="openDialogBox()"><text style="font-family: Poppins; font-size: 20px; font-style: normal;">Click Here</text></q-btn>
                </div>
                <div class="faq_card" style="margin-left: 20px; margin-top: 20px; ">
                    <text class="text10" >FAQ about Goa</text>
                    <div style="margin-top: 10px;">
                        <text class="number">01</text>
                        <text class="questions" style="margin-left: 10px;">When is the best time to visit Goa?</text>
                        <div style="margin-left: 35px; margin-top: 10px;">
                            <text class="answers">
                                The best time to visit Goa is between October and February when the weather is perfect for sightseeing. The
                                monsoon
                                season between June and September is also a good time to visit and enjoy the natural beauty and Ayurveda
                                therapies. In
                                the summer season, it can be difficult to plan a trip to Goa because of high temperature and humidity.
                                However, hill
                                stations like Munnar can still be visited in the state.
                            </text>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </q-layout>
        <FooterPage/>
    </div>
    </div>
</template>
<script>
import { ref } from 'vue'
import FooterPage from './FooterPage.vue'
import MainHome from './MainHome.vue';
import ComparisonTable from './ComparisonTable.vue';
import AppBar from './AppBar.vue';
import MobileCard from './MobileCard.vue';



export default {
    name: "DestinationPage",
    methods: {
        openDialogBox(){
            this.$router.push('/editcardm');
        }
    },

    setup() {
        return {
            slide: ref(1),
            autoplay: ref(true)
        };
    },
    components: {
    FooterPage,
    MainHome,
    ComparisonTable,
    AppBar,
    MobileCard
}
}
</script>
<style lang="scss">
    
.faq_card{
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
.heartbox{
    position: absolute;
        width: 32px;
        height: 32px;
        left: 282px;
        top: 24px;
    }
.heart{
            left: 7.23%;
            right: 6.1%;
            top: 10.8%;
            bottom: 12.5%;
            backdrop-filter: blur(0.5px);
    }
.btn12{
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
.text17{
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
.text16{

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
    .box1{
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
.text15{
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
    .line_break{
        width: 298px;
            height: 0px;
        
            border: 1px dashed #EEEEEE;
        
            /* Inside auto layout */
            flex: none;
            order: 1;
            align-self: stretch;
            flex-grow: 0;
    }
    .goaslide{
        height: 500px;
        left: 0px;
        right: 0px;
    }
    .price_main{
        display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0px;
            gap: 10px;
        
            width: 328px;
            height: 42px;
    }
    .text14{
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
    .price_container{
        display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0px;
            gap: 10px;
        
            width: 328px;
            height: 42px;
    }
    .btns{
        display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0px;
            gap: 10px;
        
            width: 288px;
            height: 44px;
    }
    .compare{
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
    .itenarybtn{
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
    .iternarybox{
        box-sizing: border-box;
        
            width: 338px;
            left: 0px;
            top: 0px;
        
            background: #FFFFFF;
            border: 1px solid #E6E7EA;
            box-shadow: 0px 4px 16px rgba(158, 158, 158, 0.25);
            border-radius: 16px;
    }
    .text13{
        width: 298px;
            height: 134px;
        
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 9px;
            line-height: 22px;
        
            color: #343434;
            flex: none;
                order: 1;
                align-self: stretch;
                flex-grow: 0;
    }
    .text12{
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
    .text11.show-more .moreText{
        display: inline;

    }
    .viewBtn{
        cursor: pointer;
    }
    .moreText{
        display: none;
    }
    .description{
        display: flex;
            flex-direction: row;
            align-items: flex-start;
            padding: 20px;
            gap: 10px;
        
            width: 428px;
        
            margin-bottom: 10px;
            background: #F8FEFD;
    }
    .about{
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
    .text10{
        width: 210px;
            height: 36px;
        
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 36px;
            /* identical to box height */
        
            color: #333333;
        
        
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
    }
    .text11{
        width: 378px;
            height: 104px;
        
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