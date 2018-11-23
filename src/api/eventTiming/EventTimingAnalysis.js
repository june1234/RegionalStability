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

// 关系图谱
export function paintingweight (eventGroulp) {
  return request({
    url: 'weight/paintingweight',
    method: 'post',
    data: eventGroulp
  })
}
