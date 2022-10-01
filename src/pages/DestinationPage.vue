<template>
    <q-page>
        <div>    
            <q-carousel class="goaslide q-pa full-screen" animated v-model="slide" navigation
                    infinite :autoplay="autoplay" arrows transition-prev="slide-right" transition-next="slide-left"
                    @mouseenter="autoplay = false" @mouseleave="autoplay = true">
                    <q-carousel-slide :name="1" img-src="../assets/Goa.jpg" />
                    <q-carousel-slide :name="2" img-src="../assets/Goa/goa1.jpg" />
                    <q-carousel-slide :name="3" img-src="../assets/Goa/goa2.jpg" />
                    <q-carousel-slide :name="4" img-src="../assets/Goa/goa3.jpg" />
                    <q-carousel-slide :name="5" img-src="../assets/Goa/goa4.jpg" />
            </q-carousel>
        </div>
        <q-card class="description q-pa-md full-width">
            <div class="about full-width">
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
        </q-card>
        <q-layout class="q-pa-md full-width">
            <div style="margin-left: 10px;">
                <div class="full-width">
                    <text class="text10">Our top-selling Itineraries</text>
                </div>
                <q-card class="iternarybox justify-center">
                
                </q-card>
            </div>
            <div>
                
            </div>
        </q-layout>
    </q-page>
</template>
<script>
import { ref } from 'vue'


export default {
    
    setup() {
        return {
            slide: ref(1),
            autoplay: ref(true)
        }
    }
}
</script>
<style lang="scss">
.goaslide{
        height: 500px;
        left: 0px;
        right: 0px;
    }
    .iternarybox{
        box-sizing: border-box;
        
            width: 388px;
            height: 767px;
            left: 0px;
            top: 0px;
        
            background: #FFFFFF;
            border: 1px solid #E6E7EA;
            box-shadow: 0px 4px 16px rgba(158, 158, 158, 0.25);
            border-radius: 16px;
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
            height: 238px;
            overflow-y: scroll;
        
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
</style>