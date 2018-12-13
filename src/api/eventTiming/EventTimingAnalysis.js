/*
* @Author: user
* @Date:   2018-09-05 13:03:47
* @Last Modified by:   xiaju
* @Last Modified time: 2018-10-17 17:39:17
*/
import request from '@/utils/request.js'

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
