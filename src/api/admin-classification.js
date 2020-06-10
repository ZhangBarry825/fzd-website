import request from '@/utils/request'

export function getClassList(data) {
  return request({
    url: '/classify-backend/classifySelectByPage',
    method: 'get',
    params:data
  })
}
export function getChildClass(data) {
  return request({
    url: '/classify-backend/classifySelectByParentId',
    method: 'get',
    params:data
  })
}

export function deleteClass(data) {
  return request({
    url: '/classify-backend/classifyDel',
    method: 'post',
    data
  })
}

export function updateClass(data) {
  return request({
    url: '/classify-backend/classifyUpdate',
    method: 'post',
    data
  })
}

export function addClass(data) {
  return request({
    url: '/classify-backend/classifyAdd',
    method: 'post',
    data
  })
}

