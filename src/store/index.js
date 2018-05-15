import Vue from 'vue'
import Vuex from 'vuex'
import defaultValue from "../services/default";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loading: false,
    menuList:{},
    sidebar: {
      collapsed: false,
      show: true,
    },
    device: {
      isMobile: false
    },
    userInfo: {
      nickname: "佚名",
      avatar:"./static/img/user.png"
    },
    currentMenus:[]
  },
  getters: {
    loading: state => state.loading,
    menuList: state => state.menuList,
    sidebar: state => state.sidebar,
    userInfo:state => state.userInfo,
    device:state => state.device,
    currentMenus:state => state.currentMenus,
  },
  actions: {
    //异步的函数
    loadMenuList: ({commit}) => {
      commit('loadMenu', defaultValue.menuList)
    }
  },
  mutations: {
    taggleDevice: (state, isMobile)=>{
      state.device.isMobile = isMobile
    },
    taggleLoading: (state) => {
      state.loading = !state.loading
    },
    loadMenu: (state, menu) => {
      state.menuList = menu
    },
    loadCurrentMenu: (state, menu) => {
      state.currentMenus = menu
    },
    setUserInfo: (state, userInfo) => {
      state.userInfo = userInfo
    },
    toggleSidebar: (state, collapsed) => {
      state.sidebar.collapsed = collapsed == null ? !state.sidebar.collapsed : collapsed
      window.sessionStorage.setItem("state.sidebar.collapsed", state.sidebar.collapsed)
    },
    toggleSidebarShow: (state, show) => {
      if (show == null) state.sidebar.show = !state.sidebar.show;
      else{
        state.sidebar.show = show;
      }
      window.sessionStorage.setItem("state.sidebar.show",state.sidebar.show)
    }
  }
})

export default store
