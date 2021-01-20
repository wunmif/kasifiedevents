<template>
  <section>
    <siteheader />
    <div class="dt w-100 bg-black-20">
      <div class="tc pv4 pv5-ns">
        <h1 class="f3 f1-ns fw6 ttu mid-gray">Privacy Policy</h1>
      </div>
    </div>
    <article class="pa3 pa4-m pa5-l mw8 tl center mb3">
      <div class="pb3 f2-l f3 fw6">Privacy Policy</div>

      <div class="lh-copy f5">
        This privacy policy describes how your personal information is collected, used and shared when you visit or make a purchase from xclassyapparels.com.
        <br />
        <br />
        <span class="b">Personal Information.</span>
        <br />Certain information to include "Device Information" and "Order Information" is automatically collected by xclassyapparels.com when you visit our website. The combination of device information and order information is what we refer to as "Personal Information".
        <br />Xclassyapparels.com collects certain information about your device that includes information about your web browser, IP address and some of the cookies that are maintained on your devices. Further, as you browse our website, information regarding the web pages or merchandise you viewed would also be collected. These pieces of information "Device Information" is automatically collected.
        <br />In addition, when you make a purchase or attempt to make a purchase through our website, information to include your name, billing address, shipping address, payment information, email address, and phone number is also collected. These pieces of information "Order Information" is automatically collected.
        <br />
        <br />
        <span class="b">How we use your Personal Information.</span>
        <br />When you place an order through our website, your "Order information" enables us to fulfill customers' orders. Customer's order information enables xclassyapparels.com to process payment information, shipping arrangement and provide customers with invoices/order confirmations. Additionally, we use the order information to communicate with customers, screen orders placed for fraudulent activities and with customers' permission, provide customers with information on the merchandise we think the customer would be interested in based on the customer's shopping preferences. The "Device Information" collected enables us to screen for fraudulent/nefarious activities to include but not limited to IP address/Wi-FI spoofing, malware attacks, phishing activities, and identity theft attacks. Xclassyapparels.com is in the of providing optimal services to our customers and this includes guarding and protecting our customers' privacy.
        <br />
        <br />
        <span class="b">Sharing Customers' Personal Information.</span>
        <br />​
        Xclassyapparels.com does not currently share our customers' Personal Information with any third parties. However, if there is a need in the future to do so, we would inform our customers and provide customers the option to opt-in/out of sharing their Personal Information with third parties. Xclassyapparels.com would only share customers' Personal Information in certain circumstances. These circumstances include the following:
        <br />​
        Compliance with applicable laws and regulations
        <br />​
        Responding to a subpoena, search warrant or other lawful requests for information by the authorities
        <br />​
        Protection of our rights
        <br />
        <br />
        <span class="b">Changes</span>
        <br />Xclassyapparels.com reserves the right to update this privacy policy as necessary to reflect changes to our policy. For more information about our privacy policy, please contact us via email: info@xclassyapparels.com
        <br />
      </div>
    </article>
    <sitefooter />
  </section>
</template>

<script type="text/javascript">
import { HTTP } from "@/common";
import { checkRedirect } from "@/common";
import siteheader from "@/components/generic/siteheader";
import featureditems from "@/components/generic/featureditems";
import sitefooter from "@/components/generic/sitefooter";

export default {
  components: {
    siteheader,
    featureditems,
    sitefooter,
  },
  data() {
    return {
      lLoading: true,
      notifications: [],
      username: "",
      password: "",
      IsCompany: true,
      hoverMember: false,
      slides: [
        "https://lorempixel.com/800/400/food/1",
        "https://lorempixel.com/800/400/food/2",
        "https://lorempixel.com/800/400/food/3",
        "https://lorempixel.com/800/400/food/4",
        "https://lorempixel.com/800/400/food/5",
      ],
      current: 0,
      width: 800,
      timer: 0,
    };
  },
  methods: {
    nextSlide: function () {
      this.current++;
      if (this.current >= this.slides.length) this.current = 0;
      this.resetPlay();
    },

    prevSlide: function () {
      this.current--;
      if (this.current < 0) this.current = this.slides.length - 1;
      this.resetPlay();
    },

    selectSlide: function (i) {
      this.current = i;
      this.resetPlay();
    },

    resetPlay: function () {
      clearInterval(this.timer);
      this.play();
    },

    play: function () {
      let app = this;
      this.timer = setInterval(function () {
        app.nextSlide();
      }, 2000);
    },
    created: function () {
      this.play();
    },
    goToPage() {
      if (this.IsCompany) {
        this.$router.push({ name: "companies" });
      } else {
        this.$router.push({ name: "vendors" });
      }
    },
    keyUp(event) {
      if (event.code == "Enter") {
        this.login();
      }
    },
    login() {
      HTTP.post(
        "/api/login",
        {
          username: this.username,
          password: this.password,
        },
        {
          withCredentials: true,
        }
      )
        .then((response) => {
          this.notifications.push(response.data);
          setTimeout(checkRedirect(response.data), 2000);
        })
        .catch((e) => {
          console.log(e);
          this.error = e;
          // this.errors.push(e)
        });
    },
  },
};
</script>


<style>
* {
  box-sizing: border-box;
}
.mySlides {
  display: none;
}
img {
  vertical-align: middle;
}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .text {
    font-size: 11px;
  }
}
</style>
