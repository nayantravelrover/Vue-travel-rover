<template>
    <div>
        <div>
            <q-card class="container1" style="margin-top: 164px;margin-left: 50px;">
                <div class="box1">
                        <div class="box4">
                            <img src="../assets/profilepage/imageframe.svg" alt="">
                        </div>
                        <div class="box3">
                            <img src="../assets/profilepage/editicon.svg" alt="">
                        </div>
                        <div class="box5">
                            <text class="text1">Tanay Desai</text>
                            <div class="box6">
                                <img src="../assets/profilepage/mail.svg" alt="" style="width: 24px; height: 24px;">
                                <text class="text3">tanaydesai123@gmail.com</text>
                            </div>
                            <div class="box7">
                                <img src="" alt="" style="width: 24px; height:24px;">
                                <text class="text3">+91-7827099326</text>
                            </div>
                        </div>
                </div>
                <q-separator style="margin-top: 270px;background: #E6E7EA;height: 2px;"/>
                <div class="box8" style="margin-top: 10px;">
                    <div class="box9">
                        <div class="box10">
                            <img src="../assets/profilepage/accounticon.svg" alt="">
                            <text class="text4">My Profile</text>
                        </div>
                    </div>
                    <div class="box9">
                        <div class="box10">
                            <img src="../assets/profilepage/favorite.svg" alt="">
                            <text class="text4">Liked Itineraries</text>
                        </div>
                    </div>
                    <div class="box9">
                        <div class="box10">
                            <img src="../assets/profilepage/visibility.svg" alt="">
                            <text class="text4">Viewed Itineraries</text>
                        </div>
                    </div>
                    <div class="box9">
                        <div class="box10">
                            <img src="../assets/profilepage/tune.svg" alt="">
                            <text class="text4">Custom Itineraries</text>
                        </div>
                    </div>
                </div>
            </q-card>
            <q-card class="container2">
                <div class="box11">
                    <text class="text5">My Profile</text>
                    <div class="box12">
                        <div class="box13"></div>
                    </div>
                    <div class="box14">
                        <div class="box15">
                            <div class="box16">
                                <text class="text6">First Name</text>
                                <text class="text7">Tanay</text>
                            </div>
                            <div class="box17">
                                <text class="text6">Last Name</text>
                                <text class="text7">Desai</text>
                            </div>
                        </div>
                        <div class="box18">
                            <div class="box19">
                                <text class="text6">Phone Number</text>
                                <div class="box21">
                                    <text class="text7">7827099326</text>
                                    <a href="" class="text8">Verify</a>
                                </div>
                            </div>
                            <div class="box20">
                                <text class="text6">Email Id</text>
                                <div class="box22">
                                    <text class="text7">tanaydesai123@gmail.com</text>
                                    <a href="" class="text8" style="margin-left: 150px;">Verify</a>
                                </div>
                            </div>
                        </div>
                        <div class="box23">
                            <div class="box24">
                                <text class="text6">Password</text>
                            </div>
                            <div class="box25">
                                <text class="text7">********</text>
                                <a href="" class="text8">Change Password</a>
                            </div>
                        </div>
                    </div>
                </div>
            </q-card>
           <!-- <q-card class="liked new3 row">
                <div>tanay</div>
                <q-separator style="background: #E6E7EA;" />
                <div>efhw</div>
                <q-separator style="background: #E6E7EA;" />
                <div>hgdhwe</div>
                <q-separator style="background: #E6E7EA;" />
                <div>dhedjh</div>
            </q-card>
            <q-card class="viewed new3 row">
                <div>tanay</div>
                <q-separator style="background: #E6E7EA;" />
                <div>efhw</div>
                <q-separator style="background: #E6E7EA;" />
                <div>hgdhwe</div>
                <q-separator style="background: #E6E7EA;" />
                <div>dhedjh</div>
            </q-card>-->
        </div>
    </div>
