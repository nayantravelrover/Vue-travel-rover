import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import {ref} from "vue";
// import example from './module-example'


/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */
export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      // example
    },
    state: {
      itinerary_preview: {
        place_name: "Ladakh",
        place_description:"sdasdsadasd",
        place_img:"download.jpeg",
        itinerary_name:"This is my itinerary",
        days: [
            {
              description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              images: 'download.jpeg'
            },
            {
              description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              images:'download.jpeg'
            },
            {
              description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              images:'download.jpeg'
            },
            {
              description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              images:'download.jpeg'
            },
        ],
        places_to_visit:"Naggar",
        accomodation_arrangements:"Naggar",
        travel_arrangements:"Naggar",
        inclusions:"Naggar",
        exclusions:"Naggar",
        terms_and_conditions:"Naggar",
        cancellations_policy:"Naggar",
        things_to_carry:"Naggar",
        tour_rates:"Naggar",
        start_dates: [],
        extra_sections: []
        // places_to_visit_img:'download.jpeg',
        // accomodation_arrangements_img:'download.jpeg',
        // travel_arrangements_img:'download.jpeg',
        // inclusions_img:'download.jpeg',
        // exclusions_img:'download.jpeg',
        // terms_and_conditions_img:'download.jpeg',
        // cancellations_policy_img:'download.jpeg',
        // things_to_carry_img:"download.jpeg",
        // tour_rates_img:'download.jpeg',

        // images_extra:["Naggar"],
        // extra_information:"Naggar",
        // sections:[{
        //   title:"hotels",
        //   content:"These are hotels"
        // }]
      },
    },
    mutations:{
      place_name_update(state,place_name) {
        state.itinerary_preview.place_name=place_name;
      },
      place_description_update(state,place_description) {
        state.itinerary_preview.place_description=place_description;
      },
      itinerary_name_update(state,itinerary_name) {
        state.itinerary_preview.itinerary_name=itinerary_name;
      },
      places_to_visit_update(state,itinerary_name) {
        state.itinerary_preview.places_to_visit=itinerary_name;
      },
      accomodation_arrangements_update(state,itinerary_name) {
        state.itinerary_preview.accomodation_arrangements=itinerary_name;
      },

      travel_arrangements_update(state,itinerary_name) {
        state.itinerary_preview.travel_arrangements=itinerary_name;
      },

      inclusions_update(state,itinerary_name) {
        state.itinerary_preview.inclusions=itinerary_name;
      },

      exclusions_update(state,itinerary_name) {
        state.itinerary_preview.exclusions=itinerary_name;
      },
      terms_and_conditions_update(state,itinerary_name) {
        state.itinerary_preview.terms_and_conditions=itinerary_name;
      },

      cancellations_policy_update(state,itinerary_name) {
        state.itinerary_preview.cancellations_policy=itinerary_name;
      },
      things_to_carry_update(state,itinerary_name) {
        state.itinerary_preview.things_to_carry=itinerary_name;
      },
      places_to_visit_img_update(state,itinerary_name) {
        state.itinerary_preview.places_to_visit_img=itinerary_name;
      },
      accomodation_arrangements_img_update(state,itinerary_name) {
        state.itinerary_preview.accomodation_arrangements_img=itinerary_name;
      },

      travel_arrangements_img_update(state,itinerary_name) {
        state.itinerary_preview.travel_arrangements_img=itinerary_name;
      },

      inclusions_img_update(state,itinerary_name) {
        state.itinerary_preview.inclusions_img=itinerary_name;
      },

      exclusions_img_update(state,itinerary_name) {
        state.itinerary_preview.exclusions_img=itinerary_name;
      },
      terms_and_conditions_img_update(state,itinerary_name) {
        state.itinerary_preview.terms_and_conditions_img=itinerary_name;
      },

      cancellations_policy_img_update(state,itinerary_name) {
        state.itinerary_preview.cancellations_policy_img=itinerary_name;
      },
      things_to_carry_img_update(state,itinerary_name) {
        state.itinerary_preview.things_to_carry_img=itinerary_name;
      },
      tour_rates_update(state,itinerary_name) {
        state.itinerary_preview.tour_rates=itinerary_name;
      },
      start_dates_update(state,start_dates) {
        state.itinerary_preview.start_dates=start_dates;
      },
      number_of_days_update(state,number_of_days) {
        state.itinerary_preview.number_of_days =number_of_days;
      },
      place_img_update(state,place_img) {
        state.itinerary_preview.place_img =place_img;
      },
      day_content_update(state,indexed_val) {
        state.itinerary_preview.days[indexed_val.index_day].description = indexed_val.value;
      },
      day_img_update(state,indexed_val) {
        state.itinerary_preview.days[indexed_val.index_day].images = indexed_val.value;
      },
      itinerary_update(state,val) {
        state.itinerary_preview = val;
      },
      day_add(state, val){
        state.itinerary_preview.days.push({description: "", images: []})

      }
    },
    actions:{

    },
    getters:{

    },
    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
