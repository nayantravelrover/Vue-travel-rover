<script setup>
import { useQuasar } from "quasar";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { ref, reactive, onMounted } from "vue";
import { places, load_place_itinerary_data,check_if_access_token_is_valid, create_prompt } from "src/common/api_calls";

import TheBase from "../components/Base/TheBase.vue";
import DestinationSlide from "../components/Destination/DestinationSlide.vue";
import DestinationGuide from "../components/Destination/DestinationGuide.vue";
import DestinationTopSelling from "../components/Destination/DestinationTopSelling.vue";
import DestinationCompare from "../components/Destination/DestinationCompare.vue";
import DestinationFAQ from "../components/Destination/DestinationFAQ.vue";

const $q = useQuasar();
const store = useStore();
const router = useRouter();
const route = useRoute();

const place = route.query.place.trim();
const date = route.query.date.trim();
const place_data = reactive({
  name: "",
  one_liner: "",
  description: [],
  images: [],
  faqs: "",
  faqs_answer: "",
});
const itineraries_list = reactive([]);
const itineraries_compare_list = ref([]);

places(place, date).then((response) => {
  const resp = JSON.parse(response.data.data)[0]["fields"];
  place_data.name = resp["name"];
  console.log(place_data.name);
  place_data.one_liner = resp["one_liner"];
  //place_data.description = resp["description"];
  //place_data.images = resp["images"].split("$$$");
  place_data.faqs = resp["faqs"].split("$$$");
  place_data.faqs_answer = resp["faqs_answer"].split("$$$");

  if (place_data.name == "Himachal Pradesh") {
    place_data.images = [
      "HP_01.jpeg",
      "HP_02.jpeg",
      "HP_03.jpeg",
      "HP_04.jpeg",
      "HP_05.jpeg",
      "HP_06.jpeg",
    ];
  } else if (place_data.name == "Goa") {
    place_data.images = [
      "GA_01.jpg",
      "GA_02.png",
      "GA_03.png",
      "GA_04.png",
      "GA_05.png",
      "GA_06.png",
    ];
  } else if (place_data.name == "Leh Ladakh") {
    place_data.images = [
      "LL_01.png",
      "LL_02.png",
      "LL_03.png",
      "LL_04.png",
      "LL_05.png",
      "LL_06.png",
    ];
  } else if (place_data.name == "Uttarakhand") {
    place_data.images = [
      "UK_01.png",
      "UK_02.png",
      "UK_03.png",
      "UK_04.png",
      "UK_05.png",
      "UK_06.png",
    ];
  } else if (place_data.name == "Kashmir") {
    place_data.images = [
      "JM_01.png",
      "JM_02.png",
      "JM_03.png",
      "JM_04.png",
      "JM_05.png",
      "JM_06.png",
    ];
  } else if (place_data.name == "Rajasthan") {
    place_data.images = [
      "RJ_01.png",
      "RJ_02.png",
      "RJ_03.png",
      "RJ_04.png",
      "RJ_05.png",
      "RJ_06.png",
    ];
  }

  place_data.description = [
      {
        name: `${place_data.name} Travel Guide`,
        data: `A relaxing journey to ${place_data.name} will enable you to appreciate the splendour of southern India. You may arrange a low-cost trip to India's stunning backwater state with Travel Rover. As ${place_data.name} is here to rejuvenate you, calm your inner mind. ${place_data.name} is situated in the southernmost portion of India, close to the Arabian Sea coast.<br><br>Keralites have a lovely way of living that is separate from the bustling and busy everyday routine. Travelers from all over the world have been drawn to it by its dramatic tropical landscape and sporadic rains.<br><br>Get ready to be padding onboard for one of the best adventures in a long time as we depart from the beaches, temples, cultural performances, and boathouses!`,
      },
      {
        name: `Things to do in ${place_data.name}`,
        data: `<ul><li><b>Boat House Stay:</b>  Not one ${place_data.name} tour Package exists without a stay at one of the famous tourist attractions - The Boat House.</li><li><b>Spice Tour:</b> Abundant and rich in flavours, ${place_data.name} provides one of the most delicate spices and also offers one of a kind Spice Tour Experience.</li><li><b>Treehouse Stay:</b> Home to a booming naturistic environment, these treehouses perched atop can provide a fantastic view from afar.</li><li><b>Bamboo Rafting:</b> Mesmerizing water bodies allows you to plunge right into various water sporting activities, especially Bamboo Rafting, which is famous here.</li><li><b>Elephant Rides:</b> Love elephants? Then you have arrived at the right place. ${place_data.name} Holiday Packages will never go without an elephant ride, and what more - you can also bathe and play with elephants!</li></ul>`,
      },
      {
        name: `What to see in ${place_data.name}?`,
        data: `<ul><li><b>Alleppey:</b> One of the finest destinations in ${place_data.name}, Alleppey offers various kinds of destination activities suitable from Boat Houses to Snake Boat Races. This place is sure to be your number one go-to spot!</li><li><b>Munnar:</b> Perched atop the hills, Munnar surrounds beautiful tea plantations and is dotted with mesmerizing waterfalls, lush greenery, and what not?</li><li><b>Kumarakom:</b> Famous for its backwater tourism, Kumarakom, along with its dancing palm trees and backwater ripples, also offers a spectacular bird sanctuary.</li><li><b>Cochin:</b> The Bustling city of ${place_data.name}, Cochin imbibes in itself a naturistic beauty paired with the intricacy of a booming metropolis. A ${place_data.name} Travel Guide should never miss this out!</li><li><b>Wayanad:</b> The travel through Wayand is in itself a beauty. The lush forestry gives a home to Asiatic Elephants, Tigers and many others, Wayand in a beautiful little village that in itself is serenity.</li></ul>`,
      },
      {
        name: `What can you eat in ${place_data.name}?`,
        data: `<ul><li><b>Karimeen Polichadhu (Fish steamed in Banana Leaves):</b> A complete fish steamed wrapped around in a banana leaf topped with all the best spices, one could not ask for a better Sea Cuisine.</li><li><b>Puttu with kadala curry:</b> None shall pass ${place_data.name} without tasting the ever famous Puttu with Kadala Curry. This is a show stopper in a ${place_data.name} Tour unique to this place.</li><li><b>Malabar Parotta with Mutton Curry:</b> The long, puffy maida Parotta paired with one of the best Mutton Curries in the world, what more could one ask for?</li><li><b>Peralada Paayasam:</b> A unique dessert in ${place_data.name}, this Rice Flake dessert is mandatory in every ${place_data.name} Feast.</li><li><b>Anupam with stew:</b> Fluffy rice pancake paired with a nice chicken or vegetable stew; this is a mouthwatering fulfilling dish famous in ${place_data.name}.</li></ul>`,
      },
      {
        name: `What can you eat in ${place_data.name}?`,
        data: `One can visit ${place_data.name} during September - March as during these seasons, one can experience a cool climate, significantly less rainfall, and more sunny days. For a calm and pleasant environment, it is advisable to visit during October to February to enjoy everything peacefully. A complete will include all the various places one can visit during those times.`,
      },
    ];

});

