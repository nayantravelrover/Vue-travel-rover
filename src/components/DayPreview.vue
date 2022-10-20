<template>
  <div class="q-pa-md">
  <div class="row"  v-if="computedClass(day_index+1)">
    <div  class="col-4 q-pr-md">
    <q-img class="right-img"   width="300" height="300" :src="day.images" alt="" v-if="!$q.platform.is.mobile" />
    </div>
      <div  class="col-8">
       <div class="text-bold" style="font-size: large"><bold>Day {{day_index +1}}</bold></div><br>
      <span>{{day.description}}</span>
    </div>
  </div>
  <div v-else class="row" >
     <div class="col-8">
      <div class="text-bold" style="font-size: large"><bold>Day {{day_index +1}}</bold></div><br>
      <span>{{day.description}}</span>
    </div>
    <div class="col-4 q-pl-md">
    <q-img class="left-img" width="300" height="300" :src="day.images" alt="" v-if="!$q.platform.is.mobile" />
    </div>
  </div>
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

  .left-img {
    border-top-left-radius:15px;
    border-bottom-right-radius: 15px;
    }
  .right-img {
    border-top-right-radius:15px;
    border-bottom-left-radius: 15px;
    }

  .description {
        padding: 10px;
    }
</style>
