<template>
<div>
    <el-breadcrumb separator="/" v-if="banner_info.is_breadcrumb">
        <el-breadcrumb-item :to="{ path: '/home' }"><span>Home</span> </el-breadcrumb-item>
        <el-breadcrumb-item v-for="(i,index) in banner_info.breadcrumb" :key="index" :to="{ path: i.path }">
            <span>{{i.name}}</span>
        </el-breadcrumb-item>
    </el-breadcrumb>
    <div style="margin-top:10px;" v-if="banner_info.is_banner">
        <img src="https://www.aablocks.com/uploads/images/ac73bfd2d781e59ecd804725fdeedaa7.png">
    </div>
</div>
</template>

<script>
import {inject } from "vue";
export default {
    setup(){
        const banner_info  = inject("banner_info");
        return {banner_info}
    }
}
</script>
