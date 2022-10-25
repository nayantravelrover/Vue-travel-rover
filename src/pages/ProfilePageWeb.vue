<template>
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
                    <div class="row profile_spacing">
                        <img src="../assets/profilepage/accounticon.svg" alt="">
                        <div class="profile_text">My Profile</div>
                    </div>
                    <q-separator />
                    <div class="row profile_spacing">
                        <img src="../assets/profilepage/favorite.svg" alt="">
                        <div class="profile_text">Liked Itineraries</div>
                    </div>
                    <q-separator />
                    <div class="row profile_spacing">
                        <img src="../assets/profilepage/visibility.svg" alt="">
                        <div class="profile_text">Viewed Itineraries</div>
                    </div>
                    <q-separator />
                    <div class="row profile_spacing">
                        <img src="../assets/profilepage/tune.svg" alt="">
                        <div class="profile_text">Custom Itineraries</div>
                    </div>
                </div>
            </q-card>

            
        </div>
    </div>
</template>
<script>
import { ref } from 'vue'

export default {
    setup() {
        return {
            ratingModel: ref(3)
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
