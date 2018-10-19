/*
* @Author: user
* @Date:   2018-08-20 16:13:34
* @Last Modified by:   user
* @Last Modified time: 2018-09-10 16:55:00
*/
import request from '@/utils/request.js'

//根据新闻id，查询新闻原始数据
export function findById(id){
	return request({
		url:'news/findbyid/'+id,
		method:'post'
	})
}

//查询已入库的新闻详情数据，修改时调用
export function find(nid){
	return request({
		url:'eventbase/find/'+nid,
		method:'post'
	})
}

//未入库数据状态变为1
export function updateOne(id){
	return request({
		url:'news/updateone/'+id,
		method:'post'
	})
}

//未入库数据，状态变为2
export function updateTwo(id){
	return request({
		url:'news/updatetwo/'+id,
		method:'post'
	})
}

//数据入库操作
export function add(eventBasePoWithBLOBs){
	return request({
		url:'eventbase/add',
		method:'post',
		data:eventBasePoWithBLOBs
	})
}
//对已入库数据进行修改
export function update(newsFormData){
	return request({
		url:'eventbase/update',
		method:'post',
		data:newsFormData
	})
}