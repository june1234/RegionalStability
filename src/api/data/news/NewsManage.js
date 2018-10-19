/*
* @Author: user
* @Date:   2018-08-20 15:10:20
* @Last Modified by:   user
* @Last Modified time: 2018-09-10 16:55:40
*/
import request from '@/utils/request.js'

//获取新闻news信息列表
export function getNewsList(newsWeb){
	return request({
		url:'news/findbypage',
		method:'post',
        data:newsWeb
	})
}