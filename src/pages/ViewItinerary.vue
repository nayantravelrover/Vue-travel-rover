<template>
    <div style="max-width: fit-content;max-height: fit-content;">
        <div class="modal_view_itinerary_box gt-sm">
            <div class="box2">
                <div class="box3">
                    <div class="box4">
                        <text class="type1">Travel Rover Advantage</text>
                    </div>
                    <div class="box5">
                        <div class="box6">
                            <div class="box7">
                                <img src="../assets/editcard/checked.svg" alt="">
                            </div>
                            <text class="type2">Time-Saving Convenience</text>
                        </div>
                        <div class="box6">
                            <div class="box7">
                                <img src="../assets/editcard/checked.svg" alt="">
                            </div>
                            <text class="type2">Expert Local Knowledge</text>
                        </div>
                        <div class="box6">
                            <div class="box7">
                                <img src="../assets/editcard/checked.svg" alt="">
                            </div>
                            <text class="type2">Cost-Effective Options</text>
                        </div>
                        <div class="box6">
                            <div class="box7">
                                <img src="../assets/editcard/checked.svg" alt="">
                            </div>
                            <text class="type2">Reduced Stress and Enhanced Safety</text>
                        </div>
                    </div>
                </div>
                <div class="box7">
                    <div class="box8">
                        <div class="box9">

                            <div class="type5" v-if="this.$store.state.itinerary_preview.zero_valued===true">
                                 <text class="type4">Itinerary Cost: Rs.0</text>
                                 
                            </div>

                           
                            <div class="type5" v-else>
                                <text class="type4">Itinerary Cost: Rs.{{this.$store.state.itinerary_preview.tour_rates}}</text>
                            </div>
                        </div>
                    </div>
                    <div class="box10">



                        <a :href="`${this.$store.state.itinerary_preview.payment_link}`" target="_blank" style="text-decoration: none;" v-if="this.allow_buy && this.$store.state.itinerary_preview.zero_valued===false">
                            <!-- <div class="box11">
                                 <img class="cart1" src="../assets/editcard/cart1.svg" alt="">
                                <text class="type6">Buy Now</text>
                            </div> -->
                            <q-btn class="box11" color="primary" icon="shopping_cart" style="font-family: Poppins;font-weight: 600;">
                                <text class="type6">Buy Now</text>
                            </q-btn>
                        </a>

                        <a :href="`#/itinerarylink/?pk=${this.$store.state.itinerary_pk}`" target="_blank" style="text-decoration: none;" v-if="this.allow_buy && this.$store.state.itinerary_preview.zero_valued===true">
                            <!-- <div class="box11">
                                 <img class="cart1" src="../assets/editcard/cart1.svg" alt="">
                                <text class="type6">Buy Now</text>
                            </div> -->
                            <q-btn class="box11" color="primary" icon="shopping_cart" style="font-family: Poppins;font-weight: 600;">
                                <text class="type6">View Itinerary</text>
                            </q-btn>
                        </a>

                        <a v-if="this.allow_buy===false">


                        
                         <q-btn class="box11" color="primary" icon="shopping_cart" style="font-family: Poppins;font-weight: 600;"  @click="show_notification"  v-if="this.$store.state.itinerary_preview.zero_valued===false" >
                                <text class="type6">Buy Now</text>
                            </q-btn>


                        <q-btn class="box11" color="primary" icon="shopping_cart" style="font-family: Poppins;font-weight: 600;"  @click="show_notification"  v-else >
                                <text class="type6">View Itinerary</text>
                            </q-btn>

                        </a>         

                        <a :href="`https://api.whatsapp.com/send?phone=7977790353&text=I want to enquire about the itinerary named ${this.$store.state.itinerary_preview.itinerary_name}`" target="_blank">
                            <!-- <div class="box11">
                                <img src="../assets/editcard/whatsapp.svg" alt="">
                                <text class="type6">Query?</text>
                                
                            </div> -->
                            <q-btn class="box11" color="primary" icon="help_outline" style="font-family: Poppins;font-weight: 600;">
                                <text class="type6">Query</text>
                            </q-btn>
                        </a>



                        <!-- <a :href="`https://api.whatsapp.com/send?phone=${this.$store.state.itinerary_preview.user_mobile_number}&text=I want to enquire about the itinerary named ${this.$store.state.itinerary_preview.itinerary_name}`" target="_blank"><div class="box11">
                            <text class="type6">Buy Now</text>
                            <img src="../assets/editcard/whatsapp.svg" alt="">
                        </div></a>
                        <div class="box11" @click="this.generateReport()">
                            <text class="type7">Download</text>                            
                            <img class="cart1" src="../assets/editcard/cart1.svg" alt="">
                        </div> -->
                    </div>
                </div>
            </div>
            <div class="box12">
                <div class="box13">
                    <ItineraryPreview class="q-ma-lg"  id="preview" style="margin:0px;"></ItineraryPreview>
                </div>
            </div>
        </div>
        <div>
        <q-card class="box20 lt-md row">
            <div class="box21">
                <div class="box22">
                    <ItineraryPreview class="q-ma-lg"  id="preview" style="margin:0px;"></ItineraryPreview>
                </div>
            </div>
            
            <div class="box26">

                <div style="align-content: center;"  v-if="this.$store.state.itinerary_preview.zero_valued===true">
                    <text class="type4">Itinerary Cost: Rs.0</text>
                </div>
                <div style="align-content: center;"  v-else>
                    <text class="type4">Itinerary Cost: Rs.{{this.$store.state.itinerary_preview.tour_rates}}</text>
                </div>

            </div>
            
            <div class="box23">

                <div class="box24">
                    <a :href="`${this.$store.state.itinerary_preview.payment_link}`" target="_blank"  v-if="this.allow_buy && this.$store.state.itinerary_preview.zero_valued===false">
                        <q-btn class="box25" icon="shopping_cart" color="primary" >
                            
                            <text class="type20" style="margin-left: 4px;">Buy Now</text>
                        </q-btn>
                    </a>

                    

                    <a :href="`#/itinerarylink/?pk=${this.$store.state.itinerary_pk}`" target="_blank" v-if="this.allow_buy && this.$store.state.itinerary_preview.zero_valued===true">
                        <q-btn class="box25" icon="shopping_cart" color="primary" >
                            
                            <text class="type20">View Itinerary</text>
                        </q-btn>
                    </a>




                    <a v-if="this.allow_buy===false">
                        <q-btn class="box25" icon="shopping_cart" color="primary" @click="show_notification" v-if="this.$store.state.itinerary_preview.zero_valued===false">
                            
                            <text class="type20" style="margin-left: 4px;">Buy Now</text>
                        </q-btn>

                    <q-btn class="box25" icon="shopping_cart" color="primary" @click="show_notification" v-else>
                            
                            <text class="type20" style="margin-left: 4px;">View Itinerary</text>
                        </q-btn>
                    </a>                    



                    <a :href="`https://api.whatsapp.com/send?phone=7977790353&text=I want to enquire about the itinerary named ${this.$store.state.itinerary_preview.itinerary_name}`" target="_blank">
                        <q-btn class="box25" icon="help_outline" color="primary">
                        <!-- <img class="share20" src="../assets/editcard/whatsapp.svg" alt=""> -->
                        <text class="type20" style="margin-left: 4px;">Query</text>
                        
                    </q-btn></a>
                </div>
            </div>
            
        </q-card>
    </div>
        
    </div>
