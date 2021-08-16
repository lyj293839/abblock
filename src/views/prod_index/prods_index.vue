<template>
<div class="Category">
    <banner></banner>
    <div class="title_item flex">
        <h2>Product Index</h2>
    </div>
    <ul class="list">
        <li v-for="(item,index) in 5" :key="index">
            <img src="https://www.aablocks.com/storage/structure/21/21.png" width="140" height="140">
            <div class="info">
                <p @click="to_detail(item)"><span>3-Cyclohexene-1-carboxaldehyde</span></p>
                <p>Catalog No.: AA00003D</p>
                <p>CAS No.:100-50-5 MDL No.: MFCD00001572</p>
                <p>MF: C7H10O MW: 110.1537</p>
            </div>
            <div class="flex">
                <el-button type="primary" @click="to_detail(item)">Pricing and Availability</el-button>
            </div>
        </li>
    </ul>
    <!-- <el-pagination
        background
        :page-size='$store.state.pageSize'
        layout="prev, pager, next"
        :total="1000">
    </el-pagination> -->
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
            is_banner:false,
            is_breadcrumb:true,
            breadcrumb:[{name:'Product Index',path:''}]
        });
    },
    data () {
        return {
        }
    },
    created () {
    },
    methods: {
        to_detail(item){
            localStorage.setItem('prodKeyword',item.cas)
            this.$router.push({
                path: '/prod',
                name:'prod',
                params:{
                    id:item.cas
                }
            }); 
        }
    }
}
</script>

<style lang='scss' scoped>
@import '@/style/prod_Category.scss';
</style>
