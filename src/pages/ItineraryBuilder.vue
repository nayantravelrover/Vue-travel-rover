<template>
    <AppBar/>
    <div>
        <div>
            <div>
                <div class="row" style="padding: 100px 100px 0 100px;">
                    <div class="col-3 toy5">
                        <div class="subdiv2">
                            <div class="subdiv3" @click="create_my_itinerary()">
                                <text class="toytext1">Create Itineraries</text>
                                <q-icon name="add" />
                            </div>
                        </div>
                    </div>

                    <div v-for="item in this.itineraries" :key="item" class="col-3 toy5">
                        <q-card class="subdiv4" @click="go_to_itinerary(item.pk)">
                            <img :src="item['fields']['place_img']" alt="">
                            <div class="absolute-bottom subtitle2 text-center">
                                <text class="toytext2">{{item.fields.itinerary_name}}</text>
                            </div>
                        </q-card>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>

import { defineComponent, ref, computed } from "vue";
import { useQuasar,Notify } from 'quasar'
import { created_itinerary_api, base_url,check_if_access_token_is_valid,check_if_refresh_token_is_valid } from "src/common/api_calls";
import AppBar from "./AppBar.vue"
let $q

export default defineComponent({
  name: "ItineraryBuilder",
  plugins: { Notify },
  components : { AppBar },
  data(){
    return{
        itineraries:[]
    }
  },
  created(){
    check_if_access_token_is_valid().then(response=>{
      console.log(response)
      this.$store.commit('user_logged_in_update', true)
    created_itinerary_api(null,window.localStorage.getItem("travel_rover_access")).then(response=>{
        this.itineraries = JSON.parse(response.data.data)
        console.log(this.itineraries)
      })
    }).catch(err =>{
          console.log(err)
          check_if_refresh_token_is_valid().then(response => {
            var access_token = response["data"]["access"];
            console.log(access_token)
            window.localStorage.setItem("travel_rover_access", access_token);
            this.$store.commit('user_logged_in_update', true)
            created_itinerary_api(null,window.localStorage.getItem("travel_rover_access")).then(response=>{
                this.itineraries = JSON.parse(response.data.data)
                console.log(this.itineraries)
              })
          }).catch(err =>{
            this.$store.commit('user_logged_in_update', false)
            console.log(err);
          });
    });
},
  mounted(){
    check_if_access_token_is_valid().then(response=>{
      console.log(response)
      this.$store.commit('user_logged_in_update', true)
    created_itinerary_api(null,window.localStorage.getItem("travel_rover_access")).then(response=>{
        this.itineraries = JSON.parse(response.data.data)
        console.log(this.itineraries)
      })
    }).catch(err =>{
          console.log(err)
          check_if_refresh_token_is_valid().then(response => {
            var access_token = response["data"]["access"];
            console.log(access_token)
            window.localStorage.setItem("travel_rover_access", access_token);
            this.$store.commit('user_logged_in_update', true)
            created_itinerary_api(null,window.localStorage.getItem("travel_rover_access")).then(response=>{
                this.itineraries = JSON.parse(response.data.data)
                console.log(this.itineraries)
              })
          }).catch(err =>{
            this.$store.commit('user_logged_in_update', false)
            console.log(err);
          });
    });
    $q = useQuasar()
  },  
  methods:{
    create_my_itinerary(){
        this.$router.push({
          path: '/itinarybuilder',
          name:'ItineraryCreator',
          query: { pk: -1 }
        })
    },
    go_to_itinerary(pk){
        this.$router.push({
          path: '/itinarybuilder',
          name:'ItineraryCreator',
          query: { pk: pk }
        })
    }

  }
});
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