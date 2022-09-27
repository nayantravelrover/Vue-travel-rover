<template>
    <q-btn label="Login" color="primary" @click="icon = true" />
        <q-dialog class="container4 flex justify-center"  v-model="icon">
            <!--<q-card class=" container5 flex justify-center" style="width: 100%;">-->
            <!--    <q-card-section class="column items-center">
    
                    <q-space />
                     <q-btn icon="close" flat round dense v-close-popup /> 
                </q-card-section>-->
                <div >
                    <v-bind:class v-bind:class="{'justify-center': $q.screen.md || $q.screen.sm ||$q.screen.xs}"
                        class="col-sm-6 flex content-center borderCheck">
                            <q-card style="width:100%">
                                <q-card-section>
                                    <q-form class="q-gutter-md" @submit.prevent="submitForm">
                                        
                                            <div class="container2 col flex justify-left">
                                                <div class="text5">
                                                    <img src="../assets/travelrover.svg" style="height: 20px; weight: 20px"/>
                                                </div>
                                            </div>
                                        
                                        <q-input
                                        outlined 
                                        v-model="login.username" 
                                        placeholder="Username" 
                                        :dense="dense" />
                                        <q-input
                                        outlined
                                        :dense="dense" 
                                        v-model="login.password"
                                        placeholder="Password" 
                                        filled :type="isPwd ? 'password' : 'text'">
                                            <template v-slot:append>
                                                <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
                                            </template>
                                        </q-input>
                                        <div>
                                            <q-btn class="full-width" color="primary" label="Login" type="submit" style="font-family: Poppins;">
                                            </q-btn>
                                        </div>
                                        <q-text class="orSection flex justify-center">Or</q-text>
                                        <div>
                                        <q-btn class="full-width" color="primary" label="Login with OTP" type="submit" style="font-family: Poppins;">
                                        </q-btn>
                                        </div>
                                        <div>
                                            <q-text class="text5 flex justify-center">Forgot Password? <a href="#">Click Here</a></q-text>
                                        </div>
                                        <div>
                                            <img src="../assets/line2.svg"/>
                                        </div>
                                        <div>
                                            <q-text class="text5 flex justify-center">New here? <a href="#">Sign Up</a></q-text>
                                        </div>
                                    </q-form>
                                </q-card-section>
                            </q-card>
                    </v-bind:class>
                </div>
           <!-- </q-card>-->
        </q-dialog>
</template>
<script>
import { useQuasar } from 'quasar'
import { mapActions } from 'vuex'
import { ref } from 'vue'

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
        ...mapActions('auth', ['doLogin']),
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
                try {
                    await this.doLogin(this.login)
                    const toPath = this.$route.query.to || '/admin'
                    this.$router.push(toPath)
                } catch (err) {
                    if (err.response.data.detail) {
                        $q.notify({
                            type: 'negative',
                            message: err.response.data.detail
                        })
                    }
                }
            }
        }
    },
    mounted() {
        $q = useQuasar()
    }
}
</script>
    

<style lang="scss">
    .container4 {
        width: 100%;
    }

</style>