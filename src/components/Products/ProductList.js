import { useEffect } from 'react';
import axios from 'axios';

import ProductItem from './ProductItem';

function ProductList(props) {
  const { products, setProducts } = props;
  const { classificationId, categoryId } = props;
  const { page, lastPage, setLastPage } = props;

  // 第一次進入頁面時，顯示全部商品
  useEffect(() => {
    let getProductAll = async () => {
      // http://localhost:3003/api/product?page=1
      let response = await axios.get(`http://localhost:3003/api/product`, {
        withCredentials: true,
        params: {
          page: page,
        },
      });
      setProducts(response.data.data);
      // 設定最後一頁
      setLastPage(response.data.pagination.lastPage);
    };
    getProductAll();
  }, []);

  // 全部商品換頁；關閉類別時，顯示全部商品
  useEffect(() => {
    if (classificationId === -1) {
      let getProductAll = async () => {
        // http://localhost:3003/api/product?page=1
        let response = await axios.get(`http://localhost:3003/api/product`, {
          withCredentials: true,
          params: {
            page: page,
          },
        });
        setProducts(response.data.data);
        // 設定最後一頁
        setLastPage(response.data.pagination.lastPage);
      };
      getProductAll();
    }
  }, [page, classificationId]);

  // 選擇商品類別，顯示那一類商品
  useEffect(() => {
    if (classificationId > 0) {
      let getProductClass = async () => {
        let response = await axios.get(
          `http://localhost:3003/api/product/classification/${classificationId}`,
          {
            withCredentials: true,
            params: {
              page: page,
            },
          }
        );
        setProducts(response.data.data);
        // 設定最後一頁
        setLastPage(response.data.pagination.lastPage);
      };
      getProductClass();
    }
  }, [classificationId, page]);

  // 選擇商品種類，顯示選擇種類的商品
  useEffect(() => {
    if (categoryId > 0) {
      let getProductCategory = async () => {
        let response = await axios.get(
          `http://localhost:3003/api/product/category/${categoryId}`,
          {
            withCredentials: true,
          }
        );
        setProducts(response.data);
      };
      getProductCategory();
    }
  }, [categoryId]);

  return (
    <>
      <div className="row w-100">
        {products.map((product, i) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}

export default ProductList;
