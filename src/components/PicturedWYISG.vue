<template>
<div class="column">
      <div class=" row q-ma-sm row" style="font-size: large">{{heading}}</div>
      <q-editor class="" v-model="property_content_store" min-height="5rem" />
       <q-file
         class="row"
        v-model="property_file_store"
        label="Pick files"
        outlined
        use-chips
        multiple
        style="max-width: 300px"
      />
 </div>
</template>

<script>
export default {
  name: "PicturedWYISG",
  props:["heading", "property_key"],
  computed :{
    property_content_store :{
      get: function (){
        return this.$store.state.itinerary_preview[this.property_key]
      },
      set: function (val){
        var content_update = this.property_key + '_update'
        this.$store.commit(content_update, val)
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

</style>
