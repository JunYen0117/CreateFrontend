import axios from 'axios';
import { API_URL } from './config';

// 商品 相關的 api
const productRequest = axios.create({
  baseURL: `${API_URL}/product`,
});

// 商品 相關的 api
export const productGetAll = config => productRequest.get('/', config);
export const productGetDetail = (productId) => productRequest.get(`/detail/${productId}`);
export const productGetCategory = (categoryId) => productRequest.get(`/category/${categoryId}`);
export const productChooseClass = () => productRequest.get('/classification');
export const productChooseCategory = (classificationId) => productRequest.get(`/classification/${classificationId}/category`);
export const productPriceSearch = config => productRequest.get('/search', config);
