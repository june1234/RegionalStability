/*
* @Author: xiaju
* @Date:   2018-08-08 11:45:21
* @Last Modified by:   xiaju
* @Last Modified time: 2018-08-08 16:46:59
*/
import request from '@/utils/request'

export function getList (modelPageVo) {
  return request({
    url: 'model/findbypage',
    method: 'post',
    data: modelPageVo
  })
}

export function deleted (id) {
  return request({
    url: `model/delete/${id}`,
    method: 'post'
  })
}
