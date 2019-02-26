/*
* @Author: user
* @Date:   2018-09-05 13:03:47
* @Last Modified by:   xiaju
* @Last Modified time: 2018-10-17 17:39:17
*/
import request from '@/utils/request'

// 初始化
export function findword (eventTimingFormData) {
  return request({
    url: 'word/findword',
    method: 'post',
    data: eventTimingFormData
  })
}

export function findTitle (params) {
  return request({
    url: '/title/findtitle',
    method: 'post',
    data: params
  })
}

export function TrendData (params) {
  return request({
    url: `/events/getTrendData/${params}`,
    method: 'post'
  })
}

export function HeatData (params) {
  return request({
    url: `/events/getHeatData/${params}`,
    method: 'post'
  })
}

export function getForecastEventNumber () {
  return request({
    url: '/events/getForecastEventNumber',
    method: 'post'
  })
}
