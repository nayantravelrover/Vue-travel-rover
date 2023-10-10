<script setup>
// Import Itineraries Default Images
import itineraries_goa from "../assets/images/itineraries/Goa.jpg";
import itineraries_himachal_pradesh from "../assets/images/itineraries/Himachal_Pradesh.jpg";
import itineraries_kashmir from "../assets/images/itineraries/Kashmir.jpg";
import itineraries_leh_ladakh from "../assets/images/itineraries/Leh_Ladakh.jpg";
import itineraries_rajasthan from "../assets/images/itineraries/Rajasthan.jpg";
import itineraries_uttarakhand from "../assets/images/itineraries/Uttarakhand.jpg";

// Import Choose Default Images
import Budget_Friendly_Options from "../assets/images/contactus/Budget_Friendly_Options.svg";
import Customer_Satisfaction from "../assets/images/contactus/Customer_Satisfaction.svg";
import Expert_Guidance from "../assets/images/contactus/Expert_Guidance.svg";
import Hassle_Free_Planning from "../assets/images/contactus/Hassle_Free_Planning.svg";
import Local_Insights from "../assets/images/contactus/Local_Insights.svg";
import Personalized_Itineraries from "../assets/images/contactus/Personalized_Itineraries.svg";

// Import Destination default images
import destination_goa from "../assets/images/destination/Goa.jpg";
import destination_himachal_pradesh from "../assets/images/destination/Himachal_Pradesh.jpg";
import destination_kashmir from "../assets/images/destination/Kashmir.jpg";
import destination_leh_ladakh from "../assets/images/destination/Leh_Ladakh.jpg";
import destination_rajasthan from "../assets/images/destination/Rajasthan.jpg";
import destination_uttarakhand from "../assets/images/destination/Uttarakhand.jpg";

// Import Blogs default images
import blogs_1 from "../assets/images/blogs/blog_1.jpg";
import blogs_2 from "../assets/images/blogs/blog_2.jpeg";
import blogs_3 from "../assets/images/blogs/blog_3.jpeg";
import blogs_4 from "../assets/images/blogs/blog_4.jpg";

// Import Page Components
import TheBase from "../components/Base/TheBase.vue";
import SearchBar from "../components/Home/SearchBar.vue";
import TopItineraries from "../components/Home/TopItineraries.vue";
import WhyChooseUs from "../components/Home/WhyChooseUs.vue";
import TopDestinations from "../components/Home/TopDestinations.vue";
import AllTestimonial from "../components/Home/AllTestimonial.vue";
import TopBlogs from "../components/Home/TopBlogs.vue";
import SubscribeEmail from "../components/Home/SubscribeEmail.vue";

import { reactive, ref, onMounted } from "vue";

