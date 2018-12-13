/*
* @Author: user
* @Date:   2018-09-13 16:02:53
* @Last Modified by:   user
* @Last Modified time: 2018-09-17 09:47:05
*/
import request from '@/utils/request.js'

// 获取政治事件分析列表信息
export function frequency (politicsFormData) {
  return request({
    url: '/requesttest/frequency',
    method: 'post',
    data: politicsFormData
  })
}
