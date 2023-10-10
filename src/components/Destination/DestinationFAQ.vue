<script setup>
import WhatAppSvg from "../../assets/icons/footer/whatsappIcon.vue";

import { defineProps, ref } from "vue";

const query = ref("");
const props = defineProps(["name", "faqs", "faqs_ans"]);
const emits = defineEmits(["create_gpt_prompt"]);
const alert = ref(false);

</script>

<template>
  <q-dialog class="ai-dialog" v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Write your travel related needs below</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input type="textarea" dense v-model="query" placeholder="I want to go to Himachal Pradesh for 5 days with my family." />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="Submit" @click="$emit('create_gpt_prompt', query)" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  <section>
    <div class="not-satisfied row">
      <div class="not-satisfied-text col-9">
        <h1>
          Ain’t satisfied with the Top-Selling itinerary. Want to customise your
          itinerary?
        </h1>
        <div>
          <a
            :href="`https://api.whatsapp.com/send?phone=7977790353&text=Hello! I'm looking for assistance in planning my upcoming trip. Would you be able to help me create a customised itinerary?.`"
            target="_blank"
          >
            Message Us <WhatAppSvg :style="{ height: '2em', width: '2em' }" />
          </a>
          <a class="ai-powered" @click="alert = true"
            >Journey Planner
            <img
              :style="{ height: '2em', width: '2em' }"
              src="../../assets/icons/icons8-ai-50.png"
          /></a>
        </div>
      </div>
      <div class="not-satisfied-img col-3">
        <img src="../../assets/icons/cartoon.svg" alt="cartoons" />
      </div>
    </div>
    <div class="faqs">
      <h1>FAQ about {{ name }}</h1>
      <ul class="faqs-list">
        <li v-for="(item, index) in faqs" :key="index">
          <h1 class="faqs-question">{{ item }}</h1>
          <p class="faqs-answer">{{ faqs_ans[index] }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.ai-dialog .q-card{
    padding: 10px;
  border-radius: 16px;
}

section {
  padding: 50px 100px;
}

.not-satisfied-text {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  background: #f8fefd;
  padding: 0px 30px;
}

.not-satisfied-text h1 {
  color: #333;
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.not-satisfied-text a {
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  background: #25d366;
  color: white;
  cursor: pointer;
  width: 14em;
  border: none;
  text-decoration: none;
}

.not-satisfied-text a:hover{
  transform: scale(1.05);
}

.not-satisfied-text > div {
  display: flex;
  gap: 2em;
}

.faqs h1 {
  color: #333;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.faqs-list li {
  list-style-type: decimal-leading-zero;
}

.faqs-list li::marker {
  color: #000;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.faqs-list h1 {
  color: #252525;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.faqs-list p {
  color: #343434;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.ai-powered {
  background: #ffc106 !important;
  width: 18em !important;
  color: black !important;
}
</style>
