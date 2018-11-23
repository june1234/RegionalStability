/*
* @Author: user
* @Date:   2018-08-10 15:35:19
* @Last Modified by:   user
* @Last Modified time: 2018-08-10 15:55:11
*/
import request from '@/utils/request'

// 更新用户User信息接口，保存修改信息
export function updateUser (userFormData) {
  return request({
    url: 'sysuser/update',
    method: 'post',
    data: userFormData
  })
}
