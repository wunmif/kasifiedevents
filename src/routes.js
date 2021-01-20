//splash-screen
// import loadingComponent from "@/components/loading"
import add_to_cartComponent from "@/components/add_to_cart";
import brandComponent from "@/components/brand";
import checkoutComponent from "@/components/checkout";
import contactusComponent from "@/components/contactus";
import guideComponent from "@/components/guide";
import homeComponent from "@/components/home";
import paymentComponent from "@/components/payment";
import privacyComponent from "@/components/privacy";
import shippingComponent from "@/components/shipping";
import shopComponent from "@/components/shop";
import storepolicyComponent from "@/components/storepolicy";
import termComponent from "@/components/term";
import writeupComponent from "@/components/writeup";
import view_productComponent from "@/components/view_product";
import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);
export const router = new Router({
  mode: "hash",
  routes: [
    { path: "", component: homeComponent },
    { path: "/add_to_cart", component: add_to_cartComponent },
    { path: "/brand", component: brandComponent },
    { path: "/checkout", component: checkoutComponent },
    { path: "/contact", component: contactusComponent },
    { path: "/guide", component: guideComponent },
    { path: "/payment", component: paymentComponent },
    { path: "/privacy", component: privacyComponent },
    { path: "/shipping", component: shippingComponent },
    { path: "/shop", component: shopComponent },
    { path: "/store_policy", component: storepolicyComponent },
    { path: "/terms", component: termComponent },
    { path: "/view_product", component: view_productComponent },
    { path: "/writeup", component: writeupComponent },
    // { path: "/add_to_cart", component: add_to_cartComponent },
    // { path: "/payment", component: paymentComponent },
    // { path: "/checkout", component: checkoutComponent },
    // { path: "/forgot", component: forgotComponent },
  ]
});
