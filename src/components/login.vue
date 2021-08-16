<style lang='scss' scoped>
@import '@/style/main.scss';
.Login{
    text-align: left;
    .el-row{
        min-height: 300px;
    }
    .col_left{
        border-right: 2px solid $color7;
        padding-right: 20px;
    }
    h1{
        color: $color1;
        text-align: left;
    }
    .col_right{
        padding-left: 20px;
        text-align: center;
        ul{
            list-style:disc;
            padding-left: 20px;
            li{
                margin: 15px 0;
                text-align: left;
            }
        }
        .el-button{
            margin-top: 60px;
            margin-left: 40px;
        }
    }
}

</style>
<template>
<div class="Login">
    <el-row>
        <el-col :span="12" class="col_left">
            <h1>Login</h1>
            <el-form :model="ruleForm" label-position="left" :rules="$store.state.rules" ref="ruleForm_login" label-width="130px" class="demo-ruleForm">
                <el-form-item label="Email Address" prop="name">
                    <el-input v-model="ruleForm.name" size="small"></el-input>
                </el-form-item>
                <el-form-item label="Password" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" show-password size="small"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="text" @click="click_forget()">Forgot Password</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="Login('ruleForm_login')">Login</el-button>
                </el-form-item>
            </el-form>
        </el-col>
        <el-col :span="12" class="col_right">
            <h1>Not Registered?</h1>
            <ul>
                <li>View Pricing</li>
                <li>Place Online Orders</li>
                <li>Track Orders</li>
            </ul>
            <el-button type="primary" @click="toRregister()">Register Now</el-button>
        </el-col>
    </el-row>

    <el-dialog
      width="800px"
      top="15vh"
      :modal='false'
      v-model="innerVisible"
      custom-class="dialog_login"
      append-to-body>
      <forgetPass :getForget="getForget" ref="forgetId"></forgetPass>
    </el-dialog>
</div>
</template>

<script>
import forgetPass from "@/components/forget.vue";
export default {
    data () {
        return {
           ruleForm:{
               name:'',
               pass:''
           },
           innerVisible:false
        }
    },
    components: {
        forgetPass
    },
    props:["getToken","toRregister"],
    methods: {
        fetachData(){
            this.$refs['ruleForm_login'].resetFields()
        },
        Login(a){
            this.$store.dispatch('submitForm',[a,this])
            .then(res=>{
                this.$message.success('success')
                localStorage.setItem('token',123)
                this.getToken()
            }).catch(err=>{
                this.$message.error('error')
            })
        },
        click_forget(){
            this.innerVisible = true
            this.$nextTick(()=>{
                this.$refs.forgetId.fetachData()
            })
        },
        getForget(){
            this.innerVisible = false
        }
    }
}
</script>
