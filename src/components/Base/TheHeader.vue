<script setup>
import logo from "../../assets/icons/logo.svg";
import default_profile from "../../assets/icons/account_circle.svg";
import expand_more from "../../assets/icons/expand_more.svg";
import { useQuasar } from "quasar";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const $q = useQuasar();
const store = useStore();
const router = useRouter();

function logout() {
  window.localStorage.removeItem("travel_rover_access");
  window.localStorage.removeItem("travel_rover_refresh_token");
  store.commit("user_logged_in_update", false);
  $q.notify({
    type: "negative",
    message: "Successfully Logged Out",
    position: "top",
  });
}

function scrollTo(id) {
  const element = document.getElementById(id);
  try {
    element.scrollIntoView({ behavior: "smooth" });
  } catch (error) {
    console.log(error);
  }
}

function goToProfile() {
  router.push({
    path: "/profilepageweb/",
    name: "ProfilePageWeb",
  });
}

function createItinerary() {
  router.push({
    path: "/itinerarybuilder/",
    name: "ItineraryBuilder",
  });
}
</script>

<template>
  <header class="base-header row justify-center q-pa-md">
    <q-toolbar class="base-header-toolbar">
      <q-toolbar-title class="row item-center">
        <img :src="logo" />
      </q-toolbar-title>
      <q-btn
        flat
        rounded
        class="gt-sm"
        label="Home"
        @click="scrollTo('home')"
      />
      <q-btn
        flat
        rounded
        class="gt-sm"
        label="About Us"
        @click="scrollTo('why_choose_us')"
      />
      <q-btn
        flat
        rounded
        class="gt-sm"
        label="Testimonials"
        @click="scrollTo('testimonials')"
      />
      <q-btn
        flat
        rounded
        class="gt-sm"
        label="Contact Us"
        @click="scrollTo('contact_us')"
      />
      <q-btn flat rounded aria-label="Menu">
        <img :src="default_profile" />
        <img width="24" height="24" :src="expand_more" />
        <q-menu class="menu-options">
          <q-list>
            <div v-if="store.state.user_logged_in">
              <q-btn
                align="left"
                noCaps
                flat
                label="Profile"
                @click="goToProfile"
                v-if="store.state.is_agent === false"
              />
              <q-btn
                align="left"
                noCaps
                flat
                label="Itineraries"
                v-if="store.state.is_agent === true"
                @click="createItinerary"
              />
              <q-btn
                align="left"
                noCaps
                flat
                label="Logout"
                v-if="store.state.user_logged_in"
                @click="logout"
              />
            </div>
            <div v-else>
              <q-btn align="left" noCaps flat label="Register" />
              <q-btn align="left" noCaps flat label="Login" />
            </div>
          </q-list>
        </q-menu>
      </q-btn>
    </q-toolbar>
  </header>
</template>

<style scoped>
.base-header {
  position: relative;
  /* background-color: var(--primary); */
  /* background-color: transparent; */
}

.base-header-toolbar {
  padding: 1.5em 5em;
}

.base-header button {
  text-transform: capitalize;
  color: var(--white);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.base-header button .q-focus-helper {
  background: unset !important;
}

.base-header img {
  height: 2em;
  cursor: pointer;
}

.menu-options {
  border-radius: 10px;
  border: 1px solid #e6e7ea;
  background: #fff;
  box-shadow: 0px 4px 12px 0px rgba(153, 153, 153, 0.1);
  position: relative;
}

.menu-options button {
  color: #343e59;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: auto;
  text-align: left;
  display: block;
}

.menu-options .q-focus-helper {
  background: unset !important;
}

@media all and (max-width: 600px) {
  .base-header-toolbar {
    padding: 1.5em 1em;
  }

  .base-header img {
    height: 1.5em;
  }
}
</style>
