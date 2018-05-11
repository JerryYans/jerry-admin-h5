<template>
  <aside class="main-sidebar animated">
    <div class="sidebar">
      <el-menu :default-active="onRoutes"
               class="el-menu-style"
               theme="light" router >
        <template v-for="item in menuList">
          <sub-menu :param="item"></sub-menu>
        </template>
      </el-menu>
    </div>
  </aside>
</template>
<script>
  import subMenu from "./subMenu.vue"
  import defaultData from '../services/default'

  export default {
    props: {
      show: Boolean,
    },
    data() {
      return {
        menuList : defaultData.menuList
      }
    },
    components: {
      subMenu,
    },
    mounted () {
      let route = this.$route
    },
    created: function () {
      this.loadMenuList();
    },
    methods: {
      loadMenuList(){
        this.menuList  = defaultData.menuList;
      }
    }
  }
</script>
<style>
  .showSlide {
    animation-duration: .2s;
    animation-name: slideInLeft;
  }

  .hideSlide {
    animation-duration: .2s;
    animation-name: slideOutLeft;
  }

  .main-sidebar {
    background-color: #ffffff;
    position: fixed;
    top: 50px;
    left: 0;
    bottom: 0;
    height: calc(100vh - 50px);
    width: 44px;
    z-index: 810;
    -webkit-transition: -webkit-transform 0.3s ease-in-out, width 0.3s ease-in-out;
    -moz-transition: -moz-transform 0.3s ease-in-out, width 0.3s ease-in-out;
    -o-transition: -o-transform 0.3s ease-in-out, width 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;
  }

  .expandSide {
    width: 230px;
  }

  .el-menu-style,
  .el-menu-style .el-menu{
    background-color: #ffffff;
  }
  .el-menu-style .el-menu-item:hover,
  .el-menu-style .el-submenu__title:hover{
    background-color: #eeeeee !important;
  }

  .el-menu-style .el-submenu .el-menu-item {
    height: 45px;
    line-height: 45px;
  }

  .el-menu-style .el-menu-item,
  .el-menu-style .el-submenu__title {
    height: 45px;
    line-height: 45px;
  }

  .main-sidebar .el-menu--collapse {
    width: 44px;
  }

  .main-sidebar .el-menu--collapse>.el-menu-item,
  .main-sidebar .el-menu--collapse>.el-submenu>.el-submenu__title {
    padding-left: 13px !important;
  }

  .vue-scrollbar{
    background-color: #ffffff !important;
    height: calc(100vh - 50px)
  }

  .main-sidebar .el-scrollbar__bar.is-vertical{
    display: none;
  }

  .sidebar{
    min-height: 450px;
  }


</style>
