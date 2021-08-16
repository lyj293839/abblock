<style lang='scss' scoped>
@import '@/style/main.scss';
::v-deep{
    .el-form-item__label{
        font-size: 16px;
    }
}
.el-select{
    width: 100%;
}
</style>
<template>
<div>
    <el-form :model="ruleForm" :rules="$store.state.rules" ref="ruleForm_address" label-width="150px" class="demo-ruleForm">
        <el-form-item label="Attn to" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Company Name" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Address" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="City" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="State" prop="name">
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
        <el-form-item label="Zip Code" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Tel" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Email" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Default">
            <div class="flex">
                <el-radio-group v-model="ruleForm.radio" size="medium">
                    <el-radio :label="1">Yes</el-radio>
                    <el-radio :label="0">No</el-radio>
                </el-radio-group>
                <span style="color:red;">* Required Field</span>
            </div>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm_address')">Submit</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
export default {
    data () {
        return {
            ruleForm:{
                name:'',
                country:'',
                radio:0
            },
            options:[1,2]
        }
    },
    props:["changeAddress"],
    methods: {
        fetachData(a){
            this.$refs['ruleForm_address'].resetFields()
            if(a){
                this.ruleForm.name = a.name
            }
        },
        submitForm(a){
            this.$store.dispatch('submitForm',[a,this])
            .then(res=>{
                this.$message.success('success')
                this.changeAddress()
            }).catch(err=>{
                this.$message.error('error')
            })
        }
    }
}
</script>
