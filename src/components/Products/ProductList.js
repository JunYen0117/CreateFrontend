import { useEffect } from 'react';
import axios from 'axios';

import ProductItem from './ProductItem';

function ProductList(props) {
  const { products, setProducts } = props;

  useEffect(() => {
    let getProduct = async () => {
      let response = await axios.get('http://localhost:3003/api/product', {
        withCredentials: true,
      });
      setProducts(response.data);
    };
    getProduct();
  }, []);

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
