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
                          arrows
                          >
            <q-carousel-slide  class="column no-wrap" v-for="item,index in itineraries_list_filtered" :key="item" :name="(index+1)">

                <div class="row fit justify-start items-center q-col no-wrap">
                <q-card  class="iternarybox" style="width: 100%">
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
                    <ViewItinerary/>
                    <!-- <q-card class="box20 lt-md absolute-center">
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
                    </q-card> -->
                    <!-- <ViewItinerary/> -->
                </q-dialog>
            </div>
            </q-carousel-slide>      
        </q-carousel>
                    </div>

                    <div style="margin-left: 10px;margin-right: 10px;">
                        


                        <div>
           <!-- <q-card class="card30" style="margin-top: 30px;">
        <div class="card31">
            <div class="card32">
                <div class="card33">
                    <div class="card34">
                        <text class="text30" style="font-size:30px;">Itinerary Comparison</text>
                        <text class="text31">Compare three itineraries at a time</text>
                    </div>
                    <div class="card35" style="flex-direction: column;" >

                        <div class="card36">
                            <div class="text32">
                                <text class="text33">
                                    <q-img src="../assets/comparison/Removebtn.svg" alt="" @click="this.remove_itinerary('compare_itinerary_one')"></q-img>
                                </text>
                            </div>
                            <q-card class="card37">
                                <q-img :src="this.compare_itinerary_one.place_img" alt="" class="img30"></q-img>
                            </q-card>
                            <text class="text34" style="margin-top: 10px;">{{this.compare_itinerary_one.itinerary_name}}</text>
                            <div class="card38" style="margin-top: 20px;">
                                <text class="text35">Starts</text>
                                <div class="text36 column" >{{this.compare_itinerary_one.tour_rates}}
                                    <text class="text37">/Per Person</text>
                                </div>
                            </div>
                        </div>
                        <div class="card36" style="margin-left: 290px;" >
                            <div class="text32">
                                <text class="text33">
                                    <q-img src="../assets/comparison/Removebtn.svg" alt="" @click="this.remove_itinerary('compare_itinerary_two')"></q-img>
                                </text>
                            </div>
                            <q-card class="card37" style="margin-left: 290px;">
                                <q-img :src="this.compare_itinerary_two.place_img" alt="" class="img30"></q-img>
                            </q-card>
                            <text class="text34" style="margin-top: 10px; margin-left: 290px;">{{this.compare_itinerary_two.itinerary_name}}</text>
                            <div class="card38" style="margin-top: 20px;margin-left: 290px;">
                                <text class="text35">Starts</text>
                                <div class="text36 column">{{this.compare_itinerary_two.tour_rates}}
                                    <text class="text37">/Per Person</text>
                                </div>
                            </div>
                        </div>
                        <div class="card36" style="margin-left: 580px;" >
                            <div class="text32">
                                <text class="text33">
                                    <q-img src="../assets/comparison/Removebtn.svg" alt="" @click="this.remove_itinerary('compare_itinerary_three')"></q-img>
                                </text>
                            </div>
                            <q-card class="card37" style="margin-left: 580px;">
                                <q-img :src="this.compare_itinerary_three.place_img" alt="" class="img30"></q-img>
                            </q-card>
                            <text class="text34" style="margin-top: 10px; margin-left: 580px;">{{this.compare_itinerary_three.itinerary_name}}</text>
                            <div class="card38" style="margin-top: 20px;margin-left: 580px;">
                                <text class="text35">Starts</text>
                                <div class="text36 column">{{this.compare_itinerary_three.tour_rates}}
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
                <ul class="text39" style="margin-top: 50px; margin-left: 90px;" v-html="this.compare_itinerary_one.tour_highlights">
                    
                </ul>
                <ul class="text39" style="margin-top: 50px; margin-left: 20px;" v-html="this.compare_itinerary_two.tour_highlights">
                    
                </ul>
                <ul class="text39" style="margin-top: 50px; margin-left: 20px;" v-html="this.compare_itinerary_three.tour_highlights">
                    
                </ul>
                
            </div>
            <div class="container30" style="margin-top: 270px;">
                <text class="text38">Places to visit</text>
                <ol class="text39" style="margin-top: 50px; margin-left:90px;" v-html="this.compare_itinerary_one.places_to_visit">
                </ol>
                <ol class="text39" style="margin-top: 50px; margin-left:20px;" v-html="this.compare_itinerary_two.places_to_visit">
                </ol>
                <ol class="text39" style="margin-top: 50px; margin-left:20px;" v-html="this.compare_itinerary_three.places_to_visit">
                </ol>
            </div>
            <div class="container30" style="margin-top: 360px;">
                <text class="text38">Accommodation</text>
                <ol class="text39" style="margin-top: 50px; margin-left:90px;" v-html="this.compare_itinerary_one.accomodation_arrangements">
                </ol>
                <ol class="text39" style="margin-top: 50px; margin-left:20px;" v-html="this.compare_itinerary_two.accomodation_arrangements">
                </ol>
                <ol class="text39" style="margin-top: 50px; margin-left:20px;" v-html="this.compare_itinerary_three.accomodation_arrangements">
                </ol>
            </div>
            <div class="container30" style="margin-top: 200px;">
                <text class="text38">Travel Arrangements</text>
                <ol class="text39" style="margin-top: 50px; margin-left:90px;" v-html="this.compare_itinerary_one.travel_arrangements">
                </ol>
                <ol class="text39" style="margin-top: 50px; margin-left:20px;" v-html="this.compare_itinerary_two.travel_arrangements">
                </ol>
                <ol class="text39" style="margin-top: 50px; margin-left:20px;" v-html="this.compare_itinerary_three.travel_arrangements">
                </ol>
            </div>
            <div class="container30" style="margin-top: 200px;">
                <text class="text38">Things to carry</text>
                <text class="text40">
                    Clothing
                    <ul class="text39" v-html="this.compare_itinerary_one.travel_arrangements">
                    </ul>
                </text>
                <text class="text40" style="margin-left: 20px;">
                    Clothing
                    <ul class="text39" v-html="this.compare_itinerary_two.travel_arrangements">
                    </ul>
                </text>
                <text class="text40" style="margin-left: 20px;">
                    Clothing
                    <ul class="text39" v-html="this.compare_itinerary_three.travel_arrangements">
                    </ul>
                </text>
            </div>
            <div class="container30" style="margin-top: 400px;">
                <text class="text38">Inclusions</text>
                <ul class="text39" style="margin-left: 80px; margin-top: 50px;" v-html="this.compare_itinerary_one.inclusions_html">
                </ul>
                <ul class="text39" style="margin-left: 20px; margin-top: 50px;" v-html="this.compare_itinerary_two.inclusions_html">
                </ul>
                <ul class="text39" style="margin-left: 20px; margin-top: 50px;" v-html="this.compare_itinerary_three.inclusions_html">
                </ul>
            </div>
            <div class="container30" style="margin-top: 300px;">
                <text class="text38">Exclusions</text>
                <ul class="text39" style="margin-left: 80px; margin-top: 50px;" v-html="this.compare_itinerary_one.exclusions_html">
                </ul>
                <ul class="text39" style="margin-left: 20px; margin-top: 50px;" v-html="this.compare_itinerary_two.exclusions_html">
                </ul>
                <ul class="text39" style="margin-left: 20px; margin-top: 50px;" v-html="this.compare_itinerary_three.exclusions_html">
                </ul>
            </div>
            <div class="container30" style="margin-top: 300px;">
                <text class="text38">Cancellation Policy</text>
                <ul class="text39" style="margin-left: 80px; margin-top: 50px;" v-html="this.compare_itinerary_one.cancellations_policy">
                </ul>
                <ul class="text39" style="margin-left: 20px; margin-top: 50px;" v-html="this.compare_itinerary_two.cancellations_policy">
                </ul>
                <ul class="text39" style="margin-left: 20px; margin-top: 50px;" v-html="this.compare_itinerary_three.cancellations_policy">
                </ul>
            </div>
        </div>
    </q-card> -->
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
                                    @click="this.remove_itinerary('compare_itinerary_one')"></div>
                        </div>
                        <div class="compare_img_container">
                            <q-img :src="this.compare_itinerary_one.place_img" alt="" class="compare_img" />
                        </div>
                        <div class="compare_title1">{{this.compare_itinerary_one.itinerary_name}}</div>
                        <div class="compare_title2">Starts From</div>
                        <div class="row">
                            <div class="compare_price">{{this.compare_itinerary_one.tour_rates}}</div>
                            <div class="compare_title3">/per person</div>
                        </div>
                    </div>
                </div>
                <div class="compare_inner_content2">
                    <div class="column compare_images">
                        <div class="compare_remove_btn">
                            <div> <img src="../assets/comparison/Removebtn.svg" alt=""
                                    @click="this.remove_itinerary('compare_itinerary_one')"></div>
                        </div>
                        <div class="compare_img_container">
                            <q-img :src="this.compare_itinerary_two.place_img" alt="" class="compare_img" />
                        </div>
                        <div class="compare_title1">{{this.compare_itinerary_two.itinerary_name}}</div>
                        <div class="compare_title2">Starts From</div>
                        <div class="row">
                            <div class="compare_price">{{this.compare_itinerary_two.tour_rates}}</div>
                            <div class="compare_title3">/per person</div>
                        </div>
                    </div>
                </div>
                <div class="compare_inner_content2">
                    <div class="column compare_images">
                        <div class="compare_remove_btn">
                            <div> <img src="../assets/comparison/Removebtn.svg" alt=""
                                    @click="this.remove_itinerary('compare_itinerary_one')"></div>
                        </div>
                        <div class="compare_img_container">
                            <q-img :src="this.compare_itinerary_three.place_img" alt="" class="compare_img" />
                        </div>
                        <div class="compare_title1">{{this.compare_itinerary_three.itinerary_name}}</div>
                        <div class="compare_title2">Starts From</div>
                        <div class="row">
                            <div class="compare_price">{{this.compare_itinerary_three.tour_rates}}</div>
                            <div class="compare_title3">/per person</div>
                        </div>
                    </div>
                </div>
    
    
                <!-- <div class="compare_inner_content2">
                        <div class="column compare_images">
                            <div class="compare_remove_btn">
                                <div> <img src="../assets/comparison/Removebtn.svg" alt=""></div>
                            </div>
                            <q-img class="compare_img_container">
                                <img src="../assets/Goa/goa1.jpg" alt="" class="compare_img">
                            </q-img>
                            <div class="compare_title1">Exotic Goa 9 Nights / 10 Days Tour</div>
                            <div class="compare_title2">Starts From</div>
                            <div class="row">
                                <div class="compare_price">4999</div>
                                <div class="compare_title3">/per person</div>
                            </div>
                        </div>
                    </div>-->
            </div>
            <q-separator />
            <div class="column" style="padding: 10px 0 0 0;">
    
                <div class="column compare_box">
                    <div class="compare_mains">
                        <div class="compare_title">Tour Departure</div>
                    </div>
                    <div class="row compare_content">
                        <div class="compare_inner_content"></div>
                        <div class="compare_inner_content">
                            <img src="../assets/comparison/DatesTable.svg" alt="">
                        </div>
                        <div class="compare_inner_content">
                            <img src="../assets/comparison/DatesTable.svg" alt="">
                        </div>
                        <div class="compare_inner_content">
                            <img src="../assets/comparison/DatesTable.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="column compare_box">
                    <div class="compare_mains">
                        <div class="compare_title">Tour Highlights</div>
                    </div>
                    <div class="row compare_content">
                        <div class="compare_inner_content"></div>
                        <div class="column compare_inner_content">
                            <ul class="compare_text" v-html="this.compare_itinerary_one.tour_highlights">
                            </ul>
                        </div>
                        <div class="compare_inner_content">
                            <ul class="compare_text" v-html="this.compare_itinerary_two.tour_highlights">
                            </ul>
                        </div>
                        <div class="compare_inner_content">
                            <ul class="compare_text" v-html="this.compare_itinerary_three.tour_highlights">
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
                            <ol class="compare_text" v-html="this.compare_itinerary_one.places_to_visit">
                            </ol>
                        </div>
                        <div class="compare_inner_content">
                            <ol class="compare_text" v-html="this.compare_itinerary_two.places_to_visit">
                            </ol>
                        </div>
                        <div class="compare_inner_content">
                            <ol class="compare_text" v-html="this.compare_itinerary_three.places_to_visit">
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="column compare_box">
                    <div class="compare_mains">
                        <div class="compare_title">Accomodation</div>
                    </div>
                    <div class="row compare_content">
                        <div class="compare_inner_content"></div>
                        <div class="column compare_inner_content">
                            <ol class="compare_text" v-html="this.compare_itinerary_one.accomodation_arrangements">
                            </ol>
                        </div>
                        <div class="compare_inner_content">
                            <ol class="compare_text" v-html="this.compare_itinerary_two.accomodation_arrangements">
                            </ol>
                        </div>
                        <div class="compare_inner_content">
                            <ol class="compare_text"
                                v-html="this.compare_itinerary_three.accomodation_arrangements">
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="column compare_box">
                    <div class="compare_mains">
                        <div class="compare_title">Travel Arrangements</div>
                    </div>
                    <div class="row compare_content">
                        <div class="compare_inner_content"></div>
                        <div class="column compare_inner_content">
                            <ol class="compare_text" v-html="this.compare_itinerary_one.travel_arrangements">
                            </ol>
                        </div>
                        <div class="compare_inner_content">
                            <ol class="compare_text" v-html="this.compare_itinerary_two.travel_arrangements">
                            </ol>
                        </div>
                        <div class="compare_inner_content">
                            <ol class="compare_text" v-html="this.compare_itinerary_three.travel_arrangements">
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="column compare_box">
                    <div class="compare_mains">
                        <div class="compare_title">Things to carry</div>
                    </div>
                    <div class="row compare_content">
                        <div class="compare_inner_content"></div>
                        <div class="column compare_inner_content">
                            Clothing
                            <ul class="compare_text" v-html="this.compare_itinerary_one.travel_arrangements">
                            </ul>
                        </div>
                        <div class="compare_inner_content">
                            Clothing
                            <ul class="compare_text" v-html="this.compare_itinerary_two.travel_arrangements">
                            </ul>
                        </div>
                        <div class="compare_inner_content">
                            Clothing
                            <ul class="compare_text" v-html="this.compare_itinerary_three.travel_arrangements">
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="column compare_box">
                    <div class="compare_mains">
                        <div class="compare_title">Inclusions</div>
                    </div>
                    <div class="row compare_content">
                        <div class="compare_inner_content"></div>
                        <div class="column compare_inner_content">
                            <ul class="compare_text" v-html="this.compare_itinerary_one.inclusions_html">
                            </ul>
                        </div>
                        <div class="compare_inner_content">
                            <ul class="compare_text" v-html="this.compare_itinerary_two.inclusions_html">
                            </ul>
                        </div>
                        <div class="compare_inner_content">
                            <ul class="compare_text" v-html="this.compare_itinerary_three.inclusions_html">
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
                            <ul class="compare_text" v-html="this.compare_itinerary_one.exclusions_html">
                            </ul>
                        </div>
                        <div class="compare_inner_content">
                            <ul class="compare_text" v-html="this.compare_itinerary_two.exclusions_html">
                            </ul>
                        </div>
                        <div class="compare_inner_content">
                            <ul class="compare_text" v-html="this.compare_itinerary_three.exclusions_html">
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="column compare_box">
                    <div class="compare_mains">
                        <div class="compare_title">Cancellations Policy</div>
                    </div>
                    <div class="row compare_content">
                        <div class="compare_inner_content"></div>
                        <div class="column compare_inner_content">
                            <ul class="compare_text" v-html="this.compare_itinerary_one.cancellations_policy">
                            </ul>
                        </div>
                        <div class="compare_inner_content">
                            <ul class="compare_text" v-html="this.compare_itinerary_two.cancellations_policy">
                            </ul>
                        </div>
                        <div class="compare_inner_content">
                            <ul class="compare_text" v-html="this.compare_itinerary_three.cancellations_policy">
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </q-card>
    </div>
                </div>
                    </div>
                    
                    <div class="box1" style="margin-top: 30px;">
                        <q-img src="../assets/Goa/cartoon.svg" />
                        <text class="text17">Ain’t satisfied with the Top-Selling itinerary. Want to customise your
                            itinerary?</text>
                        <q-btn class="btn12" unelevated rounded color="primary" @click="edititinerary = true"><text
                                style="font-family: Poppins; font-size: 20px; font-style: normal;">Click Here</text>
                        </q-btn>
                    </div>
                    <q-dialog v-model="edititinerary">
                        <EditItineraryCardw/>
                    </q-dialog>
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
import EditItineraryCardw from './EditItineraryCardw.vue';


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
            edititinerary: ref(false),
        };
    },
    components: {
        FooterPage,
        DestinationPageWeb,
        AppBar,
        EditItineraryCardw,
        ViewItinerary,
        // ItineraryPreview
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
            console.log(this.itineraries_list_filtered)
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
    methods:{
        add_to_compare(item){
            console.log(item)
            console.log("Here")
            console.log(this.compare_itinerary_one.length)
            console.log(this.compare_itinerary_two)
            console.log(this.compare_itinerary_three)
            if(this.compare_itinerary_one.length == 0){
                console.log("Here")
                this.compare_itinerary_one = item
                return
            }
            else if(this.compare_itinerary_two.length == 0){
                this.compare_itinerary_two = item
                return
            }
            else if(this.compare_itinerary_three.length == 0){
                this.compare_itinerary_three = item
                return
            }
            else{
                this.compare_itinerary_three = item
            }


        },
        remove_itinerary(item){

            console.log("Here")
            console.log(item)
            // this.item = []
            // this + ".item" = []
            if(item=="compare_itinerary_one"){
                this.compare_itinerary_one = []
            }
            if(item=="compare_itinerary_two"){
                this.compare_itinerary_two = []
            }
            if(item=="compare_itinerary_three"){
                this.compare_itinerary_three = []
            }

            console.log(this.compare_itinerary_one)
        }
    }
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