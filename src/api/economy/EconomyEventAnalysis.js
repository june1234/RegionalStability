/*
* @Author: user
* @Date:   2018-09-17 14:20:35
* @Last Modified by:   june1234
* @Last Modified time: 2018-10-18 17:29:33
*/
import request from '@/utils/request.js'

//获取CPI信息列表
export function getCPIList(CPIFormData){
	return request({
		url:'cpi/findbypage',
		method:'post',
        data:CPIFormData
	})
}

//获取GDP信息列表
export function getGDPList(GDPFormData){
	return request({
		url:'gdp/findbypage',
		method:'post',
        data:GDPFormData
	})
}

//获取股指信息 信息列表
export function getStockPointList(StockPointFormData){
	return request({
		url:'stockpoint/findbypage',
		method:'post',
        data:StockPointFormData
	})
}
