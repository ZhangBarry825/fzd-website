import request from '@/utils/request'

export function getClassList(data) {
  return request({
    url: '/classify-backend/classifySelectByPage',
    method: 'get',
    params:data
  })
}

// export function deleteProduct(data) {
//   return request({
//     url: '/product-backend/productDel',
//     method: 'post',
//     data
//   })
// }



