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
      user_logged_in: false,
      is_agent: false,
      itinerary_preview: {
        place_name: "Goa",
        place_description: "Kerala, also known as 'God's Own Country', is a tropical paradise located in South India. It is known for its palm-lined beaches, serene backwaters, lush green hills, and traditional culture.",
        place_img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        itinerary_name: "3 Days in Kerala",
        tour_highlights: "Day 1: Explore Kochi and enjoy a Kathakali performance. Day 2: Experience the backwaters of Alleppey on a houseboat. Day 3: Relax on the beach in Kovalam.",
        days: [
        {
        description: "Day 1: Kochi\n\nExplore the vibrant city of Kochi. Visit the iconic Chinese fishing nets, the historic Jewish quarter, and the Dutch Palace. In the evening, watch a traditional Kathakali dance performance.\n\n",
        images: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"        },
        {
        description: "Day 2: Alleppey\n\nExperience the serene backwaters of Alleppey on a traditional houseboat. Enjoy the scenic views, delicious local food, and peaceful atmosphere.\n\n",
        images: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
        },
        {
        description: "Day 3: Kovalam\n\nRelax on the golden sands of Kovalam beach. Take a dip in the clear waters, indulge in some water sports, or simply soak up the sun.\n\n",
        images: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
        }
        ],
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
        places_to_visit_img: [{images: ["","","",""]}],
        accomodation_arrangements_img: [{images: ["","","",""]}],
        travel_arrangements_img:'download.jpeg',
        user_mobile_number: "",
        user_name: ""

        // 'extra_sections': [], 
        // 'user_mobile_number': '', 
        // 'travel_arrangements_img': 'https://images.unsplash.com/photo-1580997594754-a6d2c6d859d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 
        // 'terms_and_conditions': 'Naggar', 
        // 'cancellations_policy': 
        // 'Naggar', 
        // 'start_dates': [], 
        // 'accomodation_arrangements': 'Stay in beach front resorts or relax in a willage house.', 
        // 'place_name': 'Goa', 
        // 'accomodation_arrangements_img': [{'images': ['https://images.unsplash.com/photo-1520338736671-d3c82f3e3ffc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1541549010951-3d3e36e3bc1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1587880072233-d5e8e80d9b75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1563570395038-3f3eb7d202f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80']}], 
        // 'places_to_visit_img': [{'images': ['https://images.unsplash.com/photo-1520798334608-8cfbf3f2db2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1586142619004-3c3d634a7ede?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1564902514602-f3f3d3d8ac50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1578517875875-29537a7c7bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80']}], 
        // 'places_to_visit': 'North Goa, Old Goa, Dudhsagar Falls, Baga/Calangute', 
        // 'user_name': '', 
        // 'tour_highlights': 'Day 1: Explore the beaches of North Goa. Day 2: Visit Old Goa and explore its churches and temples. Day 3: Take a daytrip to Dudhsagar Falls. Day 4: Shop, eat and explore the lively nightlife of Goa.', 
        // 'inclusions': 'Accommodation, transportation, meals as per itinerary.', 
        // 'tour_rates': 'Naggar', 
        // 'things_to_carry': 'Sun protection, casual clothing, comfortable footwear, and swimwear.', 
        // 'place_description': "Goa is India's smallest state by area and the fourth smallest by population. Famous for its beaches, places of worship, and world heritage architecture, it is a popular tourist destination.", 
        // 'days': [
        //   { 'images': 'https://images.unsplash.com/photo-1520798334608-8cfbf3f2db2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 
        //     'description': 'Day 1: North Goa\n\nExplore the exquisite beaches of North Goa. Enjoy the sun, sand, and water activities like parasailing, snorkeling, and banana boat rides.\n\n'}, 
        //     {'images': 'https://images.unsplash.com/photo-1586142619004-3c3d634a7ede?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 
        //     'description': 'Day 2: Old Goa \n\nVisit the churches and temples of Old Goa. Marvel at the Portuguese architecture and get a glimpse of Goan history and culture.\n\n'}, 
        //     {'images': 'https://images.unsplash.com/photo-1564902514602-f3f3d3d8ac50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 
        //     'description': 'Day 3: Dudhsagar Falls\n\nTake a daytrip to the Dudhsagar Falls. Enjoy the majestic view of the waterfall from the top of the trek, or take a dip in the natural pools at the bottom of the falls.\n\n'}, 
        //     {'images': 'https://images.unsplash.com/photo-1578517875875-29537a7c7bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 
        //     'description': 'Day 4: Baga/Calangute\n\nExplore the vibrant nightlife of Goa. Visit Baga and Calangute beach for some shopping, or explore the local cuisine in the quaint restaurants.\n\n'}], 
        // 'place_img': 'https://images.unsplash.com/photo-1587613779726-79163983b8e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 
        // 'travel_arrangements': 'Transportation provided for all days.', 
        // 'itinerary_name': '4 Days in Goa', 
        // 'number_of_days': 0, 
        // 'exclusions': 'Flights, personal expenses.'
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
