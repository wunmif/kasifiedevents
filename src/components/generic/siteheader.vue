<template>
  <header>
    <span :class="{'':lSwitchmenu}" class="fixed z-1 w-100 cf">
      <nav class="top-0 w-100 cf tc near-white bg-default f7">
        <span class="dn dib-ns fl w-100 pl2 pv2 tl tc-l tracked">
          <small>SIGN UP FOR OUR NEWSLETTER TO GET DISCOUNTS</small>
        </span>

        <span class="dib illusion fade-in absolute-ns right-0 pv2 pr2">
          <i class="fa fa-search mh2"></i>
          <span class="fr">
            <i class="fa fa-shopping-cart mh2"></i>
            <span>0</span>
            <span>0.00 NGN</span>
          </span>
        </span>
      </nav>
      <nav :class="{'bg-white illusion fade-in':lSwitchmenu, 'bg-default near-white':!lSwitchmenu}" class="tc w-100 center pa2">
        <img class="h3-l h2 " src="@/assets/img/abyalogo.svg" />
        <span class="dn-l"><i @click="toggleMenu" class="fa fa-bars f3 fl"/></span>
        <div class="cf w-100 dn db-l">
          <router-link to="/" class="pointer f6 f5-l tracked link mh3 dib pa3 fw3 ttu ph4-l" :class="{'near-black fade-in':lSwitchmenu, 'near-white':!lSwitchmenu}">Home</router-link>
          <router-link to="/shop" class="pointer f6 f5-l tracked link mh3 dib pa3 fw3 ttu ph4-l" :class="{'near-black fade-in':lSwitchmenu, 'near-white':!lSwitchmenu}">
            <i class="fa fa-shop" /> Shop
          </router-link>
          <router-link to="/brand" class="pointer f6 f5-l tracked link mh3 dib pa3 fw3 ttu ph4-l" :class="{'near-black fade-in':lSwitchmenu, 'near-white':!lSwitchmenu}">Blog</router-link>
          <router-link to="/guide" class="pointer f6 f5-l tracked link mh3 dib pa3 fw3 ttu ph4-l" :class="{'near-black fade-in':lSwitchmenu, 'near-white':!lSwitchmenu}">Cart</router-link>
          <router-link to="/contact" class="pointer f6 f5-l tracked link mh3 dib pa3 fw3 ttu ph4-l" :class="{'near-black fade-in':lSwitchmenu, 'near-white':!lSwitchmenu}">Contact</router-link>
          <router-link to="/writeup" class="pointer dn-l f6 f5-l tracked link mh3 dib pa3 fw3 ttu ph4-l" :class="{'near-black fade-in':lSwitchmenu, 'near-white':!lSwitchmenu}">Article</router-link>
        </div>
      </nav>

    </span>
    <div class="w-100  fl bg-black-50" style="height:76px">&nbsp;</div>
    <div class="w-100 fl bg-black-50 dn db-l" style="height:80px">&nbsp;</div>
    <div class=" cf w-100 bg-black">
        <div class="top-0 left-0 vh-100  fl w-100 fixed bg-black-30 absolute z-max dn" :class="{'slideInLeft':lShow, 'slideOutLeft':!lShow}"> 
          <div class="fl w-100 ">
            <div class="fl w-100 pointer "  @click="toggleMenu">    
              <div class="ph2 w-70 center overflow-y-scroll pt3 fl vh-100 z-max fw5 bg-default dn-l dark-gray">
                <div class="fl w-100">
                  <i class="fal white fa-times-circle"></i>
                  <div class="b pl1 pv3 f5 f6-m">
                      <input class="f7 f5-l input-reset bn fl black-80 bg-white pa2 lh-solid w-90 br-pill " autocomplete="off" placeholder="Search..." type="text" name="search" value="" id="search">
                  </div>
                </div>

                <div class="fl w-100">
                  <div class="b pl2 pv4 f f6-m">
                    <router-link class="link white" to="/">Home</router-link>
                  </div>
                </div>

                <div class="fl w-100">
                  <div class="b pl2 pb4 f5 f6-m">
                    <router-link class="link white" to="/shop">Shop</router-link>
                  </div>
                </div>

                <div class="fl w-100">
                  <div class="b pl2 pb4 f5 f6-m">
                    <router-link class="link white" to="/brand">Blog</router-link>
                  </div>
                </div>

                <div class="fl w-100">
                  <div class="b pl2 pb4 f5 f6-m">
                    <router-link class="link white" to="/guide">Cart</router-link>
                  </div>
                </div>

                <div class="fl w-100">
                  <div class="b pl2 pb4 f5 f6-m">
                    <router-link class="link white" to="/contact">Contact</router-link>
                  </div>
                </div>
                <div class="fl w-100 h2"></div>

                <div class="fl w-100 ">
                  <div class="b b--light-purple pl2 fa fa-sign-in pv2 white f5 f6-m">
                    Login
                  </div>                  
                </div>
                <div class="fl relative w-100 ">
                  <small class="white fixed bottom-1 left-0 pt4 pl2 fl w-100 pv2-s f7">© 2020 AdùnByAdétóún</small>
                </div>
              </div>  
            </div>
          </div>
        </div>
    </div>
  </header>
</template>
<script type="text/javascript">
import menulistitem from "@/components/generic/menulistitem";
import menulistgroup from "@/components/generic/menulistgroup";
const submenu = [
  { to: "/", icon: "", title: "Home" },
  { to: "/story", icon: "", title: "Our Story" },
  { to: "/product", icon: "", title: "Products" },
  { to: "/faq", icon: "", title: "FAQs" },
  { to: "/blog", icon: "", title: "Blog" },
];

export default {
  data() {
    return {
      submenu,
      lShow: false,
      lSwitchmenu: false,
      slideOut:"dn", 
      height:0, padtop:0,
    };
  },
    created () { 
        //style="height:calc(100vh - 6rem)"
        this.height = window.innerHeight - 64 + 'px'
        // this.padtop = (window.outerHeight-window.innerHeight)+64 + 'px'
        this.padtop = 64+'px'
    },
  methods: {
    toggleMenu() {
      this.lShow = !this.lShow;
      //document.getElementsByTagName("html")[0].classList.toggle('overflow-hidden');
    },
    hideMenuOnScroll() {
      var shrinkOn = 50;
      var distanceY = window.pageYOffset || document.documentElement.scrollTop;
      this.lSwitchmenu = (distanceY < shrinkOn) ? false : true;
    },
  },
  components: {
    menulistgroup,
    menulistitem,
  },
  beforeMount() {
      document.documentElement.scrollTop = 0;
      window.addEventListener("scroll", this.hideMenuOnScroll, false);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.hideMenuOnScroll, false);
  },
};
</script>
