<template>
<div class="User_order">
    <div class="search">
        <el-input v-model="input" placeholder="Enter Order#,PO#,Catalog or CAS"></el-input>
        <el-button type="primary">Search</el-button>
    </div>
    <table border="1" bordercolor="#e6e6e6">
        <tr class="th_background">
            <td>General</td>
            <td>Description</td>
            <td>Order Total</td>
            <td>Status</td>
        </tr>
        <tr>
            <td>
                <p>Date:2021-07-28</p>
                <p>Order#:2517</p>
                <p>PO#:</p>
                <p><el-button type="text" @click="to_detail('123')">View Order Details</el-button></p>
            </td>
            <td>
                <p>
                    <span><a @click="to_prodDetail('100-73-2')">AA000041</a></span>
                    <span><a @click="to_prodDetail('100-73-2')">100-73-2</a></span>
                </p>
                <p>2H-Pyran-2-carboxaldehyde, 3,4-dihydro-</p>
                <p>
                    <span>Packsize:1g</span>
                    <span>Qty:1</span>
                </p>
                <p>Lead time:3 weeks</p>
            </td>
            <td><p>$190.00</p></td>
            <td><el-button type="text">Pay Now</el-button></td>
        </tr>
    </table>
</div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },
    created () {
        
    },
    methods: {
        to_detail(id){
            this.$router.push({
                path: '/user/order/detail',
                name:'user_orderDetail',
                query:{
                    id
                }
            }); 
        },
        to_prodDetail(cas){
            localStorage.setItem('prodKeyword',cas)
            this.$router.push({
                path: '/prod',
                name:'prod',
                params:{
                    id:cas
                }
            }); 
        }
    }
}
</script>

<style lang='scss' scoped>
@import '@/style/user_order.scss';
</style>
