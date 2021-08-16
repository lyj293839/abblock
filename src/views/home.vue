<template>
<div>
    <banner></banner>
    <div class="List">
        <el-row :gutter="30">
            <el-col :span="6" v-for="(item,index) in $store.state.ProdList" :key="index">
                <div class="col_item" @click="toCategory(item)">
                    <img :src="item.img" width="96" height="96" @error="$store.commit('defImg')">
                    <div>{{item.name}}</div>
                </div>
            </el-col>
        </el-row>
    </div>
    <div v-for="(item,index) in tagProdList" :key="index">
        <div v-if="index%2===0" class="List">
            <div class="title_item flex">
                <h2>{{item.title}}</h2>
                <a @click="$store.commit('to_router',['/products','products'])">More ></a>
            </div>
            <el-row :gutter="30">
                <el-col :span="12" v-for="(i,index_i) in item.prod" :key="index_i">
                    <div class="col_item" style="align-items: flex-start;" @click="toProd(i)">
                        <h4>
                            <p>CAS No.:{{i.cas}}</p>
                            <p>Product Name:{{i.name}}</p>
                            <p>MDL No.:{{i.mdl}}</p>
                        </h4>
                        <img :src="i.img" width="150" height="150" @error="$store.commit('defImg')">
                    </div>
                </el-col>
            </el-row>
        </div>
        <div v-else class="Featured_list">
            <div class="title_item flex">
                <h2>{{item.title}}</h2>
                <a @click="$store.commit('to_router',['/products','products'])">More ></a>
            </div>
            <el-row :gutter="20">
                <el-col :span="6" v-for="(i,index_i) in item.prod" :key="index_i">
                    <div class="col_item" @click="toProd(i)">
                        <img :src="i.img" height="270" @error="$store.commit('defImg')">
                        <div class="button_cas">{{i.cas}}</div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
    <div class="foot_list">
        <div class="title_item flex">
            <h2>Product Index</h2>
            <a>More ></a>
        </div>
        <table>
            <tr>
                <th>CAS</th>
                <td>
                    <ul>
                        <li v-for="i in $store.state.jsonList.CAS_list" @click="to_prodType(i,'cas')">{{i}}</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Chemical name</th>
                <td>
                    <ul>
                        <li v-for="i in $store.state.jsonList.Chemical_list" @click="to_prodType(i,'name')">{{i}}</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>MDL</th>
                <td>
                    <ul>
                        <li v-for="i in $store.state.jsonList.MDL_list" @click="to_prodType(i,'mdl')">{{i}}</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Molecules Formula</th>
                <td>
                    <ul>
                        <li v-for="i in $store.state.jsonList.Formula_list" @click="to_prodType(i,'mf')">{{i}}</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Molecular Weight</th>
                <td>
                    <ul>
                        <li v-for="i in $store.state.jsonList.Weight_list" @click="to_prodType(i,'mw')">{{i}}</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Element</th>
                <td>
                    <ul>
                        <li v-for="i in $store.state.jsonList.Element_list" @click="to_prodType(i,'Element')">{{i}}</li>
                    </ul>
                </td>
            </tr>
        </table>
    </div>
</div>
</template>

<script>
import banner from "@/components/banner.vue";
import { provide } from "vue";
export default {
    components:{
      banner
    },
    setup(){
        provide("banner_info", {
            is_banner:true,
            is_breadcrumb:false,
            breadcrumb:[{name:'Home',path:''}]
        });
    },
    data () {
        return {
            menuItem:['Home','About Us','Products','Support','Contact Us'],
            tagProdList:[]
        }
    },
    created () {
        var patt = /[1-9].\d.\d/
        console.log(patt.test("-1.3.4"))
        this.fetachData()
    },
    methods: {
        fetachData(){
            this.$post('home/tagProd').then(res=>{
                if(res&&res.code==200){
                    this.tagProdList = res.data
                }else{this.$message.error(res.msg)}
            })
        },
        toCategory(item){
            localStorage.setItem("CategoryData",JSON.stringify(item))
            this.$router.push({
                path: '/Category',
                name:'Category',
                params:{
                    id:item.name
                }
            }); 
        },
        toProd(item){
            localStorage.setItem('prodKeyword',item.cas)
            this.$router.push({
                path: '/prod',
                name:'prod',
                params:{
                    id:item.cas
                }
            }); 
        },
        to_prodType(i,type){
            var obj = {
                type,
                cas:i,
                index:'',
            }
            localStorage.setItem("ProdsIndexList",JSON.stringify(obj))
            this.$router.push({
                path: '/prods',
                name:'prods_type',
                params:{
                    type_path:type+'_'+i,
                    cas:i,
                    type
                }
            }); 
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/home.scss';
</style>
