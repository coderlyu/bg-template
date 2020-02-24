<template>
  <div class="app-wrapper">
    <el-row :gutter="10">
      <h3>数据展示</h3>
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6">
        <div class="flex-dr bg-white padd20 item flex-bt borderra4">
          <svg-icon icon-class="active-number" class-name="item-icon-class" />
          <div>
            <h3>总人数</h3>
            <p class="item-p color1">1204</p>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6">
        <div class="flex-dr bg-white padd20 item flex-bt borderra4">
          <svg-icon icon-class="teacher-number" class-name="item-icon-class" />
          <div>
            <h3>教师总数</h3>
            <p class="item-p color2">204</p>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6">
        <div class="flex-dr bg-white padd20 item flex-bt borderra4">
          <svg-icon icon-class="student-number" class-name="item-icon-class" />
          <div>
            <h3>学生总数</h3>
            <p class="item-p color3">1000</p>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6">
        <div class="flex-dr bg-white padd20 item flex-bt borderra4">
          <svg-icon icon-class="visited" class-name="item-icon-class" />
          <div>
            <h3>昨日访问数</h3>
            <p class="item-p color4">198</p>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col>
        <div class="bg-white borderra4 margin20" :class="isMobile ? '': 'padd20'">
          <h3>公告通知</h3>
          <ul>
            <template v-for="(item, index) in 40">
              <li class="notice-item flex-bt font14 font-c666" :key="index">
                <div>
                  <span class="number">{{ index + 1 }}</span>
                  <a href="#">【新活动】干</a>
                  <span class="tag tag-wheat">置顶</span>
                  <span class="tag tag-red">HOT</span>
                </div>
                <span class="font13">2019-12-30</span>
              </li>
            </template>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'home',
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'isMobile'
    ])
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/notice.scss';
.item {
  height: 130px;
  margin: 5px 10px;
  text-align: center;
}
.item-icon-class {
  width: 70px;
  height: 70px;
}
.item-p {
  margin: 5px;
}
.color1 {
  color: #ED546B;
}
.color2 {
  color: #B3D465;
}
.color3 {
  color: #99beff;
}
.color4 {
  color: #4192F3;
}

</style>
