<template>
  <div class="app-wrapper">
    <myHeader />
    <section class="main" :class="isMobile ? '' : 'padd20'">
      <myNav />
      <div class="over-flow-auto" :class="isMobile ? '' : 'padd20'" style="flex:1;">
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
import { mapGetters } from 'vuex'
export default {
  name: 'layout',
  components: {
    myHeader,
    myFooter,
    myNav
  },
  computed: {
    ...mapGetters([
      'isMobile'
    ])
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
@media (max-width: 768px){
  .main {
    padding-top: 60px;
  }
}
</style>
