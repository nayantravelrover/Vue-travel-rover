<template>
  <div class="bg-white">
    <div class="q-col-gutter-md row items-start">
      <div class="col-12">
        <q-img :src="itinarary_data.place_img">
          <div class="absolute-full flex flex-center" >
            <span style="font-size: x-large">{{itinarary_data.place_name}}</span>
            <br>{{itinarary_data.place_description}}
          </div>
        </q-img>
      </div>
    </div>
    <div class="text-bold q-ma-sm row" style="font-size: large">{{itinarary_data.itinerary_name}}</div>

    <div v-for="(day, index) in itinarary_data.days" v-bind:key="index" class ="row">
      <div class="col-8">
        <p class="text-bold q-pa-md">Day {{index+1}}</p>
        <p class=" q-pa-md">{{day.description}}</p>
      </div>
      <div class="col-4 q-pa-md">
        <q-img :src="day.images[0]" class="q-ma-md"></q-img>
      </div>
    </div>
    <div class="text-bold">Places to visit</div>
    <div>{{itinarary_data.places_to_visit}}</div>

  </div>
</template>


<script>
export default {
  name: "ItineraryPreview",
  computed:{
    itinarary_data:function (){
      return this.$store.state.itinerary_preview
    }
  }
}
</script>

<style scoped>

</style>
