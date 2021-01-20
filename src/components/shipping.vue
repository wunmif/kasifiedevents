<template>
  <section>
    <siteheader />
    <div class="dt w-100 bg-black-20">
      <div class="tc pv4 pv5-ns">
        <h1 class="f3 f1-ns fw6 ttu mid-gray">
          Shipping
          <span class="pt5 f-headline-l f1">&</span> Returns
        </h1>
      </div>
    </div>
    <article class="pa3 pa4-m pa5-l mw8 tl center">
      <div class="pb3 f2-l f3 fw6">Shipping Policy</div>

      <div
        class="lh-copy f5"
      >Thank you for visiting and shopping at xclassyapparels.com. Following are the terms and conditions that constitute our Shipping Policy</div>

      <div class="pt3 f3-l f4 fw6">Domestic Shipping Policy</div>

      <div class="lh-copy f5">
        <div class="pt3 f5 fw6">Shipment Processing Time</div>All orders are processed within 1-2 business days if the shipping destination is within Lagos state. Orders requiring shipping to locations outside of Lagos state are processed with 3-5 business days. Orders are not shipped or delivered on weekends or holidays.
        <br />If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery. If there will be a significant delay in shipment of your order, we will contact you via email or telephone.
      </div>

      <div class="lh-copy f5">
        <div class="pt3 f5 fw6">Shipping rates & delivery estimates</div>Shipping charges for your order will be calculated and displayed at checkout.
      </div>

      <div class="lh-copy f5">
        <div class="pt3 f5 fw6">Shipment confirmation & Order tracking</div>You will receive a Shipment Confirmation email once your order has shipped containing your tracking numbers or alternatively you will receive a copy of the waybill detailing your order tracking information.
      </div>

      <div class="lh-copy f5">
        <div class="pt3 f5 fw6">Damages</div>Xclassyapparels.com is not liable for any orders damaged or lost during shipping. If you received your order damaged, please contact the shipment carrier to file a claim. Please save all packaging materials and damaged goods before filing a claim.
      </div>

      <div class="lh-copy f5">
        <div class="pt3 f5 fw6">International Shipping Policy</div>We currently do not ship outside of Nigeria.
      </div>

      <div class="pv3 f2-l f3 fw6">Returns, Exchanges & Refunds Policy</div>

      <div class="lh-copy f5">
        Thank you for shopping at xclassyapparels.com.
        <br />
        <br />Please read this policy carefully.
        <br />
        <br />​
        Xclassyapparels.com does not accept returns, process exchanges or issue refunds.
        If you have any questions about our Returns, Exchanges and Refunds Policy, please contact us:
        <br />
        <br />By email:
        <br />info@xclassyapparels.com
        <br />
        <br />By visiting this page on our website:
        <br />
        <router-link to="/contact" class="black no-underline">www.xclassyapparels.com/contact</router-link>
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