// Variables
const site_data = reactive({
  header: {
    title: "Crafting Your Perfect Journey",
    discription:
      "Can't Find Your Destination? Build Your Custom Travel Plan with Us!",
    search_options: [
      "Uttarakhand",
      "Leh Ladakh",
      "Himachal Pradesh",
      "Goa",
      "Kashmir",
      "Rajasthan",
      "Others",
    ],
    search_options_category: [
      "Honeymoon",
      "Workation",
      "Backpackers",
      "Family Trip",
      "Friends Trip",
      "Others",
    ],
  },
  top_itineraries: [
    {
      pk: 73,
      fields: {
        place_img: itineraries_goa,
        itinerary_name: "15 Days Workation Trip in Goa",
      },
    },
    {
      pk: 80,
      fields: {
        place_img: itineraries_himachal_pradesh,
        itinerary_name: "11D Friend's trip to Himachal",
      },
    },
    {
      pk: 68,
      fields: {
        place_img: itineraries_kashmir,
        itinerary_name: "7D 6N Honeymoon in Kashmir",
      },
    },
    {
      pk: 93,
      fields: {
        place_img: itineraries_leh_ladakh,
        itinerary_name: "Backpackers Leh ladakh",
      },
    },
    {
      pk: 77,
      fields: {
        place_img: itineraries_rajasthan,
        itinerary_name: "Family trip to Rajasthan",
      },
    },
    {
      pk: 58,
      fields: {
        place_img: itineraries_uttarakhand,
        itinerary_name: "7N 8D in Uttarakhand with family",
      },
    },
  ],
  destinations: [
    {
      name: "Uttarakhand",
      image_link: destination_uttarakhand,
      description: "Discover Uttarakhand: Nature's Paradise Awaits!",
      views: "1.3K",
    },
    {
      name: "Leh Ladakh",
      image_link: destination_leh_ladakh,
      description: "Discover Leh Ladakh: Where Adventure Meets Tranquility",
      views: "1.7K",
    },
    {
      name: "Himachal Pradesh",
      image_link: destination_himachal_pradesh,
      description: "Discover Himachal: Land of Enchanting Adventures",
      views: "2.1K",
    },
    {
      name: "Goa",
      image_link: destination_goa,
      description: "Discover Goa: Where Beaches Beckon and Adventures Await!",
      views: "3.0K",
    },
    {
      name: "Kashmir",
      image_link: destination_kashmir,
      description: "Discover the Beauty of Kashmir: A Paradise Unveiled",
      views: "1.5K",
    },
    {
      name: "Rajasthan",
      image_link: destination_rajasthan,
      description: "Discover Rajasthan: Land of Royalty and Riches",
      views: "1.3K",
    },
  ],
  choose_us: {
    title: "Why choose us",
    description:
      "Choose Travel Rover for a personalized, stress-free, and memorable travel experience. Let us turn your travel dreams into reality!",
    sub_list: [
      {
        name: "Personalized Itineraries",
        svg_link: Personalized_Itineraries,
      },
      {
        name: "Expert Guidance",
        svg_link: Expert_Guidance,
      },
      {
        name: "Budget-Friendly Options",
        svg_link: Budget_Friendly_Options,
      },
      {
        name: "Local Insights",
        svg_link: Local_Insights,
      },
      {
        name: "Hassle-Free Planning",
        svg_link: Hassle_Free_Planning,
      },
      {
        name: "Customer Satisfaction",
        svg_link: Customer_Satisfaction,
      },
    ],
  },
  testimonials: [
    {
      name: "Anuj Vadecha",
      review:
        "The agents I talked with through Travel Rover were really genuine",
      rating: 5,
    },
    {
      name: "Nitin Bhansali",
      review:
        "The wide varieties of itineraries and type of content really helped me",
      rating: 5,
    },
    {
      name: "Aman Dedhia",
      review:
        "Really like the add to compare feature which allows me to get the best itinerary",
      rating: 5,
    },
    {
      name: "Neel Shah",
      review:
        "Stumbled upon this website and found it satisfies all my travel requirements",
      rating: 5,
    },
    {
      name: "Aayush Jain",
      review:
        "As a solo traveller, this website was a really a great consultant",
      rating: 5,
    },
  ],
  blogs: [
    {
      title: "A New Era of Indian Tourism",
      subtitle: "How the COVID-19 pandemic is transforming travel in India",
      image: blogs_1,
      redirection_url: "embracing_blog",
      author: "Punit",
      duration: "6",
    },
    {
      title: '"Agent vs. DIY (Do It Yourself)"',
      subtitle: "Agent or DIY? Choosing the Right Travel Experience for You",
      image: blogs_2,
      redirection_url: "agent_or_diy",
      author: "Raj",
      duration: "5",
    },
    {
      title: "The Surging Trend of Hostels",
      subtitle:
        "Why Gen Z is Choosing Hostels for the Social and Adventurous Experience",
      image: blogs_3,
      redirection_url: "popularity_zostel",
      author: "Nayan",
      duration: "3",
    },
    {
      title: "Work + Vacation = Workation",
      subtitle:
        "Workation: Combining work and vacation for productivity and serenity",
      image: blogs_4,
      redirection_url: "workation",
      author: "Punit",
      duration: "2",
    },
  ],
});


onMounted(() => {
  try {
    document.querySelector(".base-header").style.backgroundColor = "#003fa3"
  } catch (error) {}
});

</script>

<template>
  <the-base>
    <search-bar :header="site_data.header"></search-bar>
    <top-itineraries
      :top_itineraries="site_data.top_itineraries"
    ></top-itineraries>
    <why-choose-us :choose_us="site_data.choose_us"></why-choose-us>
    <top-destinations
      :top_destinations="site_data.destinations"
    ></top-destinations>
    <all-testimonial :testimonials="site_data.testimonials"></all-testimonial>
    <top-blogs :blogs="site_data.blogs"></top-blogs>
    <subscribe-email></subscribe-email>
  </the-base>
</template>

<style>
.base-header {
  background-color: var(--primary);
}
</style>
