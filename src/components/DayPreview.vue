<template>
  <div class="day_block" v-if="computedClass(day_index+1)">
    <q-img class="day-image-example" width="300" height="300" :src="day.images" alt="" v-if="!$q.platform.is.mobile" />
    <div class="description">
       <span><bold>Day {{day_index +1}}</bold></span><br>
      <span>{{day.description}}</span>
    </div>
    
  </div>

  <div class="day_block" v-else>
     <div class="description">
      <span><bold>Day {{day_index +1}}</bold></span><br>
      <span>{{day.description}}</span>
    </div>
    <q-img class="day-image-example" width="300" height="300" :src="day.images" alt="" v-if="!$q.platform.is.mobile" />
  </div>

</template>

<script>
  import { useQuasar } from 'quasar'

export default {

  name: "DayPreview",
  props:["day","day_index"],
  setup(){
    const $q = useQuasar()
  },
  methods: {
    computedClass(index) {
      if(index%2==0){
        return true
      }else{
        return false
      }
    }
  }
}
</script>

<style scoped>
  .day_block {
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -moz-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;   
        color: black;
    }

  .day-image-example {
        min-width: 250px;
        max-width: 250px;
        border-radius: 10%;
        margin-right: 10px;
        margin-left: 10px;
    }

  .description {
        padding: 10px;
    }
</style>
