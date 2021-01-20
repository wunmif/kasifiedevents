<template>
  <section>
    <siteheader />
    <div class="w-100 vh-100  overflow-scroll cf h-100  relative">
      <carousel
        @next="next"
        @prev="prev"
      >
        <carousel-slide v-for="(slide,index) in slides" 
          :key="slide" 
          :index="index"
          :visibleSlide="visibleSlide"
          :direction="direction"
          >
          <img :src="slide" class="w-100" /> 
          
          
        </carousel-slide>
      </carousel>
      
    </div>
    <div class="w-100 mw9 center cf">
      <featureditems title="NEW ARRIVALS" />

      <div class="fl w-100 pv4">
        <div class="w-100 w-50-l fl pa1">
          <div class="w-100 pa3 vh-50" style="width:100%;" :style="{backgroundImage: 'url('+require('@/assets/img/cookiecol.jpg')+') '}">
            <div class="dt w-100 h-100 bg-black-20">
              <div class="dtc v-mid tc pointer">
                <button
                  class="center pointer hover-black br1 pv2 ph3 bn near-white f5"
                  style="background:#322514"
                >SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>

        <div class="w-100 w-50-l fl pa1">
          <div class="w-100 pa3 vh-50" style="width:100%;" :style="{backgroundImage: 'url('+require('@/assets/img/cookiecol2.jpg')+') '}">
            <div class="dt w-100 h-100 bg-black-20">
              <div class="dtc v-mid tc pointer">
                <button
                  class="center pointer hover-black br1 pv2 ph3 bn near-white f5"
                  style="background:#e75874"
                >SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>

        <div class="w-100 w-50-l fl pa1">
          <div class="w-100 pa3 vh-50" style="width:100%;" :style="{backgroundImage: 'url('+require('@/assets/img/ban.jpg')+') '}">
            <div class="dt w-100 h-100 bg-black-20">
              <div class="dtc v-mid tc pointer">
                <button
                  class="center pointer hover-black br1 pv2 ph3 bn near-black f5"
                  style="background:#fbcbc9"
                >SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>

        <div class="w-100 w-50-l fl pa1">
          <div class="w-100  pa3 vh-50" style="width:100%;" :style="{backgroundImage: 'url('+require('@/assets/img/ban.jpg')+') '}">
            <div class="dt w-100 h-100 bg-black-20">
              <div class="dtc v-mid tc pointer">
                <button
                  class="center pointer hover-black br1 pv2 ph3 bn near-black f5"
                  style="background:#322514"
                >SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <featureditems title="Featured collection" />
    </div>
    <sitefooter />
  </section>
</template>

<script type="text/javascript">
import { HTTP } from "@/common";
import { checkRedirect } from "@/common";
import siteheader from "@/components/generic/siteheader";
import featureditems from "@/components/generic/featureditems";
import sitefooter from "@/components/generic/sitefooter";
import Carousel from "@/components/Carousel";
import CarouselSlide from "@/components/CarouselSlide"

export default {
  components: {
    siteheader,
    featureditems,
    sitefooter,
    Carousel,
    CarouselSlide
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

      slides: [
        require('@/assets/img/pic/testtest.jpg'), 
        require('@/assets/img/pic/brotest.jpg'), 
        require('@/assets/img/pic/new.jpg'), 
        
         
        
      ],
      visibleSlide : 0,
      direction: 'left',
      timer: null,
      currentIndex: 0
    
    };
  },
  mounted: function() {
    this.startSlide();
  },

  computed: {
    slidesLen() {
      return this.slides.length;
    },
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  },
  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 3000);
    },  
    next() {
      if(this.visibleSlide >= this.slidesLen - 1) {
        this.visibleSlide = 0;
      }else{
        this.visibleSlide++;
      }
      this.direction = "left"
      this.currentIndex += 1;
    },
    prev() {
      if(this.visibleSlide <= 0) {
        this.visibleSlide = this.slidesLen - 1;
      }else{
        this.visibleSlide--;
      }
      this.direction = "right"
      this.currentIndex -= 1;
    },
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
