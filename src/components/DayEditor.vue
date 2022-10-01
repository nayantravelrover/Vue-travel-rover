<template>
<div>
<!--  TODO add v-model-->
  <div class="row text-bold q-ma-sm" style="font-size: large">Day {{day_index+1}}</div>
    <q-editor
       v-model="day_content_store"
      :dense="$q.screen.lt.md"
      :toolbar="[
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
      }"
    />
    <q-uploader
        color="grey"
        url="http://admin.travelrover.in/travel-rover/api-files/"
        style=""
        auto-upload
        label="Add image if any"
        field-name="file"
        @uploaded="day_img_update"/>
</div>
</template>

<script>
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
        file_response = 'http://admin.travelrover.in' + file_response
        var day_index = this.day_index
        var day_content_indexed = {index_day: day_index , value: file_response}
        console.log(day_content_indexed)
        this.$store.commit('day_img_update', day_content_indexed)
      }
  },
  computed:{
    day_content_store :{
      get: function (){
        return this.$store.state.itinerary_preview.days[this.day_index].description
      },
      set: function (val){
        var day_index = this.day_index
        console.log(day_index)
        var day_content_indexed = {index_day: day_index, value: val}
        console.log(day_content_indexed)
        this.$store.commit('day_content_update', day_content_indexed)
      }
    }
  }
}
</script>

<style scoped>

</style>
