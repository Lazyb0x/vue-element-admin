import request from '@/utils/request'

// 项目管理
export function getProjectListByPage (data) {
  return request({
    url: '/item/listByPage',
    method: 'post',
    data: data
  })
}

export function addProject (data) {
  return request({
    url: '/item/save',
    method: 'post',
    data: data
  })
}

export function updateProject (user) {
  return request({
    url: '/item/update',
    method: 'post',
    data: user
  })
}

export function deleteProject (data) {
  return request({
    url: '/item/delete',
    method: 'post',
    data: { id: data }
  })
}

export function deleteProjectBatch (data) {
  return request({
    url: '/item/batchDelete',
    method: 'post',
    data: data
  })
}

export function projectCheck (data) {
  return request({
    url: '/item/batchVerify',
    method: 'post',
    data: data
  })
}
// 项目标准
export function getStdListByPage (data) {
  return request({
    url: '/itemstd/listByPage',
    method: 'post',
    data: data
  })
}

export function getItemStd (data) {
  return request({
    url: '/itemstd/getItemStd',
    method: 'post',
    data: { itemCode: data }
  })
}

export function addStd (data) {
  return request({
    url: '/itemstd/save',
    method: 'post',
    data: data
  })
}

export function updateStd (user) {
  return request({
    url: '/itemstd/update',
    method: 'post',
    data: user
  })
}

export function deleteStd (data) {
  return request({
    url: '/itemstd/delete',
    method: 'post',
    data: { id: data }
  })
}

export function deleteStdBatch (data) {
  return request({
    url: '/itemstd/batchDelete',
    method: 'post',
    data: data
  })
}

export function projectStdCheck (data) {
  return request({
    url: '/itemstd/batchVerify',
    method: 'post',
    data: data
  })
}
