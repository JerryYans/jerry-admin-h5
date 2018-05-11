import { randomString } from  './utils'

export default {
  getUid:function(){
    var uid = window.localStorage.getItem('admin-uid');
    if (!uid) {
      uid = randomString(32);
      window.localStorage.setItem('admin-uid',uid);
    }
    return uid;
  },
  getSid:function(){
    var sid = window.localStorage.getItem('admin-token');
    if(!!sid){
      return sid;
    }
    return '';
  },
  login (token, callback) {
    window.localStorage.setItem('admin-token',token);
    if (callback) callback();
  },

  getToken () {
    return window.localStorage.getItem('admin-token');
  },

  logout (cb) {
    window.localStorage.removeItem('admin-token');
    if (cb) cb()
  },

  isLoggedIn () {
    return !!window.localStorage.getItem('admin-token');
  }
}
