<template>
  <q-btn label="Close Icon" color="primary" @click="icon = true" />
  <q-dialog full-width style="width: 300px" v-model="icon">
    <q-card>
      <q-card-section class="row items-center q-pb-none">
        <q-space />
        <!-- <q-btn icon="close" flat round dense v-close-popup /> -->
      </q-card-section>
      <q-card-section>
        <div class="row">
          <div v-bind:class="{'justify-center': $q.screen.md || $q.screen.sm ||$q.screen.xs}"
            class="col-12 col-md-6 flex content-center borderCheck">
            <q-card style="width:100%">
              <q-card-section>
                <q-form class="q-gutter-md" @submit.prevent="submitForm">
              
                  <div class="container2 col flex justify-left">
                    <div class="text5">
                      <img src="../assets/travelrover.svg" style="height: 19px; weight: 19px" />
                    </div>
              
                  </div>
              
                  <q-input outlined v-model="login.username" placeholder="Username" :dense="dense" />
                  <q-input outlined :dense="dense" v-model="login.password" placeholder="Password" filled
                    :type="isPwd ? 'password' : 'text'">
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
                    <img src="../assets/line2.svg" />
                  </div>
                  <div>
                    <q-text class="text5 flex justify-center">New here? <a href="#">Sign Up</a></q-text>
                  </div>
                </q-form>
              
              </q-card-section>
            </q-card>
          </div>
          <div v-bind:class="{'justify-center': $q.screen.md || $q.screen.sm ||$q.screen.xs}"
            class=" borderCheck col-12 col-md-6 flex content-center">
            <q-card style="imageView" v-bind:style="$q.screen.lt.sm ? {'width': '100%'} : {'width': '100%'}">

              <div class="q-pa-md" style="width:80%; margin:0px auto">
                <q-carousel swipeable animated v-model="slide" :autoplay="autoplay" ref="carousel" infinite>
                  <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
                  <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
                  <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
                  <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />

                  <template v-slot:control>
                    <q-carousel-control position="top-right" :offset="[18, 18]" class="text-white rounded-borders"
                      style="background: rgba(0, 0, 0, .3); padding: 4px 8px;">
                      <q-btn icon="close" flat round dense v-close-popup />
                    </q-carousel-control>

                    <q-carousel-control position="bottom-right" :offset="[18, 18]" class="q-gutter-xs">
                      <q-btn push round dense color="orange" text-color="black" icon="arrow_left"
                        @click="$refs.carousel.previous()" />
                      <q-btn push round dense color="orange" text-color="black" icon="arrow_right"
                        @click="$refs.carousel.next()" />
                    </q-carousel-control>
                  </template>
                </q-carousel>
              </div>
            </q-card>
          </div>


        </div>
      </q-card-section>
    </q-card>
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
      slide: ref(1),
      autoplay: ref(true),
      icon: ref(false),
    }
  },
  data() {
    return {
      login: {
        username: 'Joabson',
        password: 'a2d4g6j8'
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

<style scoped>
.wave {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
}



.orSection {
  display: flex;
  justify-content: center;
}

.q-card__section--vert {
  padding: 5px !important;
}
</style>