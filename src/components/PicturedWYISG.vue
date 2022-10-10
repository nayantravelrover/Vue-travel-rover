<template>
<div class="">
    <div class="q-ma-sm sectionheading ">{{heading}}</div>
    <q-editor class="" v-model="property_content_store" min-height="5rem" :toolbar = "[['bold', 'italic'],['ordered']]" />
    <q-uploader
        style=""
        url="http://admin.travelrover.in/travel-rover/api-files/"
        auto-upload
        label="Add image if any"
        field-name="file"
        @uploaded="property_img_update"/>
</div>
</template>

<script>
export default {
  name: "PicturedWYISG",
  props:["heading", "property_key"],
  methods: {
    property_img_update:function (info){
      var file_response = JSON.parse(info.xhr.response).file
      file_response = 'http://admin.travelrover.in' + file_response
      this.$store.commit(this.property_key+'_img_update', file_response)
    }
  },
  computed :{
    property_content_store :{
      get: function (){
        return this.$store.state.itinerary_preview[this.property_key]
      },
      set: function (val){
        var content_update = this.property_key + '_update'
        this.$store.commit(content_update, val)
        console.log(this.$store.state)
      }
    },
    property_file_store :{
      get: function (){
        var file_key = this.property_key + "_img"
        return this.$store.state.itinerary_preview[file_key]
      },
      set: function (val){
        var content_update = this.property_key + '_update_img'
        this.$store.commit(content_update, val)
      }
    }
  },
  setup(){
    return {
      editor: ""
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
</style>
