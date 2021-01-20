<template>
  <section>
    <siteheader />
    <div class="dt w-100 bg-black-20">
      <div class="tc pv4 pv5-ns">
        <h1 class="f3 f1-ns fw6 ttu mid-gray">Store Policy</h1>
      </div>
    </div>
    <article class="pa3 pa4-m pa5-l mw8 tl center mb3">
      <div class="pb3 f2-l f3 fw6">Customer Care Policy</div>

      <div class="lh-copy f5">
        Xclassyapparels.com is committed to providing outstanding customer service to all our customers. This policy explains our customer care policy and how we proactively provide merchandise in which our customers can have full confidence. In addition, this policy sets out key aspects of our service and explains our strategy for providing our customers with an outstanding shopping experience. Our strategy is focused on three important areas which include the following:
        <br />
        <br />
        <span class="b">Customer Experience:</span> We aim to understand and measure your expectations in order to provide an enhanced customer experience.
        <br />
        <br />
        <span class="b">Customer Communication:</span> We will set out information about our merchandise clearly and simply so that our customers can understand it. This includes information on how to provide feedback or give complain about our merchandise. We will promote the use of plain language for the communication medium. We will answer all correspondence in a professional, timely and efficient manner.
        <br />
        <br />
        <span class="b">Delivery of merchandise:</span> We will endeavor to deliver merchandise purchased by our customers in a timely manner.
        <br />​
      </div>

      <div class="pv3 f2-l f3 fw6">Payment Methods</div>

      <div class="lh-copy f5">
        - Credit / Debit Cards
        <br />- PAYPAL
        <br />- Offline Payments
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
