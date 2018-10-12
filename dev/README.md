# Scaffold -   Z Stop.

> By Vue.js Scaffold.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```

* **目录**
   * config
      * index.js => 设置本地开发服务器代理进行跨域
      * dev | prod .env.js => API_ROOT配置开发环境和生产环境请求域名(domian)
   * dist
      * 打包后的文件 => [后端配置例子]('https://router.vuejs.org/zh/guide/essentials/history-mode.html')
   * src
      * assets => 静态文件
      * components => 项目公用组件
      * page => 项目业务组件
      * router => 前端路由配置
      * store => 保存全局数据
      * utils => 静态文件
      * assets => 全局工具方法
      * static => 全局公用静态文件

> tips:
[Vue.js](https://cn.vuejs.org/v2/guide/)
[Vue Router](https://router.vuejs.org/zh/)
[Vuex](https://vuex.vuejs.org/zh/)

> Business details please see the specific notes.

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
