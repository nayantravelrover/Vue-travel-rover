<template>
    <div class="q-pa">
        <q-card class="box1 gt-sm">
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
                    <ItineraryPreview class="q-ma-lg" id="preview" style="margin:0px;"></ItineraryPreview>
                </div>
            </div>
        </q-card>
        <div>
        <q-card class="box20 lt-md row">
            <div class="box21">
                <div class="box22">
                    <ItineraryPreview class="q-ma-lg"  id="preview" style="margin:0px;"></ItineraryPreview>
                </div>
            </div>
            <div class="box23 col">
                <div class="box24">
                    <q-btn class="box25">
                        <text class="type20">Contact Us</text>
                        <img class="share20" src="../assets/editcard/whatsapp.svg" alt="">
                    </q-btn>
                    <q-btn class="box25">
                        <text class="type20">Buy Now</text>
                        <img class="card2" src="../assets/editcard/cart1.svg" alt="">
                    </q-btn>
                </div>
            </div>
        </q-card>
    </div>
        
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
    .box20{
        
            width: fit-content;
        
            background: #FFFFFF;
            box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.25);
    }
.cart1{
        width: 32px;
            height: 32px;
        
        
    }
.type7{
      
        width: auto;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            
            
        
            color: #FFFFFF;
    }
.type6{
        
      width: 0 auto;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
           
           
        
            color: #FFFFFF;
        
        
           
    }
.box13{
        display: flex;
            flex-direction: column;
            align-items: flex-start;
            
            gap: 10px;
        
            background: #E5E3E6;
    }
.box12{
        
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
        
          
            background: #003FA3;
            border-radius: 6px;
        
           
    }
.box10{
        display: flex;
            flex-direction: column;
            align-items: flex-start;
           
            gap: 20px;
           
    }
    .type5{
        width: 180px;
    }
.type4{
       
        
            font-family: 'Poppins';
            flex-direction: row;
            font-style: normal;
            font-weight: 700;
            font-size: 28px;
            line-height: 42px;
      
            color: #2F2F42;
        
        
            
    }
.type3{
       
        
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
           
            
           
        
            color: #484848;
    
    }
.box9{
        display: flex;
            flex-direction: column;
            align-items: flex-start;
    }
.box8{
        display: flex;
            flex-direction: column;
            align-items: center;
        
            gap: 16px;
        
           
    }
.box7{
        display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
        
    }
.type2{
        max-width: 215px;
            
        
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            
        
            color: #555555;
        
    }
.box7{
        width: 24px;
            height: 24px;
        
    }
.box6{
        display: flex;
            flex-direction: row;
            align-items: flex-start;
           
            gap: 6px;
        
            
    }
.box5{
        display: flex;
            flex-direction: column;
            align-items: flex-start;
           
            gap: 10px;
        
            
    }
.type1{
       
        
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 600;
            font-size: 18.5px;
            line-height: 30px;
           
        
            color: #202020;
    }
.box4{
        display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 31px;
        
           
    }
.box3{
        display: flex;
            flex-direction: column;
            align-items: flex-start;
           
            gap: 20px;
        
            
        
    }
.box2{
        display: flex;
            flex-direction: column;
            justify-content: center;
            height: 700px;
            gap: 20px;
            
    }
.box1{
        display: flex;
        width: fit-content;
        background: #FFFFFF;
        box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.25);
}
</style>