load_place_itinerary_data(place, date).then((response) => {
  let data = JSON.parse(response.data.data);
  data.forEach((items) => {
    console.log(JSON.stringify(items));
    let item = items.fields
    itineraries_list.push({
      itinerary_pk: items.pk,
      itinerary_name: item.itinerary_name,
      place_description: item.place_description,
      place_img: item.place_img,
      tour_highlights: item.tour_highlights,
      places_to_visit: item.places_to_visit,
      accomodation: item.accomodation_arrangements,
      arrangements: item.travel_arrangements,
      things_to_carry: item.things_to_carry,
      inclusions: item.inclusions,
      exclusions: item.exclusions,
      cancellations_policy: item.cancellations_policy,
      inclusions_headers: item.inclusions_headers,
      exclusions_headers: item.exclusions_headers,
      tour_rates: item.tour_rates,
      added_to_compare: false,
      heart_class: "heart" + items.pk
    });
  });
  // itineraries_compare_list.value = itineraries_list.slice(0, 3);
});


function create_gpt_prompt(query) {
  check_if_access_token_is_valid()
  var access_token = window.localStorage.getItem(
    "travel_rover_access"
  );
  create_prompt({ prompt: query }, access_token)
    .then((response) => {
      var pk_of_prompt = response["data"]["pk_of_prompt"];
  
      $q.notify({
        type: "positive",
        message: "Saved succesfully.",
        position: "top",
      });
      window.open(
        "/#/itinarybuilder?pk=-1&pk_of_prompt=" + pk_of_prompt,
        "_blank"
      );
    })
    .catch((err) => {
      $q.notify({
        type: "negative",
        message:
          "Some internal issues are going on, please try by reloading again",
        position: "top",
      });
    });
}

function add_to_compare(item) {
  if (itineraries_compare_list.value.length === 3) {
    $q.notify({
      type: "warning",
      message: "Can't add more then 3 items",
      position: "top",
    });
    return;
  }

  var result = itineraries_list.find(obj => {
    return obj.itinerary_pk === item.itinerary_pk
  })
  result.added_to_compare = true;
  itineraries_compare_list.value.push(result);
  if (itineraries_compare_list.value.length === 1) {
    $q.notify({
      type: "info",
      message: "Add one or more item to show comparison",
      position: "top",
    });
  }

}

function remove_from_compare(item) {
  var result = itineraries_list.find(obj => {
    return obj.itinerary_pk === item.itinerary_pk
  })
  result.added_to_compare = false;
  itineraries_compare_list.value = itineraries_compare_list.value.filter(function (option) {
    return option.itinerary_pk !== result.itinerary_pk
  })
}

onMounted(() => {
  try {
    document.querySelector(".base-header").style.backgroundColor = "transparent"
  } catch (error) {}
});
</script>

<template>
  <the-base>
    <destination-slide :name="place_data.name" :one_liner="place_data.one_liner"
      :images="place_data.images"></destination-slide>
    <destination-guide :name="place_data.name" :description="place_data.description"></destination-guide>
    <destination-top-selling @add-to-compare="add_to_compare" :itineraries="itineraries_list"></destination-top-selling>
    <destination-compare @remove-from-compare="remove_from_compare" v-show="itineraries_compare_list.length > 0"
      :itineraries="itineraries_compare_list"></destination-compare>
    <destination-f-a-q :name="place_data.name" @create_gpt_prompt="create_gpt_prompt" :faqs="place_data.faqs"
      :faqs_ans="place_data.faqs_answer"></destination-f-a-q>
  </the-base>
</template>

<style>
.base-header {
  background: transparent;
  z-index: 1;
}
</style>
