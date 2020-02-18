<template>
  <div class="app-wrapper">
    <myHeader />
    <section class="main padd20">
      <myNav />
      <div class="padd20" style="flex:1;">
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
    </section>
    <myFooter />
  </div>
</template>

<script>
import myHeader from './header/index'
import myFooter from './footer/index'
import myNav from './nav/index'
export default {
  name: 'layout',
  components: {
    myHeader,
    myFooter,
    myNav
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.main {
  position: relative;
}
</style>
