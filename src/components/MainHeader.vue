<template>
 <div v-if="!$q.platform.is.mobile" class="main-container row justify-center q-pa-md">
      <div class="col-md-8 content">
        <div class="row items-center justify-center">
          <div class="input-area-1 col-md-3 col-xs-12" style="background-color: white">
            <q-input borderless bg-color="white" label="Where to ?">
              <template v-slot:prepend>
                <q-icon name="place" />
              </template>
            </q-input>
          </div>
          <div class="input-area-2 col-md-3 col-xs-12" style="background-color: white">
            <q-input borderless bg-color="white" label="From ?" v-model="date">
              <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="date" mask="YYYY-MM-DD">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="input-area-3 col-md-3 col-xs-12" style="background-color: white">
            <q-input borderless bg-color="white" label="To ?" v-model="date">
              <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="date" mask="YYYY-MM-DD">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="input-area-4 col-md-3 col-xs-12" style="">
            <q-btn color="" class="search-btn" icon="search" label="Search" />
          </div>
        </div>
      </div>
    </div>
    <MobileHeader v-else />
</template>

<script>
import MobileHeader from '../components/MobileHeader.vue';
export default {
  name: "MainHeader",
  components:{
    MobileHeader
  }
}
</script>

<style scoped>

</style>
