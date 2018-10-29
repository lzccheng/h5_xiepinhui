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
  const url = `${domain}/nine/newhomelist?plat=3&activity=1`
  return GET(url, data)
}