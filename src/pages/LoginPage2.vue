<template>
    <q-btn label="Login" color="primary" @click="icon = true" style="margin-top:3px; width: 91px; margin: 4px;" />
    <q-dialog class="flex justify-center" v-model="icon">
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

                                <q-input outlined v-model="login.username" placeholder="Username" :dense="dense" />
                                <q-input outlined :dense="dense" v-model="login.password" placeholder="Password" filled
                                    :type="isPwd ? 'password' : 'text'">
                                    <template v-slot:append>
                                        <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                                            @click="isPwd = !isPwd" />
                                    </template>
                                </q-input>
                                <div>
                                    <q-btn class="full-width" color="primary" label="Login" type="submit"
                                        style="font-family: Poppins;">
                                    </q-btn>
                                </div>
                                <div>
                                    <q-text class="text5 flex justify-center">Forgot Password? <a href="#">Click
                                            Here</a></q-text>
                                </div>
                                <div>
                                    <img src="../assets/line2.svg" />
                                </div>
                                <div>
                                    <q-text class="text5 flex justify-center">New here? <a href="#">Sign Up</a></q-text>
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
                                <div class="text5">
                                    <img src="../assets/travelrover.svg" style="height: 20px; weight: 20px" />
                                </div>
                            </div>
        
                            <q-input outlined v-model="login.username" placeholder="Username" :dense="dense" />
                            <q-input outlined :dense="dense" v-model="login.password" placeholder="Password" filled
                                :type="isPwd ? 'password' : 'text'">
                                <template v-slot:append>
                                    <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                                        @click="isPwd = !isPwd" />
                                </template>
                            </q-input>
                            <div>
                                <q-btn class="full-width" color="primary" label="Login" type="submit"
                                    style="font-family: Poppins;">
                                </q-btn>
                            </div>
                            <q-text class="orSection flex justify-center">Or</q-text>
                            <div>
                                <q-text class="text5 flex justify-center">Forgot Password? <a href="#">Click Here</a></q-text>
                            </div>
                            <div>
                                <img src="../assets/line2.svg" />
                            </div>
                            <div>
                                <q-text class="text5 flex justify-center">New here? <a href="#">Sign Up</a></q-text>
                            </div>
                        </q-form>
                    </q-card-section>
                </q-card>
            </v-bind:class>
        </div>
    </q-dialog>
</template>
<script>
import { useQuasar } from 'quasar'
import { mapActions } from 'vuex'
import { ref } from 'vue'
import {base_url, setAccessToken, basicconfig, user_login,check_if_access_token_is_valid} from '../common/api_calls.js'


let $q
export default {

    name: 'LoginLayout',
    setup() {
        return {
            password: ref(''),
            isPwd: ref(true),

            icon: ref(false),
        }
    },
    data() {
        return {
            login: {
                username: '',
                password: ''
            }
        }
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
            }
        },
        mounted() {
            $q = useQuasar()
        }
    }
    
</script>