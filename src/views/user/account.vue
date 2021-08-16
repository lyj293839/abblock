<template>
<div class="User_account">
    <el-form :model="ruleForm" :rules="$store.state.rules" ref="ruleForm_account" label-width="150px" class="demo-ruleForm">
        <el-form-item label="First Name:" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Last Name:" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Company Name:" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Email:" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Country" prop="country">
            <el-select v-model="ruleForm.country" placeholder="">
                <el-option
                v-for="item in options"
                :key="item"
                :label="item"
                :value="item">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="Tel:">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item>
            <div class="flex">
                <el-button type="primary" @click="submitForm('ruleForm_account')">Submit</el-button>
                <span style="color:red;">* Required Field</span>
            </div>
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
            this.$refs['ruleForm_account'].clearValidate()
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
