<template>
  <div>
  <q-layout view="lHh Lpr lFf">
    <q-header>
    
      <q-toolbar>
        <q-btn v-if="$q.platform.is.mobile"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="q-pa-md row item-center">
          <img src="../assets/logo.svg" />
        </q-toolbar-title>

        <q-btn flat  dense class="q-ml-md gt-sm" label="Home" style="font-family: Poppins;" @click="scroll('home')"/>
      <q-btn flat  dense class="q-ml-md gt-sm" label="About Us" style="font-family: Poppins;" @click="scroll('why_choose_us')" />
        <q-btn flat  dense class="q-ml-md gt-sm" label="Testinomial" style="font-family: Poppins;"  @click="scroll('testimonials')" />
        <q-btn flat  dense class="q-ml-md gt-sm" label="ContactUs" style="font-family: Poppins;" @click="scroll('contact_us')" />
        <q-btn
          flat
          dense
          round
          class="q-ml-md"
          :icon="matAccountCircle"
          aria-label="Menu">
          <q-menu>
            <q-list style="min-width: 100px;max-height:89px">
              <!-- <q-item clickable v-close-popup>
                <q-item-section>Login</q-item-section>
              </q-item> -->
              
              <LoginPage2 v-if="this.$store.state.user_logged_in===false"/>
              <div class="q-pa-xs" v-if="this.$store.state.user_logged_in===false">
                <RegisterPage/>
              </div>
              <div v-if="this.$store.state.user_logged_in">
              <q-btn label="Profile" color="primary"  style="margin-top:3px; width: 91px; margin: 4px;"  @click="go_to_profile" v-if="this.$store.state.is_agent === false" />
              <q-btn label="Itineraries" color="primary" style="margin-top:3px; width: 91px; margin: 4px;" v-if="this.$store.state.is_agent === true" @click="create_itinerary"/>
            </div>
              <div class="q-pa-xs">
              <q-btn label="Logout" color="primary"  style="width: 100%;" v-if="this.$store.state.user_logged_in" @click="logout"/>
               </div>

               <!-- <div class="q-pa-xs">
               
               </div>
 -->
              <q-item
              clickable
              v-close-popup>
              </q-item>
            </q-list>
          </q-menu>
          </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-if="$q.platform.is.mobile"
      v-model="leftDrawerOpen"
      :breakpoint="500"
      show-if-above
      bordered
    >
      <q-list v-if="this.$store.state.user_logged_in===false">
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          :key="Home"
          v-bind="this.essentialLinks[0]"
        />
      </q-list>
      <q-list v-if="this.$store.state.user_logged_in===true">
        <q-item-label header> Navigate </q-item-label>

        <EssentialLink
          v-for="link in this.essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page>
      <router-view
      :isMobile="isMobile" />
    </q-page>
  </q-layout>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { matAccountCircle } from "@quasar/extras/material-icons";
import RegisterPage from "src/pages/RegisterPage.vue"
import LoginPage2 from "src/pages/LoginPage2.vue";
import { check_if_access_token_is_valid, check_if_refresh_token_is_valid} from '../common/api_calls.js'
import { useQuasar,Notify } from 'quasar'

import ProfilePageWeb from "../pages/ProfilePageWeb.vue";

let $q
//import RegisterPage from "src/pages/RegisterPage.vue";
//import LoginPage from "src/pages/LoginPage.vue";




const linksList = [
  {
    title: "Home",
    icon: "home",
    link: "/src/pages/MainHome.vue",
  },
  // {
  //   title: "My Profile",
  
  //   icon: "account_circle",
  //   link: "/src/pages/ProfilePage2.vue",
  // },
  {
    title: "Liked Itineraries",
    icon: "info",
    link: "/#/likeditinerary",
  },
  {
    title: "Viewed Itineraries",
    icon: "event",
    link: "/#/vieweditinerary",
  },
  {
    title: "Custom Itineraries",
    icon: "account_balance_wallet",
    link: "/#/customitinerary",
  },
];

export default defineComponent({
  created() {
    this.matAccountCircle = matAccountCircle;
    console.log(this.$store.state.user_logged_in)
  },
  name: "MainLayout",
  plugins: { Notify },
  components: {
    EssentialLink,
    // Login,
    //LoginPage,
    RegisterPage,
    LoginPage2,
  },
  mounted(){
    check_if_access_token_is_valid().then(response=>{
      console.log(response)
      console.log(this.$store.state.is_agent)
      if(response["data"]["type_of_user"] == "agent"){
        this.$store.commit('is_agent_update', true)
        console.log(this.$store.state.is_agent)
      }
      this.$store.commit('user_logged_in_update', true)
    }).catch(err =>{
          console.log(err)
          check_if_refresh_token_is_valid().then(response => {
            var access_token = response["data"]["access"];
            console.log(access_token)
            window.localStorage.setItem("travel_rover_access", access_token);
            this.$store.commit('user_logged_in_update', true)
            console.log(response);
          }).catch(err =>{
            this.$store.commit('user_logged_in_update', false)
            console.log(err);
          });
    });
    $q = useQuasar()
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const isMobile = ref(false);

    window.onresize = () => {
      if (window.innerWidth <= 760) {
        isMobile.value = true;
      } else {
        isMobile.value = false;
      }
    };
    window.onload = () => {
      if (window.innerWidth <= 760) {
        isMobile.value = true;
      } else {
        isMobile.value = false;
      }
    };
    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
      console.log("call");
    };
    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      isMobile,
      toggleLeftDrawer,
    };
  },
  methods:{
    logout(){
      window.localStorage.removeItem("travel_rover_access");
      window.localStorage.removeItem("travel_rover_refresh_token");
      this.$store.commit('user_logged_in_update', false)
      console.log("here in logout")
      $q.notify({
              type: 'negative',
              message: 'Successfully Logged Out',
              position: 'top'
              })
    },
    scroll(id){
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: 'smooth' });
    },
    go_to_profile(){
      this.$router.push({
          path: '/profilepageweb/',
          name:'ProfilePageWeb'
        })
    },
    create_itinerary(){
      this.$router.push({
          path: '/itinerarybuilder/',
          name:'ItineraryBuilder'
        })
    }
  }
});
</script>
