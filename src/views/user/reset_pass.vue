<template>
<div class="User_account">
    <el-form :model="ruleForm" :rules="$store.state.rules" ref="ruleForm_password" label-width="200px" class="demo-ruleForm">
        <el-form-item label="Current Password:" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="New Password:" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Re-enter New Password:" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm_password')">Submit</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
export default {
    data () {
        return {
            ruleForm:{},
            options:[]
        }
    },
    created () {
        this.$nextTick(()=>{
            this.$refs['ruleForm_password'].clearValidate()
        })
    },
    methods: {
        submitForm(a){
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
@import '@/style/user_account.scss';
</style>
