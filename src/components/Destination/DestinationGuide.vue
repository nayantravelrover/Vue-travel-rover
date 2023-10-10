<script setup>
import { defineProps } from "vue";
const props = defineProps(["name", "description"]);
</script>

<template>
  <section class="description-guide">
    <main>
      <ul>
        <li v-for="(item, index) in description" :key="index">
          <h1>{{ item.name }}</h1>
          <p v-html="item.data"></p>
        </li>
      </ul>
    </main>
  </section>
</template>

<style scoped>
.description-guide {
  background: #f8fefd;
  padding: 50px 100px;
}

.description-guide>main {
  border-radius: 10px;
  background: #fff;
  padding: 48px;
  box-shadow: 0px 0px 12px 0px #0000001a;
}

.description-guide>main>ul>li {
  list-style-type: none;
  margin-bottom: 2em;
}

.description-guide>main>ul>li>h1 {
  color: #333;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.description-guide>main>ul>li>p {
  color: #777;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
}

.description-guide>main:nth-child(1)>ul:nth-child(1)>li:nth-child(1)>h1:nth-child(1) {
  color: #333;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 0px;
}

.description-guide>main:nth-child(1)>ul:nth-child(1)>li:nth-child(1)>p:nth-child(1) {
  color: #777;
  text-align: justify;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
}
</style>
