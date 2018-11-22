import { domain } from '../domain.js'
import { GET, POST, PUT, DELETE } from "../request"

//账号登录
export const getpaths = (data) => { 
    const _url = `${domain}/oss/getpaths`
    return POST(_url,data)
}
//支付
export const directbuy = (data) => { 
    const _url = `${domain}/nine/directbuy`
    return POST(_url,data)
}
//getWxConfig
//分享配置参数
export const shareconf = (data) => { 
    const _url = `${domain}/user/shareconf`
    return POST(_url,data)
}
