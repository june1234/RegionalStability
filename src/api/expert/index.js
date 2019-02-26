import request from '@/utils/request'

export function updatenews (params) {
  return request({
    url: '/requesttest/updatenews',
    method: 'post',
    data: params
  })
}

export function updatemacro (params) {
  return request({
    url: '/requesttest/updatemacro',
    method: 'post',
    data: params
  })
}

export function findnews () {
  return request({
    url: '/basescore/findnews',
    method: 'post'
  })
}

export function findmacro () {
  return request({
    url: '/basescore/findmacro',
    method: 'post'
  })
}
