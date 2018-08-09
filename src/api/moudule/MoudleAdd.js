/*
* @Author: xiaju
* @Date:   2018-08-08 18:06:45
* @Last Modified by:   xiaju
* @Last Modified time: 2018-08-08 18:08:31
*/
import request from '@/utils/request'

export function MoudleAdd(formData){
	return request({
		url:'/model/add',
		method:'post',
		data:formData
	})
}