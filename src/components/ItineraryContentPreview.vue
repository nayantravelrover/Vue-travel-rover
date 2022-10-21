<template>
<div class="q-pa-md">
   <div class="text-bold row q-ma-sm" style="font-size: large">{{label}}</div>
   <div class="q-ma-sm row" v-html="content" style=""></div>
   <q-img v-if="image" :src="image"></q-img>
</div>
</template>

<script>
export default {
  name: "ItineraryContentPreview",
  props: ["content", "label"],
  computed:{
    image: function (){
      return null
      // var image_name = this.$store.state.itinerary_preview.
    }
  }
}
</script>

<style scoped>

</style>
