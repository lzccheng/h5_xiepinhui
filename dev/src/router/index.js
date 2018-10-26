import Vue from 'vue'
import Router from 'vue-router'
import config from '../common'//命令行传参配置
import store from '@/store'
// import constant from '../utils/constant'//全局localhost

// module index
//首页
import indexWrap from '@/page/index/indexWrap'
import indexFull from '@/page/index/indexFull'
import home from '@/page/index/home'
//商品
const goodsFull = ()=>import('@/page/index/goods/goodsFull')
const fbPingjia = ()=>import('@/page/index/goods/fbPingjia')


// module center
//个人中心
const centerWrap = ()=>import('@/page/center/centerWrap')
const centerFull = ()=>import('@/page/center/centerFull')
const center = ()=>import('@/page/center/center')
const partnerWrap = ()=>import('@/page/center/365partner/partnerWrap')
//365邀请码
const code = ()=>import('@/page/center/365partner/code')
//365开通
const apply = ()=>import('@/page/center/365partner/apply')
//365排行
const inviteList = ()=>import('@/page/center/365partner/inviteList')
//邀请规则
const inviteFriendRecord = ()=>import('@/page/center/365partner/inviteFriendRecord')
//365规则
const inviteRelu = ()=>import('@/page/center/365partner/inviteRelu')
//365开通状态
const applyStatic = ()=>import('@/page/center/365partner/applyStatic')
//我的粉丝
const inviteFansMy365 = ()=>import('@/page/center/365partner/inviteFansMy365')
//我的收益
const redenvelope = ()=>import('@/page/center/365partner/redenvelope')

// module 订单
const orderFull = ()=>import('@/page/center/orderlist/orderFull')
//订单列表
const orderlist = ()=>import('@/page/center/orderlist/orderlist')
// 订单详情
const orderlistinfo = ()=>import('@/page/center/orderlist/orderlistinfo')

// module 我的店铺
const myShopFull = ()=>import('@/page/center/myShop/myShopFull')
const shopIndex = ()=>import('@/page/center/myShop/shopIndex')

//库存管理 type=3
const inventoryManage = ()=>import('@/page/center/myShop/inventoryManage/inventoryManage')
//补货
const replenishInfo = ()=>import('@/page/center/myShop/replenishInfo/replenishInfo')
//补货购物车
const subreplenishCar = ()=>import('@/page/center/myShop/subreplenishCar/subreplenishCar')
//补货确认订单
const carPay = ()=>import('@/page/center/myShop/carPay/carPay')
//补货确认订单详情
const replenishmentOrderinfo = ()=>import('@/page/center/myShop/replenishmentOrderinfo/replenishmentOrderinfo')

//补货订单
const subreplenishOrder = ()=>import('@/page/center/myShop/subreplenishOrder/subreplenishOrder')




import subStoreList from '@/page/center/myShop/subStoreList'
import addSubStore from '@/page/center/myShop/addSubStore'
import offlineStore from '@/page/center/myShop/offlineStore'
import offlineStoreOrder from '@/page/center/myShop/offlineStoreOrder'
import subfanManagement from '@/page/center/myShop/subfanManagement'//总账号的粉丝管理
import subinventoryManage from '@/page/center/myShop/subinventoryManage/subinventoryManage'//库存管理
import fanManagement from '@/page/center/myShop/fanManagement'//子账号的粉丝管理
import shopSetting from '@/page/center/myShop/shopSetting'//子账号的店铺设置

// 提现模块
import drawIndex from '@/page/center/drawDeposit/drawIndex'//提现首页
import moblieCodeTrade from '@/page/center/drawDeposit/moblieCodeTrade'//交易密码
import setTradeCode from '@/page/center/drawDeposit/setTradeCode'//设置交易密码
import drawCash from '@/page/center/drawDeposit/drawCash'//提现页面
import addCard from '@/page/center/drawDeposit/addCard'//添加银行卡
import bindNewCard from '@/page/center/drawDeposit/bindNewCard'//绑定新银行卡
import drawSuccess from '@/page/center/drawDeposit/drawSuccess'//提现成功

///center/drawIndex

// module user
const userWrap = ()=>import('@/page/user/userWrap')
//登录
const login = ()=>import('@/page/user/login')
//找回密码
const find_password = ()=>import('@/page/user/find_password')
//修改密码
const password_change = ()=>import('@/page/user/password_change')
//手机号修改
const phone_change = ()=>import('@/page/user/phone_change')
//密码注册
const register_password = ()=>import('@/page/user/register_password')
//手机号绑定
const phone_bind = ()=>import('@/page/user/phone_bind')



const base = config.path

console.log(`base : ${base}`)

