<template>
    <div class="gt-xs">
        <div class="container40">
            <text class="text50">{{this.name}}</text>
            <text class="text51">{{this.places_one_liner}}</text>
        </div>
    </div>
</template>

<script>

import { ref, watch } from 'vue'

export default {
    name: 'CardContainer',
    data(){
        return{
            place_description:this.$parent.place_description,
            name: "",
            places_one_liner: ""
        }
    },
    created(){
        console.log(this.$parent.name_new)
    },
    computed:{
        place_description_update(){
            return this.$parent.place_description
        }
    },
    watch: {
        place_description_update(newplace, oldplace){
            this.name = this.$parent.place_description["name"]
            this.places_one_liner = this.$parent.places_one_liner["places_one_liner"]
            this.place_description=this.$parent.place_description
            console.log(this.name)
            console.log(this.places_one_liner)
        }
        },
}

</script>
<style>
.text51{
        width: 500px;
            height: 60px;
        
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 36px;
            line-height: 60px;
            /* identical to box height */
        
            /* White/White 100 */
            color: #FFFFFF;
        
        
            /* Inside auto layout */
            flex: none;
            order: 1;
            flex-grow: 0;
            text-align: center;
    }
.text50{
            width: 500px;
            height: 108px;
        
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            font-size: 72px;
            line-height: 108px;
            /* identical to box height */
        
            /* White/White 100 */
            color: #FFFFFF;
        
        
            /* Inside auto layout */
            flex: none;
            order: 0;
            flex-grow: 0;
            margin: -10px 0px;
            text-align: center;
    }
.container40{
        display: flex;
            flex-direction: column;
            align-items: center;
            padding: 32px 63px;
        
            position: absolute;
            width: 511px;
            height: 222px;
            
            top: 375px;
        
            background: rgba(0, 0, 0, 0.2);
            border-radius: 10px;
    }
</style>