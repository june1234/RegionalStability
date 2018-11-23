/*
* @Author: user
* @Date:   2018-09-12 13:25:34
* @Last Modified by:   user
* @Last Modified time: 2018-09-14 10:46:47
*/
import request from '@/utils/request.js'

// 获取政党信息
export function getPartyGroupList () {
  return request({
    url: 'partygroup/findbypage',
    method: 'post'
  })
}

// 获取政治事件分页列表信息
export function getPoliticsEventList (politicsFormData) {
  return request({
    url: '/information/findbypage',
    method: 'post',
    data: politicsFormData
  })
}
