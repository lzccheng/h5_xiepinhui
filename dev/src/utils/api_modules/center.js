import { domain } from '../domain.js'
import { GET, POST, PUT, DELETE } from "../request"

//订单列表数量接口
export const newgetorderlist_num = (data) => { 
    const url = `${domain}/ninegroup/newgetorderlist_num`
    return POST(url,data)
} 

//个人中心首页接口
export const newredmessage = (data) => { 
    const url = `${domain}/nine/newredmessage`
    return POST(url,data)
} 

/**365 */

// 邀请码
export const receiveweidian = (data) => { 
    const url = `${domain}/user/receiveweidian`
    return POST(url,data)
} 
// 365用户申请(支付)
export const addsmallshop = (data) => { 
    const url = `${domain}/restore/addsmallshop`
    return POST(url,data)
} 
// 365规则接口
export const guize = (data) => { 
    const url = `${domain}/restore/guize`
    return POST(url,data)
} 
// 365邀请合伙人接口
export const fanred = (data) => { 
    const url = `${domain}/restore/fanred`
    return POST(url,data)
} 
// 365粉丝列表接口
export const storefan1 = (data) => { 
    const url = `${domain}/restore/storefan1`
    return POST(url,data)
} 
// 365粉丝列表接口
export const inviterankingweidian = (data) => { 
    const url = `${domain}/restore/inviterankingweidian`
    return POST(url,data)
} 
// 绑定粉丝接口信息
export const inviteweidian = (data) => { 
    const url = `${domain}/restore/inviteweidian`
    return POST(url,data)
} 
