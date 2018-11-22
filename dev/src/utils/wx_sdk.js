import { api } from "@/utils/api.js";
let _requestConfig = async (that,jsApiList,cb,data)=>{
    let wx = that.$wechat;
    let shareconf = {
        plat: 3,
        account: that.account,
        token: that.token,
        type: 17,
        num: 1,
        share_url: window.location.href.split('#')[0]
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
        //data.config权限注入参数
        wx.config(config);
        wx.ready(()=>{
            wx.checkJsApi({
                jsApiList,
                success(res){
                    console.log(res)
                }
            })
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
export {
    share,
    wxPay
}
