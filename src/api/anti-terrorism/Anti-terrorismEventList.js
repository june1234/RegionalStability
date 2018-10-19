/*
* @Author: user
* @Date:   2018-09-14 10:02:24
* @Last Modified by:   user
* @Last Modified time: 2018-09-14 10:58:09
*/
import request from '@/utils/request.js'

//获取反恐事件分页列表信息
export function getAntiEventList(antiFormData){
	return request({
		url:'/information/findbypage',
		method:'post',
		data:antiFormData
	})
}