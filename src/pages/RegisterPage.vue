<template>
    <q-dialog class="flex justify-center" v-model="dialogModel" id="register">
        <div class="register-form row">
            <q-card-section class="col-6">
                <div class="register-form-inputs">
                    <q-form @submit.prevent="submitForm">
                        <img src="../assets/travelrover.svg" />
                        <q-input outlined label="Name" v-model="login.first_name" />
                        <q-input outlined placeholder="Phone number (DW we won't spam you)" label="Phone Number"
                            v-model="login.mobile_number" />
                        <q-input outlined v-model="login.username" label="Email ID" />
                        <q-input outlined v-model="login.password" label="Password" filled
                            :type="isPwd ? 'password' : 'text'">
                            <template v-slot:append>
                                <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                                    @click="isPwd = !isPwd" />
                            </template>
                        </q-input>
                        <q-btn class="full-width" color="primary" label="Create Account" type="submit"></q-btn>
                        <h3><span>Or</span></h3>
                        <h2>Already Registered With Us?<text @click="disable_signup_modal">Sign In</text></h2>
                    </q-form>
                </div>
            </q-card-section>
            <q-card-section class="col-6">
                <LoginCarousal></LoginCarousal>
            </q-card-section>
        </div>
    </q-dialog>
</template>

<script>
import { useQuasar } from 'quasar'
import { mapActions } from 'vuex'
import { ref } from 'vue'
import { Notify } from "quasar";
import { base_url, setAccessToken, basicconfig, create_user } from '../common/api_calls.js'
import { postAPIService } from '../common/api.service.js'
import LoginCarousal from "./LoginCarousal.vue"

let $q
export default {
    plugins: { Notify },
    name: 'LoginLayout',
    components: {
        LoginCarousal,
    },
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
                password: '',
                first_name: '',
                mobile_number: ''
            }
        }
    },
    computed: {
        dialogModel() {
            console.log(this.$store.state.show_signup_modal)
            return this.$store.state.show_signup_modal;
        },
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
            } else {
                create_user(this.login).then(response => {
                    if (response.status == 201) {
                        var username = JSON.parse(response.config.data).username
                        var password = JSON.parse(response.config.data).password
                        var name = JSON.parse(response.config.data).first_name
                        var mobile_number = JSON.parse(response.config.data).mobile_number
                        var endpoint_token = base_url + 'api/v1/jwt/create/'
                        var data_token = { "username": username, "password": password }
                        var headers = { 'Content-Type': 'application/json' }
                        var create_token = postAPIService(endpoint_token, headers, data_token).then(response => {
                            if (response.status == 200) {
                                setAccessToken(response.data)
                                this.$store.commit('user_logged_in_update', true)
                                this.icon = false
                                $q.notify({
                                    type: 'positive',
                                    message: 'You are successfully registered in.',
                                    position: 'top'
                                })
                            } else {
                                $q.notify({
                                    type: 'negative',
                                    message: 'The system seems to be under maintainence',
                                    position: 'top'
                                })
                            }
                        }).catch(err => {
                            $q.notify({
                                type: 'negative',
                                message: 'The system seems to be under maintainence',
                                position: 'top'
                            })
                        })
                    }
                }).catch(err => {
                    $q.notify({
                        type: 'negative',
                        message: err.response.data.username[0]
                    })
                })
            }
        },
        enable_modal() {
            console.log("Hereee")
            this.$store.commit('state_login_modal', false);
            this.$store.commit('state_signup_modal', true)
        },
        disable_signup_modal() {
            this.$store.commit('state_login_modal', true);
            this.$store.commit('state_signup_modal', false)
        }
    },
    mounted() {
        $q = useQuasar()
    },
}
</script>

<style src="../assets/css/login_regist.css"></style>
