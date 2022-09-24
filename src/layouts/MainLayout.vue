<template>
  <q-layout view="lHh Lpr lFf" class="main">
    <q-header>
      <q-toolbar>
        <q-btn
          v-show="isMobile"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="q-pa-md row item-center">
          <img src="../assets/Logo.png" />
        </q-toolbar-title>

        <q-btn flat round dense class="q-ml-md md" label="Home" />
        <q-btn flat round dense class="q-ml-md md" label="AboutUs" />
        <q-btn flat round dense class="q-ml-md md" label="Testinomial" />
        <q-btn flat round dense class="q-ml-md md" label="ContactUs" />
        <q-btn
          flat
          dense
          round
          class="q-ml-md md"
          :icon="matAccountCircle"
          aria-label="Menu"
        >
          <q-menu>
            <q-list style="min-width: 100px,max-height:50px">
              <!-- <q-item clickable v-close-popup>
                <q-item-section>Login</q-item-section>
              </q-item> -->
              <Login/>

              <q-item clickable v-close-popup>
                <q-item-section>Signup</q-item-section>
              </q-item>
            </q-list></q-menu
          ></q-btn
        >
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      v-if="isMobile"
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
      <router-view :isMobile="isMobile" />
    </q-page>
  </q-layout>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { matAccountCircle } from "@quasar/extras/material-icons";
import Login from "src/pages/Login.vue";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
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
  },
  name: "MainLayout",
  components: {
    EssentialLink,
    Login
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
});
</script>
