<template>
<div>
    <div class="top">
        <div class="wind flex">
            <div>
            	<a href="mailto:sales@aablocks.com?subject=Quotation for 100-50-5&amp;body=" style="background: url(https://www.aablocks.com/assets/img/email.png) left center no-repeat;">sales@aablocks.com</a>
                <a href="javascript:void(0);" style="background: url(https://www.aablocks.com/assets/img/tell.png) left center no-repeat;">+1 858-523-8231</a>
            </div>
            <div v-if="is_token" class="token_text">
                <el-button type="text" @click="$store.commit('to_router',['/user/order','user_order'])">
                    <i class="el-icon-user-solid"></i> User Center
                </el-button>
                <span class="unde">|</span>
                <el-button type="text" @click="$store.commit('to_router',['/user/cart','cart'])">
                    <i class="el-icon-shopping-cart-1"></i>Cart
                </el-button>
                <span class="unde">|</span>
                <el-button type="text" @click="logout()">Logout</el-button>
            </div>
            <div v-else>
                <el-button type="text" @click="click_login()">Login</el-button>
                <span class="unde">|</span>
                <el-button type="text" @click="click_register()">Register</el-button>
            </div>
        </div>
    </div>
    <div class="wind">
        <div class="flex search">
            <img src="https://www.aablocks.com/uploads/images/3ede4fb23e72a66868480229f41b07e1.png" 
                @click="$store.commit('to_router',['/','home'])"
                alt="AA Blocks, Building Blocks, Catalysts, Inhibitors">
            <div class="flex">
                <el-input v-model="input" placeholder="Catalog Number / CAS / MDL"></el-input>
                <el-button type="primary" @click="searchProd(input)">Search</el-button>
            </div>
        </div>
        <ul class="menu">
            <li v-for="(item,index) in $store.state.jsonList.menuList" :key="index" @mouseover="Index=index" @click="menu_to(item)">
                {{item.name}}
                <div v-if="item.name=='Products'" class="menu_item">
                    <el-row>
                        <el-col :span="8" v-for="(i,index_i) in $store.state.ProdList" :key="index_i" @click.stop="to_category(i)">{{i.name}}</el-col>
                    </el-row>
                </div>
                <div v-if="item.name=='Support'" class="menu_item" style="width:100%;">
                    <el-row>
                        <el-col :span="24" v-for="(i,index_i) in $store.state.jsonList.Menu_Support" :key="index_i" @click.stop="menu_to(i)">{{i.name}}</el-col>
                    </el-row>
                </div>
            </li>
            <div class="unde" :style="'left:'+20*Index+'%;'"></div>
        </ul>
        <router-view></router-view>
    </div>
    <foot></foot>

    <el-dialog v-model="dialogLogin" width="800px" custom-class="dialog_login">
        <Login :getToken='getToken' :toRregister="click_register" ref="loginId"></Login>
    </el-dialog>

    <el-dialog v-model="dialogRegister" width="800px" custom-class="dialog_login">
        <Register :getRegister='getRegister' ref="registerId"></Register>
    </el-dialog>
</div>
</template>

<script>
import foot from "@/components/foot.vue";
import Login from "@/components/login.vue";
import Register from "@/components/register.vue";
export default {
    data () {
        return {
            input:'',
            Index:0,
            is_token:false,
            dialogLogin:false,
            dialogRegister:false
        }
    },
    components: {
        foot,
        Login,
        Register
    },
    computed: {
        getNumberItem () {
            return this.$store.state.is_login
        }
    },
    watch: {
        getNumberItem (newVal,oldVal) {
            if(newVal==true){
                this.click_login()
                this.$store.state.is_login = false
            }
        },
        $route(newVal,oldVal){
            if(newVal.name=="user_order"){
                localStorage.setItem('userRouteId',0)
            }
        }
    },
    created () {
        this.fetachData()
    },
    methods: {
        fetachData(){
            this.is_token=localStorage.getItem('token')?true:false
            this.$post('/home/cateList').then(res=>{
                if(res&&res.code==200){
                    this.$store.state.ProdList = res.data
                }else{
                    this.$message.error(res.msg)
                }
            })
        },
        searchProd(val){
            if(val){
                localStorage.setItem('prodKeyword',val)
                this.$router.push({
                    path: '/prod',
                    name:'prod',
                    params:{
                        id:val
                    }
                }); 
            }else{
                this.$store.commit('to_router',['/products','products'])
            }
        },
        click_login(){
            this.dialogLogin = true
            this.$nextTick(()=>{
                this.$refs.loginId.fetachData()
            })
        },
        click_register(){
            this.dialogLogin = false
            this.dialogRegister = true
            this.$nextTick(()=>{
                this.$refs.registerId.fetachData()
            })
        },
        getToken(){
            this.dialogLogin = false
            this.fetachData()
        },
        getRegister(){
            this.dialogRegister = false
        },
        menu_to(item){
            if(item.path){
                this.$router.push({
                    path: '/'+item.path,
                    name:item.router_name
                }); 
            }
        },
        to_category(i){
            localStorage.setItem("CategoryData",JSON.stringify(i))
            this.$router.push({
                path: '/Category',
                name:'Category',
                params:{
                    id:i.name,
                }
            }); 
        },
        logout(){
            this.$confirm('This operation will exit the website. Do you want to continue?', 'Tips', {
                confirmButtonText: 'OK',
                cancelButtonText: 'cancel',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: 'Exit successful!'
                });
                this.$store.commit("logout")
                this.fetachData()
                this.$router.push({
                    path: '/home',
                    name:'home'
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

<style lang="scss" scoped>
@import '@/style/index.scss';
</style>
