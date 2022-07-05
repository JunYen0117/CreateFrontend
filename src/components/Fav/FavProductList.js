import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import FavProduct from './FavProduct';

const FavProductList = () => {
  let user_id = 1;

  const [favProducts, setFavProducts] = useState([]);

  useEffect(() => {
    let getUserLike = async () => {
      let response = await axios.get(`${API_URL}/fav/product/${user_id}`);
      setFavProducts(response.data);
      // console.log('product', response.data);
    };
    getUserLike();
  }, []);

  // console.log('favProducts', favProducts);

  return (
    <>
      <div className="container-fluid mb-5 px-0">
        <div className=" row ">
          {favProducts.map((v, i) => {
            return (
              <div className="col-2 position-relative" key={v.id}>
                <FavProduct product={v} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FavProductList;
