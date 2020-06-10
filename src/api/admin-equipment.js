import request from '@/utils/request'

export function getEquipList(data) {
  return request({
    url: '/facility-backend/facilitySelectByPage',
    method: 'get',
    params:data
  })
}
export function getEquipDetail(data) {
  return request({
    url: '/facility-backend/facilitySelectById',
    method: 'get',
    params:data
  })
}

export function deleteEquip(data) {
  return request({
    url: '/facility-backend/facilityDel',
    method: 'post',
    data
  })
}
export function updateEquip(data) {
  return request({
    url: '/facility-backend/facilityUpdate',
    method: 'post',
    data
  })
}
export function addEquip(data) {
  return request({
    url: '/facility-backend/facilityAdd',
    method: 'post',
    data
  })
}



