<script setup>
import {
  subscribe_user,
  check_if_access_token_is_valid,
  check_if_refresh_token_is_valid,
} from "src/common/api_calls";

import { useQuasar } from "quasar";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const $q = useQuasar();
const store = useStore();

function subscribe() {
  if (store.user_logged_in == false) {
    $q.notify({
      type: "negative",
      message: "Kindly log-in/sign-up to enable this functionality",
      position: "top",
    });
  } else {
    check_if_access_token_is_valid()
      .then((response) => {
        var access_token = window.localStorage.getItem("travel_rover_access");
        subscribe_user(access_token)
          .then((response) => {
            $q.notify({
              type: "positive",
              message: "You will get timely updates about travel now",
              position: "top",
            });
          })
          .catch((err) => {
            $q.notify({
              type: "negative",
              message: "Some internal issues are going on",
              position: "top",
            });
          });
        store.commit("user_logged_in_update", true);
      })
      .catch((err) => {
        check_if_refresh_token_is_valid()
          .then((response) => {
            var access_token = response["data"]["access"];

            window.localStorage.setItem("travel_rover_access", access_token);
            subscribe_user(access_token)
              .then((response) => {
                $q.notify({
                  type: "positive",
                  message: "You will get timely updates about travel now",
                  position: "top",
                });
              })
              .catch((err) => {
                $q.notify({
                  type: "negative",
                  message: "Some internal issues are going on",
                  position: "top",
                });
              });
            store.commit("user_logged_in_update", true);
            console.log(response);
          })
          .catch((err) => {
            $q.notify({
              type: "negative",
              message: "Kindly log-in/sign-up to enable this functionality",
              position: "top",
            });
            store.commit("user_logged_in_update", false);
            console.log(err);
          });
      });
  }
}
</script>

<template>
  <!-- Subscribe  -->
  <div class="q-pa-md subscribe-wrapper">
    <img src="../../assets/icons/dercore_2.png" />
    <q-card class="row justify-center items-center subscribe">
      <q-img
        class="mask-left subscribe-left-image"
        src="../../assets/MaskGroup.png"
      />
      <q-img
        class="mask-right subscribe-right-image"
        width=""
        src="../../assets/MaskGroup-1.png"
      />
      <div class="q-pa-md">
        <div class="subscribe-container">
          <span class="subscribe-description q-pa-md"
            >Subscribe to get information, latest news and other interesting
            offers about Travel Rover</span
          >
        </div>
        <div class="q-gutter-md row justify-center subscribe-inputs">
          <q-btn
            class="subscribe-input-btn"
            style=""
            unelevated
            rounded
            color="primary"
            label="Subscribe"
            @click="subscribe()"
          />
        </div>
      </div>
    </q-card>
  </div>
  <!-- Subscribe Ends  -->
</template>

<style>
.subscribe-wrapper {
  width: 82%;
  margin: 0 auto;
  position: relative;
}

.subscribe-wrapper > img {
  position: absolute;
  right: -100px;
  bottom: 0;
}

.subscribe-description {
  color: #5e6282;
  text-align: center;
  font-family: Poppins;
  font-size: 33px;
  font-style: normal;
  font-weight: 600;
  line-height: 54px;
}

@media all and (max-width: 600px) {
  .subscribe {
    height: 15em;
  }

  .subscribe-wrapper {
    width: 100%;
    padding: 0;
  }

  .subscribe-description {
    display: none;
  }

  .subscribe-left-image,
  .subscribe-right-image {
    height: 8em;
    width: 8em;
  }

  .subscribe-wrapper > img {
    right: 0px;
    z-index: 1;
    height: 8em;
  }
}
</style>
