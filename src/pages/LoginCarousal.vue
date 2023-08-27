<template>
    <div class="register-form-carousal">
        <Carousel v-bind="login_carousal_settings">
            <Slide v-for="login_items in login_carousal_content_list" :key="login_items">
                <q-card class="login_carousel_item">
                    <h4>{{ login_items.text }}</h4>
                    <img :src="require(`../assets/icons/${login_items.img}`)" />
                </q-card>
            </Slide>
            <template #addons>
                <Pagination />
            </template>
        </Carousel>
    </div>
</template>
<script>
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
    name: "LoginCarousal",
    components: {
        Carousel,
        Slide,
        Pagination,
    },
    data() {
        return {
            login_carousal_content_list: [
                { img: "photo_image.png", text: "Create your own adventure" },
                { img: "save_girl.png", text: "Explore the world Guided by AI" },
                { img: "travel_women.png", text: "Your Adventure Our Expertise" },
            ],
            login_carousal_settings: {
                itemsToShow: 1,
                snapAlign: 'center',
                wrapAround: true,
                autoplay: 5000,
                touchDrag: false,
                mouseDrag: false,
            }
        }
    }
}
</script>

<style>
.login_carousel_item {
    border-radius: 10px;
    background: rgba(183, 233, 246, 0.25);
    backdrop-filter: blur(8.125px);
    height: 30em;
    position: relative;
    margin: 3em 1.5em;
    width: 22em;
}

.login_carousel_item h4 {
    color: #FFF;
    font-family: Poppins;
    font-size: 30px;
    font-style: normal;
    text-align: left;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: 0.32px;
    margin: 30px 18px;
}

.login_carousel_item img {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 18em;
    height: 18em;
    object-fit: contain;
}

.register-form-carousal {
    height: 100%;
    background-image: url("../assets/icons/login_card_background.jpeg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 10px;
}

.register-form-carousal .carousel__pagination {
    position: absolute;
    bottom: 38px;
    left: 22px;
}

.register-form-carousal .carousel__pagination-button {
    opacity: 0.6;
    background: #F7F7F7;
    margin: 4px;
    height: 10px;
    width: 10px;
    border-radius: 50%;
}

.register-form-carousal .carousel__pagination-button--active {
    background: #FFFFFF;
    position: relative;
    opacity: 1;
    width: 25px;
    border-radius: 5px;
}

/* .register-form-carousal .carousel__pagination-button--active::after {
    position: absolute;
    content: '';
    opacity: 1;
    top: 0px;
    right: 0px;
    background: #FFFFFF;
    width: 30px;
    height: 10px;
    border-radius: 5px;
} */
</style>