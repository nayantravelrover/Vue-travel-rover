<template>
    <div>
        <div>
            <div>
                <q-toolbar class="toolbar">
                    <div class="toy">
                        <img class="toyimage" src="../assets/logo.svg" alt="">
                        <div class="toy2">
                            <text class="toytext">Itineraries</text>
                            <q-input dark dense rounded standout v-model="text" input-class="labelcss text-left"
                                class="q-ml-md" bg-color="white" placeholder="Search Itineraries">
                                <template v-slot:append>
                                    <q-icon v-if="text === ''" name="search" style="color:#CCCFD6;" />
                                    <q-icon v-else name="search" class="cursor-pointer" @click="text = ''"
                                        style="color:#CCCFD6;" />
                                </template>
                            </q-input>
                            <div class="toy1">
                                <q-avatar class="avatardiv">
                                    <img src="../assets/ItineraryBuilder/pari.svg" alt="">
                                </q-avatar>
                                <div>
                                    <img src="../assets/ItineraryBuilder/expmore.svg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </q-toolbar>
                <div class="row" style="padding: 100px 100px 0 100px;">
                    <div class="col-3 toy5">
                        <div class="subdiv2">
                            <div class="subdiv3">
                                <text class="toytext1">Create Itineraries</text>
                                <q-icon name="add" />
                            </div>
                        </div>
                    </div>
                    <div class="col-3 toy5">
                        <q-card class="subdiv4">
                            <img src="../assets/Goa/Goa.jpg" alt="">
                            <div class="absolute-bottom subtitle2 text-center">
                                <text class="toytext2">Exotic Leh Ladakh 5 Nights / 6 Days Tour</text>
                            </div>
                        </q-card>
                    </div>
                    <div class="col-3 toy5">
                        <q-card class="subdiv4">
                            <img src="../assets/Goa/Goa1.jpg" alt="">
                            <div class="absolute-bottom subtitle2 text-center">
                                <text class="toytext2">Exotic Leh Ladakh 5 Nights / 6 Days Tour</text>
                            </div>
                        </q-card>
                    </div>
                    <div class="col-3 toy5">
                        <q-card class="subdiv4">
                            <img src="../assets/Goa/Goa2.jpg" alt="">
                            <div class="absolute-bottom subtitle2 text-center">
                                <text class="toytext2">Exotic Leh Ladakh 5 Nights / 6 Days Tour</text>
                            </div>
                        </q-card>
                    </div>
                    <div class="col-3 toy5">
                        <q-card class="subdiv4">
                            <img src="../assets/Goa/Goa3.jpg" alt="">
                            <div class="absolute-bottom subtitle2 text-center">
                                <text class="toytext2">Exotic Leh Ladakh 5 Nights / 6 Days Tour</text>
                            </div>
                        </q-card>
                    </div>
                    <div class="col-3 toy5">
                        <q-card class="subdiv4">
                            <img src="../assets/Goa/Goa4.jpg" alt="">
                            <div class="absolute-bottom subtitle2 text-center">
                                <text class="toytext2">Exotic Leh Ladakh 5 Nights / 6 Days Tour</text>
                            </div>
                        </q-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style>
.toytext2{
    font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
        color: #ffff;
}
.toytext1{
    font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
        /* identical to box height, or 112% */
    
        color: #000000;
}
.toy5{
    padding: 20px 0 0 0;
}
.subtitle2 {
    background: rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 4px 4px;
    height: 56px;
    padding: 10px;
    color: white;
}

.subdiv4 img {
    height: 276px;
}

.subdiv4 {
    width: 210px;
    height: 276px;
}
.subdiv3 {
    display: flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
    padding: 120px 0 0 0;
    gap: 2px;

}

.subdiv2 {
    box-sizing: border-box;
    width: 210px;
    height: 276px;
    
    border: 1px dashed #A1A1AA;
    border-radius: 4px;
}
.toy2{
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: right;
    
}
.toy1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 0 0 20px; 
}

.avatardiv {
    display: flex;
    width: 40px;
    height: 40px;
    border: 0.34632px solid #E5E7EB;
    border-radius: 10.3896px;
    
}

/* .searchbar {
    box-sizing: border-box;


    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 11px 20px;
    gap: 46px;


    background: #FFFFFF;
    border: 1px solid #E6E7EA;
    border-radius: 25px;

    flex: none;
    order: 0;
    flex-grow: 0;
} */

.toytext {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: white;
    padding: 5px 0 0 0;
}

.toyimage {
    height: 30px;
    width:20%;
    
}

.toy {
    display: flex;
    flex-direction: row;
    align-items: center;
    
    width: 100%;
}

.toolbar {
    background-color: #003FA3;
    height: 60px;
}
</style>