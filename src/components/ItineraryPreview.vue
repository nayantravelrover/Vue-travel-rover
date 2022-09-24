<template>

  <div class="">
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
    <div v-for="(day, index) in itinarary_data.itinerary.days" v-bind:key="index" class ="row">
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
<!--    <div class ="row">-->
<!--      <div class="col-8">-->
<!--        <p class="text-bold q-pa-md">Day 2</p>-->
<!--        <p class=" q-pa-md">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>-->
<!--&lt;!&ndash;      <>&ndash;&gt;-->
<!--      </div>-->
<!--      <div class="col-4 q-pa-md">-->
<!--        <q-img src="../assets/download.jpeg" class="q-ma-md">-->
<!--          <div class="absolute-full flex flex-center" style="font-size: x-large">-->
<!--            Ladakh-->
<!--          </div>-->
<!--        </q-img>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class ="row">-->
<!--      <div class="col-8">-->
<!--        <p class="text-bold q-pa-md">Day 3</p>-->
<!--        <p class=" q-pa-md">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>-->
<!--&lt;!&ndash;      <>&ndash;&gt;-->
<!--      </div>-->
<!--      <div class="col-4 q-pa-md">-->
<!--        <q-img src="../assets/download.jpeg" class="q-ma-md">-->
<!--          <div class="absolute-full flex flex-center" style="font-size: x-large">-->
<!--            Ladakh-->
<!--          </div>-->
<!--        </q-img>-->
<!--      </div>-->
<!--    </div>-->

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
