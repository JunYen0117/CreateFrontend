import axios from 'axios';

// 商品 相關的 api
const productRequest = axios.create({
  baseURL: 'http://localhost:3003/api/product/',
});

// 商品 相關的 api
export const productGetAll = config => productRequest.get('/', config);
export const productGetCategory = (categoryId, config) => productRequest.get(`/category/${categoryId}`, config);
export const productChooseClass = config => productRequest.get('/classification', config);
export const productChooseCategory = (classificationId, config) => productRequest.get(`/classification/${classificationId}/category`, config);
