import {
  domain
} from '../domain.js'
import {
  GET,
  POST,
  PUT,
  DELETE
} from "../request";

//获取活动页面信息
export const new_year_share = (data) => {
  const _url = `${domain}/activity/new_year_share`
  return POST(_url, data)
}

//获取翻牌记录
export const new_year_share_record = (data) => {
  const _url = `${domain}/activity/new_year_share_record`
  return POST(_url, data)
}

//抽奖
export const new_year_share_lottery = (data) => {
  const _url = `${domain}/activity/new_year_share_lottery`
  return POST(_url, data)
}