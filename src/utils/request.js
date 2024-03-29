/*
 * @Author: Vincent
 * @Date: 2018-05-06 15:24:27
 * @Last Modified by:   xiaju
 * @Last Modified time: 2018-10-18 14:02:13
 */
import axios from 'axios'
import qs from 'qs'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  // baseURL: 'http://192.168.10.222:8080/dev', // api的base_url 服务器地址
  // baseURL: 'http://192.168.10.231:8080/dev', // 本地地址
  baseURL: 'http://192.168.17.248:8080/dev', // 本地地址
  timeout: 540000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  if (config.method === 'post') {
    // config.data = qs.stringify(config.data)
    config.data = config.data
    config.headers['Content-Type'] = 'application/json'
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  } else if (config.method === 'get') {
    config.params = {
      ...config.params
    }
  }
  if (store.getters.token) {
    config.headers['token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
    * code为非1000是抛错 可结合自己业务进行修改
    */
    const res = response.data
    if (res.retcode != '200000') {
      Message({
        message: res.msg,
        type: 'error',
        duration: 5 * 1000
      })
      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('FedLogOut').then(() => {
            location.reload()// 为了重新实例化vue-router对象 避免bug
          })
        })
      }
      debugger
      return Promise.reject(new Error('error'))
    } else if (res.retcode === 404) {
      this.$router.push('/Error/error404')
    } else if (res.retcode === 500) {
      this.$router.push('/Error/error500')
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
