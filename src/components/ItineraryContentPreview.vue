<template>
<div class="q-pa-md">
   <div class="text-bold row q-ma-sm">{{label}}</div>
   <div class="q-ma-sm row" v-html="content"></div>
<!--   <q-img class="q-pa-sm row" v-if="image" :src="image"></q-img>-->
</div>
</template>

<script>
export default {
  name: "ItineraryContentPreview",
  props: ["content", "label", "image"]
}
</script>

<style scoped>

</style>
