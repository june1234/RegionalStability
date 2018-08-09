/*
* @Author: xiaju
* @Date:   2018-08-08 17:15:08
* @Last Modified by:   xiaju
* @Last Modified time: 2018-08-08 18:02:14
*/
import request from '@/utils/request'

export function modelUpdate(formData){
	return request({
		url:'/model/update',
		method:'post',
		data:formData
	})
}