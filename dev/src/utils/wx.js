import axios from 'axios'
import store from '@/store'
import {
  domain
} from './domain.js'
import Vue from 'vue'
import timestamp from 'time-stamp';

export {
  wxShare,
  wxPay
}

//微信分享
const wxShare = (obj, callback) => {
  if (obj) {
    var title = obj.title == undefined || obj.title == null ? '鞋品荟' : obj.title;
    var link = obj.link == undefined || obj.link == null ? window.location.href : obj.link;
    var desc = obj.desc == undefined || obj.desc == null ? '鞋品荟' : obj.desc;
    var imgUrl = obj.imgUrl == undefined || obj.imgUrl == null ? 'src/img/share.png' : obj.imgUrl;
    var debug = obj.debug == true ? true : false;
  } else {
    alert('请传分享参数');
  }
  //微信分享
  //   axios.post(`${domain}/nine/wxshared?url=${_getUrl()}`)
  axios.get(`https://m.xiepinhui.com.cn/nine/wxshared?url=${encodeURIComponent(_getUrl())}`)
    .then(res => {
      let {
        code,
        data
      } = res.data
      if (code === 2000) {
        let timestamp = data.timestamp;
        let nonceStr = data.noncestr;
        let jsapi_ticket = data.jsapi_ticket;
        let signature = data.sign;
        // let appId = data.app_id;
        let appId = 'wxa4142cc3047c6dff';
        Vue.wechat.config({
          debug: true,
          appId,
          timestamp,
          nonceStr,
          signature,
          jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
        });
      }
      Vue.wechat.error(function (err) {
        console.log('err', err)
      })
      Vue.wechat.ready(function () {
        console.log('ready')
        //分享到朋友圈
        Vue.wechat.onMenuShareTimeline({
          title: title, // 分享标题
          link: link, // 分享链接
          desc: desc, // 分享描述
          imgUrl: imgUrl, // 分享图标
          success: function () {
            callback && callback();
            // 用户确认分享后执行的回调函数
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
          }
        });
        // Vue.wechat.chooseWXPay({
        //   timestamp: 0, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
        //   nonceStr: '', // 支付签名随机串，不长于 32 位
        //   package: '', // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
        //   signType: '', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
        //   paySign: '', // 支付签名
        //   success: function (res) {
        //     // 支付成功后的回调函数
        //   }
        // });
        // //分享到朋友
        // Vue.wechat.onMenuShareAppMessage({
        //   title: title, // 分享标题
        //   desc: desc, // 分享描述
        //   link: link, // 分享链接
        //   imgUrl: imgUrl, // 分享图标
        //   type: '', // 分享类型,music、video或link，不填默认为link
        //   dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        //   success: function () {
        //     // 用户确认分享后执行的回调函数
        //     callback && callback();
        //   },
        //   cancel: function () {
        //     // 用户取消分享后执行的回调函数
        //   }
        // });
        // //分享到QQ
        // Vue.wechat.onMenuShareQQ({
        //   title: title, // 分享标题
        //   desc: desc, // 分享描述
        //   link: link, // 分享链接
        //   imgUrl: imgUrl, // 分享图标
        //   success: function () {
        //     // 用户确认分享后执行的回调函数
        //     callback && callback();
        //   },
        //   cancel: function () {
        //     // 用户取消分享后执行的回调函数
        //   }
        // });
        // //分享到QQ空间
        // Vue.wechat.onMenuShareQZone({
        //   title: title, // 分享标题
        //   desc: desc, // 分享描述
        //   link: link, // 分享链接
        //   imgUrl: imgUrl, // 分享图标
        //   success: function () {
        //     // 用户确认分享后执行的回调函数
        //     callback && callback();
        //   },
        //   cancel: function () {
        //     // 用户取消分享后执行的回调函数
        //   }
        // });
      })
    })
}

// 微信支付(旧版)
const wxPay = () => {
  axios.post(`https://m.xiepinhui.com.cn/nine/directbuy`)
    .then(res => {
      if (res.code == 2000) {
        const {
          data
        } = res
        WeixinJSBridge.invoke(
          'getBrandWCPayRequest', {
            "appId": data.pay_param.appId, //公众号名称，由商户传入
            "timeStamp": data.pay_param.timeStamp, //时间戳，自1970年以来的秒数
            "nonceStr": data.pay_param.nonceStr, //随机串
            "package": data.pay_param.package,
            "signType": "MD5", //微信签名方式：
            "paySign": data.pay_param.paySign //微信签名
          },
          function (res) {
            var sHref = "/webnine/state_detail?order_id=" + data.order_id + "&order_sn=" + data.order_sn;
            var orderId = data.order_id;
            if (res.err_msg == "get_brand_wcpay_request:ok") {
              window.location.href = sHref;
            } else if (res.err_msg == "get_brand_wcpay_request:cancel" || res.err_msg == "get_brand_wcpay_request:fail") {
              if (order.use_coupon == '1') {
                returned(orderId);
              }
            }
          }
        );
      }
    })
}

// 获取url
function _getUrl() {
  let url = "";
  // 判断是否是ios微信浏览器
  if (window.__wxjs_is_wkwebview === true) {
    url = store.state.comm.indexUrl.split("#")[0];
  } else {
    url = window.location.href.split("#")[0];
  }
  console.log('wxUrl:', url)
  return url;
}
