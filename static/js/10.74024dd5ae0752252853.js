webpackJsonp([10],{"5zde":function(t,e,a){a("zQR9"),a("qyJz"),t.exports=a("FeBl").Array.from},"8LuE":function(t,e,a){e=t.exports=a("FZ+f")(!0),e.push([t.i,"\n.record-list-item[data-v-fab730a6] {\n  width: 95%;\n  padding: 0.2rem 2.5%;\n  height: 1.35rem;\n  border-bottom: 1px #f2f2f2 solid;\n}\n.type-cash[data-v-fab730a6] {\n  font-size: 0.3rem;\n  color: #333333;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.c-00A0BE[data-v-fab730a6] {\n  color: #61D8D0;\n}\n.date-state[data-v-fab730a6] {\n  margin-top: 0.1rem;\n  font-size: 0.28rem;\n  color: #999999;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.remind-text[data-v-fab730a6] {\n  margin-top: 0.5rem;\n  font-size: 0.28rem;\n  color: #999999;\n  text-align: center;\n}\n","",{version:3,sources:["E:/project/h5_xiepinhui/dev/src/page/center/balance/remain/remain.vue"],names:[],mappings:";AACA;EACE,WAAW;EACX,qBAAqB;EACrB,gBAAgB;EAChB,iCAAiC;CAClC;AACD;EACE,kBAAkB;EAClB,eAAe;EACf,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;CACf;AACD;EACE,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,mBAAmB;EACnB,eAAe;EACf,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;CACf;AACD;EACE,mBAAmB;EACnB,mBAAmB;EACnB,eAAe;EACf,mBAAmB;CACpB",file:"remain.vue",sourcesContent:["\n.record-list-item[data-v-fab730a6] {\n  width: 95%;\n  padding: 0.2rem 2.5%;\n  height: 1.35rem;\n  border-bottom: 1px #f2f2f2 solid;\n}\n.type-cash[data-v-fab730a6] {\n  font-size: 0.3rem;\n  color: #333333;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.c-00A0BE[data-v-fab730a6] {\n  color: #61D8D0;\n}\n.date-state[data-v-fab730a6] {\n  margin-top: 0.1rem;\n  font-size: 0.28rem;\n  color: #999999;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.remind-text[data-v-fab730a6] {\n  margin-top: 0.5rem;\n  font-size: 0.28rem;\n  color: #999999;\n  text-align: center;\n}\n"],sourceRoot:""}])},Gu7T:function(t,e,a){"use strict";e.__esModule=!0;var n=a("c/Tr"),i=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return(0,i.default)(t)}},K44r:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a("Dd8w"),o=n(i),s=a("Xxa5"),r=n(s),c=a("Gu7T"),l=n(c),u=a("d7EF"),d=n(u),f=a("exGp"),p=n(f),h=a("mCTZ"),m=a("rHil"),A=(n(m),a("1DHf")),v=(n(A),a("2sLL")),g=(n(v),a("D8a4")),_=(n(g),a("ABCa")),C=n(_),B=a("NXWw"),x=(n(B),a("aTeQ")),y=(n(x),a("NYxO")),b=a("VsUZ");e.default={components:{XHeader:C.default},data:function(){return{record:[],totalPage:0,page:1,upLoading:!1,upLoadingComplete:!1,upmore:!0,nick_name:""}},created:function(){this.getRecord()},destroyed:function(){window.onscroll=null},mounted:function(){var t=this;this.$nextTick(function(){(0,h.isScrollBottom)(t.onReachBottom)})},methods:{getRecord:function(){function t(){return e.apply(this,arguments)}var e=(0,p.default)(r.default.mark(function t(){var e,a,n,i,o,s,c;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this,a={plat:3,account:this.account,token:this.token,page:this.page},t.next=4,b.api.balancelog(a);case 4:if(n=t.sent,i=(0,d.default)(n,2),o=i[0],s=i[1],!o){t.next=11;break}return this.$vux.toast.text(o.msg),t.abrupt("return");case 11:2e3==s.code&&(1==this.page?(this.nick_name=this.user.nick,this.record=s.data.list,this.totalPage=s.data.page_size):(c=e.record,c.push.apply(c,(0,l.default)(s.data.list))),this.showBottom());case 12:case"end":return t.stop()}},t,this)}));return t}(),showBottom:function(){this.page<parseInt(this.totalPage)?(this.upLoading=!1,this.upmore=!0):(this.upLoadingComplete=!0,this.upLoading=!1,this.upmore=!1)},onReachBottom:function(){if(!this.upLoadingComplete){this.upmore=!1,this.upLoading=!0;var t=this.page;t++,this.page=t,this.getRecord()}}},computed:(0,o.default)({},(0,y.mapGetters)(["user","account","token","carpayInfo"]))}},UFTs:function(t,e,a){"use strict";function n(t){a("XP2Y")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("hGNi");a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);var s=a("K44r"),r=a.n(s),c=a("aWaP"),l=a("VU/8"),u=n,d=l(r.a,c.a,!1,u,"data-v-fab730a6",null);e.default=d.exports},XP2Y:function(t,e,a){var n=a("8LuE");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("00df506a",n,!0,{})},aWaP:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"idnexWrapBox"},[a("x-header",{attrs:{"left-options":{backText:""},title:"余额明细",id:"vux-header"}}),t._v(" "),a("div",[a("div",{staticClass:"withdraw-record"},[t.record.length>0?a("div",{staticClass:"withdraw-record-list"},t._l(t.record,function(e,n){return a("div",{key:n,staticClass:"record-list-item"},[a("div",{staticClass:"type-cash flex-pack-justify"},[a("span",{staticClass:"type"},[t._v(t._s(t.nick_name))]),t._v(" "),1==e.log_type?a("span",{staticClass:"cash"},[a("span",{staticStyle:{color:"#333"}},[t._v("获得收益")]),t._v("  "+t._s(e.amount))]):2==e.log_type?a("span",{staticClass:"cash"},[a("span",{staticStyle:{color:"#ec655f"}},[t._v("提现金额")]),t._v("  "+t._s(e.amount))]):3==e.log_type?a("span",{staticClass:"cash"},[a("span",{staticStyle:{color:"#bbb"}},[t._v("提现失败")]),t._v("  "+t._s(e.amount))]):t._e()]),t._v(" "),a("div",{staticClass:"date-state flex-pack-justify"},[a("span",{staticClass:"date",staticStyle:{float:"left","line-height":"0.28rem"}},[t._v(t._s(e.log_addtime))]),t._v(" "),a("span",{staticClass:"state",staticStyle:{float:"right","line-height":"28rpx0.28rem"}},[t._v(t._s(e.log_desc_type))])])])})):t._e(),t._v(" "),t.record.length<1?a("div",{staticClass:"remind-text"},[t._v("\n                暂无数据\n            ")]):t._e(),t._v(" "),t.totalPage>1?a("div",[t.upmore?a("div",{staticClass:"loading"},[t._v("\n                    上拉加载更多\n                ")]):t._e(),t._v(" "),t.upLoading?a("div",{staticClass:"loading"},[t._v("\n                    加载中...\n                ")]):t._e(),t._v(" "),t.upLoadingComplete?a("div",{staticClass:"loading complete"},[t._v("\n                    已加载全部数据\n                ")]):t._e()]):t._e()])])],1)},i=[],o={render:n,staticRenderFns:i};e.a=o},"c/Tr":function(t,e,a){t.exports={default:a("5zde"),__esModule:!0}},fBQ2:function(t,e,a){"use strict";var n=a("evD5"),i=a("X8DO");t.exports=function(t,e,a){e in t?n.f(t,e,i(0,a)):t[e]=a}},hGNi:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a("Dd8w"),o=n(i),s=a("Xxa5"),r=n(s),c=a("Gu7T"),l=n(c),u=a("d7EF"),d=n(u),f=a("exGp"),p=n(f),h=a("mCTZ"),m=a("rHil"),A=(n(m),a("1DHf")),v=(n(A),a("2sLL")),g=(n(v),a("D8a4")),_=(n(g),a("ABCa")),C=n(_),B=a("NXWw"),x=(n(B),a("aTeQ")),y=(n(x),a("NYxO")),b=a("VsUZ");e.default={components:{XHeader:C.default},data:function(){return{record:[],totalPage:0,page:1,upLoading:!1,upLoadingComplete:!1,upmore:!0,nick_name:""}},created:function(){this.getRecord()},destroyed:function(){window.onscroll=null},mounted:function(){var t=this;this.$nextTick(function(){(0,h.isScrollBottom)(t.onReachBottom)})},methods:{getRecord:function(){function t(){return e.apply(this,arguments)}var e=(0,p.default)(r.default.mark(function t(){var e,a,n,i,o,s,c;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this,a={plat:3,account:this.account,token:this.token,page:this.page},t.next=4,b.api.balancelog(a);case 4:if(n=t.sent,i=(0,d.default)(n,2),o=i[0],s=i[1],!o){t.next=11;break}return this.$vux.toast.text(o.msg),t.abrupt("return");case 11:2e3==s.code&&(1==this.page?(this.nick_name=this.user.nick,this.record=s.data.list,this.totalPage=s.data.page_size):(c=e.record,c.push.apply(c,(0,l.default)(s.data.list))),this.showBottom());case 12:case"end":return t.stop()}},t,this)}));return t}(),showBottom:function(){this.page<parseInt(this.totalPage)?(this.upLoading=!1,this.upmore=!0):(this.upLoadingComplete=!0,this.upLoading=!1,this.upmore=!1)},onReachBottom:function(){if(!this.upLoadingComplete){this.upmore=!1,this.upLoading=!0;var t=this.page;t++,this.page=t,this.getRecord()}}},computed:(0,o.default)({},(0,y.mapGetters)(["user","account","token","carpayInfo"]))}},qyJz:function(t,e,a){"use strict";var n=a("+ZMJ"),i=a("kM2E"),o=a("sB3e"),s=a("msXi"),r=a("Mhyx"),c=a("QRG4"),l=a("fBQ2"),u=a("3fs2");i(i.S+i.F*!a("dY0y")(function(t){Array.from(t)}),"Array",{from:function(t){var e,a,i,d,f=o(t),p="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,A=void 0!==m,v=0,g=u(f);if(A&&(m=n(m,h>2?arguments[2]:void 0,2)),void 0==g||p==Array&&r(g))for(e=c(f.length),a=new p(e);e>v;v++)l(a,v,A?m(f[v],v):f[v]);else for(d=g.call(f),a=new p;!(i=d.next()).done;v++)l(a,v,A?s(d,m,[i.value,v],!0):i.value);return a.length=v,a}})}});
//# sourceMappingURL=10.74024dd5ae0752252853.js.map