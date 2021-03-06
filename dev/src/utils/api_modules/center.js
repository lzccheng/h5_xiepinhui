import {
  domain
} from '../domain.js'
import {
  GET,
  POST,
  PUT,
  DELETE
} from "../request"

//订单列表数量接口
export const newgetorderlist_num = (data) => {
  const url = `${domain}/ninegroup/newgetorderlist_num`
  return POST(url, data)
}

//邀请码
export const inviteinfo = (data) => {
  const url = `${domain}/user/inviteinfo`
  return POST(url, data)
}
//好货
export const instock = (data) => {
  const url = `${domain}/nine/instock`
  return GET(url, data)
}

//我的积分
export const pointsHome = (data) => {
  const url = `${domain}/points/home`
  return POST(url, data)
}

//我的积分
export const pointsLog = (data) => {
  const url = `${domain}/points/log`
  return POST(url, data)
}

//我的积分排名
export const pointsRanking = (data) => {
  const url = `${domain}/points/ranking`
  return POST(url, data)
}
//
export const fanorder1 = (data) => {
  const url = `${domain}/restore/fanorder1`
  return POST(url, data)
}
//确认订单
export const exchangegoods = (data) => {
  const url = `${domain}/points/exchangegoods`
  return POST(url, data)
}
//兑换商品详情
export const pointsGoodsdetail = (data) => {
  const url = `${domain}/points/goodsdetail`
  return POST(url, data)
}
//售后
export const refunddetails = (data) => {
  const url = `${domain}/refund/refunddetails`
  return POST(url, data)
}

//奖励领取
export const taketriggerredpacket = (data) => {
  const url = `${domain}/restore/taketriggerredpacket`
  return POST(url, data)
}
//提现明细
export const withdrawhistory = (data) => {
  const url = `${domain}/restore/withdrawhistory`
  return POST(url, data)
}

//
export const confirm_roder = (data) => {
  const url = `${domain}/order/confirm_roder`
  return POST(url, data)
}
//优惠券
export const usercouponlist = (data) => {
  const url = `${domain}/usercoupon/usercouponlist`
  return POST(url, data)
}
//返利
export const rebate_record = (data) => {
  const url = `${domain}/member/rebate_record`
  return POST(url, data)
}
//售后修改
export const refundmodify = (data) => {
  const url = `${domain}/refund/refundmodify`
  return POST(url, data)
}
//售后结果
export const refundconsult = (data) => {
  const url = `${domain}/refund/refundconsult`
  return POST(url, data)
}

//售后撤销
export const refundrevoke = (data) => {
  const url = `${domain}/refund/refundrevoke`
  return POST(url, data)
}

//售后编辑
export const refundedit = (data) => {
  const url = `${domain}/refund/refundedit`
  return POST(url, data)
}

//售后列表
export const refundlist = (data) => {
  const url = `${domain}/refund/refundlist`
  return POST(url, data)
}
//个人中心首页接口
export const newredmessage = (data) => {
  const url = `${domain}/nine/newredmessage`
  return POST(url, data)
}

//粉丝消费返利红包弹窗开始
// export const redtype = (data) => {
//   const url = `${domain}/nine/redtype`
//   return POST(url, data)
// }
//领取返利红包
export const redpacket = (data) => {
  const url = `${domain}/member/redpacket`
  return POST(url, data)
}
//弹出365红包页面
// export const redpackethtml = (data) => {
//   const url = `${domain}/member/redpackethtml`
//   return POST(url, data)
// }
//新的红包接口
export const getredpacketinfo = (data) => {
  const url = `${domain}/member/getredpacketinfo`
  return POST(url, data)
}

export const authentication = (data) => {
  const url = `${domain}/member/authentication`
  return POST(url, data)
}
//
export const getbanktmp = (data) => {
  const url = `${domain}/restore/getbanktmp`
  return POST(url, data)
}
//领取荟豆
export const taket_vcoin_packet = (data) => {
  const url = `${domain}/restore/taket_vcoin_packet`
  return POST(url, data)
}
//已经领取的红包
export const rebatelist = (data) => {
  const url = `${domain}/member/rebatelist`
  return POST(url, data)
}
//未领取红包
export const receivelist = (data) => {
  const url = `${domain}/member/receivelist`
  return POST(url, data)
}

/**订单 */
//订单列表  
export const getneworderlist = (data) => {
  const url = `${domain}/ninegroup/getneworderlist`
  return POST(url, data)
}
//订单详情
export const neworderdetail = (data) => {
  const url = `${domain}/nine/neworderdetail`
  return POST(url, data)
}
//兑换订单
export const pointsOrderlist = (data) => {
  const url = `${domain}/points/orderlist`
  return POST(url, data)
}
//签到
export const pointSignlog = (data) => {
  const url = `${domain}/points/signlog`
  return POST(url, data)
}

//签到商品
export const ninehomepage = (data) => {
  const url = `${domain}/nine/homepage`
  return POST(url, data)
}

