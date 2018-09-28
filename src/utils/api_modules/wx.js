import { domain } from '../domain.js'
import { GET, POST, PUT, DELETE } from "../request"

//登录
export const wxshared = (url) => { 
    const _url = `${domain}/nine/wxshared?url=${url}`
    return GET(_url)
} 