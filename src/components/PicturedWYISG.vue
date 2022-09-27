<template>
<div class="column">
      <div class=" row q-ma-sm text-bold row" style="font-size: large">{{heading}}</div>
      <q-editor class="" v-model="editor" min-height="5rem" />
       <q-file
         class="row"
        v-model="files"
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
  props:["heading"],
  setup(){
    return {
      editor: ""
    }
  }
}
</script>

<style scoped>

</style>
