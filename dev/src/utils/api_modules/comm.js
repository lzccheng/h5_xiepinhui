import { domain } from '../domain.js'
import { GET, POST, PUT, DELETE } from "../request"

//登录
export const getpaths = (data) => { 
    const _url = `${domain}/oss/getpaths`
    return POST(_url,data)
}
