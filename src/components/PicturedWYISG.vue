<template>
<div class="">
    <div class="q-ma-sm sectionheading ">{{heading}}</div>
    <q-editor class="" v-model="property_content_store" min-height="5rem" :toolbar="[
        [
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            list: 'only-icons',
            options: ['left', 'center', 'right', 'justify']
          },
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            options: ['left', 'center', 'right', 'justify']
          }
        ],
        ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
        ['token', 'hr', 'link', 'custom_btn'],
        ['print', 'fullscreen'],
        [
          {
            label: $q.lang.editor.formatting,
            icon: $q.iconSet.editor.formatting,
            list: 'no-icons',
            options: [
              'p',
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'code'
            ]
          },
          {
            label: $q.lang.editor.fontSize,
            icon: $q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7'
            ]
          },
          {
            label: $q.lang.editor.defaultFont,
            icon: $q.iconSet.editor.font,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'default_font',
              'arial',
              'arial_black',
              'comic_sans',
              'courier_new',
              'impact',
              'lucida_grande',
              'times_new_roman',
              'verdana'
            ]
          },
          'removeFormat'
        ],
        ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

        ['undo', 'redo'],
        ['viewsource']
      ]"
      :fonts="{
        arial: 'Arial',
        arial_black: 'Arial Black',
        comic_sans: 'Comic Sans MS',
        courier_new: 'Courier New',
        impact: 'Impact',
        lucida_grande: 'Lucida Grande',
        times_new_roman: 'Times New Roman',
        verdana: 'Verdana'
      }" />
<q-uploader
        v-if="this.image"
        style=""
        color="white"
        text-color="black"
        bordered flat
        url="https://admin.travelrover.in/travel-rover/api-files/"
        auto-upload
        label="Add image if any"
        field-name="file"
        max-files="1"
        @uploaded="property_img_update"/>
</div>
</template>

<script>
let $q
export default {
  name: "PicturedWYISG",
  props:["heading", "property_key", "image"],
  methods: {
    property_img_update:function (info){
      var file_response = JSON.parse(info.xhr.response).file
      file_response = 'https://admin.travelrover.in' + file_response
      console.log("here")
      this.$store.commit(this.property_key+'_img_update', file_response)
      console.log(this.$store.state.itinerary_preview.places_to_visit_img)
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
    // property_file_store :{
    //   get: function (){
    //     var file_key = this.property_key + "_img"
    //     return this.$store.state.itinerary_preview[file_key]
    //   },
    //   set: function (val){
    //     var content_update = this.property_key + '_update_img'
    //     this.$store.commit(content_update, val)
    //   }
    // }
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
