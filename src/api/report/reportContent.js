/*
* @Author: user
* @Date:   2018-09-18 10:24:05
* @Last Modified by:   user
* @Last Modified time: 2018-09-18 13:44:24
*/
import request from '@/utils/request.js'

//获取政治事件分析列表信息
export function getPoliticsEventListByType(politicsFormData){
	return request({
		url:'/information/findbypage',
		method:'post',
		data:politicsFormData
	})
}

//获取经济事件分析列表信息
export function getEconomyEventListByType(economyFormData){
	return request({
		url:'/information/findbypage',
		method:'post',
		data:economyFormData
	})
}

//获取反恐事件分析列表信息
export function getAntiEventListByType(antiFormData){
	return request({
		url:'/information/findbypage',
		method:'post',
		data:antiFormData
	})
}