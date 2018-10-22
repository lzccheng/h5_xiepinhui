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
//库存管理子店铺
export const sublist = (data) => {
  const url = `${domain}/restore/sublist`
  return POST(url, data)
}
//库存管理导航栏
export const goodslist = (data) => {
  const url = `${domain}/reinventory/goodslist`
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