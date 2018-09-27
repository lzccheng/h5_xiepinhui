import { domain } from '../domain.js'
import { GET, POST, PUT, DELETE } from "../request"

//登录
export const login = (data) => { 
    const url = `${domain}/user/login`
    return POST(url,data)
} 
  
//注册
export const register = (data) => { 
    const url = `${domain}/user/register`
    return POST(url,data)
} 
//验证码
export const register_sms = (data) => { 
    const url = `${domain}/user/register_sms`
    return POST(url,data)
} 

//找回密码
export const getmemberinfo = (data) => {
    const url = `${domain}/user/findpwd`
    return POST(url,data)
} 
//获取找回密码短信
export const findpwd_sms = (data) => { 
    const url = `${domain}/user/findpwd_sms`
    return POST(url,data)
} 

//修改密码
export const updatepwd = (data) => { 
    const url = `${domain}/user/updatepwd`
    return POST(url,data)
} 

//令牌登录接口
export const logintoken = (data) => { 
    const url = `${domain}/user/logintoken`
    return POST(url,data)
} 

//修改手机号码
export const changephone = (data) => { 
    const url = `${domain}/user/changephone`
    return POST(url,data)
} 

//修改手机号码验证码
export const changephone_sms = (data) => { 
    const url = `${domain}/user/changephone_sms`
    return POST(url,data)
}

//绑定手机号短信
export const bindthirdsms = (data) => { 
    const url = `${domain}/user/bindthirdsms`
    return POST(url,data)
}

//绑定手机号
export const bindtelthird = (data) => { 
    const url = `${domain}/user/bindtelthird`
    return POST(url,data)
}

//wxlogin
export const wxnewlogin = (code) => { 
    const url = `${domain}/nine/wxnewlogin?code=${code}`
    return GET(url)
}
//获取openid
export const getwxopenid = (code) => { 
    const url = `${domain}/nine/getwxopenid?code=${code}`
    return GET(url)
}


//第三方登录
export const loginthird = (data) => {
    const url = `${domain}/user/loginthird`
    return POST(url,data)
}