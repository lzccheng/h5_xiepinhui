import Vue from 'vue'
import Router from 'vue-router'
import config from '../common'//命令行传参配置
import store from '@/store'
// import constant from '../utils/constant'//全局localhost

// module index
//首页
const indexWrap = ()=>import('@/page/index/indexWrap')
const indexFull = ()=>import('@/page/index/indexFull')
const home = ()=>import('@/page/index/home')
// import indexWrap from '@/page/index/indexWrap'
// import indexFull from '@/page/index/indexFull'
// import home from '@/page/index/home'
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

//拼单信息
const goodsInfoPindan = ()=>import('@/page/index/goodsInfoPindan/goodsInfoPindan')


//订单详情
const orderInfo_pd = ()=>import('@/page/index/orderInfo_pd/orderInfo_pd')

//订单地址
const orderAddress = ()=>import('@/page/index/orderAddress/orderAddress')

//开通vip页面
const myVip = ()=>import('@/page/index/myVip/myVip')
//帮助中心
const guize = ()=>import('@/page/index/guize/guize')

//全部商品
const allgoods = () => import('@/page/index/allgoods/allgoods')


//编辑地址
const editaddress = ()=>import('@/page/index/editaddress/editaddress')

const subStoreList = ()=>import('@/page/center/myShop/subStoreList')
const addSubStore = ()=>import('@/page/center/myShop/addSubStore')
const offlineStore = ()=>import('@/page/center/myShop/offlineStore')
const offlineStoreOrder = ()=>import('@/page/center/myShop/offlineStoreOrder')
const subinventoryManage = ()=>import('@/page/center/myShop/subinventoryManage/subinventoryManage')
const fanManagement = ()=>import('@/page/center/myShop/fanManagement')//子账号的粉丝管理
const shopSetting = ()=>import('@/page/center/myShop/shopSetting')//子账号的店铺设置
const subfanManagement = ()=>import('@/page/center/myShop/subfanManagement')//总账号的粉丝管理


// 提现模块
const drawIndex = () => import('@/page/center/drawDeposit/drawIndex') //提现首页
const clearness = () => import('@/page/center/drawDeposit/clearness') //提现明细
const rebateRecord = () => import('@/page/center/myWallet/rebateRecord') //返利
const myWallet = () => import('@/page/center/myWallet/myWallet') //提现首页
const myWalletWrap = () => import('@/page/center/myWallet/myWalletWrap') //myWalletWrap


const moblieCodeTrade = ()=>import('@/page/center/drawDeposit/moblieCodeTrade')//交易密码
const setTradeCode = ()=>import('@/page/center/drawDeposit/setTradeCode')//设置交易密码
const drawCash = ()=>import('@/page/center/drawDeposit/drawCash')//提现页面
const addCard = ()=>import('@/page/center/drawDeposit/addCard')//添加银行卡
const bindNewCard = ()=>import('@/page/center/drawDeposit/bindNewCard')//绑定新银行卡
const drawSuccess = ()=>import('@/page/center/drawDeposit/drawSuccess')//提现成功

//在线充值
const rechargeMoneyOnline = ()=>import('@/page/center/myWallet/rechargeMoneyOnline')//在线充值

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

//余额明细
const remain = ()=>import('@/page/center/balance/remain/remain')

//申请售后
const aftertype = ()=>import('@/page/center/orderlist/aftertype')

//申请售后
const aftersalerInfo = ()=>import('@/page/center/orderlist/aftersalerInfo')

//申请售后
const afterlistInfo = ()=>import('@/page/center/afterlistInfo/afterlistInfo')

//申请售后
const aftersteps = ()=>import('@/page/center/afterlistInfo/aftersteps')
//after_list
const after_list = () => import('@/page/center/after_list/after_list')

//商品收藏
const sc_goods = () => import('@/page/center/sc_goods/sc_goods')
//钱去向
const aftermoneyWhere = () => import('@/page/center/after_list/aftermoneyWhere')

const myServiceWrap = () => import('@/page/center/myService/myServiceWrap')

//优惠券
const coupon_list = () => import('@/page/center/myService/coupon_list/coupon_list')

