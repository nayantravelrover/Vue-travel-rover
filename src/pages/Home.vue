<template>
  <div id="home">

    <!-- Main Page -->
    <div class="main-background-wrapper row justify-center q-pa-md">
      <div class="search-input-bar row items-center col-md-8 justify-center">
        <div class="search-input col-md-5 col-xs-12">
          <q-select v-model="where_to" :options="options" label="Where to ?">
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
          </q-select>
        </div>
        <div class="search-input col-md-4 col-xs-12">
          <q-select v-model="category" :options="options_category" label="Category ?">
            <template v-slot:prepend>
              <q-icon style="margin-left: 5px" name="category" />
            </template>
          </q-select>
        </div>
        <q-btn class="search-button row col-md-3" flat color="" text-color="white" icon="search" label="Search"
          @click="go_to_category_itinerary(this.where_to, this.category)" />
      </div>
      <div class="main-background row">
        <div class="col-md-6 ">
          <h1>{{ site_data.header.title }} <span id="typing-element">{{ site_data.header.sub_title }}</span></h1>
          <!-- <h4>{{ site_data.header.discription }}</h4> -->


      <div class="lead_button_container" v-if="!$q.platform.is.mobile">
        <a class="book_meet" href="https://calendly.com/travelrover/travel-rover-consulting"
        target="_blank" style="margin-right: 15px">
        Book a meeting
      </a>
      <a class="message_us" :href="`https://api.whatsapp.com/send?phone=7977790353&text=Hello! I'm looking for assistance in planning my upcoming trip. Would you be able to help me create a customised itinerary?.`"
        target="_blank">
        Message Us
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="2em" height="2em" fill="white">
        <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z" />
    </svg>
      </a>
      
    </div>



        </div>
        <div class="col-md-6 gt-sm">
          <q-img src="../assets/travel.svg" />
        </div>
      </div>


     

    </div>
      <div class="lead_button_container" v-if="$q.platform.is.mobile">
        <a class="book_meet" href="https://calendly.com/travelrover/travel-rover-consulting"
        target="_blank" style="margin: 12px;">
        Book a meeting
      </a>
      <a class="message_us" :href="`https://api.whatsapp.com/send?phone=7977790353&text=Hello! I'm looking for assistance in planning my upcoming trip. Would you be able to help me create a customised itinerary?.`"
        target="_blank" style="margin: 12px;">
        Message Us
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="2em" height="2em" fill="white">
        <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z" />
    </svg>
      </a>
      
    </div>
     
    <!-- Main Page Ends -->

    <!-- Top Itineraries -->
    <div id="itineraries" class="q-pa-sm top-itineraries q-pa-md">
      <h5 class="text-center">Our Top Itineraries</h5>
      <Carousel v-bind="site_data.carousel.itinerary.setting" :breakpoints="site_data.carousel.itinerary.breakpoints">
        <Slide v-for="items in site_data.top_itineraries" :key="items">
          <q-card class="carousel_item itineraries-free-badge" @click="this.view_itinerary(items.pk)">
            <img :src="items.fields.place_img" />
            <h4 class="carousel_item_text">{{ items.fields.itinerary_name }}</h4>
          </q-card>
        </Slide>
        <!-- <template #addons>
          <Navigation />
        </template> -->
      </Carousel>
      <svg class="decore" xmlns="http://www.w3.org/2000/svg" width="60" height="154" viewBox="0 0 60 154" fill="none">
        <path
          d="M5.80016 8.98263C10.0386 3.84575 20.7556 -4.05221 29.7168 5.45102C38.678 14.9543 26.5885 32.7407 19.4236 40.4461C15.8916 42.5864 8.52484 46.2251 7.31387 43.6566C5.80016 40.4461 4.89193 33.7039 17.3044 27.9249C25.2766 24.5003 42.4925 20.8617 47.5786 33.7039C49.8996 39.2689 50.3033 52.1967 33.3497 59.3883L12.1577 68.6989M12.1577 68.6989C4.08462 69.0224 -7.52049 65.1731 10.644 47.1882C16.3961 44.4057 30.3223 38.7766 40.0101 38.5197C45.5603 39.6969 56.237 45.5187 54.5417 59.3883C54.7435 62.1708 50.9693 69.0842 34.258 74.4779C30.4232 75.3341 21.8455 77.1106 18.2126 77.3674L5.19471 79.2937L12.1577 68.6989ZM12.1577 68.6989C17.4551 67.2007 29.9575 64.6536 37.5881 66.4515C47.1264 68.6989 50.9088 66.7726 58.4773 79.2937C59.7892 85.7148 58.8406 98.8781 44.5512 100.162C30.2618 101.447 21.0382 98.9851 18.2126 97.5939V85.7148M18.2126 85.7148C28.6068 86.678 50.9088 85.9717 56.9636 75.4411C59.8901 67.9498 60.1121 52.6462 37.5881 51.3619C32.1388 51.576 20.5135 52.2609 17.6071 53.2883L18.2126 76.0832C28.8086 77.0464 51.0904 81.6053 55.4499 92.1359C57.7709 98.236 58.5379 111.078 43.0375 113.647C37.2854 113.861 24.2675 113.069 18.2126 108.189M18.2126 85.7148V108.189M18.2126 85.7148C24.772 87.3201 39.2229 91.7507 44.5512 96.6307C51.0097 101.982 60.4754 115.252 46.6704 125.526C42.3311 127.131 30.8066 128.415 19.4236 120.71M18.2126 108.189L19.4236 120.71M18.2126 108.189C25.4784 113.326 40.3128 125.783 41.5238 134.515C42.0283 139.866 40.6761 151.017 31.2305 152.815C28.8086 153.243 22.8143 153.201 18.2126 149.605L19.4236 120.71"
          stroke="#2563EB" stroke-width="0.603175" />
      </svg>
    </div>
    <!-- Top Itineraries Ends -->

    <!-- Why Choose Us -->
    <div id="why_choose_us" class="q-pa-sm why-choose-uss q-pa-md">
      <div class="row justify-center">
        <div class="col-6">
          <h3>{{ site_data.choose_us.title }}</h3>
          <h4>{{ site_data.choose_us.description }}</h4>
          <div class="why-choose-uss-sublist">
            <q-list v-for="item in site_data.choose_us.sub_list" :key="item">
              <q-item v-ripple>
                <div>
                  <img :src="item.svg_link" alt="" srcset="">
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
          <img src="../assets/icons/choose_us.png" alt="choose us">
        </div>
      </div>
    </div>
    <!-- Why Choose Us Ends -->

    <!-- Top Destinations -->
    <div id="destinations" class="q-pa-sm top-destinations q-pa-md">
      <h5 class="text-center">Our Top Destinations</h5>
      <Carousel class="top-destinations-items-cards" v-bind="site_data.carousel.destinations.setting"
        :breakpoints="site_data.carousel.destinations.breakpoints">
        <Slide v-for="item in site_data.destinations" :key="item">
          <q-card class="top-destinations-items">
            <img :src="item.image_link" />
            <div class="top-destinations_item_text row no-wrap justify-between">
              <div>{{ item.name }}</div>
              <div><q-icon name="visibility" />{{ item.views }}</div>
            </div>
            <div class="top-destinations_item_text2">
              <div>{{ item.description }}</div>
              <q-btn unelevated rounded color="primary" label="See more" @click="go_to_images(item.name)" />
            </div>
          </q-card>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
      <svg class="decore" xmlns="http://www.w3.org/2000/svg" width="60" height="154" viewBox="0 0 60 154" fill="none">
        <path
          d="M5.80016 8.98263C10.0386 3.84575 20.7556 -4.05221 29.7168 5.45102C38.678 14.9543 26.5885 32.7407 19.4236 40.4461C15.8916 42.5864 8.52484 46.2251 7.31387 43.6566C5.80016 40.4461 4.89193 33.7039 17.3044 27.9249C25.2766 24.5003 42.4925 20.8617 47.5786 33.7039C49.8996 39.2689 50.3033 52.1967 33.3497 59.3883L12.1577 68.6989M12.1577 68.6989C4.08462 69.0224 -7.52049 65.1731 10.644 47.1882C16.3961 44.4057 30.3223 38.7766 40.0101 38.5197C45.5603 39.6969 56.237 45.5187 54.5417 59.3883C54.7435 62.1708 50.9693 69.0842 34.258 74.4779C30.4232 75.3341 21.8455 77.1106 18.2126 77.3674L5.19471 79.2937L12.1577 68.6989ZM12.1577 68.6989C17.4551 67.2007 29.9575 64.6536 37.5881 66.4515C47.1264 68.6989 50.9088 66.7726 58.4773 79.2937C59.7892 85.7148 58.8406 98.8781 44.5512 100.162C30.2618 101.447 21.0382 98.9851 18.2126 97.5939V85.7148M18.2126 85.7148C28.6068 86.678 50.9088 85.9717 56.9636 75.4411C59.8901 67.9498 60.1121 52.6462 37.5881 51.3619C32.1388 51.576 20.5135 52.2609 17.6071 53.2883L18.2126 76.0832C28.8086 77.0464 51.0904 81.6053 55.4499 92.1359C57.7709 98.236 58.5379 111.078 43.0375 113.647C37.2854 113.861 24.2675 113.069 18.2126 108.189M18.2126 85.7148V108.189M18.2126 85.7148C24.772 87.3201 39.2229 91.7507 44.5512 96.6307C51.0097 101.982 60.4754 115.252 46.6704 125.526C42.3311 127.131 30.8066 128.415 19.4236 120.71M18.2126 108.189L19.4236 120.71M18.2126 108.189C25.4784 113.326 40.3128 125.783 41.5238 134.515C42.0283 139.866 40.6761 151.017 31.2305 152.815C28.8086 153.243 22.8143 153.201 18.2126 149.605L19.4236 120.71"
          stroke="#2563EB" stroke-width="0.603175" />
      </svg>
      <!-- <h3 class="top-destinations_item_bottom_text">Steps to join your ultimate and trustworthy travel partner with us</h3> -->
    </div>
    <!-- Top Destinations Ends -->

    <!-- Testimonials -->
    <div id="testimonials"  class="testimonials">
      <svg xmlns="http://www.w3.org/2000/svg" width="1022" height="592" viewBox="0 0 1022 592" fill="none">
        <path
          d="M1020.52 289.846C942.945 404.204 704.918 623.804 373.371 587.344C245.545 588.54 -7.77733 518.442 1.54562 228.48C-5.00957 134.338 68.9185 -54.2718 318.016 15.5428"
          stroke="#23BDEE" stroke-width="0.888722" stroke-linecap="square" stroke-dasharray="35.55 35.55" />
      </svg>
      <h5 class="text-center">What our users say about us</h5>
      <Carousel v-bind="site_data.carousel.testimonials.setting"
        :breakpoints="site_data.carousel.testimonials.breakpoints">
        <Slide class="testimonials_carousel_item" v-for="item in site_data.testimonials" :key="item">
          <q-card>
            <img src="../assets/Apostrophe.svg" />
            <q-card-section>{{ item.review }}</q-card-section>
            <q-card-section><q-rating v-model="item.rating" color="orange" size="32px" no-dimming /></q-card-section>
            <q-card-section>{{ item.name }}</q-card-section>
          </q-card>
        </Slide>
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
    <!-- Testimonials Ends -->

    <!-- Blog section -->
    <div id="blogs" class="q-pa-sm blogs q-pa-md">
      <h5 class="text-center">Blogs</h5>
      <p>Some Blogs from traveller around the world</p>
      <Carousel  class="blogs-cards" v-bind="site_data.carousel.blogs.setting"
        :breakpoints="site_data.carousel.blogs.breakpoints">
        <Slide v-for="item in site_data.blogs" :key="item">
          <q-card class="blogs_item" @click="redirectToAnotherPage(item.redirection_url)">
            <span class="read-duration">{{ item.duration }} Min Read</span>
            <img :src="item.image" class="image_style" />
            <q-card-section>
              <h1>{{ item.title }}</h1>
              <p>{{ item.subtitle }}</p>
              <p><span class="blogs_item_tag">Solo Travel</span> By <span class="blogs_item_author">{{ item.author
              }}</span></p>
            </q-card-section>
          </q-card>
        </Slide>
        <!-- <template #addons>
          <Navigation />
        </template> -->
      </Carousel>
    </div>
    <!-- Blog section Ends -->

    <!-- Subscribe  -->
    <div class="q-pa-md subscribe-wrapper">
      <img src="../assets/icons/dercore_2.png" />
      <q-card class="row justify-center items-center subscribe">
        <q-img class="mask-left subscribe-left-image" src="../assets/MaskGroup.png" />
        <q-img class="mask-right subscribe-right-image" width="" src="../assets/MaskGroup-1.png" />
        <div class="q-pa-md">
          <div class="subscribe-container">
            <span class="subscribe-description q-pa-md">Subscribe to get information, latest news and other interesting
              offers about Travel Rover</span>
          </div>
          <div class="q-gutter-md row justify-center subscribe-inputs">
            <q-btn class="subscribe-input-btn" style="" unelevated rounded color="primary" label="Subscribe"
              @click="subscribe()" />
          </div>
        </div>
      </q-card>
    </div>
    <!-- Subscribe Ends  -->

    <!-- Contact Us -->
    <footer id="contact_us">
      <div class="footer-top">
        <div class="footer-top-left">
          <h3>Corporate Office:</h3>
          <ul>
            <!-- <li>Sitaram Nagane House, Zakeria Rd, Opp Tulsi Hotel, Opp Zee Nest Cyber, Malad (west), Mumbai -400064,
              Maharashtra </li> -->
            <li></li>
            <li>Phone number : <a href="tel:+917977790353">+91 7977790353</a></li>
            <li>Email - <a href="mailto:info@travelrover.in">info@travelrover.in</a></li>
          </ul>
        </div>
        <div class="footer-top-right">
          <div>
            <h3>Company</h3>
            <ul>
              <li>About us</li>
              <li>Destination</li>
              <li>Packages</li>
            </ul>
          </div>
          <div>
            <h3>Help</h3>
            <ul>
              <li>Help/FAQs</li>
              <li>Cancel Your Plan</li>
              <li>Customer Care</li>
            </ul>
          </div>
          <div>
            <h3>More</h3>
            <ul>
              <li>Privacy policy</li>
              <li>Terms of use</li>
              <li>Accessibility</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-middle">
        <h3>Follow us</h3>
        <div class="social-media-list">
          <a href="javascript:void(0);" disabled>
            <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.11163 3.41179H9.92331V0.256441C9.61075 0.213443 8.53581 0.116699 7.28393 0.116699C4.67183 0.116699 2.88248 1.7597 2.88248 4.77944V7.55856H0V11.086H2.88248V19.9617H6.41654V11.0868H9.18243L9.6215 7.55939H6.41571V5.12921C6.41654 4.10967 6.69106 3.41179 8.11163 3.41179Z"
                fill="white" />
            </svg>
          </a>
          <a href="javascript:void(0);" disabled>
            <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.4784 1.97573C19.7512 2.29473 18.9763 2.50617 18.1684 2.60884C18.9995 2.11262 19.6339 1.33284 19.9321 0.392949C19.1572 0.854949 18.3016 1.18128 17.3899 1.36339C16.6541 0.579949 15.6054 0.0947266 14.4614 0.0947266C12.2419 0.0947266 10.455 1.89628 10.455 4.10484C10.455 4.42262 10.4819 4.72817 10.5479 5.01906C7.21485 4.8565 4.26563 3.25906 2.28441 0.825615C1.93852 1.42573 1.73563 2.11262 1.73563 2.85206C1.73563 4.2405 2.45063 5.47128 3.51641 6.18384C2.8723 6.17162 2.24041 5.98462 1.70507 5.69006C1.70507 5.70228 1.70507 5.71817 1.70507 5.73406C1.70507 7.68228 3.09474 9.3005 4.91707 9.67328C4.59074 9.7625 4.23507 9.80528 3.86596 9.80528C3.6093 9.80528 3.35018 9.79062 3.10696 9.73684C3.62641 11.3245 5.10041 12.4917 6.85307 12.5296C5.48907 13.5966 3.75718 14.2395 1.8823 14.2395C1.55352 14.2395 1.23818 14.2248 0.922852 14.1845C2.69874 15.3297 4.80341 15.9836 7.07307 15.9836C14.4504 15.9836 18.4837 9.8725 18.4837 4.57539C18.4837 4.39817 18.4776 4.22706 18.4691 4.05717C19.2647 3.4925 19.9333 2.78728 20.4784 1.97573Z"
                fill="white" />
            </svg>
          </a>
          <a href="https://instagram.com/travel_rovers?igshid=MzRlODBiNWFlZA==">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M6.72852 0.0390625H14.2285C17.6798 0.0390625 20.4785 2.83781 20.4785 6.28906V13.7891C20.4785 17.2403 17.6798 20.0391 14.2285 20.0391H6.72852C3.27727 20.0391 0.478516 17.2403 0.478516 13.7891V6.28906C0.478516 2.83781 3.27727 0.0390625 6.72852 0.0390625ZM14.2285 18.1641C16.641 18.1641 18.6035 16.2016 18.6035 13.7891V6.28906C18.6035 3.87656 16.641 1.91406 14.2285 1.91406H6.72852C4.31602 1.91406 2.35352 3.87656 2.35352 6.28906V13.7891C2.35352 16.2016 4.31602 18.1641 6.72852 18.1641H14.2285Z"
                fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M5.47852 10.0391C5.47852 7.27781 7.71727 5.03906 10.4785 5.03906C13.2398 5.03906 15.4785 7.27781 15.4785 10.0391C15.4785 12.8003 13.2398 15.0391 10.4785 15.0391C7.71727 15.0391 5.47852 12.8003 5.47852 10.0391ZM7.35352 10.0391C7.35352 11.7616 8.75602 13.1641 10.4785 13.1641C12.201 13.1641 13.6035 11.7616 13.6035 10.0391C13.6035 8.31531 12.201 6.91406 10.4785 6.91406C8.75602 6.91406 7.35352 8.31531 7.35352 10.0391Z"
                fill="white" />
              <circle cx="15.8538" cy="4.6643" r="0.66625" fill="white" />
            </svg>
          </a>
          <a href="https://api.whatsapp.com/send?phone=7977790353&text=Hello! I'm looking for assistance in planning my upcoming trip. Would you be able to help me create a customised itinerary?"
            target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="500px" height="500px" fill="white">
              <path
                d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z" />
            </svg>
          </a>
        </div>
      </div>
      <div class="footer-bottom">
        <h3>Made in India with ❤️</h3>
        <h3>© 2023 All Rights Reserved</h3>
        <div>
          <h3>Terms & Conditions</h3>
          <h3>Privacy Policy</h3>
        </div>
      </div>
    </footer>
    <!-- Contact Us Ends-->
  </div>

  <!-- <q-dialog class="flex justify-center" v-model="preview_itinerary" >
    <ViewItinerary/>
  </q-dialog> -->


  <!-- Preview Itinerary -->
  <PreviewItinerary />
  <!-- Preview Itinerary Ends -->
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import { useQuasar, Notify } from "quasar";
import { matTrendingFlat } from "@quasar/extras/material-icons";
import PreviewItinerary from './PreviewItinerary.vue';
import _ from "lodash";
import Typed from 'typed.js';
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import {
  basicconfig,
  subscribe_user,
  check_if_access_token_is_valid,
  check_if_refresh_token_is_valid,
  create_prompt,
  load_top_selling_itineraries,
  get_category_itinerary
} from "src/common/api_calls";

