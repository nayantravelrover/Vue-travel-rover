<template>
<div>
<!--  TODO add v-model-->
  <div class=" text-bold sectionheading" style="font-size: large">Day {{day_index+1}}</div>
    <q-editor
       v-model="day_content_store"
      :toolbar="[['bold', 'italic'],['ordered']]"
    />
    <q-uploader
       flat bordered
        color="white"
       text-color="black"
        url="https://admin.travelrover.in/travel-rover/api-files/"
        style=""
        auto-upload
        label="Add image if any"
        field-name="file"
        @uploaded="day_img_update"
        max-files="1"
        @rejected="onRejected"
    />
</div>
</template>

<script>
import {toDataURL} from "src/common/utils";

export default {
  name: "day-editor",
  props:["day_index", "day_content", "day_images", "day_obj"],
  setup(){
    return {
      details: ""
    }
  },
  model: {
        prop: 'day_content',
        event: 'day_content_change'
  },
  methods:{
      day_img_update : function (info){
        var file_response = JSON.parse(info.xhr.response).file
        file_response = 'https://admin.travelrover.in' + file_response
        var day_index = this.day_index

        toDataURL(file_response)
        .then(dataUrl => {
          console.log('RESULT:', dataUrl)
        })

        var day_content_indexed = {index_day: day_index , value: file_response}
        console.log(day_content_indexed)
        this.$store.commit('day_img_update', day_content_indexed)
        console.log(this.$store)

        // var day_content_indexed = {index_day: day_index , value: file_response}
        // console.log(day_content_indexed)
        // this.$store.commit('day_img_update', day_content_indexed)
        // console.log(this.$store)
      },
    onRejected: function (rejectedEntries) {
      // Notify plugin needs to be installed
      // https://quasar.dev/quasar-plugins/notify#Installation
      $q.notify({
        type: 'negative',
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`
      })
    }
  },
  computed:{
    day_content_store :{
      get: function (){
        return this.$store.state.itinerary_preview.days[this.day_index].description
      },
      set: function (val){
        var day_index = this.day_index
        var day_content_indexed = {index_day: day_index, value: val}
        this.$store.commit('day_content_update', day_content_indexed)
      }
    }
  }
}
</script>

<style scoped>
.sectionheading{
    color: #4B5563;
    font-size: large;
    font-weight: bold;
  }
body {
  font-family: SansSerif;
}

</style>
