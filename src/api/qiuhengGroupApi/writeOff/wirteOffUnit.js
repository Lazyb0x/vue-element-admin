import request from '@/utils/request'

const BASE_URL = 'http://localhost:8888'

export function getApplyList (queryInfo) {
  return request({
    url: BASE_URL + '/unit/selectApply',
    method: 'get',
    params: queryInfo
  })
}

export function deleteApply (no) {
  return request({
    url: BASE_URL + `/unit/deleteApply/${no}`,
    method: 'delete'
  })
}

export function uploadApply (noList) {
  return request({
    url: BASE_URL + '/unit/uploadApply',
    method: 'put',
    data: noList
  })
}

export function rescindApply (noList) {
  return request({
    url: BASE_URL + '/unit/rescindApply',
    method: 'put',
    data: noList
  })
}
