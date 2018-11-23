/*
* @Author: xiaju
* @Date:   2018-08-08 18:16:22
* @Last Modified by:   xiaju
* @Last Modified time: 2018-08-08 18:18:15
*/
import request from '@/utils/request.js'

export function functionAdd (formData) {
  return request({
    url: '/modelmethod/add',
    method: 'post',
    data: formData
  })
}
