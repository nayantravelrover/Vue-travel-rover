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

        <q-btn flat round dense class="q-ml-md gt-sm" label="Home" style="font-family: Poppins;"/>
        <q-btn flat round dense class="q-ml-md gt-sm" label="AboutUs" style="font-family: Poppins;"/>
        <q-btn flat round dense class="q-ml-md gt-sm" label="Testinomial" style="font-family: Poppins;"/>
        <q-btn flat round dense class="q-ml-md gt-sm" label="ContactUs" style="font-family: Poppins;"/>
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


              <q-btn label="Profile" color="primary"  style="margin-top:3px; width: 91px; margin: 4px;" v-if="this.$store.state.user_logged_in" />
              <div class="q-pa-xs">
              <q-btn label="Logout" color="primary"  style="width: 100%;" v-if="this.$store.state.user_logged_in" @click="logout"/>
               </div>


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
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
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
//import RegisterPage from "src/pages/RegisterPage.vue";
//import LoginPage from "src/pages/LoginPage.vue";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "/src/pages/MainHome.vue",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  created() {
    this.matAccountCircle = matAccountCircle;
    console.log(this.$store.state.user_logged_in)
  },
  name: "MainLayout",
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
      this.$store.commit('user_logged_in_update', true)
    }).catch(err =>{
          console.log(err)
          check_if_refresh_token_is_valid().then(response => {
            var access_token = response["data"]["access"];
            console.log(access_token)
            window.sessionStorage.setItem("travel_rover_access", access_token);
            this.$store.commit('user_logged_in_update', true)
            console.log(response);
          }).catch(err =>{
            this.$store.commit('user_logged_in_update', false)
            console.log(err);
          });
    });
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
      window.sessionStorage.removeItem("travel_rover_access");
      window.sessionStorage.removeItem("travel_rover_refresh_token");
      this.$store.commit('user_logged_in_update', false)
      console.log("here in logout")
    }
  }
});
</script>
