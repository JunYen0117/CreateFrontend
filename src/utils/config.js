// export/import => ESM 的模組管理方式
// 設定預設值
const BASE_URL = process.env.BACKEND_API_URL || 'http://localhost:3003';
export const API_URL = BASE_URL + '/api';