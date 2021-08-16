<template>
<div class="NotFound">
    <p>No result found.</p>
    <el-button type="text" @click="$store.commit('to_router',['/','home'])">Please return to home page</el-button>
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
    }
}
</script>

<style lang='scss' scoped>
@import '@/style/main.scss';
.NotFound{
    min-height: 470px;
    .el-button{}
}
</style>
