<template>
<div class="Newdetail">
    <banner></banner>
    <h1>{{newData.title}}</h1>
    <p style="text-align:center;">{{newData.created_at}}</p>
    <p v-html="newData.content"></p>
    <h3>AA Blocks offers a comprehensive range of building blocks and specially designed scaffolds to support your R&D:</h3>
    <el-row :gutter="2">
        <el-col :span="12" v-for="item in prodList.list" :key="item.prod_id">
            <div class="list">
                <img :src="item.img" width="150" height="150" @click="to_detail(item)">
                <div>
                    <h3 @click="to_detail(item)">{{item.name}}</h3>
                    <p>Catalog No.:{{}}</p>
                    <p>CAS No.:{{item.cas}} MDL No.:{{item.mdl}}</p>
                    <p>MF:{{item.mf}}&nbsp;MW:{{item.mw}}</p>
                </div>
            </div>
        </el-col>
    </el-row>
</div>
</template>

<script>
import banner from "@/components/banner.vue";
import { provide,getCurrentInstance  } from "vue";
export default {
    components:{
      banner
    },
    setup(){
        const { proxy } = getCurrentInstance()
        provide("banner_info", {
            is_banner:false,
            is_breadcrumb:true,
            breadcrumb:[{name:proxy.$root.$route.params.id,path:''}]
        });
    },
    data () {
        return {
            newData:{},
            prodList:{}
        }
    },
    created () {
        this.fetachData()
    },
    methods: {
        fetachData(){
            this.newData = localStorage.getItem('newDetail')?JSON.parse(localStorage.getItem('newDetail')):{}
            this.$post('home/prodList',{cate_id:this.newData.id}).then(res=>{
                if(res&&res.code==200){
                    this.prodList = res.data
                }else{this.$message.error(res.msg)}
            })
        },
        to_detail(item){
            localStorage.setItem('prodKeyword',item.cas)
            this.$router.push({
                path: '/prod',
                name:'prod',
                params:{
                    id:item.cas
                },
            }); 
        }
    }
}
</script>

<style lang='scss' scoped>
@import '@/style/main.scss';
.Newdetail{
    text-align: left;
    h1{text-align: center;}
    .el-row{
        margin-bottom: 20px;
        .el-col{
            margin-top: 2px;
            .list{
                display: flex;
                text-align: left;
                border: 1px solid gray;
            }
            h3{
                &:hover{color: $color1;cursor: pointer;}
            }
            img{cursor: pointer;}
        }
    }
}

</style>
