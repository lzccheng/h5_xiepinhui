/**
 * 
 * 获取是否关注公众号的字段： subscribe, openid
 * 
 */
import {
  isWeiXin,
  getQueryString
} from "@/utils/comm.js";
import axios from "axios";


let wxLogin = () => {
    if (!isWeiXin()) {
      return
    };
    let getSubscribe = openid => {
        let data = {
          openid,
          plat: 3,
        }
        axios.get(base + '/user/get_weixin_userinfo', {
            params: data
          })
          .then(async function (result) {
            if (result.data.code == 2000) {
              console.log(result)
              window.localStorage.subscribe = result.data.data.subscribe;
              console.log('window.localStorage.subscribe', window.localStorage.subscribe)
            }
          }, err => {})
    }
    if (window.sessionStorage.wxUser) {
      let wxUser = JSON.parse(window.sessionStorage.wxUser);
      if (wxUser.openid){
        getSubscribe(wxUser.openid);
        return;
      }
      console.log('window.sessionStorage.user', wxUser)
    }
    let access_code = getQueryString("code");
    // let base = process.env.NODE_ENV === 'development' ? 'https://api.dev.xiepinhui.com.cn' : 'https://api.xiepinhui.com.cn';
    let base = 'https://api.xiepinhui.com.cn';

    console.log('access_code', access_code)
    if (
      !!access_code &&
      access_code !== "" &&
      access_code !== undefined
    ) {
        axios.get(base + '/user/hfiveopenid', {
            params: {
              code: access_code
            }
          })
          .then(async function (res) {
              if (res.data.code == 2000 && res.data.data.openid) {
                window.sessionStorage.wxUser = JSON.stringify(res.data.data);
                getSubscribe(res.data.data.openid);
              }
          },err=> {
            
          })
    }else{
        var fromurl = window.location.href.split('#')[0];
        window.location.href =
          "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx47d52b6420c14397&redirect_uri=" +
          encodeURIComponent(fromurl) +
          "&response_type=code&scope=snsapi_userinfo&state=getUser#wechat_redirect";
    }
}
wxLogin();