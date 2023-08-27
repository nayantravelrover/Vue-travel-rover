<template>
    <q-dialog class="flex justify-center" v-model="show_modal">
        <ViewItinerary/>
    </q-dialog>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from 'quasar'
import ViewItinerary from './ViewItinerary.vue';

let $q
export default defineComponent({
    name: 'PreviewItinerary',
    components: {
        ViewItinerary,
    },
    computed: {
        show_modal: {
            get () {
                return this.$store.state.show_itinerary_modal;
            },
            set (value) {
                this.$store.commit('toggle_preview_itinerary_modal', value);
            }
        }
    },
    mounted() {
        $q = useQuasar()
    }
})
</script>