Vue.use(Router)
//center/drawIndex
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
      path: '/indexFull',
      name: 'indexFull',
      component: indexFull,
      children: [{
        path: '',
        redirect: 'goodsFull'
      }, {
        path: 'goodsFull',
        component: goodsFull,
        children: [{
          path: '',
          redirect: 'fbPingjia'
        }, {
          path: 'fbPingjia',
          name: 'fbPingjia',
          component: fbPingjia,
          meta: {
            title: '发布评论'
          }
        }]
      }],
      meta: {
        title: '鞋品荟'
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
      }, {
        path: 'myshop',
        component: myShopFull,
        children: [{
          path: '',
          redirect: 'index'
        }, {
          path: 'index',
          name: 'shopIndex',
          component: shopIndex,
          meta: {
            title: '我的店铺'
          }
        },
        {
          path:'subStoreList',
          name:'subStoreList',
          component:subStoreList,
          meta:{
            title:'粉丝管理'
          }
        },
        {
          path:'addSubStore',
          name:'addSubStore',
          component:addSubStore,
          meta:{
            title:'添加子账号'
          }
        },
        {
          path:'replenishInfo',
          name:'replenishInfo',
          component:replenishInfo,
          meta:{
            title:'补货详情'
          }
        },
        {
          path:'subreplenishCar',
          name:'subreplenishCar',
          component:subreplenishCar,
          meta:{
            title:'补货购物车'
          }
        },
        {
          path:'carPay',
          name:'carPay',
          component:carPay,
          meta:{
            title:'补货确认订单'
          }
        },
        {
          path:'replenishmentOrderinfo',
          name:'replenishmentOrderinfo',
          component:replenishmentOrderinfo,
          meta:{
            title:'补货确认订单详情'
          }
        },
        {
          path:'subreplenishOrder',
          name:'subreplenishOrder',
          component:subreplenishOrder,
          meta:{
            title:'补货订单'
          }
        },
        {
          path:'offlineStore',
          name:'offlineStore',
          component:offlineStore,
          meta:{
            title:'线下店铺'
          }
        },
        {
          path:'offlineStoreOrder',
          name:'offlineStoreOrder',
          component:offlineStoreOrder,
          meta:{
            title:'订单管理'
          }
        },
        {
          path:'subfanManagement',
          name:'subfanManagement',
          component:subfanManagement,
          meta:{
            title:'粉丝管理'//总账号的粉丝管理
          }
        },
        {
          path:'subinventoryManage',
          name:'subinventoryManage',
          component:subinventoryManage,
          meta:{
            title:'库存管理'//库存管理
          },
        },
        {
          path:'inventoryManage',
          name:'inventoryManage',
          component:inventoryManage,
          meta:{
            title:'库存管理'//库存管理 type=3
          },
        },
        {
          path:'fanManagement',
          name:'fanManagement',
          component:fanManagement,
          meta:{
            title:'粉丝管理'//子账号的粉丝管理
          }
        },
        {
          path:'shopSetting',
          name:'shopSetting',
          component:shopSetting,
          meta:{
            title:'店铺设置'//子账号的店铺设置
          }
        }
      ]
      }, {
        path: 'orderFull',
        component: orderFull,
        meta: {
          title: '订单列表'
        },
        children: [{
          path: '',
          redirect: 'orderlist'
        }, {
          path: 'orderlist',
          name: 'orderlist',
          component: orderlist,
          meta: {
            title: '订单列表'
          }
        }, {
          path: 'orderlistinfo',
          name: 'orderlistinfo',
          component: orderlistinfo,
          meta: {
            title: '订单详情'
          }
        }]
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
    //提现模块
    {
      path: '/drawIndex',
      name: 'drawIndex',
      component: drawIndex,
      meta: {
        title: '我的余额'
      }
    },
    {
      path: '/moblieCodeTrade',
      name: 'moblieCodeTrade',
      component: moblieCodeTrade,
      meta: {
        title: '交易密码'
      }
    },
    {
      path: '/setTradeCode',
      name: 'setTradeCode',
      component: setTradeCode,
      meta: {
        title: '设置交易密码'
      }
    },
    {
      path: '/drawCash',
      name: 'drawCash',
      component: drawCash,
      meta: {
        title: '提现'
      }
    },
    {
      path: '/addCard',
      name: 'addCard',
      component: addCard,
      meta: {
        title: '银行卡管理'
      }
    },
    {
      path: '/bindNewCard',
      name: 'bindNewCard',
      component: bindNewCard,
      meta: {
        title: '绑定银行卡'
      }
    },
    {
      path: '/drawSuccess',
      name: 'drawSuccess',
      component: drawSuccess,
      meta: {
        title: '余额提现'
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior(to, from, savedPosition) { //模拟原生滑动
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
  
  // IOS微信浏览器兼容
  if (!store.state.comm.indexUrl) {
    store.commit('updateUrl', window.location.href) //保存初次进来的地址
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
