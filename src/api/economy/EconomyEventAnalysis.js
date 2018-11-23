/*
* @Author: user
* @Date:   2018-09-17 14:20:35
* @Last Modified by:   xiaju
* @Last Modified time: 2018-10-19 13:36:53
*/
import request from '@/utils/request.js'

// 获取CPI信息列表
export function getCPIList (CPIFormData) {
  return request({
    url: 'cpi/findbypage',
    method: 'post',
    data: CPIFormData
  })
}

// 获取GDP信息列表
export function getGDPList (GDPFormData) {
  return request({
    url: 'gdp/findbypage',
    method: 'post',
    data: GDPFormData
  })
}

// 获取股指信息 信息列表
export function getStockPointList (StockPointFormData) {
  return request({
    url: 'stockpoint/findbypage',
    method: 'post',
    data: StockPointFormData
  })
}
// 可持续城市
export function Sustainable (city) {
  return request({
    url: '/pmtf/findpm',
    method: 'post',
    data: city
  })
}
// 经济增长和就业情况
// 柱形图
// export function growth(){
// 	return request({
// 		url:'',
// 		method:'post',
// 		data:
// 	})
// }
// 地图
export function Situation (situation) {
  return request({
    url: '/fpcent/account',
    method: 'post',
    data: situation
  })
}
// 创业和创新以及基础设施建设
// 柱形图
export function Innovation () {
  return request({
    url: '/infra/findia',
    method: 'post'
  })
}
// 曲线图
// 全球合作伙伴
export function Global (situation) {
  return request({
    url: '/export/promp',
    method: 'post',
    data: situation
  })
}
