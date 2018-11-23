/*
* @Author: user
* @Date:   2018-08-10 15:39:43
* @Last Modified by:   user
* @Last Modified time: 2018-08-10 16:29:22
*/
import request from '@/utils/request'

// 添加权限Power接口
export function addPower (powerFormData) {
  return request({
    url: 'syspower/add',
    method: 'post',
    data: powerFormData
  })
}
