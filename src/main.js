// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueProgressBar from "vue-progressbar";
import frame from './frame'
import Element from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import axios from "./common/axios";

import router from './router'

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(Element);
Vue.http = axios;
Vue.axios = axios;
Vue.use(axios);

//设置进度条
Vue.use(VueProgressBar, {
  color: '#eeeeee',
  failedColor: '#874b4b',
  thickness: '2px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s'
  },
  autoRevert: true,
  location: 'top',
  inverse: false
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h=>h(frame)
}).$mount("#app")