//签到商品
export const pointssign = (data) => {
  const url = `${domain}/points/sign`
  return POST(url, data)
}
//删除订单
export const cancelorder = (data) => {
  const url = `${domain}/nine/cancelorder`
  return POST(url, data)
}
//评论 
export const newevaluategoods = (data) => {
  const url = `${domain}/nine/newevaluategoods`
  return POST(url, data)
}
//提醒发货 
export const shipnotify = (data) => {
  const url = `${domain}/nine/shipnotify`
  return POST(url, data)
}
//确认收货 
export const orderreceive = (data) => {
  const url = `${domain}/nine/orderreceive`
  return POST(url, data)
}
//支付 
export const orderunpaidpay = (data) => {
  const url = `${domain}/reorder/orderunpaidpay`
  return POST(url, data)
}
//申请售后
export const rtype = (data) => {
  const url = `${domain}/refund/rtype`
  return POST(url, data)
}

//申请退货、退款
export const refunapply = (data) => {
  const url = `${domain}/refund/refunapply`
  return POST(url, data)
}

//申请提交
export const refunapplyadd = (data) => {
  const url = `${domain}/refund/refunapplyadd`
  return POST(url, data)
}

//退款邮费支付
export const refundselectpay = (data) => {
  const url = `${domain}/refund/refundselectpay`
  return POST(url, data)
}

//refundplace
export const refundplace = (data) => {
  const url = `${domain}/refund/refundplace`
  return POST(url, data)
}

//我的收藏
export const collectgoodslist = (data) => {
  const url = `${domain}/nine/collectgoodslist`
  return POST(url, data)
}

//积分商城
export const pointsgoodslist = (data) => {
  const url = `${domain}/points/goodslist`
  return POST(url, data)
}

//取消收藏
export const cancelcollectgoods = (data) => {
  const url = `${domain}/nine/cancelcollectgoods`
  return POST(url, data)
}

//新个人中心接口（2019.1.18）
export const nineProfile = (data) => {
  const url = `${domain}/nine/profile`
  return POST(url, data)
}
//我的钱包
export const usermoneyprofile = (data) => {
  const url = `${domain}/member/usermoneyprofile`
  return POST(url, data)
}
/**365 */
// 邀请码
export const receiveweidian = (data) => {
  const url = `${domain}/user/receiveweidian`
  return POST(url, data)
}
// 365用户申请(支付)
export const addsmallshop = (data) => {
  const url = `${domain}/restore/addsmallshop`
  return POST(url, data)
}
// 365领取任务
export const membertaskTake = (data) => {
  const url = `${domain}/membertask/take`
  return POST(url, data)
}
// 365任务列表
export const my_task_list = (data) => {
  const url = `${domain}/membertask/my_task_list`
  return POST(url, data)
}
// 365活动商品列表
export const seckillGoodslist = (data) => {
  const url = `${domain}/seckill/goodslist`
  return POST(url, data)
}
// 365领取特权福利
export const welfare_take = (data) => {
  const url = `${domain}/smallstore/welfare_take`
  return POST(url, data)
}
// 365领取特权福利
export const smallstoreIntroduce = (data) => {
  const url = `${domain}/smallstore/introduce`
  return POST(url, data)
}
// 365荟豆兑换充值余额
export const smallstoreExchange = (data) => {
  const url = `${domain}/smallstore/vcoin-exchange`
  return POST(url, data)
}
// 365荟币兑换充值余额页面信息
export const vcoinexchangepageinfo = (data) => {
  const url = `${domain}/smallstore/vcoin-exchange-page-info`
  return POST(url, data)
}
// 365规则接口
export const guize = (data) => {
  const url = `${domain}/restore/guize`
  return POST(url, data)
}
// 365特权接口
export const privilege_info = (data) => {
  const url = `${domain}/smallstore/privilege_info`
  return POST(url, data)
}
// 365主页接口
export const smallstoreIndex = (data) => {
  const url = `${domain}/smallstore/index`
  return POST(url, data)
}
// 365邀请合伙人接口
export const fanred = (data) => {
  const url = `${domain}/restore/fanred`
  return POST(url, data)
}
// 365粉丝列表接口
export const storefan1 = (data) => {
  const url = `${domain}/restore/storefan1`
  return POST(url, data)
}
// 365邀请列表接口
export const inviterankingweidian = (data) => {
  const url = `${domain}/user/inviterankingweidian`
  return POST(url, data)
}
// 绑定粉丝接口信息
export const inviteweidian = (data) => {
  const url = `${domain}/member/inviteweidian`
  return POST(url, data)
}

/**我的店铺 */
// 我的店铺界面
export const thelordstore = (data) => {
  const url = `${domain}/restore/thelordstore`
  return POST(url, data)
}

// 获取粉丝统计数据、365粉丝红包触发接口
export const fancontentstatistic = (data) => {
  const url = `${domain}/restore/fancontent`
  return POST(url, data)
}