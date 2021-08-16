<template>
<div>
    <banner></banner>
    <h2>AA BLOCKS TERMS AND CONDITIONS OF SALE</h2>
</div>
</template>

<script>
import banner from "@/components/banner.vue";
import { provide  } from "vue";
export default {
    components:{
      banner
    },
    setup(){
        provide("banner_info", {
            is_banner:true,
            is_breadcrumb:true,
            breadcrumb:[{name:"Terms & Conditions",path:''}]
        });
    },
}
</script>

<style lang='scss' scoped>
h2{
    color: #3498db;
    font-weight: 400;
    text-align: left;
    margin: 30px 0px 60px 0px;
}
</style>
