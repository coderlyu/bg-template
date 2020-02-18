<template>
  <div class="login-wrapper">
    <div class="login">
      <Login />
      <Register />
    </div>
    <myFooter />
  </div>
</template>

<script>
import myFooter from '@/views/layout/footer'
import Login from './components/login.vue'
import Register from './components/register.vue'
export default {
  name: 'login',
  components: {
    Login,
    Register,
    myFooter
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.login-wrapper {
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  // background-image: url();
}
</style>
