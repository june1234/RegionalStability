/*
* @Author: user
* @Date:   2018-09-14 09:06:53
* @Last Modified by:   user
* @Last Modified time: 2018-09-14 11:03:38
*/
import request from '@/utils/request.js'

export function map(params) {
  return request({
    url:'/requesttest/map',
    method:'post',
    data:params
  })
}