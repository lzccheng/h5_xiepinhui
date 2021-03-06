import axios from 'axios'
import router from '../router'
import store from '../store'
import constant from './constant'
import {getQueryString} from './comm'
import qs from 'qs'
import Vue from 'vue'

let axiosUtil = axios.create({
  timeout: 3000
})

axiosUtil.interceptors.response.use(
  response => {
    if (Vue.$vux.loading.isVisible()) {
      Vue.$vux.loading.hide()
    }
    return response;
  },
  error => {
    if (Vue.$vux.loading.isVisible()) {
      Vue.$vux.loading.hide()
    }
    console.log('error.response', error.response)
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          let url = getQueryString('url') || location.pathname + location.search + location.hash;
          localStorage.clear();
          router.push({
            path: '/user/login',
            query: {
              // url
            }
          });
          break;
      }
      return Promise.reject(error.response.data) // 返回接口返回的错误信息
    } else {
      return Promise.reject({
        msg: '网络连接超时'
      }) // 返回接口返回的错误信息
    }
  });

function request(method) {
  return async function (url, data = {}) {
    data.plat = data.plat || 3;
    let options = {
      method: method,
      url: url,
      data: qs.stringify(data),
      params: data.params?data.params:{},
      headers: {
        // 'content-type': 'application/json',
        // 'authorization': `${localStorage.getItem(constant.AUTHORIZATION_KEY)}`
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }
    return await axiosUtil(options).then((res) => {
      if (res.data.code == 5000 || res.data.code == 4021) { // 5000: tokan过期 => 重新登录 4021: member_id不存在 => 重新登录
        // let url = getQueryString('url') || location.pathname + location.search + location.hash;
        Vue.$vux.toast.text('请重新登录');
        store.dispatch('updateUser', "");
        store.dispatch('updateToken', "");
        store.dispatch('updateAccount', "");
        store.dispatch('updateCenter', "");
        localStorage.clear();
        router.push({
          path: '/user/login',
          query: {
            // url
          }
        });
        return;
      }
     // var resObj=JSON.parse(res);
      //console.log(resObj.data.code)
      // console.log('axios res:',res.data.code)
      if(data.params){
        try{
          res.data = JSON.parse(res.data.slice(1,-1));
        }catch(err){}
      }
      if (res.data.code == 2000) {
        return [null, res.data]
      } else {
        return [res.data, null]
      }
    }).catch((err) => {
      if (typeof err === 'string') {
        err = {
          info: err
        }
        err.msg = '请稍后重试'
      }
      console.log('err', err)
      return [err, null]
    })
  }
}

export const GET = request('GET');
export const POST = request('POST');
export const PUT = request('PUT');
export const DELETE = request('DELETE');
