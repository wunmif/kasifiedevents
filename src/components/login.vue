<template>
  <section class="fl w-100">

    <div class="dt vh-75 w-100 center pv5 bg-white tc">

      <article class="pa4 cf center w-40-l w-90-ns w-100 black-80 ph2">
        <div class="v-mid tc white ph2-l">                   
          <img src="@/assets/img/dtcblack.png" class="pa2 w4 h3 tc " />

          <div class="cf bg-transparent ba b--white-10 br3 center pa2 " >

            <div class="w-100 fl">
              <p class="cf db w-100 f4 pt2 pb2 black fw7">Sign in to your Account</p>
            </div>
            <notify :notifications="notifications"></notify>

            <div class="center">
              <div class="cf w-100 pv3">
                <input class="signin f6 fw3 bn pa2 dib w-60-ns w-100 br2 bg-transparent ba b--white" type="text" placeholder="Username" @keyup="keyUp" v-model="username" />
              </div>

              <div class="cf w-100 pv3">
                <input class="signin f6 fw3 bn pa2 dib w-60-ns w-100 br2 bg-transparent ba b--white" type="password" placeholder="Password" @keyup="keyUp" v-model="password" />
              </div>

              <div class="w-100 pv3">
                <label class="signin f6 fw3 dib w-60-ns w-100 black pointer"><input type="checkbox"> Remember me</label>
              </div>
              

              <span class="cf tl no-underline inline-flex items-center pa2 ph4 white bg-red ba b--white-40 br2 relative pointer"  @click="login()">
                login
                <img src="@/assets/img/resources.png" class="pl3 fr"/>
              </span>

              <div class="dit w-100 pv3 mt4 cf">
                <router-link to="/" name="home" class="no-underline">
                  <p class="fl pa0 ma0 red f7"> <i class="fa fa-arrow-alt-left f7 tr mr2"></i> Back to Home</p>
                </router-link>
                <router-link to="/forgot" class="no-underline">
                  <p class="fr pa0 ma0 black f7">Forgot Password?</p>
                </router-link>
              </div>
              
              <!-- <div class="black pa2"> © {{date}} Digital Tribe MPCS &nbsp;</div> -->
            </div>
          </div>
        </div>
      </article>
    </div>

    <sitefooter/>
  </section>
</template>

<script type="text/javascript">
import { HTTP } from "@/common";
import { checkRedirect } from "@/common";
import siteheader from "@/components/generic/siteheader";
import sitefooter from "@/components/generic/sitefooter";

export default {
  components: {
    siteheader,
    sitefooter
  },
  data() {
    return {date: new Date().getFullYear(),
      lLoading: true,
      notifications: [],
      username: "",
      password: "",
      IsCompany: true
    };
  },
  methods: {
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