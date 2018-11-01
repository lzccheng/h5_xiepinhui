import { domain } from '../domain.js'
import { GET, POST, PUT, DELETE } from "../request"
import qs from 'qs';
//登录
export const wxshared = (url) => { 
    const _url = `${domain}/nine/wxshared?url=${url}`
    return GET(_url)
} 

export const wxPay = () => {
    const _url = `${domain}/reorder/orderunpaidpay`
    return POST(_url)
}

export const getWxConfig = () => {
    const _url = `${domain}/api/wxShare/getWxConfig`;
    console.log(55555,qs)
    return
    let data = this.qs.stringify({
        "url": window.location.href.split('#')[0]
      })
    return POST(_url,data)
}