// Import Itineraries default images
import itineraries_goa from "../assets/images/itineraries/Goa.jpg"
import itineraries_himachal_pradesh from "../assets/images/itineraries/Himachal_Pradesh.jpg"
import itineraries_kashmir from "../assets/images/itineraries/Kashmir.jpg"
import itineraries_leh_ladakh from "../assets/images/itineraries/Leh_Ladakh.jpg"
import itineraries_rajasthan from "../assets/images/itineraries/Rajasthan.jpg"
import itineraries_uttarakhand from "../assets/images/itineraries/Uttarakhand.jpg"

// Import Destination default images
import destination_goa from "../assets/images/destination/Goa.jpg"
import destination_himachal_pradesh from "../assets/images/destination/Himachal_Pradesh.jpg"
import destination_kashmir from "../assets/images/destination/Kashmir.jpg"
import destination_leh_ladakh from "../assets/images/destination/Leh_Ladakh.jpg"
import destination_rajasthan from "../assets/images/destination/Rajasthan.jpg"
import destination_uttarakhand from "../assets/images/destination/Uttarakhand.jpg"

// Import Blogs default images
import blogs_1 from "../assets/images/blogs/blog_1.jpg"
import blogs_2 from "../assets/images/blogs/blog_2.jpeg"
import blogs_3 from "../assets/images/blogs/blog_3.jpeg"
import blogs_4 from "../assets/images/blogs/blog_4.jpg"

