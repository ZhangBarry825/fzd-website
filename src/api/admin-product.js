import request from '@/utils/request'


// export function getProductDetail(data) {
//   return request({
//     url: '/product-deskend/productSelectById',
//     method: 'get',
//     params:data
//   })
// }
//
// export function getProductClassify(data) {
//   return request({
//     url: '/classify-deskend/classifySelectByParentId',
//     method: 'get',
//     params:data
//   })
// }
export function getProductList(data) {
  return request({
    url: '/product-backend/productSelectByPage',
    method: 'get',
    params:data
  })
}

export function deleteProduct(data) {
  return request({
    url: '/product-backend/productDel',
    method: 'post',
    data
  })
}



