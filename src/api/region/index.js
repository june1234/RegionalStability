import request from '@/utils/request.js'

export function scoresource (params) {
  return request({
    url: '/eventscoresource/findbymonth',
    method: 'post',
    data: params
  })
}

export function score (params) {
  return request({
    url: '/requesttest/score',
    method: 'post',
    data: params
  })
}

export function enventData (params) {
  return request({
    url: '/eventscoresource/findline',
    method: 'post',
    data: params
  })
}

export function worldBankData (params) {
  return request({
    url: '/requesttest/worldbank',
    method: 'post',
    data: params
  })
}
