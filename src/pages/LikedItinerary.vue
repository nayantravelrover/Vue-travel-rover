<template>
    <div>
        <div class="q-pa-md">
            <AppBar />
            <div class="col-12" style="margin-top: 50px;">
                <text class="new2" style="margin-left: 10px;">Liked Itineraries</text>
                <q-card class="column" style="padding: 5px;">
                    <!-- <div class="col">
                        <div class="row-12">
                            <q-img></q-img>
                        </div>
                    </div>
                    <q-separator style="background: #E6E7EA;" />
                    <div>efhw</div>
                    <q-separator style="background: #E6E7EA;" />
                    <div>hgdhwe</div>
                    <q-separator style="background: #E6E7EA;" />
                    <div>dhedjh</div> -->
                    <q-list class="column" style="justify-items: space-evenly;">
                        <div class="column" style="padding: 10px;width: 100%;border-radius: 10px;">
                            <div class="row">
                                <div style="width: 40%;">
                                    <q-img style="border-radius: 10px;">
                                        <img src="../assets/Goa/goa1.jpg" alt="" class="profile_itinerary_image_mobile">
                                    </q-img>
                                </div>
                                <div style="width: 60%;padding: 0 0 0 10px;">
                                    <div class="viewed_itinerary_mobile_text">Exotic Kerala 9 Nights / 10 Days Tour
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
                        <div class="column" style="padding: 10px;width: 100%;border-radius: 10px;margin-top: 10px;">
                            <div class="row">
                                <div style="width: 40%;">
                                    <q-img style="border-radius: 10px;">
                                        <img src="../assets/Goa/goa1.jpg" alt="" class="profile_itinerary_image_mobile">
                                    </q-img>
                                </div>
                                <div style="width: 60%;padding: 0 0 0 10px;">
                                    <div class="viewed_itinerary_mobile_text">Exotic Kerala 9 Nights / 10 Days Tour
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
                        <div class="column" style="padding: 10px;width: 100%;border-radius: 10px;margin-top: 10px;">
                            <div class="row">
                                <div style="width: 40%;">
                                    <q-img style="border-radius: 10px;">
                                        <img src="../assets/Goa/goa1.jpg" alt="" class="profile_itinerary_image_mobile">
                                    </q-img>
                                </div>
                                <div style="width: 60%;padding: 0 0 0 10px;">
                                    <div class="viewed_itinerary_mobile_text">Exotic Kerala 9 Nights / 10 Days Tour
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
                    </q-list>
                </q-card>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent } from "vue";
import AppBar from "./AppBar.vue";

export default defineComponent({
    name: "LikedItinerary",

    components: {
        AppBar
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
</style>