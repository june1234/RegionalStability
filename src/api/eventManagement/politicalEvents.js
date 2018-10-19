/*
* @Author: xiaju
* @Date:   2018-09-06 14:48:03
* @Last Modified by:   xiaju
* @Last Modified time: 2018-09-08 11:32:35
*/
import request from '@/utils/request'

// 根据维度，分页查询相应维度的对象

export function findByParam(politicsWeb){
	return request({
		url:'politics/findbyparam',
		method:'post',
		data:politicsWeb
	})
}
// 批量删除
export function deleteByIds(politicsWeb){
	return request({
		url:'politics/deletebyids',
		method:'post',
		data:politicsWeb
	})
}

// 批量调级
export function updateByIds(politicsWeb){
	return request({
		url:'politics/updatebyids',
		method:'post',
		data:politicsWeb
	})
}