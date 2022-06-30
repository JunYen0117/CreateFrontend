import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import FavProduct from './Favproduct';

const Product = () => {
  let user_id = 1;

  const [arr, setArr] = useState([]);

  useEffect(() => {
    // console.log(JSON.parse(localStorage.getItem('fav')))
    // arr = JSON.parse(localStorage.getItem('fav'));
    // setArr(JSON.parse(localStorage.getItem('fav')));
    let getUserLike = async () => {
      let response = await axios.get(`${API_URL}/favproduct/${user_id}`);
      setArr(response.data);
      // console.log(response.data)
    };
    getUserLike();
  }, []);

  console.log('fav', arr);

  return (
    <>
      <div className="container-fluid mb-5 px-0">
        <div className=" row d-flex">
          {arr.map((v, i) => {
            return (
              <div className="col-2 position-relative">
                <FavProduct key={v.id} data={v} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
