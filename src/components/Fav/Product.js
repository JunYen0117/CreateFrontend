import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import FavProduct from './Favproduct';

const Product = () => {
  let user_id = 1;

  const [arr, setArr] = useState([]);

  useEffect(() => {
    let getUserLike = async () => {
      let response = await axios.get(`${API_URL}/fav/product/${user_id}`);
      setArr(response.data);
      // console.log('product', response.data);
    };
    getUserLike();
  }, []);

  // console.log('favproduct', arr);

  return (
    <>
      <div className="container-fluid mb-5 px-0">
        <div className=" row ">
          {arr.map((v, i) => {
            return (
              <div className="col-2 position-relative" key={v.id}>
                <FavProduct  data={v} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
