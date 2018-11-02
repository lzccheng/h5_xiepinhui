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
// 365规则接口
export const guize = (data) => {
  const url = `${domain}/restore/guize`
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