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
      user_logged_in: true,
      is_agent: false,
      itinerary_preview: {
        place_name: "Leh Ladakh",
        place_description: "Kerala, also known as 'God's Own Country', is a tropical paradise located in South India. It is known for its palm-lined beaches, serene backwaters, lush green hills, and traditional culture.",
        place_img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        itinerary_name: "3 Days in Kerala",
        tour_highlights: "Day 1: Explore Kochi and enjoy a Kathakali performance. Day 2: Experience the backwaters of Alleppey on a houseboat. Day 3: Relax on the beach in Kovalam.",
        days:  [{"images": "https://plus.unsplash.com/premium_photo-1680127402006-3a21c93da392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", "description": "Day 1: Nainital\n\nExplore the beautiful hill town of Nainital. Enjoy the breathtaking views of the lake and surrounding mountains. Go shopping at the local market or take a stroll in the nearby park.\n\n"}, {"images": "https://plus.unsplash.com/premium_photo-1680127402006-3a21c93da392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", "description": "Day 2: Tiger's Nest Cave\n\nTrek up to the Tiger's Nest Cave, an ancient cave temple located high up in the Garhwal Himalayas. Enjoy the serenity and breathtaking views along the way.\n\n"}, {"images": "https://plus.unsplash.com/premium_photo-1680127402006-3a21c93da392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", "description": "Day 3: Rishikesh\n\nSpend the day in Rishikesh, the 'yoga capital of the world'. Visit the holy Ganges River and explore the ashrams and temples.\n\n"}, {"images": "https://plus.unsplash.com/premium_photo-1680127402006-3a21c93da392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", "description": "Day 4: Rafting\n\nGo on a white water rafting adventure in Rishikesh. Enjoy the thrilling rapids and stunning views of the Himalayas.\n\n"}, {"images": "https://plus.unsplash.com/premium_photo-1680127402006-3a21c93da392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", "description": "Day 5: Jim Corbett National Park\n\nVisit the Jim Corbett National Park and spot some of India's famous wildlife. Go for a jungle safari and explore the enchanting forests.\n\n"}],
        places_to_visit: "Kochi, Alleppey, Kovalam",
        accomodation_arrangements: "Stay in a traditional houseboat in Alleppey.",
        travel_arrangements: "Transportation provided for all days.",
        inclusions: "Accommodation, transportation, meals as per itinerary.",
        exclusions: "Flights, personal expenses.",
        terms_and_conditions:"Naggar",
        cancellations_policy:"Naggar",
        things_to_carry:"Naggar",
        tour_rates:"Naggar",
        start_dates: [],
        number_of_days:0,
        extra_sections: [],
        places_to_visit_img: [{"images": ["https://plus.unsplash.com/premium_photo-1680127402006-3a21c93da392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80","https://plus.unsplash.com/premium_photo-1680127402006-3a21c93da392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80","https://plus.unsplash.com/premium_photo-1680127402006-3a21c93da392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80","https://plus.unsplash.com/premium_photo-1680127402006-3a21c93da392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"]}],
        accomodation_arrangements_img: [{"images": ["https://plus.unsplash.com/premium_photo-1680127402006-3a21c93da392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80","https://plus.unsplash.com/premium_photo-1680127402006-3a21c93da392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80","https://plus.unsplash.com/premium_photo-1680127402006-3a21c93da392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80","https://plus.unsplash.com/premium_photo-1680127402006-3a21c93da392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"]}],
        travel_arrangements_img:'download.jpeg',
        user_mobile_number: "",
        user_name: "",
        payment_link:"",
        inclusions_headers: "",
        exclusions_headers: ""
      },
    },
    mutations:{
      itinerary_preview_update(state,itinerary){
        state.itinerary_preview = itinerary;
      },
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
      number_of_days_update(state, number_of_days){
        state.itinerary_preview.number_of_days=number_of_days;
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
      },
      tour_highlights_update(state,val){
        state.itinerary_preview.tour_highlights = val
      },
      user_logged_in_update(state,val){
        state.user_logged_in = val
      },
      is_agent_update(state,val){
        state.is_agent = val
      },
      places_to_visit_1_img_update(state,val){
        state.itinerary_preview.places_to_visit_img[0].images[0] = val
      },
      places_to_visit_2_img_update(state,val){
        state.itinerary_preview.places_to_visit_img[0].images[1] = val
      },
      places_to_visit_3_img_update(state,val){
        state.itinerary_preview.places_to_visit_img[0].images[2] = val
      },
      places_to_visit_4_img_update(state,val){
        state.itinerary_preview.places_to_visit_img[0].images[3] = val
      },
      accomodation_arrangements_1_img_update(state,val) {
        state.itinerary_preview.accomodation_arrangements_img[0].images[0] = val
      },
      accomodation_arrangements_2_img_update(state,val) {
        state.itinerary_preview.accomodation_arrangements_img[0].images[1] = val
      },
      accomodation_arrangements_3_img_update(state,val) {
        state.itinerary_preview.accomodation_arrangements_img[0].images[2] = val
      },
      accomodation_arrangements_4_img_update(state,val) {
        state.itinerary_preview.accomodation_arrangements_img[0].images[3] = val
      },
      inclusions_headers_update(state,val) {
        state.itinerary_preview.inclusions_headers = val;
      },
      exclusions_headers_update(state,val) {
        state.itinerary_preview.exclusions_headers = val;
      },
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
