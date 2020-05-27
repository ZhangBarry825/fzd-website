import request from '@/utils/request'


export function getNewsDetail(data) {
  return request({
    url: '/news-deskend/newsSelectById',
    method: 'get',
    params:data
  })
}

export function getEquipmentDetail(data) {
  return request({
    url: '/facility-deskend/facilitySelectById',
    method: 'get',
    params:data
  })
}



