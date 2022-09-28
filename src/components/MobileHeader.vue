<template>
<div>
  <div class="main-container-mobile row justify-center q-pa-md lt-md">
      <div class="col-md-8 content ">
        <div class="row items-center justify-center">
          <div
            class="input-area-1 col-md-3 col-xs-12"
            style="background-color: white">
            <q-input borderless bg-color="white" label="Where to ?">
              <template v-slot:prepend>
                <q-icon name="place" />
              </template>
            </q-input>
          </div>
          <div
            class="input-area-2 col-md-3 col-xs-12"
            style="background-color: white">
            <q-input borderless bg-color="white" label="From ?" v-model="date">
              <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="date" mask="YYYY-MM-DD">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div
            class="input-area-3 col-md-3 col-xs-12"
            style="background-color: white">
            <q-input borderless bg-color="white" label="To ?" v-model="date">
              <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="date" mask="YYYY-MM-DD">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
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
      <div class="row items-center justify-between">
        <div class="col-md-5 lt-md justify-center">
          <q-img style="width: 300px; height: 200px; margin:20px; margin-left: 30px;" src="../assets/travel.svg" />
        </div>
        <div class="left-section-mobile col-md-5 q-pa-md">
          <h4>TRAVELROVER IS A ONE STOP PLACE TO CREATE YOUR OWN ITINERARY, PUBLISH YOUR ITINERARY TO GET FEEDBACK FROM AGENTS,
          CONNECT WITH AGENT ON ONE TO ONE BASIS.
          </h4>
          <q-btn color="" text-color="black" class="explore-btn" label="Explore Destinations" :icon-right="matTrendingFlat" />
          
        </div>
      </div>
    </div>
</div>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from "vue";

export default defineComponent({
  name: 'EssentialLink',
  setup() {

    return {
      date: ref(""),

    };
  },
})
</script>
