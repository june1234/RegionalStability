/*
* @Author: user
* @Date:   2018-08-09 09:10:52
* @Last Modified by:   user
* @Last Modified time: 2018-08-11 15:33:49
*/
import request from '@/utils/request.js'

//获取用户user分页信息列表
export function getUserList(userPageVo){
	return request({
		url:'sysuser/findbypage',
		method:'post',
        data:userPageVo
	})
}

//根据用户id删除用户记录
export function deleteUser(id){
    return request({
    	url:'sysuser/delete/'+id,
		method:'post'
    })
}

//获取角色role分页信息列表
export function getRoleList(rolePageVo){
	return request({
		url:'sysrole/findbypage',
		method:'post',
        data:rolePageVo
	})
}

//根据角色id删除role记录
export function deleteRole(id){
	return request({
		url:'sysrole/delete/'+id,
		method:'post'
	})
}

//获取权限power分页信息列表
export function getPowerList(powerPageVo){
	return request({
		url:'syspower/findbypage',
		method:'post',
        data:powerPageVo
	})
}

//根据权限id删除power记录
export function deletePower(id){
	return request({
		url:'syspower/delete/'+id,
		method:'post'
	})
}

//初始化用户密码
export function initUserPassword(id){
	return request({
		url:'sysuser/init/'+id,
		method:'post'
	})
}