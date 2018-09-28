import Vue from 'vue'
import Router from 'vue-router'
import corpAuth from '@/components/corpAuth'
import constant from '../utils/constant'
import config from '../common'
import store from '@/store'

// index
import indexWrap from '@/page/index/indexWrap'
import home from '@/page/index/home'

// center
import centerWrap from '@/page/center/centerWrap'
import center from '@/page/center/center'
import partner from '@/page/center/365partner/code'

//user
import userWrap from '@/page/user/userWrap'
import login from '@/page/user/login' //登录
import find_password from '@/page/user/find_password' //找回密码
import password_change from '@/page/user/password_change' //修改密码
import phone_change from '@/page/user/phone_change' //手机号修改
import register_password from '@/page/user/register_password' //密码注册
import phone_bind from '@/page/user/phone_bind' //手机号绑定

const base = config.path

console.log(`base : ${base}`)

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base,
  routes: [{
      path: '/',
      redirect: '/center'
    },
    {
      path: '/index',
      name: 'index',
      component: indexWrap,
      children: [{
        path: '/',
        component: home
      }],
      meta: {
        title: '首页'
      }
    },
    {
      path: '/center',
      name: 'center',
      component: centerWrap,
      children: [{
          path: '/',
          component: center
        },
        {
          path: 'partner',
          component: partner,
          meta: {
            title: '365合伙人邀请码'
          }
        },
      ],
      meta: {
        title: '个人中心'
      }
    },
    {
      path: '/user',
      name: 'user',
      component: userWrap,
      children: [{
          path: '/',
          redirect: 'login'
        },
        {
          path: 'corpAuth',
          name: 'corpAuth',
          component: corpAuth,
          meta: {
            title: '授权认证'
          }
        },
        {
          path: 'login',
          name: 'login',
          component: login,
          meta: {
            title: '登录/注册'
          }
        },
        {
          path: 'find_password',
          name: 'find_password',
          component: find_password,
          meta: {
            title: '找回密码'
          }
        },
        {
          path: 'password_change',
          name: 'password_change',
          component: password_change,
          meta: {
            title: '修改密码'
          }
        },
        {
          path: 'phone_change',
          name: 'phone_change',
          component: phone_change,
          meta: {
            title: '修改手机号'
          }
        },
        {
          path: 'phone_bind',
          name: 'phone_bind',
          component: phone_bind,
          meta: {
            title: '绑定手机号'
          }
        },
        {
          path: 'register_password',
          name: 'register_password',
          component: register_password,
          meta: {
            title: '密码注册'
          }
        }
      ],
      meta: {
        title: '用户设置'
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

router.beforeEach((to, from, next) => {
  if(!store.state.comm.indexUrl){
    store.commit('updateUrl',window.location.href)
    next()
  }else{
    next()
  }
  // if (to.name == 'corpAuth') {
  //   next();
  //   return;
  // }
  // let authorization = localStorage.getItem(constant.AUTHORIZATION_KEY)
  // let payload = localStorage.getItem(constant.PAYLOAD_KEY)

  // console.log(' 权限检验 ')
  // console.log(`authorization : ${authorization} && payload : ${payload}`)

  // if (!authorization) {
  //   console.log(`没有登录，正在引导登录`)
  //   next({
  //     path: '/corpAuth'
  //   })
  // } else {
  //   console.log('路由正常进行', to)
  //   next()
  // }
})

export default router
