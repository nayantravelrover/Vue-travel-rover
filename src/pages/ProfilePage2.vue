<template>
    <div>
        <div class="q-pa-md">
            <app-bar/>
            <div class="col-12" style="margin-top: 50px;">
                <text class="new2" style="margin-left: 10px;">My Profile</text>
                <q-card style="max-width: 500px; max-height: 516px;margin-top: 10px;">
                    <div class="column flex-start flex">
                        <div class="column flex-start flex">
                            <div class="new5 row-6">
                                <div class="flex column center" style="margin-top: 0px;margin-left: 40px;">
                                    <div class="col-1 center">
                                        <text class="new3">First Name</text>
                                    </div>
                                    <div class="col-6 center">
                                        <text class="new1 row-4">Tanay</text>
                                    </div>
                                </div>
                            </div>
                            <q-separator style="background: #E6E7EA;" />
                            <div class="new5 row-6">
                                <div class="flex column center" style="margin-top: 0px;margin-left: 40px;">
                                    <div class="col-1 center">
                                        <text class="new3">Last Name</text>
                                    </div>
                                    <div class="col-6 center">
                                        <text class="new1 row-4">Desai</text>
                                    </div>
                                </div>
                            </div>
                            <q-separator style="background: #E6E7EA;" />
                            <div class="new5 row-6">
                                <div class="flex column center" style="margin-top: 0px;margin-left: 40px;">
                                    <div class="col-1 center">
                                        <text class="new3">Phone Number</text>
                                    </div>
                                    <div class="col-6 row center">
                                        <text class="new1 row-4">7768543331</text>
                                        <a href="" class="new4" style="margin-left: 10px;">Verify</a>
                                    </div>
                                </div>
                            </div>
                            <q-separator style="background: #E6E7EA;" />
                            <div class="new5 row-6">
                                <div class="flex column center" style="margin-top: 0px;margin-left: 40px;">
                                    <div class="col-1 center">
                                        <text class="new3">Email ID</text>
                                    </div>
                                    <div class="col-6 row center">
                                        <text class="new1 row-4">tanaydesai123@gmail.com</text>
                                        <a href="" class="new4" style="margin-left: 10px;">Verify</a>
                                    </div>
                                </div>
                            </div>
                            <q-separator style="background: #E6E7EA;" />
                            <div class="new5 row-6">
                                <div class="flex column center" style="margin-top: 0px;margin-left: 40px;">
                                    <div class="col-1 center">
                                        <text class="new3">Password</text>
                                    </div>
                                    <div class="col-6 row center">
                                        <text class="new1 row-4" style="gap: 5px;">*******</text>
                                        <a href="" class="new4" style="margin-left: 10px;">Change Password</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </q-card>
            </div>
            <div class="col-12"></div>
        </div>
    </div>
</template>
<script>
import { defineComponent } from "vue";
import AppBar from "./AppBar.vue";

export default defineComponent({
    name: "ProfilePage2",

    components: {
        AppBar
    }
})
</script>
<style>
.new5{
    margin-top: 10px;
    margin-bottom: 10px;
}
.new4{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        /* identical to box height */
        text-decoration-line: underline;
    
        /* Travel Rover/Primary Color */
        color: #003FA3;
    
    
        /* Inside auto layout */
        flex: none;
        order: 1;
        flex-grow: 0;
}
.new3{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        /* identical to box height */
    
        color: #BFBFBF;
    
    
        /* Inside auto layout */
        flex: none;
        order: 0;
        flex-grow: 0;
}
.new2{
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
.new1{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        /* identical to box height */
    
        color: #505050;
    
    
        /* Inside auto layout */
        flex: none;
        order: 0;
        flex-grow: 0;
}
</style>