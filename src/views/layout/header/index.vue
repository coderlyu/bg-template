<template>
  <header class="bg-white my-header flex-bt">
    <h1 v-if="!isMobile">后台管理模板</h1>
    <i v-else :class="leftOpen ? 'el-icon-s-fold': 'el-icon-s-unfold'" @click="toggleSideBar"></i>
    <el-dropdown>
      <span class="el-dropdown-link">
        <img class="avatar" src="../../../assets/coderly.jpg" alt="头像">
        coderly<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item><i class="el-icon-house"></i>个人中心</el-dropdown-item>
        <el-dropdown-item><i class="el-icon-setting"></i>设置</el-dropdown-item>
        <el-dropdown-item><i class="el-icon-position"></i>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'isMobile',
      'leftOpen'
    ])
  },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-dropdown-link {
    cursor: pointer;
    color: #606266;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 768px){
    .my-header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
    }
  }
</style>
