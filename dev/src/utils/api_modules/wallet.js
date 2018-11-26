import {
  domain
} from '../domain.js'
import {
  GET,
  POST,
  PUT,
  DELETE
} from "../request"

//获取提现初始化信息
export const getUserWithdraw = (data) => {
  const url = `${domain}/restore/getuserwithraw`
  return POST(url, data)
}
//提现方式
export const withdrawMethod = (data) => {
  const url = `${domain}/restore/withdrawalmethod`
  return POST(url, data)
}
//用户绑定的银行卡列表
export const userBankList = (data) => {
  const url = `${domain}/restore/userbanklist`
  return POST(url, data)
}
//解除绑定银行卡
export const delBindingBank = (data) => {
  const url = `${domain}/restore/delbank`
  return POST(url, data)
}
//获取银行卡列表
export const getBankList = (data) => {
  const url = `${domain}/restore/banklist`
  return POST(url, data)
}
//绑定银行卡
export const BindingNewBank = (data) => {
  const url = `${domain}/restore/addbank`
  return POST(url, data)
}
//提现
export const withdrawCash = (data) => {
  const url = `${domain}/restore/withdraw`
  return POST(url, data)
}
//充值选项列表
export const rechargeMoneyTab = (data) => {
  const url = `${domain}/recharge/recharge_money_cfg`
  return POST(url, data)
}
//充值方式列表
export const rechargeWayList = (data) => {
  const url = `${domain}/order/get_payment_list`
  return POST(url, data)
}
/**
 * 线上用户充值
 */
export const onlineRecharge = (data) => {
  const url = `${domain}/recharge/online_dopay`
  return POST(url, data)
}
/**
 * 充值明细/荟币明细
 */
export const detailRecord = (data) => {
  const url = `${domain}/member/money_record`
  return POST(url, data)
}