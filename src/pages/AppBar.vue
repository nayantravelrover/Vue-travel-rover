<template>
    <div>
        <q-toolbar style="background-color: rgba(0,0,0, 0.4);border-radius: 29px;">
            <q-toolbar-title class="q-pa-md row item-center">
                <img src="../assets/logo.svg" style="max-width: 200px;cursor: pointer;" @click="go_to_home"/>
            </q-toolbar-title>
            <q-btn flat dense class="q-ml-md" label="Home" style="font-family: Poppins;color:white;" @click="go_to_home"/>
            <q-btn flat dense round class="q-ml-md" :icon="matAccountCircle" aria-label="Menu" color="white">
                <q-menu>
                    <q-list>
                        <!-- <q-item clickable v-close-popup>
                                    <q-item-section>Login</q-item-section>
                                  </q-item> -->
                        <LoginPage2 v-if="this.$store.state.user_logged_in===false"/>
                          <div class="q-pa-sm" v-if="this.$store.state.user_logged_in===false">
                            <RegisterPage/>
                          </div>
                          <div>
                          <div>
                            <q-btn label="Profile" icon="account_circle" color="primary" flat rounded style="margin-top:3px; width: 141px; margin: 4px;" v-if="this.$store.state.user_logged_in" @click="go_to_profile" />
                          </div>
                          <div class="q-pa-xs">
                          <q-btn label="Logout" color="primary" icon="logout" flat rounded style="width: 100%;" v-if="this.$store.state.user_logged_in" @click="logout"/>
                          </div>
                          </div>
            
            
                        <!-- <q-drawer v-if="$q.platform.is.mobile"
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
                            </q-drawer> -->
                    </q-list>
                </q-menu>
            </q-btn>
        </q-toolbar>
    </div>
</template>
<script>

import LoginPage2 from './LoginPage2.vue'
import RegisterPage from './RegisterPage.vue'
import { matAccountCircle } from "@quasar/extras/material-icons";
import { check_if_access_token_is_valid, check_if_refresh_token_is_valid} from '../common/api_calls.js'
import { useQuasar,Notify } from 'quasar'
let $q

// const linksList = [
//   {
//     title: "Home",
//     icon: "home",
//     link: "/#/",
//   },
//   // {
//   //   title: "My Profile",
  
//   //   icon: "account_circle",
//   //   link: "/src/pages/ProfilePage2.vue",
//   // },
//   {
//     title: "Liked Itineraries",
//     icon: "info",
//     link: "/#/likeditinerary",
//   },
//   {
//     title: "Viewed Itineraries",
//     icon: "event",
//     link: "/#/vieweditinerary",
//   },
//   {
//     title: "Custom Itineraries",
//     icon: "account_balance_wallet",
//     link: "/#/customitinerary",
//   },
// ];

export default {
    mounted(){
        check_if_access_token_is_valid().then(response=>{
          this.$store.commit('user_logged_in_update', true)
        }).catch(err =>{
              console.log(err)
              check_if_refresh_token_is_valid().then(response => {
                var access_token = response["data"]["access"];
                window.localStorage.setItem("travel_rover_access", access_token);
                this.$store.commit('user_logged_in_update', true)
              }).catch(err =>{
                this.$store.commit('user_logged_in_update', false)
                console.log(err);
              });
        });
        $q = useQuasar();
    },
    created() {
        this.matAccountCircle = matAccountCircle;
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

        go_to_home(){
          this.$router.push({
            path: '',
            name:'home',
            })
            },

        go_to_profile(){
          this.$router.push({
            path: '/profilepageweb/',
            name:'ProfilePageWeb'
          })
          },
    },
    components: { LoginPage2, RegisterPage }
}
</script>