// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import service from './utils/request'
import '@/style/base.less'

/* eslint-disable new-line*/
Vue.use(ElementUI)


Vue.config.productionTip = false

router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
