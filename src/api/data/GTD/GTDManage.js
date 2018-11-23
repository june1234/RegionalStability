/*
* @Author: user
* @Date:   2018-08-24 14:34:53
* @Last Modified by:   user
* @Last Modified time: 2018-09-10 16:48:00
*/
import request from '@/utils/request.js'

// 获取GTD信息列表
export function getGTDList (gtdPage) {
  return request({
    url: 'gtd/findbypage',
    method: 'post',
    data: gtdPage
  })
}
