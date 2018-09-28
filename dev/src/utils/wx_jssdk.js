 // 问题描述在微信中分享到朋友圈或好友时，分享出去的路由被破坏，打开分享的链接，路由中的“#”会被去掉并追加？fromTimeline之类的后缀参数，这就造成了分享出去的链接只能进入首页，无法正常跳转到其他路由。
       // 获取签名
        this.$ajax.post(this.apiUrl+"/api/wxShare/getWxConfig",
          this.$qs.stringify({"url":window.location.href.split('#')[0]})).then((res) => {//有人说要加转译encodeURIComponent本人没加具体跟你们的后台协商
          if (res.data.status.code === '0000') {
            wx.config({
              debug: false,
              appId: res.data.data.appid,
              timestamp: res.data.data.timestamp,
              nonceStr: res.data.data.nonceStr,
              signature: res.data.data.signature,
              jsApiList: [
                'onMenuShareTimeline',
                'onMenuShareAppMessage'
              ]
            });
          }
        })
            //处理验证失败的信息
        wx.error(function (res) {
         alert('验证失败返回的信息:',res);
        });
        console.log(window.location.href.split('#')[0])
        wx.ready(function () {
          // 分享给朋友
          wx.onMenuShareAppMessage({
            title: '这是标题', // 分享标题
            desc: "这是测试的数据", // 分享描述
            link: window.location.href.split('#')[0]+'#'+window.location.href.split('#')[1], // 分享链接！这里是关键 因为微信会把我们分享的链接截取掉 我在这里手动拼接上
            imgUrl: '', // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
              window.alert('已分享给好友');
            },
            cancel: function () {
              // 用户取消分享后执行的回调函数
            },
            fail: function (res) {
              window.alert(JSON.stringify(res));
            }
          });
 
          // 分享到朋友圈
          wx.onMenuShareTimeline({
            title: '这是标题', // 分享标题
            desc: "这是测试的数据", // 分享描述
            link: window.location.href.split('#')[0]+'#'+window.location.href.split('#')[1], // 分享链接
            success: function () {
              window.alert('已分享到朋友圈');
            },
            cancel: function () {
            },
            fail: function (res) {
              window.alert(JSON.stringify(res));
            }
          });
