require('es6-promise').polyfill()
import Vue from 'vue'
import App from './App'
import store from './store'
import router from "./router";
import FastClick from 'fastclick'
import Vant from 'vant';
import { Button } from 'vant';
import 'vant/lib/vant-css/index.css';
import { encrypt } from 'utils/encrypt.js' // encrypt
import VueClipboard from 'vue-clipboard2' // 剪切板
import { LoadingPlugin, ToastPlugin, ConfirmPlugin, WechatPlugin } from 'vux'

Vue.use(Vant);
Vue.use(WechatPlugin)
Vue.use(LoadingPlugin)
Vue.use(ConfirmPlugin)
Vue.use(VueClipboard)
Vue.use(require('vue-wechat-title'))
Vue.use(ToastPlugin, {position: 'middle'})
FastClick.attach(document.body)

Vue.prototype.$encrypt = encrypt
Vue.config.productionTip = false

Vue.use(Button);
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
