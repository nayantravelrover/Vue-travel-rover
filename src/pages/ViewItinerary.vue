<template>
    <div class="q-pa-md">
        <div class="box1 absolute-center gt-sm" style="margin-top: 300px;">
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
                            <text class="type2">Lorem Ipsum is simply dummy text of the printing</text>
                        </div>
                        <div class="box6">
                            <div class="box7">
                                <img src="../assets/editcard/checked.svg" alt="">
                            </div>
                            <text class="type2">Lorem Ipsum is simply dummy text of the printing</text>
                        </div>
                        <div class="box6">
                            <div class="box7">
                                <img src="../assets/editcard/checked.svg" alt="">
                            </div>
                            <text class="type2">Lorem Ipsum is simply dummy text of the printing</text>
                        </div>
                        <div class="box6">
                            <div class="box7">
                                <img src="../assets/editcard/checked.svg" alt="">
                            </div>
                            <text class="type2">Lorem Ipsum is simply dummy text of the printing</text>
                        </div>
                    </div>
                </div>
                <div class="box7">
                    <div class="box8">
                        <div class="box9">
                            <text class="type3">Starts from</text>
                            <div class="type5">
                                <text class="type4">42,999</text>
                                <text class="type3">/Per Person</text>
                            </div>
                        </div>
                    </div>
                    <div class="box10">
                        <div class="box11">
                            <text class="type6">Contact US</text>
                            <img src="../assets/editcard/whatsapp.svg" alt="">
                        </div>
                        <div class="box11">
                            <text class="type7">Buy Now</text>
                            <img class="cart1" src="../assets/editcard/cart1.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="box12">
                <div class="box13">
                    <ItineraryPreview class="q-ma-lg"  id="preview" style="margin:0px;"></ItineraryPreview>
                </div>
            </div>
        </div>
        <q-dialog v-model="card">
        <q-card class="box20 lt-md absolute-center" style="margin-top: 400px;">
            <div class="box21">
                <div class="box22">
                    <ItineraryPreview class="q-ma-lg"  id="preview" style="margin:0px;"></ItineraryPreview>
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
        </q-card>
        </q-dialog>
        
    </div>
</template>
<script type="text/javascript">
    import ItineraryPreview from "components/ItineraryPreview";
    export default {
        components: {ItineraryPreview},
    }
</script>
<style>
.card2{
        width: 20.13px;
            height: 20.13px;
        
        
            /* Inside auto layout */
            flex: none;
            order: 1;
            flex-grow: 0;
    }
.share20{
        width: 20.13px;
            height: 20.13px;
        
        
            /* Inside auto layout */
            flex: none;
            order: 1;
            flex-grow: 0;
    }
.type20{
        width: 90px;
            height: 24px;
        
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            /* identical to box height */
            text-align: center;
        
            color: #FFFFFF;
        
        
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
    }
.box25{
        display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 6.29032px 25.1613px;
            gap: 13.21px;
        
            width: 178px;
            height: 37px;
        
            /* Travel Rover/Primary Color */
            background: #003FA3;
            border-radius: 3.77419px;
        
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 1;
    }
.box24{
        display: flex;
            flex-direction: row;
            align-items: flex-start;
            padding: 0px;
            gap: 20px;
        
            width: 368px;
            height: 37px;
        
        
            /* Inside auto layout */
            flex: none;
            order: 1;
            align-self: stretch;
            flex-grow: 0;
    }
.box23{
        display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0px;
            gap: 20px;
        
            position: absolute;
            width: 368px;
            height: 37px;
            left: 20px;
            top: 546px;
    }
.box22{
        display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0px;
            gap: 8.34px;
        
            position: absolute;
            width: 408px;
            height: fit-content;
            left: 0px;
            top: 0px;
        
            background: #E5E3E6;
    }
.box21{
        position: absolute;
            width: 408px;
            height: 526px;
            overflow-y: scroll;
        
            background: #FFFFFF;
    }
    .box20{
        position: relative;
            width: 408px;
            height: 603px;
        
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
        
            /* Travel Rover/Primary Color */
            background: #003FA3;
            border-radius: 6px;
        
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
        width: 363px;
            height: 42px;
        
            font-family: 'Poppins';
            flex-direction: row;
            font-style: normal;
            font-weight: 700;
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
.type3{
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
.box1{
    position: relative;
        width: 842px;
        height: 600px;
    
        background: #FFFFFF;
        border-radius: 16px;
        box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.25);
}
</style>