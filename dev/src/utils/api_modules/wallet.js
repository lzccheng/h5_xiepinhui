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