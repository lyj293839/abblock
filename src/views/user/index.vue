<template>
<div class="User">
    <el-row :gutter="30">
        <el-col :span="4" class="col_left">
            <ul>
                <li v-for="(i,index) in $store.state.jsonList.User_menu" :class="Index==index?'is_active':''" :key="index" @click="to_router(i,index)">
                    {{i.name}}
                </li>
            </ul>
        </el-col>
        <el-col :span="20">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/home' }">
                    <span>Home</span>
                </el-breadcrumb-item>
                <el-breadcrumb-item>
                    <span>User Center</span>
                </el-breadcrumb-item>
                <el-breadcrumb-item>
                    <span>{{$store.state.jsonList.User_menu[Index].name}}</span>
                </el-breadcrumb-item>
            </el-breadcrumb>
            <router-view></router-view>
        </el-col>
    </el-row>
</div>
</template>

<script>
export default {
    data () {
        return {
            Index:''
        }
    },
    created () {
        this.Index=localStorage.getItem('userRouteId')
    },
    watch: {
        $route(newVal,oldVal){
            this.$store.state.jsonList.User_menu.forEach((i,index)=>{
                if(i.router_name==newVal.name){
                    this.Index = index
                    localStorage.setItem("userRouteId",index)
                }
            })
        }
    },
    methods: {
        to_router(i,index){
            this.Index = index
            localStorage.setItem("userRouteId",index)
            this.$router.push({
                path: i.path,
                name:i.router_name
            }); 
        }
    }
}
</script>

<style lang='scss' scoped>
@import '@/style/user.scss';
</style>