//好货
const haohuo = () => import('@/page/center/myService/haohuo/haohuo')

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
      },{
        path: 'goodsInfoPindan',
        name: 'goodsInfoPindan',
        component: goodsInfoPindan,
        meta: {
          title: '订单详情'
        }
      },
      {
        path: 'orderAddress',
        name: 'orderAddress',
        component: orderAddress,
        meta: {
          title: '地址管理'
        }
      },
      {
        path: 'myVip',
        name: 'myVip',
        component: myVip,
        meta: {
          title: '我的vip'
        }
      },
      {
        path: 'editaddress',
        name: 'editaddress',
        component: editaddress,
        meta: {
          title: '地址编辑'
        }
      },
      {
        path: 'orderInfo_pd',
        name: 'orderInfo_pd',
        component: orderInfo_pd,
        meta: {
          title: '订单详情'
        }
      },
      {
        path: 'allgoods',
        name: 'allgoods',
        component: allgoods,
        meta: {
          title: '全部商品'
        }
      },
    ],
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
        },]
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
      },
      
    ],
      meta: {
        title: '个人中心'
      }
    },
    {
      path: '/balance',
      name: 'remain',
      component: remain,
      children: [{
        path: 'remain',
        name: 'remain',
        component: remain,
        meta: {
          title: '余额明细'
        }
      },
      
    ],
      meta: {
        title: '余额'
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
          }, 
          {
            path: 'guize',
            name: 'guize',
            component: guize,
            meta: {
              title: '帮助中心'
            }
          },{
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
          },
          {
            path: 'aftertype',
            name: 'aftertype',
            component: aftertype,
            meta: {
              title: '申请售后'
            }
          },
          {
            path: 'aftersalerInfo',
            name: 'aftersalerInfo',
            component: aftersalerInfo,
            meta: {
              title: '我要换货/退款'
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
        }, 
        {
          path: 'aftermoneyWhere',
          name: 'aftermoneyWhere',
          component: aftermoneyWhere,
          meta: {
            title: '钱去向'
          }
        },
        {
          path: 'afterlistInfo',
          name: 'afterlistInfo',
          component: afterlistInfo,
          meta: {
            title: '售后处理'
          }
        },
        {
          path: 'aftersteps',
          name: 'aftersteps',
          component: aftersteps,
          meta: {
            title: '售后处理'
          }
        }, 
        {
          path: 'after_list',
          name: 'after_list',
          component: after_list,
          meta: {
            title: '售后/退款'
          }
        },
        {
          path: 'sc_goods',
          name: 'sc_goods',
          component: sc_goods,
          meta: {
            title: '我的收藏'
          }
        },
        
         {
          path: 'orderlistinfo',
          name: 'orderlistinfo',
          component: orderlistinfo,
          meta: {
            title: '订单详情'
          }
        }]
      }, {
        path: 'myService',
        component: myServiceWrap,
        children: [
          {
            path: 'coupon_list',
            name: 'coupon_list',
            component: coupon_list,
            meta: {
              title: '优惠券'
            }
          }, 
          {
            path: 'haohuo',
            name: 'haohuo',
            component: haohuo,
            meta: {
              title: '好货'
            }
          },
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
      name: 'myWallet',
      component: myWalletWrap,
      meta: {
        title: '我的钱包'
      },
      children: [
        {
          path: '/',
          redirect: 'myWallet'
        }, 
        {
          path: 'clearness',
          name: 'clearness',
          component: clearness,
          meta: {
            title: '提现明细'
          }
        },
        {
          path: 'myWallet',
          name: 'myWallet',
          component: myWallet,
          meta: {
            title: '我的钱包'
          }
        }, 
        {
          path: 'rebateRecord',
          name: 'rebateRecord',
          component: rebateRecord,
          meta: {
            title: '返利'
          }
        },
        {
          path: 'rechargeMoneyOnline',
          name: 'rechargeMoneyOnline',
          component: rechargeMoneyOnline,
          meta: {
            title: '充值'//在线充值
          }
        },
      ]
    },
    {
      path: '/myBlack',
      name: 'myBlack',
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
