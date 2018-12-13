/*
* @Author: user
* @Date:   2018-09-14 16:21:00
* @Last Modified by:   user
* @Last Modified time: 2018-09-14 16:22:03
*/
import request from '@/utils/request.js'

// 获取新闻分页信息列表
export function getNewsList (newsFormData) {
  return request({
    url: '/informationeventbase/findbypage',
    method: 'post',
    data: newsFormData
  })
}

export function getNewsDetail (id) {
  return request({
    url: `/informationeventbase/findcontent/${id}`,
    method: 'post'
  })
}
