<template>
  <el-dialog
    title="提示"
    :visible.sync="showDialog"
    :width="isMobile ? '95%' : '50%'"
    @close="$emit('cancelEdit')"
    center>
    <el-form ref="editForm" :model="item" label-width="80px" :rules="rules" size="mini">
      <el-form-item label="头像">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="item.avatar" :src="item.avatar" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="编号">
        <el-input v-model="item.id" disabled></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="item.name"></el-input>
      </el-form-item>
      <el-form-item label="用户名" prop="userNumber">
        <el-input v-model="item.userNumber"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="item.password" disabled></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model.number="item.age"></el-input>
      </el-form-item>
      <el-form-item label="电话号码" prop="phone">
        <el-input v-model="item.phone"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex" required>
        <el-select v-model="item.sex" placeholder="请选择你的性别" style="width:100%;">
          <el-option label="男" value="1"></el-option>
          <el-option label="女" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="创建时间">
        <el-date-picker
          v-model="item.date"
          type="datetime"
          placeholder="选择日期时间"
          disabled
          style="width: 100%;">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="详细地址">
        <el-input type="textarea" v-model="item.address"></el-input>
      </el-form-item>
      <el-form-item class="flex-end">
        <el-button type="danger" @click="$emit('cancelEdit')">取消</el-button>
        <el-button type="primary" @click="onSubmit">确认修改</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'edit',
  props: {
    isShow: {
      type: Boolean,
      required: true
    },
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      showDialog: this.isShow,
      rules: {
        name: [{ required: true, message: '请输入正确的姓名', trigger: 'change' }],
        userNumber: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        age: [{ required: true, message: '年龄不能为空' }, { type: 'number', message: '年龄必须为数字值' }]
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs.editForm.validate((valid) => {
        if (valid) {
          this.$emit('confirmEdit', this.item)
          console.log(this.item)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleAvatarSuccess () {
      console.log('触发：handleAvatarSuccess')
    },
    beforeAvatarUpload () {
      console.log('触发：beforeAvatarUpload')
    }
  },
  computed: {
    ...mapGetters([
      'isMobile'
    ])
  },
  watch: {
    isShow () {
      this.showDialog = this.isShow
    }
  }
}
</script>

<style lang="scss" scoped>
  /deep/ .avatar-uploader {
    .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .el-upload:hover {
      border-color: #409EFF;
    }
    &-icon {
      font-size: 28px;
      color: #8c939d;
      width: 100px;
      height: 100px;
      line-height: 100px;
      text-align: center;
    }
  }
  /deep/ .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
</style>
