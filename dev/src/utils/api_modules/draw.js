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
export const getBalance = (data) => {
  const url = `${domain}/member/memberbalance`
  return POST(url, data)
}
//发送交易验证码接口
export const sendTradePassword = (data) => {
  const url = `${domain}/member/setsms`
  return POST(url, data)
}
//校验验证码接口
export const checkTradePassword = (data) => {
  const url = `${domain}/member/checksms`
  return POST(url, data)
}
//设置交易密码
export const setTradePassword = (data) => {
  const url = `${domain}/member/setpaypwd`
  return POST(url, data)
}
//校验支付密码
export const checkPayPwd = (data) => {
  const url = `${domain}/member/checkpaypwd`
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