<template>
    <div>
        <q-toolbar>
            <q-btn flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen"  style="color: black;" />
            
            <q-toolbar-title class="q-pa-md row item-center">
                <img src="../assets/logo.svg" style="max-width: 200px;"/>
            </q-toolbar-title>
            <q-btn flat dense round class="q-ml-md" :icon="matAccountCircle" aria-label="Menu" style="color: white;">
                <q-menu>
                    <q-list style="min-width: 100px;max-height:89px">
                        <!-- <q-item clickable v-close-popup>
                                    <q-item-section>Login</q-item-section>
                                  </q-item> -->
                        <LoginPage2 />
                        <div class="q-pa-xs">
                            <RegisterPage />
                        </div>
            
            
                        <q-item clickable v-close-popup>
                        </q-item>
                    </q-list>
                </q-menu>
            </q-btn>
        </q-toolbar>
    </div>
</template>
<script>
import { matAccountCircle } from "@quasar/extras/material-icons";
import { check_if_access_token_is_valid, check_if_refresh_token_is_valid} from '../common/api_calls.js'
import { useQuasar,Notify } from 'quasar'
export default {
    mounted(){
        check_if_access_token_is_valid().then(response=>{
          this.$store.commit('user_logged_in_update', true)
        }).catch(err =>{
              console.log(err)
              check_if_refresh_token_is_valid().then(response => {
                var access_token = response["data"]["access"];
                window.sessionStorage.setItem("travel_rover_access", access_token);
                this.$store.commit('user_logged_in_update', true)
              }).catch(err =>{
                this.$store.commit('user_logged_in_update', false)
                console.log(err);
              });
        });
    },
    created() {
        this.matAccountCircle = matAccountCircle;
    }
}
</script>