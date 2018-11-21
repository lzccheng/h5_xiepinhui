import {
  domain
} from '../domain.js'
import {
  GET,
  POST,
  PUT,
  DELETE
} from "../request"

//新首页轮播图+消息+活动板块接口
export const getHomeList = (data) => {
  const url = `${domain}/nine/newhomelist`
  return GET(url, data)
}

//全部商品
export const homelist = (data) => {
  const url = `${domain}/nine/homelist`
  return POST(url, data)
}
//活动推荐板块（新）接口
export const getActivityList = (data) => {
  const url = `${domain}/nine/newseckilltypes`
  return GET(url, data)
}

//
export const getLimitData = (data) => {
  const url = `${domain}/nine/newdynamic`
  return GET(url, data)
}

//确认订单
export const couponnum = (data) => {
  const url = `${domain}/usercoupon/couponnum`
  return POST(url, data)
}
//首页商品
export const getGoods = (data) => {
  const url = `${domain}/nine/ncategoods`
  return GET(url, data)
}
//推荐商品
export const commendgoods = (data) => {
  const url = `${domain}/nine/commendgoods`
  return POST(url, data)
}
//商品详情
export const goodsspec = (data) => {
  const url = `${domain}/nine/goodsspec`
  return POST(url, data)
}

//商品详情图片
export const goodsimgarr = (data) => {
  const url = `${domain}/nine/goodsimgarr`
  return POST(url, data)
}

//商品详情图片
export const groupinglist = (data) => {
  const url = `${domain}/ninegroup/groupinglist`
  return POST(url, data)
}

//商品详情
export const newgoodsdetail = (data) => {
  const url = `${domain}/nine/newgoodsdetail`
  return POST(url, data)
}

//商品取消收藏
export const cancelcollectgoods = (data) => {
  const url = `${domain}/nine/cancelcollectgoods`
  return POST(url, data)
}

//获取邀请码
export const getsharecode = (data) => {
  const url = `${domain}/rebate/getsharecode`
  return POST(url, data)
}

//绑定
export const bindrebate = (data) => {
  const url = `${domain}/rebate/bindrebate`
  return POST(url, data)
}
//商品购买
export const buy = (data) => {
  const url = `${domain}/redirectbuy/buy`
  return POST(url, data)
}
//商品收藏
export const collectgoods = (data) => {
  const url = `${domain}/nine/collectgoods`
  return POST(url, data)
}

//取消支付
export const returned = (data) => {
  const url = `${domain}/usercoupon/returned`
  return POST(url, data)
}
//商品评价
export const newevaluatelist = (data) => {
  const url = `${domain}/nine/newevaluatelist`
  return POST(url, data)
}
//地址详情
export const addressdetail = (data) => {
  const url = `${domain}/order/addressdetail`
  return POST(url, data)
}

//vip信息
export const memberhome = (data) => {
  const url = `${domain}/member/home`
  return POST(url, data)
}

//地址删除
export const addressdel = (data) => {
  const url = `${domain}/order/addressdel`
  return POST(url, data)
}

//地址修改
export const addressupdate = (data) => {
  const url = `${domain}/order/addressupdate`
  return POST(url, data)
}

//地址添加
export const address = (data) => {
  const url = `${domain}/order/address`
  return POST(url, data)
}
//地址详情
export const nine_transport = (data) => {
  const url = `${domain}/shipping/nine_transport`
  return POST(url, data)
}

//参与拼单
export const fightgroups = (data) => {
  const url = `${domain}/ninegroup/fightgroups`
  return POST(url, data)
}

//发起拼单
export const startorder = (data) => {
  const url = `${domain}/ninegroup/startorder`
  return POST(url, data)
}

//余额明细
export const balancelog = (data) => {
  const url = `${domain}/member/balancelog`
  return POST(url, data)
}