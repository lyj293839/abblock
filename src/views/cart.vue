<template>
<div class="Cart">
    <el-table
        :data="list"
        size="medium"
        @selection-change="handleSelectionChange"
    >
        <el-table-column
            type="selection"
            width="50">
        </el-table-column>
        <el-table-column label="Structure" align="center" width="120">
            <template #default="scope">
                <span>{{scope.row}}</span>
            </template>
        </el-table-column>
        <el-table-column label="Description" align="left" width="450px">
            <template #default="scope">{{scope.row}}</template>
        </el-table-column>
        <el-table-column label="Purity" align="center">
            <template #default="scope">{{scope.row}}</template>
        </el-table-column>
        <el-table-column label="Pack Size" align="center" width="100">
            <template #default="scope">{{scope.row}}</template>
        </el-table-column>
        <el-table-column label="Price" align="center">
            <template #default="scope">{{scope.row}}</template>
        </el-table-column>
        <el-table-column label="Qty" align="center" width="150">
            <template #default="scope">
                <el-input-number v-model="scope.row" :min="1" size="mini"></el-input-number>
            </template>
        </el-table-column>
        <el-table-column label="Subtotal" align="center">
            <template #default="scope">{{scope.row}}</template>
        </el-table-column>
        <el-table-column align="center">
            <template #default="scope">
                <el-button type="text" size="mini" @click="to_cart(scope.row)">Delete</el-button>
            </template>
        </el-table-column>
    </el-table>
    <div class="make flex">
        <el-button type="danger">Delete</el-button>
        <div class="flex">
            <div class="text">
                <span>{{list.length}}</span>item(s) <br>
                Total without S&H:<span></span>
            </div>
            <el-button type="primary" @click="to_pay()">Checkout</el-button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data () {
        return {
            list:[1]
        }
    },
    created () {
        
    },
    methods: {
        handleSelectionChange(arr){

        },
        to_pay(){
            this.$router.push({
                path: '/user/pay',
                name:'pay',
                query:{
                    id:123
                }
            }); 
        }
    }
}
</script>

<style lang='scss' scoped>
@import '@/style/cart.scss';
</style>
