<template>
  <div>

  </div>
</template>

<script>
  // import config from '../common'
  // import constant from '../utils/constant'
  // import {
  //   corpAuthUrl,wxcpLogin
  // } from '../utils/api.js'

  // export default {
  //   name: "corp-auth",
  //   async created() {

  //     let that = this

  //     this.$vux.loading.show({
  //       text: '管理后台用户登录认证中...'
  //     })

  //     console.log('that.$route',that.$route);
  //     let authCode = that.$route.query.code
  //     let authorization = localStorage.getItem(constant.AUTHORIZATION_KEY)

  //     console.log('authCode ?: ',authCode);
  //     console.log('authorization ?: ',authorization);

  //     if (authCode) {
  //       const [err, res] = await wxcpLogin({code: authCode})
  //       if (err) {
  //         console.log('err', err);
  //         return
  //       }
  //       let {authorization, payload} = res.data
  //       console.log('authorization, payloada',authorization, payload)
  //       localStorage.setItem('authorization', authorization)
  //       localStorage.setItem('payload', JSON.stringify(payload))
  //     } else if (!authorization) {
  //       let callbackUrl = `${window.location.origin}${config.path}`
  //       if(callbackUrl.lastIndexOf('/') == callbackUrl.length - 1){
  //         callbackUrl+='corpAuth'
  //       }else{
  //         callbackUrl+='/corpAuth'
  //       }

  //       console.log(`callbackUrl : ${callbackUrl}`);
  //       const [err, res] = await corpAuthUrl(callbackUrl)
  //       if (err) {
  //         this.$vux.loading.show({
  //           text: `请刷新页面`
  //         })
  //       }
  //       const {url} = res.data
  //       location.href = url
  //       return ;
  //     }

  //     let nextRouterName = '/index' // 登录后访问

  //     if(this.$vux.loading.isVisible()){
  //       this.$vux.loading.hide()
  //     }

  //     that.$router.push({path: nextRouterName})

  //   }
  // }
</script>

<style scoped>

</style>
