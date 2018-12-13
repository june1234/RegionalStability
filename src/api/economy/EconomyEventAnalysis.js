/*
* @Author: user
* @Date:   2018-09-17 14:20:35
* @Last Modified by:   xiaju
* @Last Modified time: 2018-10-19 13:36:53
*/
import request from '@/utils/request.js'

// 可持续城市
export function Sustainable (city) {
  return request({
    url: '/pmtf/findpm',
    method: 'post',
    data: city
  })
}
// 地图
export function Situation (situation) {
  return request({
    url: '/fpcent/account',
    method: 'post',
    data: situation
  })
}
// 创业和创新以及基础设施建设
// 柱形图
export function Innovation () {
  return request({
    url: '/infra/findia',
    method: 'post'
  })
}
// 曲线图
// 全球合作伙伴
export function Global (situation) {
  return request({
    url: '/export/promp',
    method: 'post',
    data: situation
  })
}

export function list (params) {
  return request({
    url: '/requesttest/three',
    method: 'post',
    data: params
  })
}
