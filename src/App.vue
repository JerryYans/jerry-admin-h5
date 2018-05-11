<template>
  <div class="wrapper fixed">
    <!--<vue-progress-bar></vue-progress-bar>-->
    <app-header></app-header>
    <side-menu></side-menu>
    <div class="content-wrapper">
      <transition mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut" appear>
        <router-view/>
      </transition>
    </div>
    <app-footer/>
  </div>
</template>

<script>
  import "font-awesome/css/font-awesome.css";
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
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.animated {
  animation-duration: .5s;
}
</style>
