<template>

    <ItineraryPreview class="q-pa-sm"  id="preview" v-if="$q.platform.is.mobile"></ItineraryPreview>

    <div class="row" style="min-height: 100%" v-else>

    <div class="col-12 q-pa-lg" style="background-color: #4B5563;">
      <img class="top-left" src="../assets/logo.svg" style="max-width: 200px" />
      <q-scroll-area style="height: 100vh; margin: 0 auto; max-width: 800px;">
        <ItineraryPreview class="q-pa-md"  id="preview"></ItineraryPreview>
      </q-scroll-area>
    </div>
  </div>


</template>


<script>
import ItineraryPreview from "components/ItineraryPreview";

import {get_itinerary} from "src/common/api_calls";

let $q
import { useQuasar, Notify } from 'quasar'

export default {
  name: "ItineraryPreviewOpenToInternet",
  components: {ItineraryPreview},
  mounted() {
      try{
        const urlParams = window.location.href;
        var url_params = window.location.href.split("?")[1];
        var params = new URLSearchParams(url_params);
        
        var itinerary_pk = params.get('pk');
        get_itinerary({"itinerary_pk":itinerary_pk}).then(response=>{
                          if(response["data"]["status"] == 200){
                            let itinerary_preview = JSON.parse(response["data"]["itinerary_preview"])
                            this.$store.commit('itinerary_preview_update', itinerary_preview)
                          }else{
                            // $q.notify({
                            //       type: 'negative',
                            //       message: 'There is some internal issues going on.',
                            //       position: 'top'
                            //     })
                            alert('There is some internal issues going on.')
                          }

                      }).catch(err =>{
                          alert(itinerary_pk)
                          // alert(response)
                          alert(err)
                          // $q.notify({
                          //   type: 'negative',
                          //   message: err,
                          //   position: 'top'
                          // })
                        });

      }catch(err){
        console.log(err)
      }
  },
  computed:{
    itinarary_data:function (){
      console.log(this.$store.state.itinerary_preview)
      return this.$store.state.itinerary_preview
    },
    nonEmptyImagesCountPlacesToVisit() {
      //console.log(this.itinarary_data[0])
      console.log(this.itinarary_data["place_name"])

      return this.itinarary_data.places_to_visit_img[0].images.filter(img => img !== '').length;
    },
    nonEmptyImagesCountAccomodationArrangement(){
      return this.itinarary_data.accomodation_arrangements_img[0].images.filter(img => img !== '').length;
    }
  }
}
</script>

<style scoped>
div{
    font-family: "Helvetica Neue";
   color: #4B5563;
  }

</style>
