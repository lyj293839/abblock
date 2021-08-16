<template>
<div class="Pay">
    <el-row :gutter="30">
        <el-col :span="12">
            <h4>Shipping Address</h4>
            <ul>
                <li class="flex">
                    <span>1</span>
                    <el-button type="text" @click="click_formAddress('Add Shipping Address')"> + Add Shipping Address</el-button>
                </li>
                <li><span>1</span></li>
                <li><span>1</span></li>
                <li><span>1,1</span></li>
                <li><span>China</span></li>
                <li><span>Zip Code:1</span></li>
                <li><span>Tel: 13813398750</span></li>
                <li><span>Email:527264601@qq.com</span></li>
                <li><el-button type="text" @click="click_formAddress('Edit Shipping Address',{name:1})">Edit</el-button></li>
            </ul>
        </el-col>
        <el-col :span="12">
            <h4 class="flex">
                <span>Billing Address</span> 
                <el-checkbox v-model="checked" size="medium"> Same as Shipping Address</el-checkbox>
            </h4>
            <ul>
                <li class="flex">
                    <span>1</span>
                    <el-button type="text" @click="click_selectAddress()">Select a different address</el-button>
                </li>
                <li class="flex">
                    <span>1</span>
                    <el-button type="text" @click="click_formAddress('Add Billing Address')">+ Add Billing Address</el-button>
                </li>
                <li><span>1</span></li>
                <li><span>1,1</span></li>
                <li><span>China</span></li>
                <li><span>Zip Code:1</span></li>
                <li><span>Tel: 13813398750</span></li>
                <li><span>Email:527264601@qq.com</span></li>
                <li><el-button type="text" @click="click_formAddress('Edit Billing Address',{name:2})"> Edit</el-button></li>
            </ul>
        </el-col>
        <el-col :span="12">
            <h4>Payment Method</h4>
            <el-radio v-model="radio" :label="1" size="medium">Credit Card</el-radio>
        </el-col>
        <el-col :span="12">
            <h4>PO Number (optional)</h4>
            <el-input v-model="input" class="po_input" size="small"></el-input>
        </el-col>
    </el-row>
    <div class="order_info">
        <table>
            <tr>
                <th>Structure</th>
                <th style="text-align:left;">Description</th>
                <th>Purity</th>
                <th>Pack Size</th>
                <th>Price</th>
                <th>Quantity</th>
                <th width='80'>Subtotal</th>
            </tr>
            <tr v-for="(item,index) in list" :key="index">
                <td><img src="@/assets/image/45.png" width="100"></td>
                <td style="text-align:left;">
                    <p>Catalog Number: AA000041</p>
                    <p>CAS:100-73-2</p>
                    <p>Chemical Name:2H-Pyran-2-carboxaldehyde, 3,4-dihydro-</p>
                </td>
                <td>75%</td>
                <td>1g</td>
                <td>$65.00</td>
                <td>2</td>
                <td>$130.00</td>
            </tr>
        </table>
        <el-row type='flex' justify='space-between'>
            <el-col :span="12" class="col_left">
                <p>-Currency:all prices are in USD</p>
                <p>
                    -Non California customer please choose 0% tax rate. California tax rate is estimated at 8.75% and may 
                    be adjusted on the invoice according to your local rate.
                </p>
                <p>
                    -The shipping charge is an estimate only and may be adjusted on the invoice according to the actual weight of the shipment.
                </p>
                <p>
                    -The HazMat fee (if any) will be charged to your account by the courier if it is shipped on your FedEx/DHL account,
                    and will be added to the invoice otherwise.
                </p>
            </el-col>
            <el-col :span="10" class="col_right">
                <div>
                    <div class="text1">Subtotal：<span>$130.00</span></div>
                    <div class="text1">
                        Shipping Charge：
                        <el-select v-model="value" size="mini">
                            <el-option
                            v-for="item in options"
                            :key="item"
                            :label="item"
                            :value="item">
                            </el-option>
                        </el-select>
                        <p>$125.00</p>
                    </div>
                    <div class="text3" v-if="value=='Collect Account (FedEx/DHL)'">
                        <el-select v-model="value2" size="mini">
                            <el-option
                            v-for="item in options2"
                            :key="item"
                            :label="item"
                            :value="item">
                            </el-option>
                        </el-select>
                        <el-input v-model="value2" size="mini"></el-input>
                    </div>
                    <div class="text2">
                        <span>Order Total：$255.00</span>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
    <div class="text">
        <el-button type="primary" size="small">Place Order</el-button>
    </div>
    
    <el-dialog title="Select Billing Address" v-model="dialogSelect" width="630px">
        <selectAddress :getAddress="getAddress" ref="selectAddress"></selectAddress>
    </el-dialog>

    <el-dialog :title="title_address" v-model="dialogForm" width="800px">
        <formAddress :changeAddress="changeAddress" ref="formAddress"></formAddress>
    </el-dialog>
</div>
</template>

<script>
import selectAddress from "@/components/address/select_address.vue"
import formAddress from "@/components/address/form_address.vue";
export default {
    components:{
        selectAddress,
        formAddress
    },
    data () {
        return {
            list:[1,2],
            checked:false,
            Index:0,
            radio:1,
            input:'',
            value:'FedEx',
            value2:'FedEx',
            title_address:'',
            dialogSelect:false,
            dialogForm:false,
            options:['FedEx','Collect Account (FedEx/DHL)'],
            options2:['FedEx','DHL']
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
        click_selectAddress(){
            this.dialogSelect = true
            this.$nextTick(()=>{
                this.$refs.selectAddress.fetachData()
            })
        },
        changeAddress(){
            this.dialogForm = false
        },
        getAddress(item){
            console.log(item)
            this.dialogSelect = false
        }
    }
}
</script>

<style lang='scss' scoped>
@import '@/style/pay.scss';
</style>