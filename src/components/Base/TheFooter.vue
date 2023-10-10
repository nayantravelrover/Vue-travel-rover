<script setup>
import TheSocialMedia from "./TheSocialMedia.vue";
</script>

<template>
  <footer id="contact_us">
    <div class="footer-top">
      <div class="footer-top-left">
        <h3>Corporate Office:</h3>
        <ul>
          <!-- <li>Sitaram Nagane House, Zakeria Rd, Opp Tulsi Hotel, Opp Zee Nest Cyber, Malad (west), Mumbai -400064,
              Maharashtra </li> -->
          <li></li>
          <li>Phone number : <a href="tel:+917977790353">+91 7977790353</a></li>
          <li>
            Email - <a href="mailto:info@travelrover.in">info@travelrover.in</a>
          </li>
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
      <TheSocialMedia />
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
</template>

<style>
/* Footer Start */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  padding: 50px 0px;
}

.footer-bottom h3 {
  color: #e7e7e7;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.205px;
  padding: 0px;
  margin: 0px;
}

.footer-bottom > h3:nth-child(2) {
  opacity: 0.5;
}

.footer-bottom > h3:nth-child(1),
.footer-bottom > div {
  flex-grow: 1;
  flex-basis: 0;
}

.footer-bottom > div {
  text-align: end;
}

.footer-bottom div h3 {
  display: inline-block;
  margin-left: 24px;
}

.footer-middle h3 {
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.232px;
  background: linear-gradient(135deg, #f9ec7d 0%, #f5b100 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  padding-top: 80px;
}

.footer-top h3 {
  color: #fff;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.32px;
  text-transform: uppercase;
  margin-top: 0px;
}

.footer-top a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.footer-top ul {
  padding: 0px;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;
}

.footer-top-left ul {
  opacity: 0.6;
  width: 320px;
}

.footer-top-right {
  display: flex;
}

.footer-top-right > div {
  padding: 0px 30px;
}

.footer-top-right > div:last-child {
  padding-right: 0px;
}

footer {
  background: #0c111f;
  padding: 0em 5em;
  margin-top: 1em;
}

footer ul {
  list-style: none;
}
/* Footer Ends */

@media all and (max-width: 600px) {
  footer {
    margin-top: 0em;
    padding: 0 30px;
  }

  .footer-top {
    flex-direction: column;
    text-align: center;
    padding-top: 50px;
  }

  .footer-top-left {
    text-align: center;
  }

  .footer-top-right > div {
    padding: 0px 9px;
    padding-top: 1.5em;
  }

  .footer-middle {
    display: flex;
    justify-content: center;
  }

  .footer-middle h3 {
    margin: 4px;
    font-size: 14px;
    margin-right: 1em;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
    padding: 10px 0px;
    align-items: center;
  }

  .footer-bottom div h3 {
    margin: 0px 10px;
    font-size: 10px;
  }

  .footer-bottom h3 {
    padding: 6px 0px;
    font-size: 10px;
  }

  .footer-top h3{
    font-size: 14px;
  }

  .footer-top ul{
    font-size: 10px;
  }

  .social-media-list svg{
    width: 1em;
  height: 1em;
  }
}
</style>
