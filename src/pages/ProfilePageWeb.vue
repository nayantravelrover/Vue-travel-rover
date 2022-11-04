<template>
    <div>
      <q-layout style="min-height: 100px !important;">
    <q-header>
    
      <q-toolbar>
        <q-btn v-if="$q.platform.is.mobile"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="q-pa-md row item-center">
          <img src="../assets/logo.svg" />
        </q-toolbar-title>

        <q-btn flat  dense class="q-ml-md gt-sm" label="Home" style="font-family: Poppins;" @click="go_to_home"/>
        <q-btn
          flat
          dense
          round
          class="q-ml-md"
          :icon="matAccountCircle"
          aria-label="Menu">
          <q-menu>
            <q-list style="min-width: 100px;max-height:89px">
              
              <LoginPage2 v-if="this.$store.state.user_logged_in===false"/>
              <div class="q-pa-xs" v-if="this.$store.state.user_logged_in===false">
                <RegisterPage/>
              </div>


              <q-btn label="Profile" color="primary"  style="margin-top:3px; width: 91px; margin: 4px;" v-if="this.$store.state.user_logged_in" />
              <div class="q-pa-xs">
              <q-btn label="Logout" color="primary"  style="width: 100%;" v-if="this.$store.state.user_logged_in" @click="logout"/>
               </div>


              <q-item
              clickable
              v-close-popup>
              </q-item>
            </q-list>
          </q-menu>
          </q-btn>
      </q-toolbar>
    </q-header>
    </q-layout>
    </div>
    <br/>
    <div class="q-pa-md">
        <div class="row profile_main">
            <q-card class="column" style="min-width: 400px;border-radius: 10px;max-height: 420px;">
                <div class="profile_box" style="padding: 10px;">
                    <div class="profile_avatar_main">
                        <img src="../assets/profilepage/imageframe.svg" alt="">
                    </div>
                    <div class="profile_text2">Tanay Desai</div>
                    <div class="row profile_box2">
                        <img src="../assets/profilepage/mail.svg" alt="" style="width: 24px; height: 24px;">
                        <div class="profile_text3">tanaydesai8055@gmail.com</div>
                    </div>
                    <div class="row profile_box2">
                        <img src="../assets/profilepage/call.svg" alt="" style="width: 20px; height:20px;">
                        <div class="profile_text3">+91-7827099326</div>
                    </div>
                </div>
                <q-separator />
                <div>
                    <!-- <div class="row profile_spacing">
                        <img src="../assets/profilepage/accounticon.svg" alt="">
                        <div class="profile_text">My Profile</div>
                    </div> -->
                    <q-separator />
                    <div class="row profile_spacing" @click="this.show_liked">
                        <img src="../assets/profilepage/favorite.svg" alt="">
                        <div class="profile_text">Liked Itineraries</div>
                    </div>
                    <q-separator />
                    <div class="row profile_spacing"  @click="this.show_viewed">
                        <img src="../assets/profilepage/visibility.svg" alt="">
                        <div class="profile_text">Viewed Itineraries</div>
                    </div>
                    <q-separator />
                    <div class="row profile_spacing"  @click="this.show_custom">
                        <img src="../assets/profilepage/tune.svg" alt="">
                        <div class="profile_text">Custom Itineraries</div>
                    </div>
                </div>
            </q-card>


            <div v-if="this.show_liked_itinerary==true">
                <LikedItinerary/>
            </div>

            <div v-if="this.show_viewed_itinerary==true">
                <ViewedItinerary/>
            </div>

            <div v-if="this.show_custom_itinerary==true">
                <CustomItinerary/>
            </div>

            
        </div>
    </div>
</template>
<script>
import { ref } from 'vue'
import LikedItinerary from "./LikedItinerary.vue"
import ViewedItinerary from "./ViewedItinerary.vue"
import CustomItinerary from "./CustomItinerary.vue"
import LoginPage2 from "./LoginPage2.vue"
import RegisterPage from "./RegisterPage.vue"

import { matAccountCircle } from "@quasar/extras/material-icons";

// import AppBar from "./AppBar.vue"

export default {
    created(){
        this.matAccountCircle = matAccountCircle;
    },
    setup() {
        return {
            ratingModel: ref(3)
        }
    },
    data(){
        return{
            show_liked_itinerary:true,
            show_custom_itinerary:false,
            show_viewed_itinerary: false
        }
    },
    components:{
        LikedItinerary,
        LoginPage2,
        RegisterPage,
        ViewedItinerary,
        CustomItinerary
        
    },
    methods:{
        show_liked(){
            this.show_liked_itinerary = true
            this.show_custom_itinerary = false
            this.show_viewed_itinerary = false
        },
        show_custom(){
            this.show_liked_itinerary = false
            this.show_custom_itinerary = true
            this.show_viewed_itinerary = false
        },
        show_viewed(){
            this.show_liked_itinerary = false
            this.show_custom_itinerary = false
            this.show_viewed_itinerary = true
        },
        go_to_home(){
            console.log("here")
            this.$router.push({
                  path: '',
                  name:'home',
                })
        }
    }
}
</script>
<style>
.profile_text3{
    font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        color: #8E8E8E;
}
.profile_text2{
    font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        
    
        color: #505050;
}
.profile_liked{
    font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        padding: 10px 0 0 20px;
        color: #4B5563;
}
.profile_box2{
    justify-content: center;
}
.profile_box{
    text-align: center;
}
.profile_main {
    justify-content: space-around;
}
.profile_text{
    font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
      
        
        color: #000;
}
.profile_spacing{
    gap: 10px;
    padding: 10px 0 10px 20px;
}
.profile_name_text2{
    font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
    
        color: #505050;
}
.profile_name_text1{
    font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
    
        color: #BFBFBF;
}
.profile_itinerary_image{
    width: auto;
    height: auto;
    max-width: 100%;
}
.profile_itinerary_image_container{
    border-radius: 8px;
}
.profile_itinerary_card_text1{
    font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
    
        color: #000000;
}
.profile_itinerary_card_text2{
    font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
       
        color: #343434;
}
.profile_itinerary_card_text3{
    font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
       
    
        color: #4B5563;
}
.profile_itinerary_card_text4{
    font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
      
    
        color: #4B5563;
}
.profile_itinerary_card_text5{
    font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        
    
        color: #484848;
}
.profile_itinerary_card_text6{
    font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        
    
        color: #2F2F42;
}
.profile_view_itinerary_btn{
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

