/*
* @Author: xiaju
* @Date:   2018-08-08 18:19:58
* @Last Modified by:   xiaju
* @Last Modified time: 2018-08-08 18:23:52
*/
import request from '@/utils/request.js'

export function functionDetails (id) {
  return request({
    url: `modelmethod/findmmpvo/${id}`,
    method: 'post'
  })
}
