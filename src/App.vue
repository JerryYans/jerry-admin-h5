<template>
  <div class="wrapper fixed">
    <!--<vue-progress-bar></vue-progress-bar>-->
    <app-header></app-header>
    <side-menu></side-menu>
    <div class="content-wrapper" :class="{ slideCollapse: sidebar.collapsed,mobileSide:device.isMobile}">
      <el-scrollbar tag="div" wrapClass="content-scrollbar">
        <section class="content">
          <!--<el-breadcrumb separator="/" style="margin-bottom: 20px;">
            <template v-for="child in currentMenus">
              <el-breadcrumb-item :to="{ path: child.href }">{{child.name}}</el-breadcrumb-item>
            </template>
          </el-breadcrumb>-->
          <transition mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut" appear>
            <router-view></router-view>
          </transition>
          <app-footer/>
        </section>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
  import 'animate.css'
  import {mapGetters, mapActions,mapMutations} from 'vuex'
  import appHeader from './components/header'
  import appFooter from './components/footer'
  import sideMenu from './components/sideMenu.vue'

  export default {
    name: 'App',
    components: {
      appHeader,
      appFooter,
      sideMenu
    },
    data: function () {
      return {
        active: true,
        headerFixed: true,
        breadcrumb: [],
      }
    },
    computed: {
      ...mapGetters({
        sidebar: 'sidebar',
        device: 'device',
        currentMenus: 'currentMenus',
      })
    },
    methods: {
      ...mapMutations({
        toggleDevice: "toggleDevice",
        toggleSidebar: 'toggleSidebar',
        toggleSidebarShow: 'toggleSidebarShow',
      }),
      ...mapActions({
        //changeCurrentMenu: 'changeCurrentMenu' // 映射 this.changeCurrentMenu() 为 this.$store.dispatch('changeCurrentMenu')
      })
    }
  }
</script>


<style>
  .animated {
    animation-duration: .2s;
  }

  blockquote, body, dd, dl, dt, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, html, iframe, legend, li, ol, p, pre, textarea, ul {
    margin: 0;
    padding: 0;
  }

  *,:after, :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }


  .content-wrapper {
    -webkit-transition: -webkit-transform 0.3s ease-in-out, margin 0.3s ease-in-out;
    -moz-transition: -moz-transform 0.3s ease-in-out, margin 0.3s ease-in-out;
    -o-transition: -o-transform 0.3s ease-in-out, margin 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out, margin 0.3s ease-in-out;
    margin-left: 230px;
    padding-top: 50px;
  }

  .content-scrollbar{
    height: calc(100vh - 50px);
  }

  .content-wrapper .el-scrollbar__bar.is-vertical{
    display: none;
  }

  .content-wrapper .content {
    padding: 1.25rem;
  }

  .content-wrapper.slideCollapse{
    margin-left: 44px;
  }

  .content-wrapper.mobileSide{
    margin-left: 0px;
  }

</style>
