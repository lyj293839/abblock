<style lang='scss' scoped>
@import '@/style/main.scss';
.Login{
    text-align: left;
    .el-row{
        min-height: 320px;
    }
    .col_left{
        border-right: 2px solid $color7;
        padding-right: 20px;
        .el-button{width: 100%;}
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
            <h1>Forgot Password</h1>
            <el-form :model="ruleForm" label-position="left" :rules="$store.state.rules" ref="ruleForm_forget" label-width="130px" class="demo-ruleForm">
                <el-form-item label="Company Email" prop="name">
                    <el-input v-model="ruleForm.name" size="small"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="Send('ruleForm_forget')">Send Verification Email</el-button>
                </el-form-item>
            </el-form>
        </el-col>
        <el-col :span="12" class="col_right">
            <h1>User Advantage</h1>
            <ul>
                <li>View pricing and availability details</li>
                <li>Place Online Orders</li>
                <li>Track Orders</li>
            </ul>
        </el-col>
    </el-row>
</div>
</template>

<script>
export default {
    props: ["getForget"],
    data () {
        return {
           ruleForm:{},
        }
    },
    methods: {
        fetachData(){
            this.$refs['ruleForm_forget'].resetFields()
        },
        Send(a){
            this.$store.dispatch('submitForm',[a,this])
            .then(res=>{
                this.$message.success('success')
                this.getForget()
            }).catch(err=>{
                this.$message.error('error')
            })
        }
    }
}
</script>
