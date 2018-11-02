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

//地址详情
export const addressdetail = (data) => {
  const url = `${domain}/order/addressdetail`
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
//地址详情
export const nine_transport = (data) => {
  const url = `${domain}/shipping/nine_transport`
  return POST(url, data)
}