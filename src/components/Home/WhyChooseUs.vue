<script setup>
import { defineProps } from "vue";

defineProps(["choose_us"]);
</script>

<template>
  <!-- Why Choose Us -->
  <div id="why_choose_us" class="q-pa-sm why-choose-uss q-pa-md">
    <div class="row justify-center">
      <div class="col-6">
        <h3 class="header-font">{{ choose_us.title }}</h3>
        <h4>{{ choose_us.description }}</h4>
        <div class="why-choose-uss-sublist">
          <q-list v-for="item in choose_us.sub_list" :key="item">
            <q-item v-ripple>
              <div>
                <img :src="item.svg_link" :alt="item.name" />
              </div>
              <q-item-section>
                <q-item-label>{{ item.name }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
      <div class="col-1"></div>
      <div class="choose-us-images col-5">
        <img
          src="../../assets/images/contactus/choose_us.png"
          alt="choose us"
        />
      </div>
    </div>
  </div>
  <!-- Why Choose Us Ends -->
</template>

<style>
.why-choose-uss {
  background-color: #fff;
  width: 90%;
  margin: 0 auto;
  position: relative;
}

.why-choose-uss h3 {
  text-align: initial;
  margin: 0;
}

.why-choose-uss h4 {
  color: #121212;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  /* 28px */
  letter-spacing: 0.15px;
}

.why-choose-uss-sublist {
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;
}

.choose-us-images {
  display: flex;
  justify-content: center;
  align-items: center;
}

.choose-us-images img {
  width: 100%;
  margin-top: 4em;
}

.why-choose-uss-sublist .q-item__label {
  color: #121212;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
}

.why-choose-uss-sublist .q-item {
  border-radius: 10px;
  background: #fff;
  display: flex;
  padding: 18px 24px;
  align-items: center;
  gap: 16px;
  align-self: stretch;
}

.why-choose-uss-sublist .q-item:hover {
  box-shadow: 0px 16px 24px 0px rgba(96, 97, 112, 0.12),
    0px 2px 8px 0px rgba(40, 41, 61, 0.02);
}

.why-choose-uss-sublist .q-item > div:first-child {
  padding: 10px;
  text-align: center;
  vertical-align: middle;
  display: flex;
  border-radius: 50%;
  box-shadow: 0px 8px 16px 0px rgba(96, 97, 112, 0.16),
    0px 2px 4px 0px rgba(40, 41, 61, 0.04);
}

.why-choose-uss-sublist .q-item__label--caption .text-caption {
  color: #5e6282;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 124.5%;
}

@media all and (max-width: 600px) {
  .why-choose-uss {
    width: 100%;
    padding: 16px 30px;
  }

  .why-choose-uss h3 {
    color: #334155;
    font-family: Poppins;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 107%;
    text-align: center;
    width: 90%;
  }

  .why-choose-uss {
    padding: 16px 30px;
  }

  .why-choose-uss > div:nth-child(1) {
    margin: 0em;
  }

  .why-choose-uss > div > div:nth-child(1) {
    width: 100%;
  }

  .why-choose-uss > div > div:nth-child(2),
  .why-choose-uss > div > div:nth-child(3) {
    display: none;
  }

  .why-choose-uss h4 {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 180%;
  }

  .why-choose-uss-sublist {
    grid-template-columns: auto;
  }

  .why-choose-uss-sublist .q-item__label {
    font-size: 12px;
  }

  .why-choose-uss-sublist .q-item {
    padding: 8px 20px;
    align-items: center;
    gap: 10px;
  }
}
</style>
