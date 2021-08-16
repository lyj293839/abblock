<template>
<div class="Category" v-wechat-title="CategoryData.seo_title">
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/home' }"><span>Home</span> </el-breadcrumb-item>
        <el-breadcrumb-item><span>{{$route.params.id}}</span></el-breadcrumb-item>
    </el-breadcrumb>
    <div class="title_item flex">
        <h2>{{$route.params.id}}</h2>
    </div>
    <div class="text">
        {{CategoryData.notes}}
    </div>
    <ul class="list">
        <li v-for="(item,index) in prodList.list" :key="index">
            <img src="https://www.aablocks.com/storage/structure/21/21.png" width="140" height="140">
            <div class="info">
                <p @click="to_detail(item)"><span>{{item.name}}</span></p>
                <p>Catalog No.: {{}}</p>
                <p>CAS No.:{{item.cas}} MDL No.: {{item.mdl}}</p>
                <p>MF: {{item.mf}} MW: {{}}</p>
            </div>
            <div class="flex">
                <el-button type="primary" @click="to_detail(item)">Pricing and Availability</el-button>
            </div>
        </li>
    </ul>
    <el-pagination
        background
        :page-size='$store.state.pageSize'
        @current-change="handleCurrentChange"
        :current-page.sync="queryList.page"
        layout="prev, pager, next"
        :total="prodList.total">
    </el-pagination>
</div>
</template>

<script>
export default {
  data () {
    return {
       CategoryData:{},
       prodList:{},
       queryList:{
          page:1,
          cate_id:''
       }
    }
  },
  watch: {
    $route(to,form){
        if(to.name=="Category"){
            this.fetachData()
        }
    }
  },
  created () {
      this.fetachData()
  },
  methods: {
    fetachData(){
        this.CategoryData = localStorage.getItem('CategoryData')?JSON.parse(localStorage.getItem('CategoryData')):{}
        this.queryList.cate_id = this.CategoryData.id
        this.$post('home/prodList',this.queryList).then(res=>{
            if(res&&res.code==200){
                this.prodList = res.data
            }else{this.$message.error(res.msg)}
        })
    },
    handleCurrentChange(page_current) {
      this.queryList.page = page_current;
      this.fetachData();
    },
    to_detail(item){
        localStorage.setItem('prodKeyword',item.cas)
        this.$router.push({
            path: '/prod',
            name:'prod',
            params:{
                id:item.cas
            },
        }); 
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/style/prod_Category.scss';
</style>
