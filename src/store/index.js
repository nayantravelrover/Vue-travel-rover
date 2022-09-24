import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
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
        itinerary:{
          days: [
            {
              description:"I am nayan jain",
              images:['download.jpeg']
            },
            {
              description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              images:['download.jpeg']
            },
            {
              description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              images:['download.jpeg']
            },
            {
              description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              images:['download.jpeg']
            },
          ]
        },
        places_to_visit:"Naggar",
        accomodation_arrangements:"Naggar",
        travel_arrangements:"Naggar",
        inclusions:"Naggar",
        exclusions:"Naggar",
        terms_and_conditions:"Naggar",
        cancellations_policy:"Naggar",
        things_to_carry:"Naggar",
        tour_rates:"Naggar",
        images_extra:["Naggar"],
        extra_information:"Naggar",
        sections:[{
          title:"hotels",
          content:"These are hotels"
        }]
      }
    },
    mutations:{

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
