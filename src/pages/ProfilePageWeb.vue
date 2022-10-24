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
            <!-- <q-card class="column" style="min-width: 500px;border-radius: 14px;max-width: 800px;">
                <div class="column">
                    <div class="profile_liked">Liked Itineraries</div>
                    <div style="padding: 10px;">
                        
                            <q-list class="column" style="justify-items: space-evenly;">
                                <div class="row" style="padding: 10px;width: 100%;justify-content: space-evenly;border-radius: 10px;">
                                    <div class="column" style="width: 33%;padding: 5px;">
                                        <q-img class="profile_itinerary_image_container">
                                            <img src="../assets/Goa/goa1.jpg" alt="" class="profile_itinerary_image">
                                        </q-img>
                                    </div>
                                    <div class="column" style="width: 33%;padding: 5px;">
                                        <div class="profile_itinerary_card_text1">Exotic Kerala 9 Nights / 10 Days Tour</div>
                                        <div class="profile_itinerary_card_text2">
                                            <li>The scenic and serene hill stations in Goa offer unlimited rejuvenation to a tired soul.</li>
                                            <li>The scenic and serene hill stations in Goa offer unlimited rejuvenation to a tired soul.</li>
                                        </div>
                                    </div>
                                    <div class="column" style="width: 33%;padding: 5px;">
                                        <div class="column">
                                            <div class="profile_itinerary_card_text3">
                                                Inclusion
                                            </div>
                                            <div class="profile_itinerary_card_text4">
                                                ✔️ Site Seeing. ✔️ First Aid Support. ✔️ Volunteers or Instructors. ❌ Entry fees at site seeing Place
                                            </div>
                                        </div>
                                        <div class="profile_itinerary_card_text5" style="margin-top:10px;">Starts</div>
                                        <div class="row">
                                            <div class="profile_itinerary_card_text6" style="margin-top:10px;">4999</div>
                                            <div class="profile_itinerary_card_text4" style="margin-top:20px;">/Per Person</div>
                                        </div>
                                        <q-btn class="profile_view_itinerary_btn">View Itinerary</q-btn>
                                    </div>
                                </div>
                                <q-separator/>
                                <div class="row" style="padding: 10px;width: 100%;justify-content: space-evenly;border-radius: 10px;margin-top: 10px;">
                                    <div class="column" style="width: 33%;padding: 5px;">
                                        <q-img class="profile_itinerary_image_container">
                                            <img src="../assets/Goa/goa1.jpg" alt="" class="profile_itinerary_image">
                                        </q-img>
                                    </div>
                                    <div class="column" style="width: 33%;padding: 5px;">
                                        <div class="profile_itinerary_card_text1">Exotic Kerala 9 Nights / 10 Days Tour</div>
                                        <div class="profile_itinerary_card_text2">
                                            <li>The scenic and serene hill stations in Goa offer unlimited rejuvenation to a tired soul.</li>
                                            <li>The scenic and serene hill stations in Goa offer unlimited rejuvenation to a tired soul.</li>
                                        </div>
                                    </div>
                                    <div class="column" style="width: 33%;padding: 5px;">
                                        <div class="column">
                                            <div class="profile_itinerary_card_text3">
                                                Inclusion
                                            </div>
                                            <div class="profile_itinerary_card_text4">
                                                ✔️ Site Seeing. ✔️ First Aid Support. ✔️ Volunteers or Instructors. ❌ Entry fees at site seeing Place
                                            </div>
                                        </div>
                                        <div class="profile_itinerary_card_text5" style="margin-top:10px;">Starts</div>
                                        <div class="row">
                                            <div class="profile_itinerary_card_text6" style="margin-top:10px;">4999</div>
                                            <div class="profile_itinerary_card_text4" style="margin-top:20px;">/Per Person</div>
                                        </div>
                                        <q-btn class="profile_view_itinerary_btn">View Itinerary</q-btn>
                                    </div>
                                </div>
                                
                            </q-list>
                        
                    </div>
                </div>
            </q-card> -->
            <!-- viewed itinerary container to called on click -->
            <!-- <q-card class="column" style="min-width: 500px;border-radius: 14px;max-width: 800px;">
                <div class="column">
                    <div class="profile_liked">Viewed Itineraries</div>
                    <div style="padding: 10px;">
            
                        <q-list class="column" style="justify-items: space-evenly;">
                            <div class="row" style="padding: 10px;width: 100%;justify-content: space-evenly;border-radius: 10px;">
                                <div class="column" style="width: 33%;padding: 5px;">
                                    <q-img class="profile_itinerary_image_container">
                                        <img src="../assets/Goa/goa1.jpg" alt="" class="profile_itinerary_image">
                                    </q-img>
                                </div>
                                <div class="column" style="width: 33%;padding: 5px;">
                                    <div class="profile_itinerary_card_text1">Exotic Kerala 9 Nights / 10 Days Tour</div>
                                    <div class="profile_itinerary_card_text2">
                                        <li>The scenic and serene hill stations in Goa offer unlimited rejuvenation to a tired soul.
                                        </li>
                                        <li>The scenic and serene hill stations in Goa offer unlimited rejuvenation to a tired soul.
                                        </li>
                                    </div>
                                </div>
                                <div class="column" style="width: 33%;padding: 5px;">
                                    <div class="column">
                                        <div class="profile_itinerary_card_text3">
                                            Inclusion
                                        </div>
                                        <div class="profile_itinerary_card_text4">
                                            ✔️ Site Seeing. ✔️ First Aid Support. ✔️ Volunteers or Instructors. ❌ Entry fees at site
                                            seeing Place
                                        </div>
                                    </div>
                                    <div class="profile_itinerary_card_text5" style="margin-top:10px;">Starts</div>
                                    <div class="row">
                                        <div class="profile_itinerary_card_text6" style="margin-top:10px;">4999</div>
                                        <div class="profile_itinerary_card_text4" style="margin-top:20px;">/Per Person</div>
                                    </div>
                                    <q-btn class="profile_view_itinerary_btn">View Itinerary</q-btn>
                                </div>
                            </div>
                            <q-separator />
                            <div class="row"
                                style="padding: 10px;width: 100%;justify-content: space-evenly;border-radius: 10px;margin-top: 10px;">
                                <div class="column" style="width: 33%;padding: 5px;">
                                    <q-img class="profile_itinerary_image_container">
                                        <img src="../assets/Goa/goa1.jpg" alt="" class="profile_itinerary_image">
                                    </q-img>
                                </div>
                                <div class="column" style="width: 33%;padding: 5px;">
                                    <div class="profile_itinerary_card_text1">Exotic Kerala 9 Nights / 10 Days Tour</div>
                                    <div class="profile_itinerary_card_text2">
                                        <li>The scenic and serene hill stations in Goa offer unlimited rejuvenation to a tired soul.
                                        </li>
                                        <li>The scenic and serene hill stations in Goa offer unlimited rejuvenation to a tired soul.
                                        </li>
                                    </div>
                                </div>
                                <div class="column" style="width: 33%;padding: 5px;">
                                    <div class="column">
                                        <div class="profile_itinerary_card_text3">
                                            Inclusion
                                        </div>
                                        <div class="profile_itinerary_card_text4">
                                            ✔️ Site Seeing. ✔️ First Aid Support. ✔️ Volunteers or Instructors. ❌ Entry fees at site
                                            seeing Place
                                        </div>
                                    </div>
                                    <div class="profile_itinerary_card_text5" style="margin-top:10px;">Starts</div>
                                    <div class="row">
                                        <div class="profile_itinerary_card_text6" style="margin-top:10px;">4999</div>
                                        <div class="profile_itinerary_card_text4" style="margin-top:20px;">/Per Person</div>
                                    </div>
                                    <q-btn class="profile_view_itinerary_btn">View Itinerary</q-btn>
                                </div>
                            </div>
            
                        </q-list>
            
                    </div>
                </div>
            </q-card> -->
            <div class="column" style="min-width: 500px;border-radius: 14px;max-width: 800px;">
            <q-card class="row" style="width:100%;background-color: #F4F4F4;">
                <div class="column" style="width: 70%;">
                    <div class="row" style="width: 100%;">
                        <div style="width: 10%;padding: 10px;">
                            <q-avatar>
                                <img src="../assets/editcard/avatar2.svg" alt="">
                            </q-avatar>
                        </div>
                        <div class="column" style="width: 80%;padding: 10px;">
                            <div class="custom_itinerary_text1">Simran Chaudhary</div>
                            <div class="custom_itinerary_text2">Color Holidays</div>
                            <q-rating v-model="ratingModel" size="1em" :max="5" color="#FDD836" />
                        </div>
                    </div>
                    <div style="padding: 8px;">
                        <div class="custom_itinerary_text3" style="padding:10px;">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum is simply dummy
                            text of the
                            printing and typesetting industry.
                        </div>
                    </div>
                </div>
                <div style="width: 30%;">
                    <q-btn style="width: auto;background-color: #003FA3;justify-content: center;">
                        <div class="custom_btn_text">Message Us</div>
                        <div style="height: auto;width:auto; max-width: 100%;justify-content: center;margin-left: 5px;">
                            <img src="../assets/editcard/whatsapp.svg" alt="" style="width: 70%;height: 70%;">
                        </div>
                    </q-btn>
                </div>
            </q-card>
            </div>
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
</style>