<!--  -->
<template>
  <div class="homepage_container">
    <div class="homepage_header">头部</div>
    <div class="homepage_menu">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
      >
        <el-sub-menu index="1">
            <!-- 一级菜单 -->
          <template #title>
            <span>Navigator One</span>
          </template>
          <!-- 二级菜单 -->
          <el-menu-item index="1-4-1">item one</el-menu-item>
          <el-menu-item index="1-4-1">item one</el-menu-item>
          <el-menu-item index="1-4-1">item one</el-menu-item>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
    <div class="homepage_content">右侧</div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref } from "vue";
//[{title:'一级菜单标题',children:[{二级菜单对象},{二级菜单对象}]},{...}]
//{一级菜单的id:{title:'一级菜单标题',children:[{二级菜单对象},{二级菜单对象}]}}
</script>
<style lang="less" scoped>
.homepage_container {
  position: relative;
  height: 100%;
  .homepage_header {
    height: 70px;
    background-color: aqua;
  }
  .homepage_menu {
    position: absolute;
    top: 70px;
    left: 0;
    bottom: 0;
    width: 250px;
    background-color: aquamarine;
  }
  .homepage_content {
    position: absolute;
    top: 70px;
    right: 0;
    left: 250px;
    bottom: 0;
    background-color: skyblue;
  }
}
</style>
