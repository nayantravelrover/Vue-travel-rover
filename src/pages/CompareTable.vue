<template>
    <div>
        <div class="q-pa-md">
        <q-card class="column">
            <div class="compare_main_title" style="padding: 10px 0 10px 20px;">Itinerary Comparison</div>
            <div class="row compare_content">
                <div class="compare_inner_content2">
                    <div class="compare_main_subtitle">Compare Exotic Goa 9 Nights / 10 Days Tour vs 2 others</div>
                </div>
                <div class="compare_inner_content2">
                    <div class="column compare_images">
                        <div class="compare_remove_btn">
                            <div> <img src="../assets/comparison/Removebtn.svg" alt="" @click="this.$parent.remove_itinerary('compare_itinerary_one')"></div>
                        </div>
                        <q-img class="compare_img_container">
                            <img src="this.$parent.compare_itinerary_one.place_img" alt="" class="compare_img">
                        </q-img>
                        <div class="compare_title1">Exotic Goa 9 Nights / 10 Days Tour</div>
                        <div class="compare_title2">Start From RS. </div>
                        <div class="row">
                            <div class="compare_price">4999</div>
                            <div class="compare_title3">/per person</div>
                        </div>
                    </div>
                </div>
                <div class="compare_inner_content2">
                    <div class="column compare_images">
                        <div class="compare_remove_btn">
                            <div> <img src="../assets/comparison/Removebtn.svg" alt=""></div>
                        </div>
                        <q-img class="compare_img_container">
                            <img src="../assets/Goa/goa1.jpg" alt="" class="compare_img">
                        </q-img>
                        <div class="compare_title1">Exotic Goa 9 Nights / 10 Days Tour</div>
                        <div class="compare_title2">Start From RS. </div>
                        <div class="row">
                            <div class="compare_price">4999</div>
                            <div class="compare_title3">/per person</div>
                        </div>
                    </div>
                </div>
                <div class="compare_inner_content2">
                    <div class="column compare_images">
                        <div class="compare_remove_btn">
                            <div> <img src="../assets/comparison/Removebtn.svg" alt=""></div>
                        </div>
                        <q-img class="compare_img_container">
                            <img src="../assets/Goa/goa1.jpg" alt="" class="compare_img">
                        </q-img>
                        <div class="compare_title1">Exotic Goa 9 Nights / 10 Days Tour</div>
                        <div class="compare_title2">Start From RS. </div>
                        <div class="row">
                            <div class="compare_price">4999</div>
                            <div class="compare_title3">/per person</div>
                        </div>
                    </div>
                </div>
            </div>
            <q-separator/>
            <div class="column" style="padding: 10px 0 0 0;">
                
                <div class="column compare_box">
                    <div class="compare_mains">
                        <div class="compare_title">Tour Departure</div>
                    </div>
                    <div class="row compare_content">
                        <div class="compare_inner_content"></div>
                        <div class="compare_inner_content">
                            <text>my name is tanay and i know that please dont tell me ok be aware of me</text>
                        </div>
                        <div class="compare_inner_content">
                            <text>my name is tanay and i know that please dont tell me ok be aware of me</text>
                        </div>
                        <div class="compare_inner_content">
                            <text>my name is tanay and i know that please dont tell me ok be aware of me</text>
                        </div>
                    </div>
                </div>
                <div class="column compare_box">
                    <div class="compare_mains">
                        <div class="compare_title">Tour Highlights</div>
                    </div>
                    <div class="row compare_content">
                        <div class="compare_inner_content"></div>
                        <div class="column compare_inner_content">
                            <text>my name is tanay and i know that please dont tell me ok be aware of me</text>
                        </div>
                        <div class="compare_inner_content">
                            <text>my name is tanay and i know that please dont tell me ok be aware of me</text>
                        </div>
                        <div class="compare_inner_content">
                            <text>my name is tanay and i know that please dont tell me ok be aware of me</text>
                        </div>
                    </div>
                </div>
                <div class="column compare_box">
                    <div class="compare_mains">
                        <div class="compare_title">Places To Visit</div>
                    </div>
                    <div class="row compare_content">
                        <div class="compare_inner_content"></div>
                        <div class="column compare_inner_content">
                            <text>my name is tanay and i know that please dont tell me ok be aware of me</text>
                        </div>
                        <div class="compare_inner_content">
                            <text>my name is tanay and i know that please dont tell me ok be aware of me</text>
                        </div>
                        <div class="compare_inner_content">
                            <text>my name is tanay and i know that please dont tell me ok be aware of me</text>
                        </div>
                    </div>
                </div>
                <div class="column compare_box">
                    <div class="compare_mains">
                        <div class="compare_title">Accomodation</div>
                    </div>
                    <div class="row compare_content">
                        <div class="compare_inner_content"></div>
                        <div class="column compare_inner_content">
                            <text>my name is tanay and i know that please dont tell me ok be aware of me</text>
                        </div>
                        <div class="compare_inner_content">
                            <text>my name is tanay and i know that please dont tell me ok be aware of me</text>
                        </div>
                        <div class="compare_inner_content">
                            <text>my name is tanay and i know that please dont tell me ok be aware of me</text>
                        </div>
                    </div>
                </div>
                <div class="column compare_box">
                    <div class="compare_mains">
                        <div class="compare_title">Travel Arrangements</div>
                    </div>
                    <div class="row compare_content">
                        <div class="compare_inner_content"></div>
                        <div class="column compare_inner_content">
                            <text>my name is tanay and i know that please dont tell me ok be aware of me</text>
                        </div>
                        <div class="compare_inner_content">
                            <text>my name is tanay and i know that please dont tell me ok be aware of me</text>
                        </div>
                        <div class="compare_inner_content">
                            <text>my name is tanay and i know that please dont tell me ok be aware of me</text>
                        </div>
                    </div>
                </div>
                <div class="column compare_box">
                    <div class="compare_mains">
                        <div class="compare_title">Things to carry</div>
                    </div>
                    <div class="row compare_content">
                        <div class="compare_inner_content"></div>
                        <div class="column compare_inner_content">
                            <text>my name is tanay and i know that please dont tell me ok be aware of me</text>
                        </div>
                        <div class="compare_inner_content">
                            <text>my name is tanay and i know that please dont tell me ok be aware of me</text>
                        </div>
                        <div class="compare_inner_content">
                            <text>my name is tanay and i know that please dont tell me ok be aware of me</text>
                        </div>
                    </div>
                </div>
                <div class="column compare_box">
                    <div class="compare_mains">
                        <div class="compare_title">Inclusions</div>
                    </div>
                    <div class="row compare_content">
                        <div class="compare_inner_content"></div>
                        <div class="column compare_inner_content">
                            <text>my name is tanay and i know that please dont tell me ok be aware of me</text>
                        </div>
                        <div class="compare_inner_content">
                            <text>my name is tanay and i know that please dont tell me ok be aware of me</text>
                        </div>
                        <div class="compare_inner_content">
                            <text>my name is tanay and i know that please dont tell me ok be aware of me</text>
                        </div>
                    </div>
                </div>
                <div class="column compare_box">
                    <div class="compare_mains">
                        <div class="compare_title">Exclusions</div>
                    </div>
                    <div class="row compare_content">
                        <div class="compare_inner_content"></div>
                        <div class="column compare_inner_content">
                            <text>my name is tanay and i know that please dont tell me ok be aware of me</text>
                        </div>
                        <div class="compare_inner_content">
                            <text>my name is tanay and i know that please dont tell me ok be aware of me</text>
                        </div>
                        <div class="compare_inner_content">
                            <text>my name is tanay and i know that please dont tell me ok be aware of me</text>
                        </div>
                    </div>
                </div>
                <div class="column compare_box">
                    <div class="compare_mains">
                        <div class="compare_title">Cancellations Policy</div>
                    </div>
                    <div class="row compare_content">
                        <div class="compare_inner_content"></div>
                        <div class="column compare_inner_content">
                            <text>my name is tanay and i know that please dont tell me ok be aware of me</text>
                        </div>
                        <div class="compare_inner_content">
                            <text>my name is tanay and i know that please dont tell me ok be aware of me</text>
                        </div>
                        <div class="compare_inner_content">
                            <text>my name is tanay and i know that please dont tell me ok be aware of me</text>
                        </div>
                    </div>
                </div>
            </div>
        </q-card>
        </div>
    </div>
