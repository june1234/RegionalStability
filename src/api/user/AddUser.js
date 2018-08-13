/*
* @Author: user
* @Date:   2018-08-10 15:38:48
* @Last Modified by:   user
* @Last Modified time: 2018-08-10 15:53:53
*/
import request from '@/utils/request'

//添加用户User接口
export function addUser(userFormData){
	return request({
		url:'sysuser/add',
		method:'post',
		data:userFormData
	})
}
