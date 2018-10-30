import {
  domain
} from '../domain.js'
import {
  GET,
  POST,
  PUT,
  DELETE
} from "../request"

//子账号列表接口
export const allMyShopList = (data) => {
  const url = `${domain}/restore/sublist`
  return POST(url, data)
}

//去支付
export const topay = (data) => {
  const url = `${domain}/reinventory/topay`
  return POST(url, data)
}
//添加子账号接口
export const addSubStore = (data) => {
  const url = `${domain}/restore/addsub`
  return POST(url, data)
}
//重新密码接口
export const resetManagePwd = (data) => {
  const url = `${domain}/restore/setsubpwd`
  return POST(url, data)
}
//线下店铺列表接口
export const offlineStoreList = (data) => {
  const url = `${domain}/restore/subsaleslist`
  return POST(url, data)
}
//获取线下店铺购物车列表接口
export const cartlist = (data) => {
  const url = `${domain}/reinventory/cartlist`
  return POST(url, data)
}
//线下店铺订单列表接口
export const offlineStoreOrderList = (data) => {
  const url = `${domain}/restore/suborder`
  return POST(url, data)
}
//总店铺粉丝管理接口
export const substorefanManage = (data) => {
  const url = `${domain}/restore/substorefan`
  return POST(url, data)
}
//总店铺子账号粉丝列表接口
export const substorefanList = (data) => {
  const url = `${domain}/restore/subfan`
  return POST(url, data)
}
//子店铺粉丝列表接口
export const storefanList = (data) => {
  const url = `${domain}/restore/storefan`
  return POST(url, data)
}
//库存管理子店铺
export const sublist = (data) => {
  const url = `${domain}/restore/sublist`
  return POST(url, data)
}
//获取补货详情接口
export const goodsdetail = (data) => {
  const url = `${domain}/reinventory/goodsdetail`
  return POST(url, data)
}
//库存管理导航栏
export const goodslist = (data) => {
  const url = `${domain}/reinventory/goodslist`
  return POST(url, data)
}
//余额
export const memberbalance = (data) => {
  const url = `${domain}/member/memberbalance`
  return POST(url, data)
}


//补货订单详情
export const refitdetail = (data) => {
  const url = `${domain}/reinventory/refitdetail`
  return POST(url, data)
}
//补货添加购物车
export const addtocart = (data) => {
  const url = `${domain}/reinventory/addtocart`
  return POST(url, data)
}
//请求删除购物车
export const delcart = (data) => {
  const url = `${domain}/reinventory/delcart`
  return POST(url, data)
}
//补货结算
export const addrefit = (data) => {
  const url = `${domain}/reinventory/addrefit`
  return POST(url, data)
}

//确认收货
export const confirmrefit = (data) => {
  const url = `${domain}/reinventory/confirmrefit`
  return POST(url, data)
}
//取消当前订单
export const delrefit = (data) => {
  const url = `${domain}/reinventory/delrefit`
  return POST(url, data)
}
//获取线下店铺订单
export const refitorderlist = (data) => {
  const url = `${domain}/reinventory/refitorderlist`
  return POST(url, data)
}
//编辑店铺头像
export const editStoreInfo = (data) => {
  const url = `${domain}/restore/editsub`
  return POST(url, data)
}

//订单列表数量接口
// export const newgetorderlist_num = (data) => {
//   const url = `${domain}/ninegroup/newgetorderlist_num`
//   return POST(url, data)
// }

// //个人中心首页接口
// export const newredmessage = (data) => {
//   const url = `${domain}/nine/newredmessage`
//   return POST(url, data)
// }