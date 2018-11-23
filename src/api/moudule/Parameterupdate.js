/*
* @Author: xiaju
* @Date:   2018-08-08 18:26:45
* @Last Modified by:   xiaju
* @Last Modified time: 2018-08-08 18:28:48
*/
import request from '@/utils/request.js'

export function Parameterupdate (formData) {
  return request({
    url: '/modelmethod/update',
    method: 'post',
    data: formData
  })
}
