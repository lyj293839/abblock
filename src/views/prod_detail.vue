<template>
  <div class="prodDetail" v-wechat-title="$route.params.id">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">
        <span>Home</span>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/products' }">
        <span>分类</span>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <span>{{$route.params.id}}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="base_info">
      <div class="base_left">
        <div>Catalog No.:AA00003D</div>
        <img src="https://www.aablocks.com/storage/structure/21/21.png">
      </div>
      <div class="base_right">
        <div class="title">100-50-5 | 3-Cyclohexene-1-carboxaldehyde</div>
        <el-table
          :data="list"
          v-if="list.length>0"
          stripe
        >
          <el-table-column label="Pack Size" align="left">
            <template #default="scope">
              <span>{{scope.row}}</span>
            </template>
          </el-table-column>
          <el-table-column label="Purity" align="left">
            <template #default="scope">{{scope.row}}</template>
          </el-table-column>
          <el-table-column label="Availability" align="left">
            <template #default="scope">{{scope.row}}</template>
          </el-table-column>
          <el-table-column label="Price(USD)" align="left">
            <template #default="scope">{{scope.row}}</template>
          </el-table-column>
          <el-table-column label="Quantity" align="left">
            <template #default="scope">
              <el-input-number v-model="scope.row" :min="1" size="mini"></el-input-number>
            </template>
          </el-table-column>
          <el-table-column align="left" width="220">
            <template #default="scope">
              <el-button type="primary" size="mini" @click="to_cart(scope.row)">Add To Cart </el-button>
              <el-button type="primary" size="mini" @click="to_cart(scope.row)">Order Now</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div v-else class="table_empty">
          <div>
            This product is typically in stock,please click "Inquire" below or <br>
            contact us at <a href="mailto:sales@aablocks.com">sales@aablocks.com</a> for pricing and availability information. <br>
            <el-button type="primary" size="small" @click="Index=4">Inquire</el-button>
          </div>
        </div>
      </div>
    </div>

    <div class="other_info">
      <ul class="other_left">
        <li v-for="(item,index) in $store.state.prodDetailList.Other_form" :key="index"
          :class="Index==item.id?'is_active':''" 
          @click="Index=item.id"
        >{{item.name}}</li>
      </ul>
      <div class="other_right">
        <div class="title">
          {{$store.state.prodDetailList.Other_form.filter(res=>{return res.id==Index})[0].name}}
        </div>
        <div v-if="Index==1">
          <ul>
            <li v-for="(item,key,index) in $store.state.prodDetailList.Technical_list[0]" :key="index">
              <p>{{key}}:</p>
              <div>{{item.value}}</div>
            </li>
          </ul>
        </div>
        <div v-if="Index==2">
          <div class="title_b">Computed Properties</div>
          <ul>
            <li v-for="(item,key,index) in $store.state.prodDetailList.Properties_list[0]" :key="index">
              <p>{{key}}:</p>
              <div>{{item.value}}</div>
            </li>
            <div class="title_b" style="margin-top:40px;">Synonyms</div>
            <li>123</li>
          </ul>
        </div>
        <div v-if="Index==4">
          <el-form :model="ruleForm" :rules="$store.state.rules" ref="ruleForm" label-width="21%" label-position="left" class="demo-ruleForm">
            <el-form-item label="Company Name:" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="Contact Person:" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="Email:" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="Quantity Required:" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="Additional Info:" >
              <el-input v-model="ruleForm.name" type="textarea" :rows="3"></el-input>
            </el-form-item>
            <el-form-item class="non_boder">
              <el-button type="primary" @click="submitForm('ruleForm')" size="small">Submit</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>

    <div class="Related_prod">
      <div class="card_title">Related Products</div>
      <el-row :gutter="10">
        <el-col :span="4" v-for="(item,index) in 6" :key="index">
          <div @click="to_detail(item)">
            <img src="https://www.aablocks.com/storage/structure/923/923.png" style="width:100%;">
            <p>1000802-75-4</p>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="Related_prod">
      <div class="card_title">Building Blocks</div>
      <ul>
        <li v-for="(item,index) in 8" :key="index">5335-84-2 | 4-Bromophenyl disulfide | AA00D8E3 | MFCD00017832</li>
      </ul>
    </div>
  </div>
</template>

<script>
import banner from "@/components/banner.vue";
import { provide,getCurrentInstance } from "vue";
export default {
  components:{
    banner
  },
  setup(){
    const {ctx} = getCurrentInstance()
    provide("banner_info", {
        is_banner:false,
        is_breadcrumb:true,
        breadcrumb:[{name:'分类',path:'/products'},{name:ctx.$root.$route.params.id,path:''}]
    });
  },
  data() {
    return {
      list:[],
      Index:1,
      ruleForm:{},
      keyword:''
    };
  },
  watch: {
    $route(to,form){
        if(to.name=="prod"){
          this.fetachData()
        }
    }
  },
  created() {
    this.fetachData()
  },
  methods: {
    fetachData(){
      this.keyword = localStorage.getItem('prodKeyword')
      this.$post('home/prodInfo',{keyword:this.keyword}).then(res=>{
        if(res&&res.code==200){
          
        }else{this.$message.error(res.msg)}
      })
    },
    to_cart(item){
      this.$router.push({
        path: '/user/cart',
        name:'cart'
      }); 
    },
    to_detail(item){
        localStorage.setItem('prodKeyword',item)
        this.$router.push({
            path: '/prod',
            name:'prod',
            params:{
              id:item
            }
        }); 
    },
    Index_click(a){
      this.Index = a
    },
    submitForm(a){
      if(localStorage.getItem('token')){
        this.$store.dispatch('submitForm',[a,this])
        .then(res=>{
          this.$message.success('success')
        }).catch(err=>{
          this.$message.error('error')
        })
      }else{
        this.$store.state.is_login = true
      }
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/style/prod_detail.scss";
</style>
