import request from '@/utils/request'


export function getProductList(data) {
  return request({
    url: '/product-backend/productSelectByPage',
    method: 'get',
    params:data
  })
}
export function addProduct(data) {
  return request({
    url: '/product-backend/productAdd',
    method: 'post',
    data
  })
}
export function updateProduct(data) {
  return request({
    url: '/product-backend/productUpdate',
    method: 'post',
    data
  })
}

export function deleteProduct(data) {
  return request({
    url: '/product-backend/productDel',
    method: 'post',
    data
  })
}