</template>
<script>
</script>
<style>
.compare_inner_content{
    justify-content: center;
    padding: 20px;
    width: 25%;
    border: 1px dotted #DFDFDF;
}
.compare_inner_content2 {
    justify-content: center;
    padding: 20px;
    width: 25%;
    
}
.compare_content{
    width: 100%;
}
.compare_title{
    font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
        padding: 5px 0 5px 10px;
}
.compare_box{
    padding: 0 16px 0 16px !important;
}
.compare_mains{
    background: #F9F9F9;
}
.compare_main_title{
    font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 26px;
        line-height: 48px;
    
        color: #333333;
}
.compare_main_subtitle{
    font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
    
        color: #000000;
}
.compare_images{
    
    padding: 10px;
}

.compare_remove_btn{
    float: left;
}

.compare_img{
    width: auto;
    height: auto;
    max-width: 100%;
}

.compare_img_container{
    border-radius: 10px;
}
.compare_title1{
    font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
    
        color: #000000;
}

.compare_title2{
    font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        /* identical to box height */
        text-align: justify;
    
        color: #999999;
}

.compare_price{
    font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 42px;
        /* identical to box height */
        text-align: justify;
    
        color: #2F2F42;
}
.compare_title3 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    margin-top: 12px;

    color: #999999;
}

.vertical_separator{
    border: 1px dashed #DFDFDF;
        transform: rotate(90deg);
}
</style>