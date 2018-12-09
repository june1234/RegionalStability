// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import $ from 'jquery'
import 'babel-polyfill'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import service from './utils/request'
import '@/style/base.less'
import VueQuillEditor from 'vue-quill-editor'
// 一定要引入这三个css，不然文本编辑器会出现不规则黑白几何图形
// 这三个css可以在main.js中引入，也可以在具体使用的.vue文件中引入
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import htmlToPdf from '@/utils/htmlToPdf'

/* eslint-disable */
Vue.use(ElementUI)
Vue.use(VueQuillEditor)
Vue.config.productionTip = false
Vue.use(htmlToPdf)
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
