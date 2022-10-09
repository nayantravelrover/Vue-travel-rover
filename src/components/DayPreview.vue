<template>
  <div class="row q-pa-md">
    <div class="col-8">
          <div class="text-bold q-pa-md">Day {{day_index+1}}</div>
          <div class=" q-pa-md" v-html="day.description"></div>
    </div>
    <div class="col-4 q-pa-md">
          <q-img :src="day.images[0]" class="q-ma-md"></q-img>
    </div>
  </div>
</template>

<script>
export default {
  name: "DayPreview",
  props:["day","day_index"]
}
</script>

<style scoped>

</style>
