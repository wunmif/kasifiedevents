<template>
	<section class="fl w-100">
		<siteheader/>
        <shopbanner />
        <div class="fl w-100 pa3">
            <div class="cf mw9 center w-100 pa3">
                <div class="f7 ttu pb5-l pb3 w-100 fl">
                    HOME <i class="mh1 fa fa-chevron-right"/> CATEGORY BEING VIEWED <i class="mh1 fa fa-chevron-right"/> Product Title
                </div>

                <div class="cf mw8 ma3 center">
                    <div class="">
                        <div class="fl w-40-ns w-100">
                            <div class="mw8 center h-100" >
                                <div class="dt w-100 h-100 ph1" style="height:45vh">
                                    <div class="dtc v-mid tc bg-light-gray pointer">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="fl fr-ns pt0-ns pt3 w-50-ns w-100">
                            <div class="fl w-100">
                                <div class="w-100 fl f2-l f3 fw6 pa2">
                                    Product Title
                                    <div class="cf w-20 mt2 bt bw1 b--black-60"></div>
                                </div>
                                
                                <div class="w-100 fl f5 pa2"> 
                                    <span class="f4 b pr1">₦</span> Product Price
                                </div>
                                <div class="w-100 fl f6 pa2">
                                    Description
                                </div>
                                <div class="w-100 fl f6 pa2">
                                    <div class="f5 b">Quantity</div>
                                </div>

                                <div class="w-100 fl f6 pa2 mt3">
                                    <a class="ba ph3 pv2 b--light-gray">
                                        -
                                    </a>
                                    <a class="ba ph3 pv2 b--light-gray">
                                        1
                                    </a>
                                    <a class="ba ph3 pv2 b--light-gray">
                                        +
                                    </a>
                                </div>

                                <div class="fl w-100 f6 pa2 pt3">
                                    <router-link to="/add_to_cart" class="f5 w5 tc link dim pv3 mv2 dib white bg-dark-gray">Add to Cart</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <sitefooter></sitefooter>
	</section>
</template>

<script>
import {HTTP} from '@/common';
import notify from "@/components/notify"
import siteheader from '@/components/generic/siteheader';
import shopbanner from '@/components/generic/shopbanner';
import sitefooter from "@/components/generic/sitefooter";

export default {
	components: {notify, shopbanner, siteheader, sitefooter},
	data(){ return { formSignup:{Username:"x",Password:"x",Email:""}, notifications:[]}},
	methods: {
      signup() {
		const app = this;
		if (app.formSignup.Email !== "") {
			app.formSignup.Username = app.formSignup.Email;
			app.formSignup.Password = app.formSignup.Email;
		}
        HTTP.post('/api/signup', app.formSignup ,{withCredentials: true}).then(response => {
          console.log(response)
          app.notifications.push(response.data)
		  setTimeout(checkRedirect(response.data),1500)
          if (response.data.Code == 200) {
			  app.formSignup.Username = "x";
			  app.formSignup.Password = "x";
			  app.formSignup.Email = "";
		  }
        }).catch(e => {
          console.log(e)
          this.error = e
          // this.errors.push(e)
        })
      }
    }
}
</script>
