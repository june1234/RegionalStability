import request from '@/utils/request'
export function composite (params) {
  return request({
    url: '/worldbank/find',
    method: 'post',
    data: params
  })
}

export function Ahp () {
  return request({
    url: 'ahp/find',
    method: 'post'
  })
}

export function caseIndex () {
  return request({
    url: '/eventscoresource/find',
    method: 'post'
  })
}
export function compare (params) {
  return request({
    url: '/eventscore/compare',
    method: 'post',
    data: params
  })
}

export function Source () {
  return request({
    url: '/informationeventbase/find',
    method: 'post'
  })
}

export function newList () {
  return request({
    url: '/informationeventbase/findnews',
    method: 'post'
  })
}
