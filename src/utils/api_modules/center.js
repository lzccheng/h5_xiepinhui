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