<template>
<div class="q-pa-md">
   <div class="text-bold row q-ma-sm" style="color: black;">{{label}}</div>
   <div class="q-ma-sm row" v-html="content" style="color: black;"></div>
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