// Import ContactUs default svg
import Budget_Friendly_Options from "../assets/images/contactus/Budget_Friendly_Options.svg"
import Customer_Satisfaction from "../assets/images/contactus/Customer_Satisfaction.svg"
import Expert_Guidance from "../assets/images/contactus/Expert_Guidance.svg"
import Hassle_Free_Planning from "../assets/images/contactus/Hassle_Free_Planning.svg"
import Local_Insights from "../assets/images/contactus/Local_Insights.svg"
import Personalized_Itineraries from "../assets/images/contactus/Personalized_Itineraries.svg"

import {
  useGoogleTagManager,
  useLinkedinInsightTag,
} from "@dreamonkey/quasar-app-extension-tracking";


function get_default_date() {
  return new Date().toLocaleString("default", { year: "numeric" }) +
    "-" +
    new Date().toLocaleString("default", { month: "2-digit" }) +
    "-" +
    new Date().toLocaleString("default", { day: "2-digit" })
}


let $q;
export default defineComponent({
  name: "HomePage",
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
    PreviewItinerary,
  },
  plugins: { 
    Notify,
  },
  data() {
    return {
      default_date: get_default_date(),
      where_to: ref(null),
      category: ref(null),
      area: "",
      qDateProxy: ref(null),
      top_itineraries_list: [],
      options: [
        "Uttarakhand",
        "Leh Ladakh",
        "Himachal Pradesh",
        "Goa",
        "Kashmir",
        "Rajasthan",
        "Others"
      ],
      options_category: [
        "Honeymoon",
        "Workation",
        "Backpackers",
        "Family Trip",
        "Friends Trip",
        "Others"
      ],
      site_data: {
        header: {
          title: "Your Gateway to India:",
          sub_title: "",
          sub_title_list: ["Find Expert Travel Consultations","Explore India with Confidence"],
          discription: "We're not just travel consultants, we're your personal Indian adventure architects."
        },
        top_itineraries: [
          {
            "pk": 73,
            "fields": {
              "place_img": itineraries_goa,
              "itinerary_name": "15 Days Workation Trip in Goa",
            }
          },
          {
            "pk": 80,
            "fields": {
              "place_img": itineraries_himachal_pradesh,
              "itinerary_name": "11D Friend's trip to Himachal",
            }
          },
          {
            "pk": 68 ,
            "fields": {
              "place_img": itineraries_kashmir,
              "itinerary_name": "7D 6N Honeymoon in Kashmir",
            }
          },
          {
            "pk": 93,
            "fields": {
              "place_img": itineraries_leh_ladakh,
              "itinerary_name": "Backpackers Leh ladakh",
            }
          },
          {
            "pk": 77 ,
            "fields": {
              "place_img": itineraries_rajasthan,
              "itinerary_name": "Family trip to Rajasthan",
            }
          },
          {
            "pk": 58 ,
            "fields": {
              "place_img": itineraries_uttarakhand,
              "itinerary_name": "7N 8D in Uttarakhand with family",
            }
          },

        ],
        destinations: [
          {
            name: "Uttarakhand",
            image_link: destination_uttarakhand,
            description: "Discover Uttarakhand: Nature's Paradise Awaits!",
            views: "1.3K"
          }, {
            name: "Leh Ladakh",
            image_link: destination_leh_ladakh,
            description: "Discover Leh Ladakh: Where Adventure Meets Tranquility",
            views: "1.7K"
          }, {
            name: "Himachal Pradesh",
            image_link: destination_himachal_pradesh,
            description: "Discover Himachal: Land of Enchanting Adventures",
            views: "2.1K"
          }, {
            name: "Goa",
            image_link: destination_goa,
            description: "Discover Goa: Where Beaches Beckon and Adventures Await!",
            views: "3.0K"
          }, {
            name: "Kashmir",
            image_link: destination_kashmir,
            description: "Discover the Beauty of Kashmir: A Paradise Unveiled",
            views: "1.5K"
          }, {
            name: "Rajasthan",
            image_link: destination_rajasthan,
            description: "Discover Rajasthan: Land of Royalty and Riches",
            views: "1.3K"
          }
        ],
        choose_us: {
          title: "Why choose us",
          description: "With a dedicated team of India travel enthusiasts, we bring an in-depth understanding of the country's diverse culture and destinations to the forefront. When you choose us, you choose local insights, seasoned guidance, and a world of adventure.",
          sub_list: [
            {
              name: "Personalized Itineraries",
              svg_link: Personalized_Itineraries
            }, {
              name: "Expert Guidance",
              svg_link: Expert_Guidance
            }, {
              name: "Budget-Friendly Options",
              svg_link: Budget_Friendly_Options
            }, {
              name: "Local Insights",
              svg_link: Local_Insights
            }, {
              name: "Hassle-Free Planning",
              svg_link: Hassle_Free_Planning
            }, {
              name: "Customer Satisfaction",
              svg_link: Customer_Satisfaction
            }
          ]
        },
        testimonials: [
          {
            name: "Anuj Vadecha",
            review: "The agents I talked with through Travel Rover were really genuine",
            rating: 5
          }, {
            name: "Nitin Bhansali",
            review: "The wide varieties of itineraries and type of content really helped me",
            rating: 5
          }, {
            name: "Aman Dedhia",
            review: "Really like the add to compare feature which allows me to get the best itinerary",
            rating: 5
          }, {
            name: "Neel Shah",
            review: "Stumbled upon this website and found it satisfies all my travel requirements",
            rating: 5
          }, {
            name: "Aayush Jain",
            review: "As a solo traveller, this website was a really a great consultant",
            rating: 5
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
            subtitle: "Why Gen Z is Choosing Hostels for the Social and Adventurous Experience",
            image: blogs_3,
            redirection_url: "popularity_zostel",
            author: "Nayan",
            duration: "3",
          },
          {
            title: "Work + Vacation = Workation",
            subtitle: "Workation: Combining work and vacation for productivity and serenity",
            image: blogs_4,
            redirection_url: "workation",
            author: "Punit",
            duration: "2",
          },
        ],
        carousel: {
          itinerary: {
            setting: {
              itemsToShow: 1.25,
              snapAlign: 'center',
              wrapAround: true,
              autoplay: 5000,
              // pauseAutoplayOnHover: true,
            },
            breakpoints: {
              700: {
                itemsToShow: 3,
              },
              1024: {
                itemsToShow: 5,
              },
            }
          },
          destinations: {
            setting: {
              itemsToShow: 1.5,
              snapAlign: 'center',
              wrapAround: true,
              autoplay: 6000,
              // pauseAutoplayOnHover: true,
            },
            breakpoints: {
              700: {
                itemsToShow: 3,
                snapAlign: 'center',
              },
              1024: {
                itemsToShow: 5,
                snapAlign: 'center',
              },
            }
          },
          testimonials: {
            setting: {
              itemsToShow: 2.2,
              snapAlign: 'center',
              wrapAround: true,
              autoplay: 6000,
              pauseAutoplayOnHover: true,
            },
            breakpoints: {
              700: {
                itemsToShow: 2.2,
              }
            }
          },
          blogs: {
            setting: {
              itemsToShow: 1.6,
              snapAlign: 'start',
              wrapAround: true,
              autoplay: 6000,
            },
            breakpoints: {
              700: {
                itemsToShow: 4,
                autoplay: 0,
                wrapAround: false,
              }
            }
          }
        },
      }
    };
  },
  methods: {
    view_itinerary(id) {
      let itinerary = [];
      console.log( this.top_itineraries_list)
      this.top_itineraries_list.forEach(function(item){
          if(item.pk == id){
            itinerary = item.fields;
            return;
          }
      });
      if (itinerary){
        console.log(itinerary)
        this.$store.commit('itinerary_preview_update', itinerary)
        this.$store.commit('itinerary_pk_update', id)
        this.$store.commit('toggle_preview_itinerary_modal', true)
      }
    },
    go_to_images(item) {
      this.$router.push({
        path: "/destination/",
        name: "DestinationPage",
        query: { place: item, date: this.default_date }
      });
    },
    subscribe() {
      if (this.$store.state.user_logged_in == false) {
        $q.notify({
          type: "negative",
          message: "Kindly log-in/sign-up to enable this functionality",
          position: "top",
        });
      } else {
        check_if_access_token_is_valid()
          .then((response) => {
            var access_token = window.localStorage.getItem(
              "travel_rover_access"
            );
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
            this.$store.commit("user_logged_in_update", true);
          })
          .catch((err) => {
            check_if_refresh_token_is_valid()
              .then((response) => {
                var access_token = response["data"]["access"];

                window.localStorage.setItem(
                  "travel_rover_access",
                  access_token
                );
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
                this.$store.commit("user_logged_in_update", true);
                console.log(response);
              })
              .catch((err) => {
                $q.notify({
                  type: "negative",
                  message: "Kindly log-in/sign-up to enable this functionality",
                  position: "top",
                });
                this.$store.commit("user_logged_in_update", false);
                console.log(err);
              });
          });
      }
    },
    create_chatgpt_prompt() {
      if (this.$store.state.user_logged_in == false) {
        $q.notify({
          type: "negative",
          message: "Kindly log-in/sign-up to enable this functionality",
          position: "top",
        });
      } else {
        check_if_access_token_is_valid()
          .then((response) => {
            var access_token = window.localStorage.getItem(
              "travel_rover_access"
            );
            create_prompt({ prompt: this.area }, access_token)
              .then((response) => {
                var pk_of_prompt = response["data"]["pk_of_prompt"];

                $q.notify({
                  type: "positive",
                  message: "Saved succesfully.",
                  position: "top",
                });
                window.open(
                  "/#/itinarybuilder?pk=-1&pk_of_prompt=" + pk_of_prompt,
                  "_blank"
                );
              })
              .catch((err) => {
                $q.notify({
                  type: "negative",
                  message:
                    "Some internal issues are going on, please try by reloading again",
                  position: "top",
                });
              });
          })
          .catch((err) => {
            check_if_refresh_token_is_valid()
              .then((response) => {
                var access_token = response["data"]["access"];
                window.localStorage.setItem(
                  "travel_rover_access",
                  access_token
                );
                create_prompt({ prompt: this.area }, access_token)
                  .then((response) => {
                    var pk_of_prompt = response["data"]["pk_of_prompt"];
                    $q.notify({
                      type: "positive",
                      message: "Saved succesfully.",
                      position: "top",
                    });
                    window.open(
                      "/#/itinarybuilder?pk=-1&pk_of_prompt=" + pk_of_prompt,
                      "_blank"
                    );
                  })
                  .catch((err) => {
                    $q.notify({
                      type: "negative",
                      message: "Some internal issues are going on",
                      position: "top",
                    });
                  });
                console.log(response);
              })
              .catch((err) => {
                $q.notify({
                  type: "negative",
                  message: "Kindly log-in/sign-up to enable this functionality",
                  position: "top",
                });
                this.$store.commit("user_logged_in_update", false);
                console.log(err);
              });
          });
      }
    },
    go_to_category_itinerary(item, category) {
      if (item == "Others" || category == "Others") {
        window.open(
          "https://api.whatsapp.com/send?phone=7977790353&text=Hello! I'm looking for assistance in planning my upcoming trip. Would you be able to help me create a customised itinerary?",
          "_blank" // <- This is what makes it open in a new window.
        );
      } else if (category == "" || category == null) {
        if (item != "" || item != null) {
          this.$router.push({
            path: "/destination/",
            name: "DestinationPage",
            query: { place: item, date: this.default_date }
          });
        } else {
          $q.notify({
            type: "negative",
            message: "Kindly select a category",
            position: "top",
          });
        }
      } else {
        get_category_itinerary({ "category": category, "place_name": item })
          .then((response) => {

            //this.card = true
            this.$store.commit('toggle_preview_itinerary_modal', true)
            var itinerary = []

            itinerary = JSON.parse(response.data.data)[0]["fields"]
            this.$store.commit('itinerary_preview_update', itinerary)
            this.$store.commit('itinerary_pk_update', JSON.parse(response.data.data)[0]['pk'])
            console.log("here")

          })
          .catch((err) => {
            $q.notify({
              type: "negative",
              message: "Some internal issues are going on",
              position: "top",
            });
          });
      }
    },
    scroll(id) {
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: "smooth" });
    },
    handleDateSelection() {
      this.$refs.qDateProxy.hide(); // Close the modal after selecting a date
    },
    redirectToAnotherPage(param) {
      if (param == "embracing_blog") {
        this.$router.push("/embracing_blog");
      }
      if (param == "agent_or_diy") {
        this.$router.push("/agent_or_diy");
      }
      if (param == "popularity_zostel") {
        this.$router.push("/popularity_zostel");
      }
      if (param == "workation") {
        this.$router.push("/workation");
      }
    },
  },
  setup() {
    const data = ref({});
    const loading = ref(true);
    const error = ref(null);
    return {
      data,
      loading,
      error,
      matTrendingFlat
    };
  },
  mounted() {
    useGoogleTagManager("G-HGTNLCSVZ0");
    this.site_data.header.sub_title = "Find Expert Travel Consultations";

    // Load TypeWriter Affect
    // this.site_data.header.sub_title = new Typed('#typing-element', {
    //   strings: this.site_data.header.sub_title_list,
    //   startDelay: 100,
    //   typeSpeed: 80,
    //   backSpeed: 30,
    //   backDelay: 700,
    //   shuffle: true,
    //   loop: true,
    //   loopCount: Infinity,
    // });

    // Load Top Itineraries
    load_top_selling_itineraries().then((response) => {
      let response_data = JSON.parse(response.data.data);
      this.top_itineraries_list = response_data;
    });
  },
  created() {
    document.onreadystatechange = () => {
      if (document.readyState === "complete") {
        basicconfig().then((response) => {
          // console.log(JSON.parse(response.data.data)[0]["fields"]);
          // Code here to auto populate site data
        });
      }
    };
  },
});
</script>

<style src="../assets/css/home.css"></style>
