import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import StoreBanner from '../components/BrandStores/StoreBanner';
import StoreInformation from '../components/BrandStores/StoreInformation';
import TopBar from '../components/BrandStores/TopBar';

function BrandStores() {
  const [brandProducts, setBrandProducts] = useState([]);
  const [brandQuantity, setBrandQuantity] = useState([]);

  // /BrandStores?BrandId=1
  const location = useLocation();

  useEffect(() => {
    let axiosBrandById = async () => {
      // 根據 URL 建立 Params 物件
      const searchParams = new URLSearchParams(location.search);
      // 取得 Param: productId
      const brandId = searchParams.get('BrandId');
      // 向後端要資料
      const response = await axios.get(
        `http://localhost:3003/api/brandpage/brand/${brandId}`
      );
      setBrandProducts(response.data.brand);
      setBrandQuantity(response.data.quantity);
    };
    axiosBrandById();
  }, []);

  console.log(brandProducts);

  // useEffect(() => {
  //   let getBrandProducts = async () => {
  //     // http://localhost:3003/api/brandpage
  //     let response = await axios.get('http://localhost:3003/api/brandpage');
  //     setBrandProducts(response.data);
  //   };
  //   getBrandProducts();
  // }, []);

  return (
    <>
      <StoreBanner />
      <StoreInformation brandProducts={brandProducts} />
      <TopBar />
    </>
  );
}

export default BrandStores;
