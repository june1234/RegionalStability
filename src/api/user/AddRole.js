/*
* @Author: user
* @Date:   2018-08-09 10:20:40
* @Last Modified by:   user
* @Last Modified time: 2018-08-10 15:53:31
*/
import request from '@/utils/request'

// 添加角色Role接口
export function addRole (roleFormData) {
  return request({
    url: 'sysrole/add',
    method: 'post',
    data: roleFormData
  })
}
