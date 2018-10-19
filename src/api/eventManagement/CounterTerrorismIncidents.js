/*
* @Author: xiaju
* @Date:   2018-09-12 16:20:06
* @Last Modified by:   xiaju
* @Last Modified time: 2018-09-13 15:28:25
*/
import request from '@/utils/request'

// 查询
export function findByParam(politicsWeb){
	return request({
		url:'gsv/findbyparam',
		method:'post',
		data:politicsWeb
	})
}
// 批量调级
export function updateByIds(politicsWeb){
	return request({
		url:'gsv/updatebyids',
		method:'post',
		data:politicsWeb
	})
}
// 批量删除
export function deleteByIds(politicsWeb){
	return request({
		url:'gsv/deletebyids',
		method:'post',
		data:politicsWeb
	})
}