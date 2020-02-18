<template>
  <div class="my-nav">
    <div class="mask" v-show="leftOpen" @click="$store.dispatch('app/closeSideBar')"></div>
    <nav class="bg-white" :style="leftOpen ? 'left: 0': ''">
      <el-menu :default-active="activeIndex" class="el-menu-demo">
        <router-link to="/home">
          <el-menu-item index="homePage"><i class="el-icon-house"></i> 主页</el-menu-item>
        </router-link>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-data-analysis"></i> 数据</template>
          <router-link to="/home">
            <el-menu-item index="2-1">教师</el-menu-item>
          </router-link>
          <router-link to="/home">
            <el-menu-item index="2-2">学生</el-menu-item>
          </router-link>
          <router-link to="/home">
            <el-menu-item index="2-3">分类</el-menu-item>
          </router-link>
        </el-submenu>
        <router-link to="/profile">
          <el-menu-item index="profile"><i class="el-icon-user"></i> 我的</el-menu-item>
        </router-link>
      </el-menu>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'navBar',
  data () {
    return {
      activeIndex: 'homePage'
    }
  },
  computed: {
    ...mapGetters([
      'leftOpen',
      'isMobile'
    ])
  }
}
</script>

<style lang="scss" scoped>
/deep/ .el-menu {
  border-right:none !important;
}
nav {
  width: 220px;
  padding: 10px;
  li.el-menu-item.is-active{
    border-left: 4px solid #409EFF;
    background: #ecf3fb;
  }
}
.mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba($color: #000000, $alpha: 0.1);
  z-index: 99;
}
@media (max-width: 768px){
  nav{
    position: fixed;
    top: 60px;
    left: -250px;
    height: 100%;
    z-index: 100;
    // box-shadow: 1px 0px 3px rgba(0, 0, 0, 0.1);
    border-radius: 0;
    transition: 0.28s;
  }
}
</style>
