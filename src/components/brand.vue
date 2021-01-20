<template>
  <section>
    <siteheader/>
    <div class="flex z-3 hidden w-100 ">
      <div class="w-100 ph4 pv4 h-100  pa2">
        <div class="w-100 h-100 ">
          <articles/> 
        </div>
      </div>
      <div class="ph4 pv4 w-30 h-100 pa2 fl dn dib-l mt6">
        <div class="w-100 h-100 ">
          <div class="cf w-100 center bg-light-pink">
            <div class=" tc relative">
              <img src="@/assets/img/owner.jpg" class="br-100 dib center nt4 w4" style="" alt="avatar">
            </div> 
          </div>
          <div class="ph3 w-100">
          <div class="tc pt4 purple f3 pb3 pretty">Hi, I'm Adétóún!</div>
          <div class="w-100 tc">
            <div class= "center ph2 baskerville pb0 "> I'm a writer, blogger + baker who creates beautiful blogs, yummy treats and shares helpful recipes.</div>
          </div>
          <div class="tc purple f5 times">Read More</div>
          <div class="w-100 tc pa3">
          <div class="pv2 tc bg-light-grey">
            <a class="link dim gray dib h1 w2 br-100 " href="#" title="">
              <svg data-icon="facebook" viewBox="0 0 40 40" style="fill:currentcolor">
              <title>facebook icon</title>
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"></path>
              </svg>
            </a>
            <a class="link dim gray dib h1 w2 br-100" href="#" title="">
              <svg data-icon="twitter" viewBox="0 0 40 40" style="fill:currentcolor">
              <title>twitter icon</title>
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"></path>
              </svg>
            </a>
            <a class="link dim gray dib br-100 h1 w2  " href="#" title="">
              <svg data-icon="instagram" viewBox="0 0 40 40" style="fill:currentcolor">
              <title>instagram icon</title>
              <path d="M11.984 16.815c2.596 0 4.706-2.111 4.706-4.707 0-1.409-.623-2.674-1.606-3.538-.346-.303-.735-.556-1.158-.748-.593-.27-1.249-.421-1.941-.421s-1.349.151-1.941.421c-.424.194-.814.447-1.158.749-.985.864-1.608 2.129-1.608 3.538 0 2.595 2.112 4.706 4.706 4.706zm.016-8.184c1.921 0 3.479 1.557 3.479 3.478 0 1.921-1.558 3.479-3.479 3.479s-3.479-1.557-3.479-3.479c0-1.921 1.558-3.478 3.479-3.478zm5.223.369h6.777v10.278c0 2.608-2.114 4.722-4.722 4.722h-14.493c-2.608 0-4.785-2.114-4.785-4.722v-10.278h6.747c-.544.913-.872 1.969-.872 3.109 0 3.374 2.735 6.109 6.109 6.109s6.109-2.735 6.109-6.109c.001-1.14-.327-2.196-.87-3.109zm2.055-9h-12.278v5h-1v-5h-1v5h-1v-4.923c-.346.057-.682.143-1 .27v4.653h-1v-4.102c-1.202.857-2 2.246-2 3.824v3.278h7.473c1.167-1.282 2.798-2 4.511-2 1.722 0 3.351.725 4.511 2h7.505v-3.278c0-2.608-2.114-4.722-4.722-4.722zm2.722 5.265c0 .406-.333.735-.745.735h-2.511c-.411 0-.744-.329-.744-.735v-2.53c0-.406.333-.735.744-.735h2.511c.412 0 .745.329.745.735v2.53z"></path>
              </svg>
            </a>
            <a class="link dim gray dib br-100 h1 w2 " href="#" title="">
              <svg data-icon="youtube" viewBox="0 0 40 40" style="fill:currentcolor">
              <title>youtube icon</title>
              <path d="M10 9.333l5.333 2.662-5.333 2.672v-5.334zm14-4.333v14c0 2.761-2.238 5-5 5h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5zm-4 7c-.02-4.123-.323-5.7-2.923-5.877-2.403-.164-7.754-.163-10.153 0-2.598.177-2.904 1.747-2.924 5.877.02 4.123.323 5.7 2.923 5.877 2.399.163 7.75.164 10.153 0 2.598-.177 2.904-1.747 2.924-5.877z"></path>
              </svg>
            </a>
            <a class="link dim gray dib br-100 h1 w2 " href="#" title="">
              <svg data-icon="medium" viewBox="0 0 40 40" style="fill:currentcolor">
              <title>medium icon</title>
              <path d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.237 4.999-5 5zm.97-5.649v-.269l-1.247-1.224c-.11-.084-.165-.222-.142-.359v-8.998c-.023-.137.032-.275.142-.359l1.277-1.224v-.269h-4.422l-3.152 7.863-3.586-7.863h-4.638v.269l1.494 1.799c.146.133.221.327.201.523v7.072c.044.255-.037.516-.216.702l-1.681 2.038v.269h4.766v-.269l-1.681-2.038c-.181-.186-.266-.445-.232-.702v-6.116l4.183 9.125h.486l3.593-9.125v7.273c0 .194 0 .232-.127.359l-1.292 1.254v.269h6.274z"></path>
              </svg>
            </a>
          </div>
          <div class="cf mt3 w-70 center bg-light-purple">
          <div class="fl mt3 w-100 ">
            <div class="w-100 fl tc">
              <div class="center ph2 f7 baskerville pb0"> JOIN OUR LIST OF SUBSCRIBERS FOR <span class="f4 pretty">exclusive access</span> TO THE <span class="f4 pretty">free library </span> RECIPES, ARTICLES + BEHIND-THE-SCENES FOR CONTENT</div>
            </div>
          </div>
          <article class="pa3 black-80">
            <form action="sign-up_submit" method="get" accept-charset="utf-8">
              <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                <div class="mt3">
                  <input class="pb0 input-reset w-80 measure ba bg-transparent" placeholder="Your First Name" type="firstname" name="firstname"  id="firstname">
                </div>
                <div class="mt3">
                  <input class="pb1 pt1 input-reset ba bg-transparent w-80 measure" placeholder="Your Email Address" type="email" name="email-address"  id="email-address">
                </div>
              </fieldset>
              <div class="mt3">
                <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Join Us">
              </div>
              <small id="comment-desc" class="f6 black-60">Helper text for a form control. Can use this text to <a href="#" class="link underline black-80 hover-blue">link to more info.</a></small>
            </form>
          </article>
        </div>
        </div>
      </div>
        </div>
      </div>
      </div>
    
    <sitefooter/>
  </section>
</template>

<script type="text/javascript">
import { HTTP } from "@/common";
import { checkRedirect } from "@/common";
import siteheader from "@/components/generic/siteheader";
import shopbanner from "@/components/generic/shopbanner";
import featureditems from "@/components/generic/featureditems";
import newsletter from "@/components/generic/newsletter";
import sitefooter from "@/components/generic/sitefooter";
import articles from "@/components/generic/articles";

export default {
  components: {
    siteheader, featureditems, newsletter, sitefooter, shopbanner, articles
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
