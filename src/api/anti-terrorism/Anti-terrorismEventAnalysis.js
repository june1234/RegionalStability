/*
* @Author: user
* @Date:   2018-09-14 09:06:53
* @Last Modified by:   user
* @Last Modified time: 2018-09-14 11:03:38
*/
import request from '@/utils/request.js'

// 获取反恐事件分析列表信息
export function getAntiEventListByType (eventBasePage) {
  return request({
    url: '/information/findbypage',
    method: 'post',
    data: eventBasePage
  })
}
