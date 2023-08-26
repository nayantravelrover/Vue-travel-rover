<template>
  <LoginPage v-if="this.$store.state.user_logged_in === false" />
  <RegisterPage v-if="this.$store.state.user_logged_in === false" />
  <div>
    <q-layout view="lHh Lpr lFf">
      <q-header class="base-header q-pa-md">
        <q-toolbar class="base-header-toolbar">
          <q-toolbar-title class="row item-center">
            <img src="../assets/logo.svg" />
          </q-toolbar-title>
          <q-btn flat rounded class="gt-sm" label="Home" @click="scroll('home')" />
          <q-btn flat rounded class="gt-sm" label="About Us" @click="scroll('why_choose_us')" />
          <q-btn flat rounded class="gt-sm" label="Testimonials" @click="scroll('testimonials')" />
          <q-btn flat rounded class="gt-sm" label="Contact Us" @click="scroll('contact_us')" />
          <q-btn flat rounded aria-label="Menu">
            <img src="../assets/icons/account_circle.svg" />
            <img width="24" height="24" src="../assets/icons/expand_more.svg" />
            <q-menu class="menu-options">
              <q-list>
                <div v-if="this.$store.state.user_logged_in">
                  <q-btn align="left" noCaps flat label="Profile" @click="go_to_profile"
                    v-if="this.$store.state.is_agent === false" />
                  <q-btn align="left" noCaps flat label="Itineraries" v-if="this.$store.state.is_agent === true"
                    @click="create_itinerary" />
                </div>
                <div>
                  <q-btn align="left" noCaps flat label="Logout" v-if="this.$store.state.user_logged_in"
                    @click="logout" />
                </div>
              </q-list>
            </q-menu>
          </q-btn>
        </q-toolbar>
      </q-header>
      <q-page class="base-page">
        <router-view/>
      </q-page>
    </q-layout>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { matAccountCircle } from "@quasar/extras/material-icons";
import { useQuasar, Notify } from 'quasar'
import RegisterPage from "src/pages/RegisterPage.vue"
import LoginPage from "src/pages/LoginPage2.vue";
import {
  check_if_access_token_is_valid,
  check_if_refresh_token_is_valid
} from '../common/api_calls.js'

let $q
export default defineComponent({
  created() {
    this.matAccountCircle = matAccountCircle;
    const self = this;
    self.$store.commit('state_signup_modal', true);
  },
  name: "MainLayout",
  plugins: { Notify },
  components: {
    RegisterPage,
    LoginPage,
  },
  mounted() {
    check_if_access_token_is_valid().then(response => {
      if (response["data"]["type_of_user"] == "agent") {
        this.$store.commit('is_agent_update', true)
        console.log(this.$store.state.is_agent)
      }
      this.$store.commit('user_logged_in_update', true)
    }).catch(err => {
      console.log(err)
      check_if_refresh_token_is_valid().then(response => {
        var access_token = response["data"]["access"];
        window.localStorage.setItem("travel_rover_access", access_token);
        this.$store.commit('user_logged_in_update', true)
      }).catch(err => {
        this.$store.commit('user_logged_in_update', false)
        console.log(err);
      });
    });
    $q = useQuasar()
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
      console.log("call");
    };
    return {
      leftDrawerOpen,
      toggleLeftDrawer,
    };
  },
  methods: {
    logout() {
      window.localStorage.removeItem("travel_rover_access");
      window.localStorage.removeItem("travel_rover_refresh_token");
      this.$store.commit('user_logged_in_update', false)
      $q.notify({
        type: 'negative',
        message: 'Successfully Logged Out',
        position: 'top'
      })
    },
    scroll(id) {
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: 'smooth' });
    },
    go_to_profile() {
      this.$router.push({
        path: '/profilepageweb/',
        name: 'ProfilePageWeb'
      })
    },
    create_itinerary() {
      this.$router.push({
        path: '/itinerarybuilder/',
        name: 'ItineraryBuilder'
      })
    }
  }
});
</script>


<style src="../assets/css/base.css"></style>
