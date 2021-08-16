<template>
<div class="Category">
    <banner></banner>
    <div class="title_item flex">
        <h2>{{ProdsIndexList.type.toUpperCase()}}&nbsp;&nbsp;{{ProdsIndexList.cas}}</h2>
    </div>
    <ul class="prod_index">
        <li v-for="(item,index) in 9" :key="index" @click="toProdindex(item)">CAS 9-1 to CAS 9-100</li>
    </ul>
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
            ProdsIndexList:{}
        }
    },
    created () {
        this.ProdsIndexList = JSON.parse(localStorage.getItem('ProdsIndexList'))
    },
    methods: {
        toProdindex(item){
            var obj = {
                type:this.ProdsIndexList.type,
                cas:this.ProdsIndexList.cas,
                index:item,
            }
            localStorage.setItem("ProdsIndexList",JSON.stringify(obj))
            this.$router.push({
                path: '/prods',
                name:'prods_index',
                params:{
                    type_path:this.ProdsIndexList.type,
                    index:this.ProdsIndexList.cas
                },
                query:{
                    page:item
                }
            }); 
        }
    }
}
</script>

<style lang='scss' scoped>
@import '@/style/prod_Category.scss';
</style>
