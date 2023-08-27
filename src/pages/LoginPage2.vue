<template>
    <q-dialog class="flex justify-center" v-model="dialogModel">
        <div class="register-form row">
            <q-card-section class="col-6">
                <div class="register-form-inputs">
                    <q-form @submit.prevent="submitForm">
                        <img src="../assets/travelrover.svg"/>
                        <q-input outlined v-model="login.username" label="Email" :dense="dense" />
                        <q-input outlined :dense="dense" v-model="login.password" label="Password" filled :type="isPwd ? 'password' : 'text'">
                            <template v-slot:append>
                                <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
                            </template>
                        </q-input>
                        <q-btn class="full-width" color="primary" label="Login" type="submit"></q-btn>
                        <h3><span>Or</span></h3>
                        <h2>New here? <text @click="disable_login_modal">Sign Up</text></h2>
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
import { defineComponent } from "vue";
import { ref } from "vue";
import { useQuasar } from 'quasar'
import { setAccessToken, user_login, check_if_access_token_is_valid } from '../common/api_calls.js'
import LoginCarousal from "./LoginCarousal.vue"

let $q
export default defineComponent({
    name: 'LoginLayout',
    components: {
        LoginCarousal,
    },
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
    computed: {
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
                    if (response.status == 200) {
                        console.log(response.data)
                        setAccessToken(response.data)
                        this.$store.commit('user_logged_in_update', true)
                        this.icon = false
                        this.$store.commit('inactivity_var_update', false);
                        check_if_access_token_is_valid().then(response => {
                            console.log(response)
                            console.log(this.$store.state.is_agent)
                            if (response["data"]["type_of_user"] == "agent") {
                                this.$store.commit('is_agent_update', true)
                                console.log(this.$store.state.is_agent)
                            }
                        })
                        $q.notify({
                            type: 'positive',
                            message: 'You are successfully logged in.',
                            position: 'top'
                        })
                    } else {
                        $q.notify({
                            type: 'negative',
                            message: 'Please check your username and password',
                            position: 'top'
                        })
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
        enable_modal() {
            console.log("HERE IN LOGIN");
            this.$store.commit('state_login_modal', true);
            this.$store.commit('state_signup_modal', false)
            console.log(this.$store.state.show_login_modal)

        },
        disable_login_modal() {
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

<style src="../assets/css/login_regist.css"></style>