</template>
<script type="text/javascript">
    
    import html2pdf from "html2pdf.js/src";
    import { ref, defineComponent } from 'vue'
    import ItineraryPreview from "components/ItineraryPreview";
    import { base_url,check_if_access_token_is_valid,check_if_refresh_token_is_valid } from "src/common/api_calls";
    import { useQuasar, Notify } from 'quasar'
    let $q

    export default ({
        components: {ItineraryPreview},
        data(){
        return{
            allow_buy: true,
            }
        },
        setup(){
            const $q = useQuasar()
        },
        mounted(){
            $q = useQuasar()

         },
        methods:{
            show_notification(){
                $q.notify({
                  type: "negative",
                  message: "Kindly log-in/sign-up to enable this functionality",
                  position: "top",
                });
            }
        },
        created(){
            
          //   check_if_access_token_is_valid()
          // .then((response) => {

          //   var access_token = window.localStorage.getItem(
          //     "travel_rover_access"
          //   );
          //   this.allow_buy = true
          // })
          // .catch((err) => {
            
          //   check_if_refresh_token_is_valid()
          //     .then((response) => {
          //       var access_token = response["data"]["access"];
          //       this.allow_buy = true
          //       window.localStorage.setItem(
          //         "travel_rover_access",
          //         access_token
          //       );
          //     })
          //     .catch((err) => {
          //       console.log("Here")
          //       this.$store.commit("user_logged_in_update", false);
          //       this.allow_buy = false
                
          //     });
          // });

        }
    })
</script>
<style>
.card2{
        width: 20.13px;
        height: 20.13px;
           
    }
.share20{
        width: 20.13px;
        height: 20.13px;
    }
.type20{
        
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            color: #FFFFFF;
    }
