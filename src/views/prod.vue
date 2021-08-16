<template>
<div class="prod">
    <banner></banner>
    <h1 class="prod_h2">Products</h1>
    <div class="prod_item" v-for="(item,index) in cateData" :key="index">
        <div class="title_item flex">
            <h2>{{item.name}}</h2>
            <a @click="to_Category(item)">More ></a>
        </div>
        <el-row :gutter="10">
            <el-col :span="6" v-for="(i,index_i) in item.prod" :key="index_i" @click="to_detail(item)">
                <div class="col_item">
                    <img :src="i.img" width="140" height="140" @error="$store.commit('defImg')">
                    <div>
                        <p>Chemical Name:</p>
                        <p>{{i.name}}</p>
                        <p>CAS No.: {{i.cas}}</p>
                        <p>MDL: {{i.mdl}}</p>
                    </div>
                </div>
            </el-col>
        </el-row>
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
            is_banner:false,
            is_breadcrumb:true,
            breadcrumb:[{name:'Products',path:''}]
        });
    },
  data () {
    return {
        cateData:[],
    }
  },
  created () {
    this.fetachData()
  },
  methods: {
    fetachData(){
        this.$post('home/cateListProds').then(res=>{
            if(res&&res.code==200){
                this.cateData = res.data
            }else{this.$message.error(res.msg)}
        })
    },
    to_Category(item){
        localStorage.setItem("CategoryData",JSON.stringify(item))
        this.$router.push({
            path: '/Category',
            name:'Category',
            params:{
                id:item.name
            }
        }); 
    },
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
@import '@/style/prod.scss';
</style>
