<template>
<div class="about">
    <banner></banner>
    <h2>About AA Blocks</h2>
    <p>
        AA Blocks offers a comprehensive range of building blocks and specially designed scaffolds to support your R&D. Located in San Diego, striving to provide efficient and cost effective solutions to scientists, AA blocks is a research chemical supplier of speciality building blocks and intermediates to the pharmaceutical, biotechnology and agrochemical industry. 
    </p>
    <p>
        Products listed on our website are either in stock or can be resynthesized within a reasonable time frame. In stock products will be shipped out within 1-3 business days upon receipt of customer’s purchase order. You may search for our products through the search bar or the Structure Search function. If you would like to receive a copy of our product catalog, please contact us at sales@aablocks.com.
    </p>
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
            breadcrumb:[{name:'The Catalyst丨Chemical Research',path:''}]
        });
    },
    data () {
        return {
            
        }
    },
    created () {
        this.fetachData()
    },
    methods: {
        fetachData(){
            this.$post('home/nodeInfo',{name:'aboutUs'}).then(res=>{
                if(res&&res.code==200){
                    
                }else{this.$message.error(res.msg)}
            })
        },
    }
}
</script>

<style lang='scss' scoped>
@import '@/style/about.scss';
</style>
