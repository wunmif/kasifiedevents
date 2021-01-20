<template>
  <section>
    <siteheader/>
    <article class="pv2 b--black-10 ph3 ph0-l">
      <div class="flex flex-column flex-row-ns">
        <div class="w-100 w-60-ns pr3-ns order-2 order-1-ns">
          <h3 class="f6 athelas mt0 lh-title"> 
          'Cookies
          </h3>
          <p class="f5 f6-l lh-copy athelas">
          A cookie is a baked or cooked food that is typically small, flat and sweet. 
          It usually contains flour, sugar and some type of oil or fat. It may include 
          other ingredients such as raisins, oats, chocolate chips, nuts, etc.
          </p>
          <p>
              <a target="_blank" href=""  class="f7"> Read More >></a>
          </p>
        </div>
          <div class="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
              <img src="@/assets/img/fullcookies.jpg" class="h4 center db" alt="cookies">
          </div>
      </div>
      <div class="flex flex-column flex-row-ns">
        <div class="w-100 w-60-ns pr3-ns order-2 order-1-ns">
          <h3 class="f6 athelas mt0 lh-title"> 
          'Cookies
          </h3>
          <p class="f5 f6-l lh-copy athelas">
          A cookie is a baked or cooked food that is typically small, flat and sweet. 
          It usually contains flour, sugar and some type of oil or fat. It may include 
          other ingredients such as raisins, oats, chocolate chips, nuts, etc.
          </p>
          <p>
              <a target="_blank" href="" class="f7"> Read More >></a>
          </p>
        </div>
          <div class="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
              <img src="@/assets/img/fullcookies.jpg" class="h4 center db" alt="cookies">
          </div>
      </div>
      <div class="flex flex-column flex-row-ns">
        <div class="w-100 w-60-ns pr3-ns order-2 order-1-ns">
          <h3 class="f6 athelas mt0 lh-title"> 
          'Cookies
          </h3>
          <p class="f5 f6-l lh-copy athelas">
          A cookie is a baked or cooked food that is typically small, flat and sweet. 
          It usually contains flour, sugar and some type of oil or fat. It may include 
          other ingredients such as raisins, oats, chocolate chips, nuts, etc.
          </p>
          <p>
              <a target="_blank" href="" class="f7"> Read More >></a>
          </p>
        </div>
          <div class="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
              <img src="@/assets/img/fullcookies.jpg" class="h4 center db" alt="cookies">
          </div>
      </div>
      <div class="flex flex-column flex-row-ns">
        <div class="w-100 w-60-ns pr3-ns order-2 order-1-ns">
          <h3 class="f6 athelas mt0 lh-title"> 
          'Cookies
          </h3>
          <p class="f5 f6-l lh-copy athelas">
          A cookie is a baked or cooked food that is typically small, flat and sweet. 
          It usually contains flour, sugar and some type of oil or fat. It may include 
          other ingredients such as raisins, oats, chocolate chips, nuts, etc.
          </p>
          <p>
              <a target="_blank" href="" class="f7"> Read More >></a>
          </p>
        </div>
          <div class="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
              <img src="@/assets/img/fullcookies.jpg" class="h4 center db" alt="cookies">
          </div>
      </div>
      <p class="f7 lh-copy gray mv0">By <span class="ttu">Adetoun</span></p>
      <time class="f7 db gray">Dec. 10, 2020</time>
    </article>
    <sitefooter/>
  </section>   
</template>

<script type="text/javascript">
import { HTTP } from "@/common";
import { checkRedirect } from "@/common";
import siteheader from "@/components/generic/siteheader";
import newsletter from "@/components/generic/newsletter";
import sitefooter from "@/components/generic/sitefooter";
import articles from "@/components/generic/articles";

export default {
    components: {
    siteheader,  newsletter, sitefooter,  articles
  },
  data() {
    return {
      lLoading: true,
      notifications: [],
      username: "",
      password: "",
      IsCompany: true,
      hoverMember:false,
      slides: [
      'https://lorempixel.com/800/400/food/1',
      'https://lorempixel.com/800/400/food/2',
      'https://lorempixel.com/800/400/food/3',
      'https://lorempixel.com/800/400/food/4',
      'https://lorempixel.com/800/400/food/5',      
    ],
    current: 0,
    width: 800,
    timer: 0,
    };
  },
  methods: {
    nextSlide: function() {
      this.current++;
      if (this.current >= this.slides.length)
        this.current = 0;
      this.resetPlay();
    },

    prevSlide: function() {
      this.current--;
      if (this.current < 0)
        this.current = this.slides.length - 1;
      this.resetPlay();
    },

    selectSlide: function(i) {
      this.current = i;
      this.resetPlay();
    },

    resetPlay: function() {
      clearInterval(this.timer);
      this.play();
    },

    play: function() {
      let app = this;
      this.timer = setInterval(function() {
        app.nextSlide();
      }, 2000);
    },
    created: function() {
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
          password: this.password
        },
        {
          withCredentials: true
        }
      )
        .then(response => {
          this.notifications.push(response.data);
          setTimeout(checkRedirect(response.data), 2000);
        })
        .catch(e => {
          console.log(e);
          this.error = e;
          // this.errors.push(e)
        });
    }
  }
};
</script>


<style>
  * {box-sizing: border-box;}
  .mySlides {display: none;}
  img {vertical-align: middle;}

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
    from {opacity: .4} 
    to {opacity: 1}
  }

  @keyframes fade {
    from {opacity: .4} 
    to {opacity: 1}
  }

  /* On smaller screens, decrease text size */
  @media only screen and (max-width: 300px) {
    .text {font-size: 11px}
  }
</style>