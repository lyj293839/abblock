<template>
<div class="Register">
    <el-form :model="ruleForm" :rules="$store.state.rules" ref="ruleForm_register" label-width="150px" class="demo-ruleForm">
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
        <el-form-item label="Password:" prop="pass">
            <el-input v-model="ruleForm.name" type="password" show-password></el-input>
        </el-form-item>
        <el-form-item prop="agree" class="agree">
            <el-checkbox v-model="ruleForm.agreen">I agree</el-checkbox>
            <span style="color:#14398F;cursor: pointer;" @click="to_txt()">(user agreement)</span>
        </el-form-item>
        <el-form-item>
            <div class="flex">
                <el-button type="primary" @click="submitForm('ruleForm_register')">Create account</el-button>
            </div>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
export default {
    data () {
        var validateAgreen = (rule, value, callback) => {
            if (!value) {
                callback(new Error('Please select an agreement'));
            } else {
                callback();
            }
        }
        this.$store.state.rules.agree = [
            { required: true, validator: validateAgreen, trigger: 'blur' }
        ]
        return {
            ruleForm:{},
            options:[],
            aa:1,
        }
    },
    created () {
        
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
@import '@/style/register.scss';
</style>
