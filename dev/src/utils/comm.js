// 全局公用方法

export {
  isWeiXin,
  getQueryString,
  isScrollBottom
}

/**
 * 
 * @param {} void
 * 判断微信
 */
const isWeiXin = () => {
  var ua = window.navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    return true;
  } else {
    return false;
  }
}
/**
 * 
 * @param {String} string
 * query
 */
const getQueryString = (name) => {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  let r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURI(r[2]);
  return null;
}

/**
 * 
 * @param {function} cb 
 * 判断页面触底
 */
const isScrollBottom = (cb) => {
  window.onscroll =
    throttle(
      () => {
        if (_getScrollHeight() == _getWindowHeight() + _getDocumentTop()) {
          cb && cb();
        }
      }, 200
    )
}
/**
 * 
 * @param {function} method 
 * @param {string} delay 
 * 函数节流
 */
const throttle = (method, delay) => {
  return function () {
    var context = this,
      args = arguments;
    clearTimeout(this.timer);
    context.timer = setTimeout(function () {
      method.apply(context, args);
    }, delay);
  }
}

//文档高度
const _getDocumentTop = () => {
  let scrollTop = 0,
    bodyScrollTop = 0,
    documentScrollTop = 0;
  if (document.body) {
    bodyScrollTop = document.body.scrollTop;
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop;
  }
  scrollTop =
    bodyScrollTop - documentScrollTop > 0 ?
    bodyScrollTop :
    documentScrollTop;
  return scrollTop;
}

//可视窗口高度
const _getWindowHeight = () => {
  var windowHeight = 0;
  if (document.compatMode == "CSS1Compat") {
    windowHeight = document.documentElement.clientHeight;
  } else {
    windowHeight = document.body.clientHeight;
  }
  return windowHeight;
}

//滚动条滚动高度
const _getScrollHeight = () => {
  var scrollHeight = 0,
    bodyScrollHeight = 0,
    documentScrollHeight = 0;
  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight;
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight;
  }
  scrollHeight =
    bodyScrollHeight - documentScrollHeight > 0 ?
    bodyScrollHeight :
    documentScrollHeight;
  return scrollHeight;
}
