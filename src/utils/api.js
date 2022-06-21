import axios from 'axios';
import { API_URL } from './config';

// 商品 相關的 api
const productRequest = axios.create({
  baseURL: `${API_URL}/product/`,
});

// 商品 相關的 api
export const productAll = config => productRequest.get('/', config);
export const productFilterCategory = (categoryId, config) => productRequest.get(`/category/${categoryId}`, config);
export const productSidebarClass = config => productRequest.get('/classification', config);
export const productSidebarCategory = (classificationId, config) => productRequest.get(`/classification/${classificationId}/category`, config);
