<template>
<div class="Shipping">
    <banner></banner>
    <h2>Shipping Methods and Rates</h2>
    <ul>
        <li>
            <h3>Domestic</h3>
            <div>All orders are shipped FOB San Diego, CA. Shipping methods and rates are stated below:</div>
            <table>
                <tr v-for="(item,index) in $store.state.jsonList.Shipping[0]" :key="index">
                    <td width='455'><p>
                        <u v-if="index===0">{{item.name}}</u>
                        <span v-else>{{item.name}}</span>
                    </p></td>
                    <td><p>
                        <u v-if="index===0">{{item.value}}</u>
                        <span v-else>{{item.value}}</span>
                    </p></td>
                </tr>
                <tr>
                    <td><p>*For most zones in the United States</p></td>
                </tr>
            </table>
            <img src="@/assets/image/shipping1.png" height="69" width="350">
        </li>
        <li>
            <h3>International</h3>
            <div>
                International orders are delivered by FedEx except to India, which may be delivered by DHL. It usually takes about 2 - 5 
                business days for FedEx to deliver to a foreign country. Please contact FedEx directly for more accurate estimation. The Shipping fee is as follows.
            </div>
            <table>
                <tr v-for="(item,index) in $store.state.jsonList.Shipping[1]" :key="index">
                    <td width='455'><p>
                        <u v-if="index===0">{{item.name}}</u>
                        <span v-else>{{item.name}}</span>
                    </p></td>
                    <td><p>
                        <u v-if="index===0">{{item.value}}</u>
                        <span v-else>{{item.value}}</span>
                    </p></td>
                </tr>
            </table>
            <img src="@/assets/image/shipping2.png" height="58" width="350">
        </li>
        <li>
            <h3>HazMat Fee</h3>
            <div>If you order a hazardous compound, there will be a HazMat fee per item to ship a dangerous good, unless one of the following is true:</div>
            <div class="title">
                <p>
                    -The package is shipped via FedEx Ground <br>
                    -Each bottle is in Excepted Quantity, which is up to 1g for class 6.1 packing group I or II, and up to 25g for all other HazMat items we have.
                </p>
                <p>
                    The HazMat fee will be charged to your account by the courier if it is shipped on your FedEx/DHL account, and will be added to the invoice otherwise. Below is the fee schedule of FedEx for HazMat:
                </p>
            </div>
            <table>
                <tr v-for="(item,index) in $store.state.jsonList.Shipping[2]" :key="index">
                    <td width='455'><p>
                        <u v-if="index===0">{{item.name}}</u>
                        <span v-else>{{item.name}}</span>
                    </p></td>
                    <td><p>
                        <u v-if="index===0">{{item.value}}</u>
                        <span v-else>{{item.value}}</span>
                    </p></td>
                </tr>
            </table>
        </li>
        <li>
            <h3>Handling Fee for Collect Account Shipping</h3>
            <div>If you choose to ship your order using your FedEx or DHL account, the following handling fee will be added to the invoice:</div>
            <table>
                <tr v-for="(item,index) in $store.state.jsonList.Shipping[3]" :key="index">
                    <td width='455'><p>
                        <u v-if="index===0">{{item.name}}</u>
                        <span v-else>{{item.name}}</span>
                    </p></td>
                    <td><p>
                        <u v-if="index===0">{{item.value}}</u>
                        <span v-else>{{item.value}}</span>
                    </p></td>
                </tr>
            </table>
        </li>
    </ul>
</div>
</template>

<script>
import { provide } from "vue";
import banner from "@/components/banner.vue";
export default {
  components:{
      banner
  },
  setup(){
    provide("banner_info", {
        is_banner:true,
        is_breadcrumb:true,
        breadcrumb:[{name:'Shipping Rates',path:''}]
    });
  },
  data () {
    return {
        
    }
  },
  created () {
    
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped>
@import '@/style/shipping.scss';
</style>
