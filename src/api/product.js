import request from '@/utils/request'


export function getProductDetail(data) {
  return request({
    url: '/product-deskend/productSelectById',
    method: 'get',
    params:data
  })
}

export function getProductClassify(data) {
  return request({
    url: '/classify-deskend/classifySelectByParentId',
    method: 'get',
    params:data
  })
}
export function getProductList(data) {
  return request({
    url: '/product-deskend/productSelectByClassify',
    method: 'get',
    params:data
  })
}



