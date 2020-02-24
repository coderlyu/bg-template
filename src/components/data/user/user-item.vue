<template>
  <div class="over-hidden padd5">
    <el-row :gutter="10">
      <template v-for="(item,index) in tableData">
        <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8" :key="index">
          <div class="bg-white margin10 padd10 borderra4 flex-dc">
            <div :class="isMiniWid ? 'column-n1' : 'column-n2'" >
              <div style="height:100px;">
                <img :src="item.avatar" alt="头像" style="width:80px;height:80px;">
              </div>
              <p class="name">{{ item.name }}</p>
              <p class="address">{{ item.address }}</p>
            </div>
            <div class="margin10 flex-end">
              <p class="time">{{ item.date }}</p>
            </div>
            <div class="margin5 flex-end">
              <el-button type="primary" icon="el-icon-edit" @click="$emit('edit', item)" circle></el-button>
              <el-button type="danger" icon="el-icon-delete" @click="$emit('delete', item.id)" circle></el-button>
            </div>
          </div>
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'user-item',
  props: {
    tableData: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      isMiniWid: false
    }
  },
  methods: {
    resizeHander () { // 判断当前是否需要将column-count变成一列
      var wid = document.body.clientWidth
      if (wid <= 400) {
        this.isMiniWid = true
      } else {
        this.isMiniWid = false
      }
    }
  },
  created () {
    this.resizeHander()
    window.addEventListener('resize', this.resizeHander)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resizeHander)
  }
}
</script>

<style lang="scss" scoped>
.name {
  font-size: 16px;
  font-weight: 600;
}
.time {
  font-size: 12px;
  color: #666;
}
.address {
  font-size: 14px;
}
@media (max-width: 500px) {
  .address {
    font-size: 13px;
  }
}
</style>
