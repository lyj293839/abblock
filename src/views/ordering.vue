<template>
<div class="Ordering">
    <banner></banner>
    <h2>Ordering</h2>
    <p>
      We recommend all customers to place orders on our website www.aablocks.com. First time users are required to register an account before placing the first order. If you would like to send us your Purchase Order, please email it to sales@aablocks.com
    </p>
    <h2>Payment</h2>
    <p>
      We accept credit card, wire transfer and company check (US customers only). 
    </p>
    <img src="@/assets/image/ordering.png" width="380" height="95">
</div>
</template>

<script>
import banner from "@/components/banner.vue";
import { provide } from "vue";
export default {
  components:{
      banner
  },
  setup(){
    provide("banner_info", {
        is_banner:true,
        is_breadcrumb:true,
        breadcrumb:[{name:'Ordering',path:''}]
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
@import '@/style/ordering.scss';
</style>
