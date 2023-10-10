<script setup>
import { ref, defineProps } from "vue";
import { useRouter } from "vue-router";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

defineProps(["blogs"]);

const router = useRouter();
const options = ref({
  perPage: 4,
  gap: 15,
  padding: 15,
  arrows: false,
  drag: true,
  pagination: false,
  breakpoints: {
    720: {
      perPage: 3,
      arrows: true,
      autoplay: true,
      padding: "1rem",
      focus: "center",
    },
    640: {
      perPage: 1.1,
      arrows: true,
      autoplay: true,
      padding: "1rem",
      focus: "center",
    },
  },
});

function view_blogs(param) {
  if (param == "embracing_blog") {
    router.push("/embracing_blog");
  }
  if (param == "agent_or_diy") {
    router.push("/agent_or_diy");
  }
  if (param == "popularity_zostel") {
    router.push("/popularity_zostel");
  }
  if (param == "workation") {
    router.push("/workation");
  }
}
</script>

<template>
  <!-- Blog section -->
  <div id="blogs" class="q-pa-sm blogs q-pa-md">
    <h5 class="header-font">Blogs</h5>
    <p>Some Blogs from traveller around the world</p>
    <Splide :options="options" aria-label="Blog">
      <SplideSlide v-for="(item, index) in blogs" :key="index">
        <q-card class="blogs_item" @click="view_blogs(item.redirection_url)">
          <span class="read-duration">{{ item.duration }} Min Read</span>
          <img :src="item.image" class="image_style" />
          <q-card-section>
            <h1>{{ item.title }}</h1>
            <p>{{ item.subtitle }}</p>
            <p>
              <span class="blogs_item_tag">Solo Travel</span> By
              <span class="blogs_item_author">{{ item.author }}</span>
            </p>
          </q-card-section>
        </q-card>
      </SplideSlide>
    </Splide>
  </div>
  <!-- Blog section Ends -->
</template>

<style>
.blogs p {
  color: #76797a;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.blogs {
  width: 90%;
  margin: 0 auto;
  position: relative;
}

.blogs_item {
  margin: 3em 0em;
  border-radius: 15.385px;
  background: #fff;
  box-shadow: 0px 7.692306995391846px 15.384613990783691px 0px
    rgba(0, 0, 0, 0.2);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 100%;
}

.blogs_item > span {
  position: absolute;
  right: 14px;
  top: 14px;
  color: #121212;
  border-radius: 6px;
  background-color: #fff;
  display: inline-flex;
  padding: 2px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 183.3%;
  z-index: 1;
}

.blogs_item:hover {
  transform: scale(1.05);
  box-shadow: 0px 0px 15px -2px #80808080;
}

.blogs_item > img {
  height: 14em;
  background: linear-gradient(180deg, #f29c72 0%, rgba(255, 255, 255, 0) 100%);
  mix-blend-mode: multiply;
  object-fit: cover;
}

.blogs_item > div {
  height: 10.5em;
  position: relative;
}

.blogs_item > div > h1 {
  color: #141414;
  font-size: 13.846px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: left;
  text-transform: capitalize;
}

.blogs_item > div > p {
  color: #868383;
  font-size: 11.538px;
  font-style: normal;
  font-weight: 400;
  line-height: 183.3%;
  text-align: left;
}

.blogs_item > div > p:nth-child(3) {
  position: absolute;
  bottom: 0px;
}

.blogs_item_tag {
  color: #ffa902;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.blogs_item_author {
  color: #141414;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
}

@media all and (max-width: 600px) {
  .blogs h5 {
    color: #334155;
    font-family: Poppins;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 107%;
    text-align: center;
    width: 90%;
  }

  .blogs {
    width: 100%;
  }

  .blogs_item > div {
    height: auto;
  }

  .blogs_item > div > h1 {
    font-size: 12px;
  }

  .blogs_item > div > p {
    font-size: 11px;
    line-height: unset;
  }

  .blogs_item > div > p:nth-child(3) {
    font-size: 10px;
    position: inherit;
  }
}
</style>
