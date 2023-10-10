<script setup>
import { ref, onMounted, defineProps } from "vue";
import Typed from "typed.js";
import { get_category_itinerary } from "src/common/api_calls";
import { useQuasar } from "quasar";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

defineProps(["header"]);

const $q = useQuasar();
const store = useStore();
const router = useRouter();
const where_to = ref(null);
const category = ref(null);
const sub_title = ref("");

function get_default_date() {
  return (
    new Date().toLocaleString("default", { year: "numeric" }) +
    "-" +
    new Date().toLocaleString("default", { month: "2-digit" }) +
    "-" +
    new Date().toLocaleString("default", { day: "2-digit" })
  );
}

function find_itinerary() {
  console.log(where_to.value, category.value);
  if (!where_to.value && !category.value) {
    return;
  }
  if (where_to.value == "Others" || category.value == "Others") {
    window.open(
      "https://api.whatsapp.com/send?phone=7977790353&text=Hello! I'm looking for assistance in planning my upcoming trip. Would you be able to help me create a customised itinerary?",
      "_blank"
    );
  } else if (category.value == "" || category.value == null) {
    if (where_to.value != "" || where_to.value != null) {
      router.push({
        path: "/destination/",
        name: "DestinationPage",
        query: { place: where_to.value, date: get_default_date() },
      });
    } else {
      $q.notify({
        type: "negative",
        message: "Kindly select a category",
        position: "top",
      });
    }
  } else {
    get_category_itinerary({
      category: category.value,
      place_name: where_to.value,
    })
      .then((response) => {
        let itinerary = [];
        itinerary = JSON.parse(response.data.data)[0]["fields"];
        console.log(itinerary);
        store.commit("itinerary_preview_update", itinerary);
        store.commit(
          "itinerary_pk_update",
          JSON.parse(response.data.data)[0]["pk"]
        );
      })
      .catch((err) => {
        $q.notify({
          type: "negative",
          message: "Some internal issues are going on",
          position: "top",
        });
      });
  }
}

onMounted(() => {
  sub_title.value = new Typed("#typing-element", {
    strings: ["Personalized Plans", "Expert Tips", "Tailored Experiences"],
    startDelay: 500,
    typeSpeed: 80,
    backSpeed: 30,
    backDelay: 700,
    shuffle: true,
    loop: true,
    loopCount: Infinity,
  });
});
</script>

<template>
  <!-- Main Page -->
  <div id="home" class="main-background-wrapper row justify-center q-pa-md">
    <div class="search-input-bar row items-center col-md-8 justify-center">
      <div class="search-input col-md-5 col-xs-12">
        <q-select
          v-model="where_to"
          :options="header.search_options"
          label="Where to ?"
        >
          <template v-slot:prepend>
            <q-icon name="place" />
          </template>
        </q-select>
      </div>
      <div class="search-input col-md-4 col-xs-12">
        <q-select
          v-model="category"
          :options="header.search_options_category"
          label="Category ?"
        >
          <template v-slot:prepend>
            <q-icon style="margin-left: 5px" name="category" />
          </template>
        </q-select>
      </div>
      <q-btn
        class="search-button row col-md-3"
        flat
        color=""
        text-color="white"
        icon="search"
        label="Search"
        @click="find_itinerary()"
      />
    </div>
    <div class="main-background row">
      <div class="col-md-6">
        <h1>
          {{ header.title }} <span id="typing-element">{{ sub_title }}</span>
        </h1>
        <h4>{{ header.discription }}</h4>
      </div>
      <div class="col-md-6 gt-sm">
        <q-img src="../../assets/travel.svg" />
      </div>
    </div>
  </div>
  <!-- Main Page Ends -->
</template>

<style scoped>
/* Search Bar Starts */
.search-input-bar {
  border-radius: 10px;
  overflow: hidden;
  margin-top: 2em;
}

.search-input {
  background: white;
  border-right: 1px solid #1b1f2238;
}

.search-input i {
  padding: 0px 10px;
}

.search-button {
  background: #003486 !important;
  border-radius: 0px;
  height: 4em !important;
  border: 1px solid #002560;
  outline: 0 !important;
  border-style: none;
  font-style: normal;
  font-weight: 600;
}

/* Search Bar Ends */

/* Main Background Starts */
.typewrite > .wrap {
  border-right: 0.08em solid #fff;
}

.main-background-wrapper {
  background-image: url("../../assets/Background.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  min-height: auto;
}

.main-background {
  padding: 0 5em;
  width: 100%;
}

.main-background h1 {
  color: #fff;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 1em;
}

#typing-element {
  color: #ffc106;
}

.main-background h4 {
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-right: 50px;
  margin-bottom: 0px;
}

/* Main Background Ends */

@media all and (max-width: 600px) {
  .search-input-bar {
    box-sizing: content-box;
    padding: 10px;
    background-color: white;
    margin-top: 0px;
  }

  .search-input {
    border-right: none;
  }

  .search-button {
    width: 100%;
    height: unset !important;
  }

  .main-background-wrapper {
    background-image: unset;
    background-color: #003fa3;
    padding: 0px 30px;
  }

  .main-background {
    padding: 1em 0em;
  }

  .main-background > div {
    margin: -8px -30px;
    padding: 15px 30px;
    height: 19em;
    position: relative;
  }

  .main-background h1 {
    color: white;
    margin-top: unset;
    padding-right: unset;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: unset;
  }

  .main-background h4 {
    color: whitesmoke;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: unset;
    padding-right: unset;
    letter-spacing: unset;
    position: absolute;
    bottom: 1.5em;
    width: 86%;
  }
}
</style>
