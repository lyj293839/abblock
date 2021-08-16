<template>
<div class="Contact">
    <banner></banner>
    <p class="text1">
        AA Blocks is a supplier of specially designed scaffolds and building blocks. Product lines include boronic acids, fluoro compounds, pyridine structure, inhibitors, 
        catalysts and ligands, PEG linkers and other building blocks.
    </p>
    <h2>Contact Us</h2>
    <ul>
        <li class="text2"><p>AA BLOCKS, INC.</p></li>
        <li><p>9823 Pacific Heights Blvd., Suite F</p></li>
        <li><p>San Diego, CA 92121</p></li>
        <li><p>United States</p></li>
        <li><p>Tel: +1 858-523-8231</p></li>
        <li><p>Email: sales@aablocks.com</p></li>
        <li><p>Website: www.aablocks.com</p></li>
    </ul>
    <div class="text3">
        Subscribe to the AA BLOCKS, INC. mailing list to receive updates on new products, special offers and other discount information. By clicking Subscribe, 
        you agree to be contacted by our support team via Email.
    </div>
    <div>
        <el-input v-model="input" placeholder="Enter your email..." size="mini"></el-input>
        <el-button type="primary" size="mini">SUBSCRIBE</el-button>
    </div>
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
            breadcrumb:[{name:' Contact AA Blocks',path:''}]
        });
    },
    data () {
        return {
            input:''
        }
    },
    created () {
        
    },
    methods: {
    }
}
</script>

<style lang='scss' scoped>
@import '@/style/contact.scss';
</style>
