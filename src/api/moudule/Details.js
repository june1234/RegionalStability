/*
* @Author: xiaju
* @Date:   2018-08-08 15:52:54
* @Last Modified by:   xiaju
* @Last Modified time: 2018-08-09 14:59:47
*/
import request from '@/utils/request'

export function moduleList() {
	return request({
		url:'/modelmodule/findall',
		method:'post',
	})
}

export function methodList(modelPageVo) {
    return request({
    	url:'/modelmethod/findall',
    	method:'post',
    	data:modelPageVo
    })
}

export function moudleById (id){
	return request({
		url:`/model/find/${id}`,
		method:'post'
	})
}

export function methodDelete (id){
   return request({
   	url:`modelmethod/delete/${id}`,
   	method:'post'
   })
}