</template>
<script>
</script>
<style>
.new3{
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
            left: 500px;
            overflow-y: scroll;
    
            background: #FFFFFF;
            border: 1px solid #E6E7EA;
            border-radius: 10px;
    
            /* Inside auto layout */
            flex: none;
            order: 1;
            flex-grow: 0;
        
}
.box25{
    display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 10px;
    
        width: 257px;
        height: 27px;
    
    
        /* Inside auto layout */
        flex: none;
        order: 1;
        flex-grow: 0;
}
.box24{
    display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 5px;
    
        width: 88px;
        height: 27px;
    
    
        /* Inside auto layout */
        flex: none;
        order: 0;
        flex-grow: 0;
}
.box23{
    display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 5px;
    
        width: 257px;
        height: 54px;
    
    
        /* Inside auto layout */
        flex: none;
        order: 2;
        flex-grow: 0;
}
.box22{
    display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 10px;
    
        width: 469px;
        height: 27px;
    
    
        /* Inside auto layout */
        flex: none;
        order: 1;
        flex-grow: 0;
}
.text8{
    width: 141px;
        height: 21px;
    
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
        order: 0;
        flex-grow: 0;
}
.box21{
    display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 10px;
    
        width: 161px;
        height: 27px;
    
    
        /* Inside auto layout */
        flex: none;
        order: 1;
        flex-grow: 0;
}
.box20{
    display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
    
        width: 369px;
        height: 54px;
    
    
        /* Inside auto layout */
        flex: none;
        order: 1;
        flex-grow: 0;
}
.box19{
    display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
    
        width: 180px;
        height: 54px;
    
    
        /* Inside auto layout */
        flex: none;
        order: 0;
        flex-grow: 0;
}
.box18{
    display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 100px;
    
        width: 649px;
        height: 54px;
    
    
        /* Inside auto layout */
        flex: none;
        order: 1;
        flex-grow: 0;
}
.text7{
    width: 108px;
        height: 27px;
    
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
.text6{
    width: 197px;
        height: 27px;
    
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
.box17{
    display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
    
        width: 108px;
        height: 54px;
    
    
        /* Inside auto layout */
        flex: none;
        order: 1;
        flex-grow: 0;
}
.box16{
    display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
    
        width: 180px;
        height: 54px;
    
    
        /* Inside auto layout */
        flex: none;
        order: 0;
        flex-grow: 0;
}
.box15{
    display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 100px;
    
        width: 388px;
        height: 54px;
    
    
        /* Inside auto layout */
        flex: none;
        order: 0;
        flex-grow: 0;
}
.box14{
    display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 20px;
    
        position: absolute;
        width: 649px;
        height: 202px;
        left: 30px;
        top: 87px;
}
.box13{
    width: 800px;
        height: 1px;
    
        background: #E6E7EA;
    
        /* Inside auto layout */
        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;
}
.text5{
    position: absolute;
        width: 87px;
        height: 27px;
        left: 30px;
        top: 20px;
    
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        /* identical to box height */
    
        color: #505050;
}
.box12{
    display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 10px;
    
        position: absolute;
        width: 800px;
        height: 1px;
        left: 0px;
        top: 66px;
}
.box11{
    width: 800px;
        height: 383px;
    
    
        /* Inside auto layout */
        flex: none;
        order: 0;
        flex-grow: 0;
}
.container2{
    display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 10px;
    
        position: absolute;
        width: 800px;
        height: 383px;
        left: 500px;
        top: 164px;
        border-radius: 12px;
}
.text101{
    width: 187px;
        height: 27px;
    
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        /* identical to box height */
    
        /* Travel Rover/Primary Color */
        color: #000;
    
    
        /* Inside auto layout */
        flex: none;
        order: 1;
        flex-grow: 0;
}
.text4{
    width: 187px;
        height: 27px;
    
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        /* identical to box height */
    
        /* Travel Rover/Primary Color */
        color: #000;
    
    
        /* Inside auto layout */
        flex: none;
        order: 1;
        flex-grow: 0;
}
.box10{
    display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px 0px 0px 30px;
        gap: 10px;
    
        width: 151px;
        height: 27px;
    
    
        /* Inside auto layout */
        flex: none;
        order: 0;
        flex-grow: 0;
}
.box9{
    display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 20px 10px;
        gap: 10px;
    
        width: 390px;
        height: 64px;
    
    
        /* Inside auto layout */
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
}
.rectangle{
    width: 398px;
        height: 1px;
    
        background: #E6E7EA;
    
        /* Inside auto layout */
        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;
}
.divider{
    display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 10px;
    
        width: 398px;
        height: 1px;
    
    
        /* Inside auto layout */
        flex: none;
        order: 0;
        flex-grow: 0;
}
.box8{
    display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
    
        position: absolute;
        width: 398px;
        height: 260px;
        left: 1px;
        top: 256px;
}
.box7{
    display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        padding: 0px;
        gap: 5px;
    
        width: 163px;
        height: 24px;
    
    
        /* Inside auto layout */
        flex: none;
        order: 2;
        flex-grow: 0;
}
.text3{
    width: 212px;
        height: 24px;
    
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        /* identical to box height */
    
        color: #8E8E8E;
    
    
        /* Inside auto layout */
        flex: none;
        order: 1;
        flex-grow: 0;
}
.box6{
    display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        padding: 0px;
        gap: 5px;
    
        width: 311px;
        height: 24px;
    
    
        /* Inside auto layout */
        flex: none;
        order: 1;
        flex-grow: 0;
}
.text1{
    width: 120px;
        height: 27px;
    
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
.box5{
    display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
        gap: 8px;
    
        width: 311px;
        height: 91px;
        margin-top: 155px;
    
    
        /* Inside auto layout */
        flex: none;
        order: 1;
        flex-grow: 0;
}
.box4{
    display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 10px;
    
        position: absolute;
        left: 30.87%;
        right: 31.99%;
        top: 5.93%;
        bottom: 45.13%;
}
.box3{
    display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 8px;
        gap: 10px;
    
        position: absolute;
        width: 40px;
        height: 40px;
        left: 170px;
        top: 90px;
        
}
.box1{
    display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 10px;
    
        position: absolute;
        width: 311px;
        height: 236px;
        top: 10px;
        right: 30px;
        left: 59px;

}
.container1{
    box-sizing: border-box;
    
        position: absolute;
        width: 400px;
        height: 516px;
        left: 0px;
        top: 0px;
    
        background: #FFFFFF;
        border: 1px solid #E6E7EA;
        border-radius: 10px;
}
</style>