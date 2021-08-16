<template>
<div class="User_ship">
    <br>
    <div class="heard">
        <el-button type="primary" icon="el-icon-plus" size="small"  @click="click_formAddress('Add Shipping Address')">Add Shipping Address</el-button>
    </div>
    <div class="List" v-for="(item,index) in List" :key="index" :style="index%2?'background:#f8f8f7;':''">
        <div>
            <div>Attn to:123</div> 
            <div>Company Name:123</div>
            <div>Address:123</div>
            <div>City:123</div>
            <div>State:123</div>
            <div>Country:United States</div>
            <div>Zip Code:123</div>
            <div>Tel:12312312312</div>
            <div>Email:jtang@aikonchem.com</div>
        </div>
        <div>
            <el-button type="text"><i class="el-icon-star-on"></i>Default</el-button>
            <el-button type="primary" icon="el-icon-edit" size="mini" @click="click_formAddress('Edit Shipping Address',{name:1})">Edit</el-button>
            <el-button type="primary" icon="el-icon-delete" size="mini" @click="Delete_address(index)">Delete</el-button>
        </div>
    </div>

    <el-dialog :title="title_address" v-model="dialogForm" width="800px">
        <formAddress :changeAddress="changeAddress" ref="formAddress"></formAddress>
    </el-dialog>
</div>
</template>

<script>
import formAddress from "@/components/address/form_address.vue";
export default {
    components:{
        formAddress
    },
    data () {
        return {
            List:[1,2],
            title_address:'',
            dialogForm:false
        }
    },
    created () {
        
    },
    methods: {
        click_formAddress(title,item){
            this.title_address = title
            this.dialogForm = true
            this.$nextTick(()=>{
                this.$refs.formAddress.fetachData(item)
            })
        },
        changeAddress(){
            this.dialogForm = false
        },
        Delete_address(item){
            this.$confirm('This operation will delete this information. Do you want to continue?', 'Tips', {
                confirmButtonText: 'OK',
                cancelButtonText: 'cancel',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: 'Exit successful!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: 'Cancelled'
                });
            });
        }
    }
}
</script>

<style lang='scss' scoped>
@import '@/style/user_ship.scss';
</style>
