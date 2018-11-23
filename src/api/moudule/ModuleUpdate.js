/*
* @Author: xiaju
* @Date:   2018-08-08 17:18:52
* @Last Modified by:   xiaju
* @Last Modified time: 2018-08-08 18:00:23
*/
import request from '@/utils/request'

export function moduleUpdate (modelData) {
  return request({
    url: '/model/update',
    method: 'post',
    data: modelData
  })
}