.box25{
        display: flex;
        background: #003FA3;
        border-radius: 3.77419px;
        border-radius: 3.77419px;
        padding: 10px 22px;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
.box24{
        
            display: flex;
            gap: 12px;   
    }
.box23{
        display: flex;
            
            justify-content: center;
            padding: 10px 10px 10px 10px;
    }

.box22{
        display: flex;
           
            align-items: flex-start;
            padding: 0px;
            gap: 8.34px;
        
            
            width: auto;
            height: fit-content;
            
        
            background: #E5E3E6;
    }


.box21{
       
            width: fit-content;
            height: 458px;
            overflow-y: scroll;
        
            background: #FFFFFF;
    }

.box26{
        display: flex;    
        justify-content: center;
    }
    .box20{
        
            width: fit-content;
        
            background: #FFFFFF;
            box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.25);
    }
.cart1{
        width: 32px;
            height: 32px;
        
        
            /* Inside auto layout */
            flex: none;
            order: 1;
            flex-grow: 0;
    }
.type7{
        width: 112px;
            height: 27px;
        
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 27px;
            /* identical to box height */
            text-align: center;
        
            color: #FFFFFF;
        
        
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
    }
.type6{
        width: 112px;
            height: 27px;
        
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 27px;
            /* identical to box height */
            text-align: center;
        
            color: #FFFFFF;
        
        
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
    }
.box13{
        display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0px;
            gap: 10px;
        
            position: absolute;
            width: 489px;
            height: fit-content;
            left: 0px;
            top: 0px;
        
            background: #E5E3E6;
    }
.box12{
        position: absolute;
            width: 489px;
            height: 600px;
            left: 0px;
            top: 0px;
            overflow-y: scroll;
        
            background: #FFFFFF;
            border-radius: 16px 0px 0px 16px;
    }
.box11{
        display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 10px 40px;
            gap: 21px;
        
            width: 245px;
            height: 52px;
        
        
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
    }
.box10{
        display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0px;
            gap: 20px;
        
            width: 245px;
            height: 124px;
        
        
            /* Inside auto layout */
            flex: none;
            order: 1;
            flex-grow: 0;
    }
    .type5{
        width: 345px;
    }
.type4{
        width: 263px;
            height: 30px;
        
            font-family: 'Poppins';
            flex-direction: row;
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 42px;
            padding: 0px 12px;
            /* identical to box height */
            text-align: justify;
        
            color: #2F2F42;
        
        
            /* Inside auto layout */
            flex: none;
            order: 1;
            flex-grow: 0;
    }
.type3{
        width: 100px;
            height: 21px;
        
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
            /* identical to box height */
            text-align: justify;
        
            color: #484848;
        
        
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
    }
.box9{
        display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0px;
        
            width: 163px;
            height: 63px;
        
        
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
    }
.box8{
        display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0px;
            gap: 16px;
        
            width: 163px;
            height: 63px;
        
        
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
    }
.box7{
        display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0px;
            gap: 20px;
        
            width: 245px;
            height: 207px;
        
        
            /* Inside auto layout */
            flex: none;
            order: 1;
            flex-grow: 0;
    }
.type2{
        width: 215px;
            height: 42px;
        
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
        
            color: #555555;
        
        
            /* Inside auto layout */
            flex: none;
            order: 1;
            flex-grow: 1;
    }
.box7{
        width: 24px;
            height: 24px;
        
        
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
    }
.box6{
        display: flex;
            flex-direction: row;
            align-items: flex-start;
            padding: 0px;
            gap: 6px;
        
            width: 245px;
            height: 42px;
        
        
            /* Inside auto layout */
            flex: none;
            order: 0;
            align-self: stretch;
            flex-grow: 0;
    }
.box5{
        display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0px;
            gap: 10px;
        
            width: 245px;
            height: 198px;
        
        
            /* Inside auto layout */
            flex: none;
            order: 1;
            align-self: stretch;
            flex-grow: 0;
    }
.type1{
        width: 345px;
            height: 30px;
        
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 600;
            font-size: 18.5px;
            line-height: 30px;
            /* identical to box height */
        
            color: #202020;
        
        
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
    }
.box4{
        display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0px;
            gap: 31px;
        
            width: 245px;
            height: 30px;
        
        
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
    }
.box3{
        display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0px;
            gap: 20px;
        
            width: 245px;
            height: 248px;
        
        
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
    }
.box2{
        display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding: 0px;
            gap: 65px;
        
            position: absolute;
            width: 245px;
            height: 420px;
            left: 543px;
            top: 0px;
            bottom: 150px;
    }
.modal_view_itinerary_box{
    position: relative;
        width: 842px;
        height: 600px;
    
        background: #FFFFFF;
        border-radius: 16px;
        box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.25);
}
</style>