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