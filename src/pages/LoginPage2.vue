<template>
    <q-btn icon="login" label="Login" color="primary" flat rounded="" @click="enable_modal" style="margin-top:4px; width: 131px;margin-right: 10px;font-size: 15px;"/>
    <q-dialog class="flex justify-center" v-model="dialogModel">
        <div class="gt-sm" style="width: 765px; max-width: 70vw;">
            <q-card >
                <div>
                    <q-card-section horizontal>
                        <q-card-section style="margin: 12px;">
                            <q-form class="q-gutter-md" @submit.prevent="submitForm">

                                <div>
                                    <div>
                                        <img src="../assets/travelrover.svg" style="height: 19px; weight: 19px" />
                                    </div>

                                </div>
                                <div style="margin-top: 80px;">
                                <q-input style="margin-bottom: 20px;" outlined v-model="login.username" label="Email" :dense="dense"/>
                                <q-input outlined :dense="dense" v-model="login.password" label="Password" filled
                                    :type="isPwd ? 'password' : 'text'">
                                    <template v-slot:append>
                                        <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                                            @click="isPwd = !isPwd" />
                                    </template>
                                </q-input>
                                </div>
                                <div>
                                    <q-btn class="full-width" color="primary" label="Login" type="submit"
                                        style="font-family: Poppins;margin-top: 10px;">
                                    </q-btn>
                                </div>
                                <!-- <div>
                                    <q-text class="text5 flex justify-center" style="font-family: Poppins;">Forgot Password? <a href="#" style="text-decoration: none;color: #003FA3; font-weight: 600;">Click
                                            Here</a></q-text>
                                </div> -->
                                <div style="width: 330px;">
                                    <!-- <img src="../assets/line2.svg" /> -->
                                </div>
                                <div>
                                    <q-text class="text5 flex justify-center" style="font-family: Poppins;">New here? <text style="text-decoration: none;color: #003FA3;font-weight: 600;margin-left: 4px;cursor: pointer;" @click="disable_login_modal">Sign Up</text></q-text>
                                </div>
                            </q-form>
                        </q-card-section>
                        <q-card-section class="gt-sm" style="margin: 10px;">
                            <div class="flex justify-right" style="margin: 10px;">
                                <img src="../assets/loginframe.svg" alt="" style="height: 400px; width: 300px;">
                            </div>
                        </q-card-section>

                    </q-card-section>
                </div>
            </q-card>
        </div>
        <div class="lt-md">
            <v-bind:class v-bind:class="{'justify-center': $q.screen.md || $q.screen.sm ||$q.screen.xs}"
                class="col-sm-6 flex content-center borderCheck">
                <q-card style="width:100%">
                    <q-card-section>
                        <q-form class="q-gutter-md" @submit.prevent="submitForm">
        
                            <div class="container2 col flex justify-left">
                                <div class="text5" style="margin-top: 10px;">
                                    <img src="../assets/travelrover.svg" style="height: 20px; weight: 20px" />
                                </div>
                            </div>
        
                            <q-input outlined v-model="login.username" label="Email" :dense="dense" />
                            <q-input outlined :dense="dense" v-model="login.password" label="Password" filled
                                :type="isPwd ? 'password' : 'text'">
                                <template v-slot:append>
                                    <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                                        @click="isPwd = !isPwd" />
                                </template>
                            </q-input>
                            <div>
                                <q-btn class="full-width" color="primary" label="Login" type="submit"
                                    style="font-family: Poppins;margin-top: 10px;">
                                </q-btn>
                            </div>
                            <!-- <q-text class="orSection flex justify-center" style="font-family: Poppins;">Or</q-text>
                            <div>
                                <q-text class="text5 flex justify-center" style="font-family: Poppins;">Forgot Password? <a href="#" style="font-family: Poppins;text-decoration: none;font-weight: 600;color: #003FA3;">Click Here</a></q-text>
                            </div> -->
                            <div style="width: 300px;">
                                <!-- <img src="../assets/line2.svg" style="max-width: 300px;"/> -->
                            </div>
                            <div>
                                <q-text class="text5 flex justify-center" style="font-family: Poppins;">New here? <text style="font-family: Poppins;text-decoration: none;font-weight: 600;color: #003FA3;cursor: pointer;" @click="disable_login_modal">Sign Up</text></q-text>
                            </div>
                        </q-form>
                    </q-card-section>
                </q-card>
            </v-bind:class>
        </div>
    </q-dialog>
</template>
<script>

import { defineComponent, onMounted } from "vue";
import { ref, computed } from "vue";
import { useQuasar } from 'quasar'
import {base_url, setAccessToken, basicconfig, user_login,check_if_access_token_is_valid} from '../common/api_calls.js'
import _ from "lodash";


const RegisterPage = () => import('../pages/RegisterPage.vue')

let $q
export default defineComponent({

    name: 'LoginLayout',
    setup() {
        return {
            password: ref(''),
            isPwd: ref(true),
            icon: ref(false)
        }
    },
    data() {
        return {
            login: {
                username: '',
                password: '',
                inactivity_parent_var: this.$parent.inactivity_parent_var,
                show_login_modal: this.$store.state.show_login_modal
            }
        }
    },
    computed:{
        dialogModel() {
                
                return this.$store.state.show_login_modal;
            },  
        },
    methods: {
        async submitForm() {
            if (!this.login.username || !this.login.password) {
                $q.notify({
                    type: 'negative',
                    message: 'Os dados informados são inválidos.'
                })
            } else if (this.login.password.length < 6) {
                $q.notify({
                    type: 'negative',
                    message: 'A senha deve ter 6 ou mais caracteres.'
                })
            } else {
               
                user_login(this.login).then(response => {
                        console.log(response.status)
                        if(response.status == 200){
                          console.log(response.data)
                          setAccessToken(response.data)
                          this.$store.commit('user_logged_in_update', true)
                          this.icon = false
                          this.$store.commit('inactivity_var_update', false);
                          check_if_access_token_is_valid().then(response=>{
                              console.log(response)
                              console.log(this.$store.state.is_agent)
                              if(response["data"]["type_of_user"] == "agent"){
                                this.$store.commit('is_agent_update', true)
                                console.log(this.$store.state.is_agent)
                              }
                            })

                          //alert("Successfully logged in")
                          $q.notify({
                                type: 'positive',
                                message: 'You are successfully logged in.',
                                position: 'top'
                            })
                        }else{
                            $q.notify({
                                type: 'negative',
                                message: 'Please check your username and password',
                                position: 'top'
                            })
                          //alert("The system seems to be under maintainence");
                        }
                      }).catch(err => {
                        console.log(err)
                        $q.notify({
                                type: 'negative',
                                message: 'Please check your username and password',
                                position: 'top'
                            })
                      })
                      }
            },
            enable_modal(){
                console.log("HERE IN LOGIN");
                this.$store.commit('state_login_modal', true);
                this.$store.commit('state_signup_modal', false)
                console.log(this.$store.state.show_login_modal)

            },

            

            disable_login_modal(){
                console.log("here")
                this.$store.commit('inactivity_var_update', false);
                this.$store.commit('state_login_modal', false);
                this.$store.commit('state_signup_modal', true)
            }
        },

        mounted() {
            $q = useQuasar()
        }
    })
    
</script>