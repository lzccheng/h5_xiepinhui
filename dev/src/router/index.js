import Vue from 'vue'
import Router from 'vue-router'
import corpAuth from '@/components/corpAuth'
import constant from '../utils/constant'
import config from '../common'
import store from '@/store'

// index
import indexWrap from '@/page/index/indexWrap'
import home from '@/page/index/home' //首页

// center
import centerWrap from '@/page/center/centerWrap'
import centerFull from '@/page/center/centerFull'
import center from '@/page/center/center' //个人中心
import partnerWrap from '@/page/center/365partner/partnerWrap'
import code from '@/page/center/365partner/code' //365邀请码
import apply from '@/page/center/365partner/apply' //365开通
import inviteList from '@/page/center/365partner/inviteList' //365排行
import inviteFriendRecord from '@/page/center/365partner/inviteFriendRecord' //邀请规则
import inviteRelu from '@/page/center/365partner/inviteRelu' //365规则
import applyStatic from '@/page/center/365partner/applyStatic' //365开通状态 
import inviteFansMy365 from '@/page/center/365partner/inviteFansMy365' //我的粉丝   
import redenvelope from '@/page/center/365partner/redenvelope' //我的收益 

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
        path: '',
        component: center
      }],
      meta: {
        title: '个人中心'
      }
    },
    {
      path: '/centerFull',
      name: 'centerFull',
      component: centerFull,
      children: [{
        path: 'partner',
        component: partnerWrap,
        children: [{
            path: '',
            redirect: 'code'
          }, {
            path: 'code',
            name: 'code',
            component: code,
            meta: {
              title: '365合伙人邀请码'
            }
          }, {
            path: 'apply',
            name: 'apply',
            component: apply,
            meta: {
              title: '开店申请'
            }
          }, {
            path: 'applyStatic',
            name: 'applyStatic',
            component: applyStatic,
            meta: {
              title: '365合伙人'
            }
          }, {
            path: 'inviteFansMy365',
            name: 'inviteFansMy365',
            component: inviteFansMy365,
            meta: {
              title: '我的粉丝'
            }
          }, {
            path: 'redenvelope',
            name: 'redenvelope',
            component: redenvelope,
            meta: {
              title: '我的收益'
            }
          }, {
            path: 'inviteRelu',
            name: 'inviteRelu',
            component: inviteRelu,
            meta: {
              title: '邀请好友'
            }
          }, {
            path: 'inviteFriendRecord',
            name: 'inviteFriendRecord',
            component: inviteFriendRecord,
            meta: {
              title: '邀请规则'
            }
          },
          {
            path: 'inviteList',
            name: 'inviteList',
            component: inviteList,
            meta: {
              title: '邀请好友'
            }
          }
        ]
      }]
    },
    {
      path: '/user',
      name: 'user',
      component: userWrap,
      children: [{
          path: '',
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
  console.log(`----------- from Router --------------`)
  console.log(from)
  console.log(`----------- to   Router --------------`)
  console.log(to)
  console.log(`----------- End  Router --------------`)

  if (!store.state.comm.indexUrl) {
    store.commit('updateUrl', window.location.href)
    next()
  } else {
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
