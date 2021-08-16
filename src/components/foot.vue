<template>
<div class="foot">
    <div class="wind">
        <el-row>
            <el-col :span="11">
                <el-row>
                    <el-col :span="24"><h3>Products</h3></el-col>
                    <el-col :span="8" v-for="(item,index) in $store.state.ProdList" :key="index" @click="to_category(item)">
                        <span>{{item.name}}</span>
                    </el-col>
                    <el-col :span="24">
                        <p>© 2017 AA BLOCKS, INC. All rights reserved.</p>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="4">
                <el-row>
                    <el-col :span="24"><h3>About Us</h3></el-col>
                    <el-col :span="24" v-for="(item,index) in $store.state.jsonList.About_list" :key="index" 
                        @click="item.href?'':$store.commit('to_router',[item.path,item.router_name])">
                        <a v-if="item.href" :href="item.href">{{item.name}}</a>
                        <span v-else>{{item.name}}</span>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="4">
                <el-row>
                    <el-col :span="24"><h3>Support</h3></el-col>
                    <el-col :span="24" v-for="(item,index) in $store.state.jsonList.Support_list" :key="index" @click="$store.commit('to_router',[item.path,item.router_name])">
                        <span>{{item.name}}</span>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="5">
                <el-row>
                    <el-col :span="24"><h3>Contact Us</h3></el-col>
                    <el-col :span="24" v-for="(item,index) in $store.state.jsonList.Contact_form" :key="index">
                        <span>{{item}}</span>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
        
    }
  },
  methods: {
    to_category(i){
        localStorage.setItem("CategoryData",JSON.stringify(i))
        this.$router.push({
            path: '/Category',
            name:'Category',
            params:{
                id:i.name
            }
        });
    }
  }
}
</script>

<style lang='scss' scoped>
$color1_7:#777;
.foot{
    background: #f8f8f8;
    text-align: left;
    h3{
        font-size: 20px;
        margin: 20px 0 10px 0;
        font-weight: 400;
    }
    .el-row{
        span,a{
            line-height: 24px;
            font-size: 15px;
            color: $color1_7;
            cursor: pointer;
            text-decoration: none;
        }
        p{
            margin: 20px 0 10px 0;
            color: $color1_7;
        }
    }
}
</style>
