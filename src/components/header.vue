<template>
  <header class="main-header animated">
    <a href="#" class="logo">
      <span class="logo-lg"><i class="fa fa-diamond"></i>&nbsp; <b>Vue-Admin</b></span>
    </a>
    <nav class="navbar">
      top nav
    </nav>
  </header>
</template>
<script>
  export default {
    data(){
      return {
        showMessageBox: false,
        showProfileBox: false,
        list: [],
        count: 4,
        show:true,
      }
    },
  }
</script>
<style scoped>
  .animated {
    animation-duration: .2s;
  }

  .main-header a {
    text-decoration: none;
    color: #48576a;
  }

  .main-header {
    position: fixed;
    min-width: 100%;
    box-shadow: 0 2px 3px hsla(0, 0%, 7%, .1), 0 0 0 1px hsla(0, 0%, 7%, .1);
    z-index: 1999;
    animation-name: slideInDown;
    animation-fill-mode: both;
    color: #48576a;
  }

  .main-header .navbar .sidebar-toggle {
    float: left;
    background-color: transparent;
    background-image: none;
    padding: 15px 15px;
    font-family: fontAwesome;
    line-height: 20px;
  }

  .main-header .navbar .sidebar-toggle:before {
    content: "\f03b";
  }

  .main-header {
    background-color: #ffffff;
  }

  .main-header .logo {
    -webkit-transition: width 0.3s ease-in-out;
    -o-transition: width 0.3s ease-in-out;
    transition: width 0.3s ease-in-out;
    display: block;
    float: left;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    width: 230px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    padding: 0 15px;
    font-weight: 300;
    overflow: hidden;
    text-decoration: none;
  }

  .main-header .logo .logo-lg {
    display: block;
    height: 38px;
    line-height: 38px;
    margin-top: 6px;
  }

  .main-header .navbar {
    -webkit-transition: margin-left 0.3s ease-in-out;
    -o-transition: margin-left 0.3s ease-in-out;
    transition: margin-left 0.3s ease-in-out;
    margin-bottom: 0;
    margin-left: 230px;
    border: none;
    min-height: 50px;
    border-radius: 0;
    background-color: #ffffff;
  }

  .layout-top-nav .main-header .navbar {
    margin-left: 0;
  }


  body.hold-transition .main-header .navbar,
  body.hold-transition .main-header .logo {
    -webkit-transition: none;
    -o-transition: none;
    transition: none;
  }

  .main-header .navbar .sidebar-toggle {
    display: block;
  }

  .main-header .navbar .sidebar-toggle:hover {
    background: #f9f9f9;
  }

  .main-header .logo {
    border-bottom: 0 solid transparent;
  }


  @media (max-width: 800px) {

    .main-header .logo {
      display: none;
    }

    .main-header .navbar {
      margin: 0;
    }

    .main-header .logo, .main-header .navbar {
      width: 100%;
      float: none;
    }

  }
  .main-header.closeLogo .navbar{
    margin-left: 44px;
  }

  .main-header.closeLogo .logo{
    width: 44px;
    padding: 0 8px;
  }
  .main-header.closeLogo .logo .logo-lg b{
    display: none;
  }
  .main-header.closeLogo .sidebar-toggle {
    background: #f9f9f9;
  }

  .main-header.closeLogo .navbar .sidebar-toggle:before {
    content: "\f03c";
  }

  .main-header.mobileLogo .navbar .sidebar-toggle:before {
    content: "\f03a";
  }

  .navbar-custom-menu{
    float: right;
  }

  .navbar-custom-menu .el-dropdown-link{
    cursor: pointer;
    height: 50px;
    padding: 13px 5px;
    min-width: 50px;
    text-align: center;
  }
  .navbar-custom-menu .el-dropdown-link img{
    background-color: #108ee9;
  }

  .navbar-custom-menu .el-dropdown-link:hover{
    background: #f9f9f9;
  }
  .message-list {
    list-style: none;
    padding: 0 10px;
  }
  .message-list li{
    list-style: none;
    height: 25px;
    line-height: 25px;
  }
  .message-list li a{
    text-decoration: none;
    color: #666666;
  }
  .message-list li:hover{
    background-color: #f9f9f9;
  }

  .el-dropdown-menu .header-pic{
    text-align: center;
    background-color: #108ee9;
    padding: 20px;
  }
  .el-dropdown-menu .header-pic img{
    vertical-align: middle;
    height: 90px;
    width: 90px;
    border: 3px solid;
    border-color: transparent;
    border-color: hsla(0,0%,100%,.2);
    background-color: #108ee9;
  }
  .el-dropdown-menu .header-pic p{
    font-size: 1.5rem;
    color: #ffffff;
  }
  .el-dropdown-menu .pull-left{
    background-color: #f9f9f9;
    padding: 10px;
    display: inline-block;
    float: left;
  }
  .el-dropdown-menu .pull-right{
    background-color: #f9f9f9;
    padding: 10px;
    float: right;
    display: inline-block;
  }
</style>
