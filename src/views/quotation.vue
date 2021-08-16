<template>
<div class="Quotation">
    <banner></banner>
    <h2>Request for Quotation</h2>
    <el-form label-position="top" :model="ruleForm" :rules="$store.state.rules" ref="Quotation_ruleForm" >
        <el-row>
            <el-col :span="12" class="col_left">
              <el-form-item label="Email:" prop="input">
                <el-input v-model="ruleForm.input"></el-input>
              </el-form-item>
              <el-form-item label="Contact Person:" prop="input">
                <el-input v-model="ruleForm.input"></el-input>
              </el-form-item>
              <el-form-item label="Company Name:" prop="input">
                <el-input v-model="ruleForm.input"></el-input>
              </el-form-item>
              <el-form-item label="Addition Info:">
                <el-input v-model="ruleForm.input" type="textarea" :rows="4"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12" class="col_right">
              <el-form-item label="Catalog Number:">
                <el-input v-model="ruleForm.input"></el-input>
              </el-form-item>
              <el-form-item label="Product Name:" prop="input">
                <el-input v-model="ruleForm.input"></el-input>
              </el-form-item>
              <el-form-item label="CAS Number:">
                <el-input v-model="ruleForm.input"></el-input>
              </el-form-item>
              <el-form-item label="Quantity Required:" prop="input">
                <el-input v-model="ruleForm.input"></el-input>
              </el-form-item>
              <el-button type="primary" @click="Submit('Quotation_ruleForm')">Submit</el-button>
            </el-col>
        </el-row>
    </el-form>
    
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
        is_banner:false,
        is_breadcrumb:true,
        breadcrumb:[{name:'Request for Quotation',path:''}]
    });
  },
  data () {
    return {
      ruleForm:{}
    }
  },
  created () {
    
  },
  methods: {
    Submit(a){
      this.$store.dispatch('submitForm',[a,this])
      .then(res=>{
        this.$message.success('success')
      }).catch(err=>{
        this.$message.error('error')
      })
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/style/quotation.scss';
</style>
