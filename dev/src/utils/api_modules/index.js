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