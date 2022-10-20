<template>
<div class="q-pa-md">
   <div class="text-bold row q-ma-sm" style="font-size: large">{{label}}</div>
   <div class="q-ma-sm row" v-html="content" style=""></div>
</div>
</template>

<script>
export default {
  name: "ItineraryContentPreview",
  props: ["content", "label"]
}
</script>

<style scoped>

</style>
