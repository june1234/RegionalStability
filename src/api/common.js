/*
* @Author: user
* @Date:   2018-08-27 13:03:48
* @Last Modified by:   xiaju
* @Last Modified time: 2018-09-12 17:43:57
*/
import request from '@/utils/request.js'

//获取国家信息
export function getCountryAll(){
	return request({
		url:'hs/findall',
		method:'post'
	})
}
//获取等级
export function FindByPage(politicsWeb){
	return request({
		url:'grade/findbypage',
		method:'post',
		data:politicsWeb
	})
}
// 修改等级
export function updateLevel(gradeVo){
	return request({
		url:'grade/update',
		method:'post',
		data:gradeVo
	})
}
