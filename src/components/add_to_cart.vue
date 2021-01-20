<template>
  <section class>
    <siteheader />
    <shopbanner />
    <div class="fl w-100">
      <div class="pa4 mw8 center">
        <div class="f3-l f4 pt3 pb5">Shopping Cart Table</div>
        <div class="overflow-auto">
          <table class="f6 w-100" cellspacing="0">
            <thead>
              <tr>
                <th class="fw6 bb b--black-20 tl w-20 pb3 pr3 bg-white">Image</th>
                <th class="fw6 bb b--black-20 tl w-30 pb3 pr3 bg-white">Name</th>
                <th class="fw6 bb b--black-20 tl w-10 pb3 pr3 bg-white">Price</th>
                <th class="fw6 bb b--black-20 tl w-20 pb3 pr3 bg-white">Quantity</th>
                <th class="fw6 bb b--black-20 tl w-10 pb3 pr3 bg-white">Total</th>
                <th class="fw6 bb b--black-20 tl w-10 pb3 pr3 bg-white">Action</th>
              </tr>
            </thead>
            <tbody class="lh-copy">
              <tr>
                <td class="pv3 pr3 bb b--black-20">
                  <div class="fl dt">
                    <img src="@/assets/img/logo-black-trans.png" class="w4 h3 v-mid"/>
                  </div>
                </td>
                <td class="pv3 pr3 bb b--black-20">Product Name</td>
                <td class="pv3 pr3 bb b--black-20">₦ 200000</td>
                <td class="pv3 pr3 bb b--black-20">
                  <a class="ba ph3 pv2 b--light-gray">-</a>
                  <a class="ba ph3 pv2 b--light-gray">1</a>
                  <a class="ba ph3 pv2 b--light-gray">+</a>
                </td>
                <td class="pv3 pr3 bb b--black-20">₦ 200000</td>
                <td class="pv3 pr3 bb b--black-20">
                    <i class="fas pl3 red fa-times"></i>
                </td>
              </tr>
              <tr>
                <td class="pv3 pr3 bb b--black-20"></td>
                <td class="pv3 pr3 bb b--black-20"></td>
                <td class="pv3 pr3 bb b--black-20"></td>
                <td class="pv3 pr3 bb b--black-20"></td>
                <td class="pv3 pr3 bb b--black-20">Sub Total</td>
                <td class="pv3 pr3 bb b--black-20">
                  <small>₦</small>2000
                </td>
              </tr>
              <tr>
                <td class="pv3 pr3 bb b--black-20"></td>
                <td class="pv3 pr3 bb b--black-20"></td>
                <td class="pv3 pr3 bb b--black-20"></td>
                <td class="pv3 pr3 bb b--black-20"></td>
                <td class="pv3 pr3 bb b--black-20">Tax</td>
                <td class="pv3 pr3 bb b--black-20">
                  <small>₦</small>2000
                </td>
              </tr>
              <tr>
                <td class="pv3 pr3 bb b--black-20"></td>
                <td class="pv3 pr3 bb b--black-20"></td>
                <td class="pv3 pr3 bb b--black-20"></td>
                <td class="pv3 pr3 bb b--black-20"></td>
                <td class="pv3 pr3 bb b--black-20">Total</td>
                <td class="pv3 pr3 bb b--black-20">
                  <small>₦</small>2000
                </td>
              </tr>
              <tr>
                <td colspan="99" class="pv3 pr3 bb  b--black-20">
                  <router-link
                    to="/checkout"
                    class="f4 w5 fr tc link dim pv3 mv2 dib white bg-dark-gray"
                  >Checkout</router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <sitefooter />
  </section>
</template>

<script>
import { HTTP } from "@/common";
import notify from "@/components/notify";
import siteheader from "@/components/generic/siteheader";
import shopbanner from "@/components/generic/shopbanner";
import sitefooter from "@/components/generic/sitefooter";

export default {
  components: { notify, shopbanner, siteheader, sitefooter },
  data() {
    return { notifications: [] };
  },
  methods: {
    popup() {
      console.log("POPUP");
    },
  },
};
</script>
