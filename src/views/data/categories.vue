<template>
  <el-tabs type="border-card">
    <el-tab-pane :key="1">
      <span slot="label"><i class="el-icon-date"></i> Hot</span>
      <hot />
    </el-tab-pane>
    <el-tab-pane :key="2">
      <span slot="label"><i class="el-icon-date"></i> Top</span>
      <top />
    </el-tab-pane>
    <el-tab-pane :key="3" label="角色管理">
      <span slot="label"><i class="el-icon-date"></i> 角色管理</span>
      角色管理
    </el-tab-pane>
    <el-tab-pane :key="4" label="定时任务补偿">
      <span slot="label"><i class="el-icon-date"></i> 定时任务补偿</span>
      定时任务补偿
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import hot from '@/components/data/category/hot.vue'
import top from '@/components/data/category/top.vue'
export default {
  name: 'categories',
  components: {
    hot,
    top
  },
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick () {
      console.log('handleClick')
    }
  }
}
</script>

<style lang="scss" scoped>
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
