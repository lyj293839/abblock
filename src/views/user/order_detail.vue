<template>
<div class="User_orderDetail">
    <el-row>
        <el-col :span="6">
            <h4>General</h4>
            <div>Order Number:2517</div>
            <div>Order Date:2021-07-28</div>
            <div>PO Number:</div>
            <div>Payment Method:</div>
            <div>Status: Processing</div>
        </el-col>
        <el-col :span="6">
            <h4>Shipping Details</h4>
            <div>Shipping Company:FedEx</div>
            <div>Tracking Number:</div>
        </el-col>
        <el-col :span="6">
            <h4>Shipping Address</h4>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>
                <span>1</span>
                <span>1</span>
            </div>
            <div>
                <span>China</span>
                <span>1</span>
            </div>
            <div>13813398750</div>
            <div>527264601@qq.com</div>
        </el-col>
        <el-col :span="6">
            <h4>Billing Address</h4>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>
                <span>1</span>
                <span>1</span>
            </div>
            <div>
                <span>China</span>
                <span>1</span>
            </div>
            <div>13813398750</div>
            <div>527264601@qq.com</div>
        </el-col>
    </el-row>
    <el-table
        :data="list"
        stripe
    >
        <el-table-column label="Structure" align="left" width='120'>
            <template #default="scope">
                <img src="@/assets/image/45.png" width="100">
            </template>
        </el-table-column>
        <el-table-column label="Product" align="left" width="400">
            <template #default="scope">
                <div>Catalog Number:<a>AA000041</a></div>
                <div>CAS:<a>100-73-2</a></div>
                <div>Chemical Name:<a>2H-Pyran-2-carboxaldehyde, 3,4-dihydro-</a></div>
                <div>Lead time:3 weeks</div>
            </template>
        </el-table-column>
        <el-table-column label="Purity" align="left">
            <template #default="scope">75%</template>
        </el-table-column>
        <el-table-column label="Pack Size" align="center">
            <template #default="scope">1g</template>
        </el-table-column>
        <el-table-column label="Qty" align="center">
            <template #default="scope">1</template>
        </el-table-column>
        <el-table-column label="Unit Price" align="center">
            <template #default="scope">$65.00</template>
        </el-table-column>
        <el-table-column label="Total Price" align="center">
            <template #default="scope">$65.00</template>
        </el-table-column>
    </el-table>
    <div class="textBottom">
        <div class="text1">
            <div>Subtotal:</div>
            <div>Tax:</div>
            <div class="text_border">Shipping Charge:</div>
            <div>Order Total:</div>
        </div>
        <div class="text2">
            <div>$65.00</div>
            <div>$0.00</div>
            <div class="text_border">$125.00</div>
            <div>$190.00</div>
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
    }
}
</script>

<style lang='scss' scoped>
@import '@/style/user_orderDetail.scss';
</style>
