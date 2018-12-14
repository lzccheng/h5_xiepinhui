import { api } from "@/utils/api.js";
let _requestConfig = async (that,jsApiList,cb,data)=>{
    let wx = that.$wechat;
    let shareconf = {
        plat: 3,
        account: that.account,
        token: that.token,
        type: 17,
        num: 1,
        // share_url: window.location.href.split('#')[0]
        share_url: encodeURIComponent(window.location.href.split("#")[0])
    }
    const [err, res] = await api.shareconf(shareconf);
    if (err) {
        that.$vux.toast.text(err.msg);
        return;
    }
    if(res.code == 2000){
        let config = {
            debug: data.debug || false,
            appId: res.data.appId,
            timestamp: res.data.timestamp,
            nonceStr: res.data.nonceStr,
            signature: res.data.signature,
            jsApiList
        }
        // console.log(config)
        //data.config权限注入参数
        wx.config(config);
        wx.ready(()=>{
            // wx.checkJsApi({
            //     jsApiList,
            //     success(res){
            //         console.log(res)
            //     }
            // })
            cb&&cb(wx);
        })
        wx.error((err)=>{
            console.log('wx config err',err)
        })
    }
}
const share = (that,data)=>{
    let jsApiList = [
        'updateAppMessageShareData',
        'onMenuShareQZone',
        'updateTimelineShareData',
        'onMenuShareWeibo',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ'
    ];
    let callback = wx => {
        let shareConfig = {
            title: data.share.title || '鞋品荟',
            desc: data.share.desc || '鞋品荟',
            link: data.share.link || window.location.href.split('#')[0],
            imgUrl: data.share.imgUrl || '',
            success: data.share.success || function(){},
            cancel: data.share.success || function(){}
        }
        //data.jsApiList分享函数列表
        wx.updateAppMessageShareData&&wx.updateAppMessageShareData(shareConfig);
        wx.onMenuShareQZone&&wx.onMenuShareQZone(shareConfig);
        wx.updateTimelineShareData&&wx.updateTimelineShareData(shareConfig);
        wx.onMenuShareWeibo&&wx.onMenuShareWeibo(shareConfig);
        wx.onMenuShareTimeline&&wx.onMenuShareTimeline(shareConfig);
        wx.onMenuShareAppMessage&&wx.onMenuShareAppMessage(shareConfig);
        wx.onMenuShareQQ&&wx.onMenuShareQQ(shareConfig);
    }
    _requestConfig(that,jsApiList,callback,data);
}
const wxPay = async (that,data)=>{
    let jsApiList = ['chooseWXPay'];
    let success = res =>{
        console.log('wxPay success',res)
    }
    let fail = err =>{
        console.log('wxpay fail',err)
    }
    let callback = wx =>{
        let payconfig = {
            appId: data.appId || '',
            timestamp: data.timeStamp,
            nonceStr: data.nonceStr,
            package: data.package,
            signType: data.signType,
            paySign: data.paySign || 'MD5',
            success: data.success || success,
            fail: data.fail || fail,
        }
        wx.chooseWXPay(payconfig)
    }
    _requestConfig(that,jsApiList,callback,data)
}
const getShareConfig = ( that, isShop) =>{
    let userType = that.user.user_type
    let shop = isShop ||'';
    if (!userType){
        console.log('getShareConfig',that.user, isShop)
        return 'getShareConfig  userType为空'
    }
    let shareConfig = {};
    if (shop == 1) {
        shareConfig = {
          title: '和我一起开店，分享就能赚钱',
          desc: '【' + that.user.nick + '】邀请您赶紧开通365创业小店，一天一元钱，创业0成本，分享就能赚钱，快来开启吧！',
          imgUrl: "https://m.xiepinhui.com.cn/share/share365.png",
          link: window.location.origin + '/centerFull/partner/inviteList?codeInvite=' + that.inviteCode
        }
    }else{
        if(userType == 1){
            shareConfig = {
              title: '鞋品荟-真皮女鞋，尖货分享',
              desc: '大牌设计，工厂价格，平台优质选款，买鞋就上鞋品荟',
              imgUrl: "https://m.xiepinhui.com.cn/share/share365.png",
              link: window.location.origin + '/centerFull/partner/h5LinkParner'
            }
        }else{
            shareConfig = {
              title: '邀请365创业小店，分享赚钱',
              desc: '【鞋品荟】邀请您开通365创业小店，一天一元钱，打造个人创业店铺，无需囤货，全民创业时代，快快加入吧！',
              imgUrl: "https://m.xiepinhui.com.cn/share/share365.png",
              link: window.location.origin + '/centerFull/partner/inviteList?codeInvite=' + that.inviteCode
            }
        }
    }
    return shareConfig;
}
const scanQRCode = (that, data) => {
    let jsApiList = ['checkJsApi', 'startRecord', 'stopRecord', 'translateVoice', 'scanQRCode', 'openCard'];
    let success = data.success || function(res){ console.log(res)};
    let callback = wx =>{
        wx.scanQRCode({
            needResult: 0,
            success
        })
    }
    _requestConfig(that, jsApiList, callback, data);
}
export {
    share,
    wxPay,
    getShareConfig,
    scanQRCode
}
