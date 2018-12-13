/*
* @Author: user
* @Date:   2018-08-27 13:03:48
* @Last Modified by:   xiaju
* @Last Modified time: 2018-09-12 17:43:57
*/
import request from '@/utils/request.js'

// 获取国家信息
export function getCountryAll () {
  return request({
    url: 'hs/findall',
    method: 'post'
  })
}
// 获取等级
export function FindByPage (politicsWeb) {
  return request({
    url: 'grade/findbypage',
    method: 'post',
    data: politicsWeb
  })
}
// 修改等级
export function updateLevel (gradeVo) {
  return request({
    url: 'grade/update',
    method: 'post',
    data: gradeVo
  })
}

// 统一新闻列变
export function event (params) {
  return request({
    url: 'events/findlist',
    method: 'post',
    data: params
  })
}
// 删除事件
export function deleteEvent (id) {
  return request({
    url: `/events/delete/${id}`,
    method: 'post'
  })
}
// 查询分数
export function findEmotion (params) {
  return request({
    url: '/events/findEmotion',
    method: 'post',
    data: params
  })
}
// 旭日图

export function findSun (params) {
  return request({
    url: '/events/findSun',
    method: 'post',
    data: params
  })
}

// 散点图
export function point (params) {
  return request({
    url: '/requesttest/point',
    method: 'post',
    data: params
  })
}
// 曲线
export function findcurves (params) {
  return request({
    url: '/events/findcurves',
    method: 'post',
    data: params
  })
}
