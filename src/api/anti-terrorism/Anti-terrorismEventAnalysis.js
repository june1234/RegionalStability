/*
* @Author: user
* @Date:   2018-09-14 09:06:53
* @Last Modified by:   user
* @Last Modified time: 2018-09-14 11:03:38
*/
import request from '@/utils/request.js'

export function map (params) {
  return request({
    url: '/requesttest/map',
    method: 'post',
    data: params
  })
}

export function victimAnalysis (params) {
  return request({
    url: '/gtd/gtdVictimAnalysis',
    method: 'post',
    data: params
  })
}

export function CategoryAnalysis (params) {
  return request({
    url: '/gtd/gtdEventsCategoryAnalysis',
    method: 'post',
    data: params
  })
}

export function ForcesAnalysis (params) {
  return request({
    url: '/gtd/gtdArmedForcesAnalysis',
    method: 'post',
    data: params
  })
}
