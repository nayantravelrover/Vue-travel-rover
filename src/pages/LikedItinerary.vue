<template>
    <div>
        <div class="q-pa-md">
            <AppBar/>
            <div class="col-6" style="margin-top: 50px;">
                <text class="new2" style="margin-left: 10px;">Liked Itineraries</text>
                <q-list class="new3 row">
                    <div>tanay</div>
                    <q-separator class="line10"/>
                    <div>efhw</div>
                    <q-separator class="line10" />
                    <div>hgdhwe</div>
                    <q-separator class="line10" />
                    <div>dhedjh</div>
                    <q-separator class="line10" />
                </q-list>
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
.line10{
    background: #E6E7EA;
    
        /* Inside auto layout */
        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;
}
.new3{
    box-sizing: border-box;
    
        /* Auto layout */
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 20px;
        gap: 20px;
    
        width: auto;
        height: 600px;
        top: 10px;
        overflow-y: scroll;
    
        background: #FFFFFF;
        border: 1px solid #E6E7EA;
        border-radius: 10px;
    
        /* Inside auto layout */
        flex: none;
        order: 1;
        flex-grow: 0;
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
</style>