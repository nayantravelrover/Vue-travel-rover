<template>
    <div class="">
        <q-carousel autoplay v-model="slide" swipeable animated :navigation-position="navPos" navigation padding height="auto">
            <q-carousel-slide name="style" class="column no-wrap flex-center">
                <div class="">
                    <TopSellingItineraries/>
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="tv" class="column no-wrap flex-center">
                <div class="">
                    <TopSellingItineraries/>
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="layers" class="column no-wrap flex-center">
                <div class="">
                    <TopSellingItineraries />
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="map" class="column no-wrap flex-center">
                <div class="">
                    <TopSellingItineraries />
                </div>
            </q-carousel-slide>
        </q-carousel>
    </div>
</template>

<script>
import { ref } from 'vue'
import TopSellingItineraries from './TopSellingItineraries.vue'

export default {
    setup() {
        return {
            navPos: ref("bottom"),
            navigationPositions: [
                { value: "top", label: "top" },
                { value: "right", label: "right" },
                { value: "bottom", label: "bottom (default)" },
                { value: "left", label: "left" }
            ],
            slide: ref("style"),
            lorem: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo."
        };
    },
    components: { TopSellingItineraries }
}
</script>
