import request from '@/utils/request'


export function getProductDetail(data) {
  return request({
    url: '/product-deskend/productSelectById',
    method: 'get',
    params:data
  })
}

export function getEquipmentClassify(data) {
  return request({
    url: '/product-deskend/productSelectByClassify',
    method: 'get',
    params:data
  })
}



