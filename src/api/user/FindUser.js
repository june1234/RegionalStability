/*
* @Author: user
* @Date:   2018-08-10 13:25:44
* @Last Modified by:   user
* @Last Modified time: 2018-08-10 15:54:29
*/
import request from '@/utils/request'

//根据用户id查询user详情
export function getUserById(id){
	return request({
		url:'sysuser/find/'+id,
		method:'post'
	})
}