<script src="../../../../webpack_start/webpack.config.js"></script>
<template>
   <div class="container">
        <el-menu :default-active="active"  :router="true" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item  index="/">首页</el-menu-item>
        <el-submenu index="2-2">
            <template slot="title">探索</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="/list">同城</el-menu-item>
        <el-menu-item index="/list">专业</el-menu-item>
        <el-menu-item index="/list">课程</el-menu-item>
        <el-menu-item index="/list">新闻动态</el-menu-item>
        </el-menu>
   </div>
</template>
<script>
  export default {
    data() {
      return {
        active: ""
        
      };
    },
    created() {
    this.active = this.$route.path;
    this.$router.afterEach((to, form) => {
      this.active = to.path;
    });
  },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="css" >
    .el-menu{
        padding-left:40%;
    }
    .el-menu--horizontal{
        background-color:#1aa97b;
       
    }
    .el-menu--horizontal>.el-menu-item,.el-menu--horizontal>.el-submenu .el-submenu__title{
        color:#fff;
    }
    
</style>

