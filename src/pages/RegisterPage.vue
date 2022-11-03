<template>
    <q-btn label="Sign Up" color="primary" @click="icon = true" style="width: 100%;"/>
    <q-dialog class="flex justify-center" v-model="icon">
        <div class="gt-sm" style="width: 765px; max-width: 70vw;">
        <q-card>
            <div>
                <q-card-section horizontal>
                    <q-card-section style="margin: 12px;" >
                    <q-form class="q-gutter-md" @submit.prevent="submitForm">
                
                        <div >
                            <div>
                                <img src="../assets/travelrover.svg" style="height: 19px; weight: 19px" />
                            </div>
                
                        </div>
                        <q-input outlined placeholder="Name" v-model="login.first_name" />
                        <q-input outlined placeholder="Phone number (DW we won't spam you)" v-model="login.mobile_number" />
                        <q-input outlined v-model="login.username" placeholder="Email ID" />
                        <q-input outlined v-model="login.password" placeholder="Password" filled
                            :type="isPwd ? 'password' : 'text'">
                            <template v-slot:append>
                                <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                                    @click="isPwd = !isPwd" />
                            </template>
                        </q-input>
                        <div class="q-pa-md">
                            <div class="q-gutter-sm">
                           <!--  <q-checkbox v-model="customModel" color="secondary" label="Do you agree with the terms & conditions?"
                                true-value="yes" false-value="no" /> -->
                            </div>
                        </div>
                        <div>
                            <q-btn class="full-width" color="primary" label="Create Account" type="submit" style="font-family: Poppins;">
                            </q-btn>
                        </div>
                        <div>
                            <img src="../assets/line2.svg" />
                        </div>
                        <div>
                            <q-text class="text5 flex justify-center">Already Registered With Us? <a href="#">Sign In</a></q-text>
                        </div>
                    </q-form>
                    </q-card-section>
                    <q-card-section style="margin: 10px;">
                        <div class="flex justify-right" style="margin: 10px;">
                            <img src="../assets/loginframe.svg" alt="" style="height: 400px; width: 300px;">
                        </div>
                    </q-card-section>
                
                </q-card-section>
            </div>
        </q-card>
        </div>
        <div class="lt-md">
                <q-card style="width:100%">
                    <q-card-section>
                        <q-form class="q-gutter-md" @submit.prevent="submitForm">
        
                            <div class="container2 col flex justify-left">
                                <div class="text5">
                                    <img src="../assets/travelrover.svg" style="height: 20px; weight: 20px" />
                                </div>
                            </div>
                            <q-input outlined v-model="login.first_name" placeholder="Name" />
                            <q-input outlined placeholder="Phone number (DW we won't spam you)" v-model="login.mobile_number" />
                            <q-input outlined v-model="login.username" placeholder="Username" />
                            <q-input outlined v-model="login.password" placeholder="Password" filled
                                :type="isPwd ? 'password' : 'text'">
                                <template v-slot:append>
                                    <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                                        @click="isPwd = !isPwd" />
                                </template>
                            </q-input>
                            <div class="q-pa-md">
                                <div>
                               <!--  <q-checkbox v-model="customModel" color="secondary" label="Do you agree with the terms & conditions?"
                                    true-value="yes" false-value="no" /> -->
                                </div>
                            </div>
                            <div>
                                <q-btn class="full-width" color="primary" label="Create Account" type="submit"
                                    style="font-family: Poppins;">
                                </q-btn>
                            </div>
                            <div>
                                <img src="../assets/line2.svg" />
                            </div>
                            <div>
                                <q-text class="text5 flex justify-center">Already Registered With Us? <a href="#">Sign In</a></q-text>
                            </div>
                        </q-form>
                    </q-card-section>
                </q-card>
        </div>
    </q-dialog>
</template>
<script>

import { useQuasar } from 'quasar'
import { mapActions } from 'vuex'
import { ref } from 'vue'
import { Notify } from "quasar";
import {base_url,setAccessToken,basicconfig, create_user} from '../common/api_calls.js'
import {postAPIService} from '../common/api.service.js'

let $q
export default {
    plugins: { Notify },
    name: 'LoginLayout',
    setup() {
        return {
            password: ref(''),
            isPwd: ref(true),
            icon: ref(false),
        }
    },
    // terms() {
    //     return {
    //         customModel: ref('no')

    //     }

    // },
    created() {
        

    },

    data() {
        return {
            login: {
                username: '',
                password: '',
                first_name: '',
                mobile_number: ''
            }
        }
    },
    methods: {
        async submitForm() {
            if (!this.login.username || !this.login.password) {
                $q.notify({
                    type: 'negative',
                    message: 'Please enter all the necessary fields',
                    position: 'top'
                })
            } else if (this.login.password.length < 6) {
                $q.notify({
                    type: 'negative',
                    message: 'Please enter a valid password'
                })
            } else{
                create_user(this.login).then(response => {
                    if(response.status == 201){
                      console.log(response)
                      
                      var username = JSON.parse(response.config.data).username
                      var password = JSON.parse(response.config.data).password
                      console.log(password)
                      var name = JSON.parse(response.config.data).first_name
                      var mobile_number = JSON.parse(response.config.data).mobile_number

                      var endpoint_token = base_url + 'api/v1/jwt/create/'
                      var data_token = {"username" : username, "password": password}
                      var headers = {
                        'Content-Type': 'application/json'
                      }
                      var create_token = postAPIService(endpoint_token, headers, data_token).then(response => {
                        console.log(response.status)
                        if(response.status == 200){
                          console.log(response.data)
                          setAccessToken(response.data)
                          this.$store.commit('user_logged_in_update', true)
                          this.icon = false

                          //alert("Successfully logged in")
                          $q.notify({
                                type: 'positive',
                                message: 'You are successfully registered in.',
                                position: 'top'
                            })
                        }else{
                            console.log("Here")
                            $q.notify({
                                type: 'negative',
                                message: 'The system seems to be under maintainence',
                                position: 'top'
                            })
                          //alert("The system seems to be under maintainence");
                        }
                      }).catch(err => {
                        console.log("Here")
                        console.log(err)
                        $q.notify({
                                type: 'negative',
                                message: 'The system seems to be under maintainence',
                                position: 'top'
                            })
                      })
                      
                      
                      }
                    }).catch(err => {
                        console.log("Here")
                        console.log(err.response)
                        $q.notify({
                                type: 'negative',
                                message: 'The system seems to be under maintainence'
                            })
                    })

                
            }
        }
    },
    mounted() {
        $q = useQuasar()
    },

}
</script>


