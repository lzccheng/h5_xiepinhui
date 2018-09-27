require('es6-promise').polyfill()
import Vue from 'vue'
import FastClick from 'fastclick'
import router from "./router";
import store from './store'
import App from './App'
import { LoadingPlugin, ToastPlugin, ConfirmPlugin } from 'vux'
import { WechatPlugin } from 'vux'
import { encrypt } from 'utils/encrypt.js' // encrypt
Vue.use(WechatPlugin)
Vue.use(LoadingPlugin)
Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin, {position: 'middle'})
Vue.use(require('vue-wechat-title'))
FastClick.attach(document.body)

Vue.prototype.$encrypt = encrypt
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
