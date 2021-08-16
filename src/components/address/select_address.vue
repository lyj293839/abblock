<style lang='scss' scoped>
@import '@/style/main.scss';
ul{
    li{
        padding: 20px 30px;
        box-shadow: 0 2px 5px 0 rgb(0 0 0 / 10%);
        margin: 20px;
    }
}
</style>
<template>
<div>
    <ul>
        <li class="flex" v-for="(item,index) in list" :key="index">
            <div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1,1</div>
                <div>Tunisia</div>
                <div>1</div>
                <div>1</div>
                <div>527264601@qq.com</div>
            </div>
            <el-radio v-model="radio" :label="item" size="medium" @change='getAddress(item)'>备选项</el-radio>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data () {
        return {
           list:[1,2],
           radio:0, 
        }
    },
    props:["getAddress"],
    methods: {
        fetachData(){
            this.radio = 0
        }
    }
}
</script>
