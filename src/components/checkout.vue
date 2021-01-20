<template>
    <section class="fl w-100">
        <siteheader/>
        <shopbanner/>
        <div class="fl w-100 pa4-ns">
            <div class="mw8 pa4 cf center">
                <div class="fl w-100">
                    <h3 class="black">Please Fillup this Form</h3>
                    <h5 class="black">Shipping Details</h5>
                </div>
                <div class="w-100 flex flex-row-ns flex-column">
                    <div class="w-100 fl">
                        <div class="fl w-50-ns w-100 pa1">
                            <label class="db fw4 lh-copy f6 ">First Name</label>
                            <input class="pa2 bn br2 w-100 bg-black-20 " type="text" v-model="record.Firstname">
                        </div>

                        <div class="fl w-50-ns w-100 pa1">
                            <label class="db fw4 lh-copy f6 ">Last Name</label>
                            <input class="pa2 bn br2 w-100 bg-black-20 " type="text"  v-model="record.Lastname">
                        </div>

                        <div class="fl w-50-ns w-100 pa1">
                            <label class="db fw4 lh-copy f6 ">Mobile</label>
                            <input class="pa2 bn br2 w-100 bg-black-20 " placeholder="" type="text" v-model="record.Mobile">
                        </div>

                        <div class="fl w-50-ns w-100 pa1">
                            <label class="db fw4 lh-copy f6 ">Email</label>
                            <input class="pa2 bn br2 w-100 bg-black-20 " placeholder="" type="email"  v-model="record.Email">
                        </div>
                        
                        <div class="fl w-100 pa1">
                            <label class="db fw4 lh-copy f6 ">Address</label>
                            <input class="pa2 bn br2 w-100 bg-black-20 " placeholder="" type="email"  v-model="record.Email">
                        </div>

                        <div class="fl w-100 pa1">
                            <label class="db fw4 lh-copy f6 ">Note</label>
                            <textarea class="pa2 bn br2 w-100 bg-black-20 " name="" id="" cols="30" rows="10"></textarea>
                        </div>

                        <div class="fl w-100 pt3">
                            <router-link to="/payment" class="f4 w-30-l w-50-m w-100 fr tc link dim pv3 mv2 dib white bg-dark-gray">Payment</router-link>
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
import notify from "@/components/notify";
import shopbanner from "@/components/generic/shopbanner";
import siteheader from "@/components/generic/siteheader";
import sitefooter from "@/components/generic/sitefooter";

export default {
    components: {
        siteheader,
        sitefooter,
        shopbanner,
        notify
    },
    data() {
        return {
            record:{Title:"", Firstname:"", Lastname:"", Email:"", Mobile:"", Password:"", Confirm:""}, notifications:[], allowMembership : true
        };
    },
    methods: {
        signup() {
            const app = this;

            app.notifications = [];
            app.allowMembership = false;

            console.log(app.record.Password)
            if (app.record.Password == '') {
                app.notifications.push({Message:"Password is required!!",Code:500})
                console.log(app.notifications)
                return;
            }

            if (app.record.Password !== app.record.Confirm) {
                app.notifications.push({Message:"Passwords do not match!!",Code:500})
                return;
            }

            if (app.record.Email !== "") {
                app.record.Username = app.record.Email;
                app.record.Password = app.record.Email;
            }
            HTTP.post('/api/signup', app.record ,{withCredentials: true}).then(response => {
                app.notifications.push(response.data)
                setTimeout(checkRedirect(response.data),1500)
                if (response.data.Code == 200) {
                    app.allowMembership = true;
                    app.record = {Title:"", Firstname:"", Lastname:"", Email:"", Mobile:"", Password:"", Confirm:""};
                }
            }).catch(e => {this.error = e })
        }
    }
};
</script>
<style>
    input {
        border-left : none!important;
        border-right : none!important;
        border-top : none!important;
    }
    input:focus{
        color : black!important;
        outline: none!important;
        border-bottom : 2px solid black;
    }
</style>