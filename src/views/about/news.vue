<template>
<div class="News">
    <banner></banner>
    <el-row :gutter="30">
        <el-col :span="8" v-for="(item,index) in newList.list" :key="index" >
            <div class="card" >
                <p>{{item.created_at}}</p>
                <h3 @click="to_detail(item)">{{item.breadcrumb}}</h3>
            </div>
        </el-col>
    </el-row>
    <el-pagination
        background
        :page-size='$store.state.pageSize'
        @current-change="handleCurrentChange"
        :current-page.sync="queryList.page"
        layout="prev, pager, next"
        :total="newList.total">
    </el-pagination>
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
            is_banner:false,
            is_breadcrumb:true,
            breadcrumb:[{name:'News',path:''}]
        });
    },
    data () {
        return {
            newList:{},
            queryList:{
                page:1,
            }
        }
    },
    created () {
        this.fetachData()
    },
    methods: {
        fetachData(){
            this.$post('home/newList',this.queryList).then(res=>{
                if(res&&res.code==200){
                    this.newList = res.data
                }else{this.$message.error(res.msg)}
            })
        },
        handleCurrentChange(page_current){
            this.queryList.page = page_current;
            this.fetachData();
        },
        to_detail(item){
            localStorage.setItem('newDetail',JSON.stringify(item))
            this.$router.push({
                path: '/node',
                name:'node',
                params:{
                    id:JSON.stringify(item.id)
                }
            });
        }
    }
}
</script>

<style lang='scss' scoped>
@import '@/style/news.scss';
</style>
