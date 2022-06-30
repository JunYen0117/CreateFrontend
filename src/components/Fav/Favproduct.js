import React from 'react';
import Bird from '../../img/Bird.jpg';
import { FaShoppingCart } from 'react-icons/fa';
import Heart from './Heart';

const FavProduct = (props) => {
  const { data } = props;
  // console.log(data);

  // useEffect(() => {
  //   // console.log(JSON.parse(localStorage.getItem('fav')))
  //   // arr = JSON.parse(localStorage.getItem('fav'));
  //   setArr(JSON.parse(localStorage.getItem('fav')));
  //   // setArr(JSON.parse(localStorage.getItem('fav')));
  //   let getUserLike = async () => {
  //     let response = await axios.get(`${API_URL}/favproduct/${user_id}`);
  //     setArr(response.data);
  //     // console.log(response.data)
  //   };
  //   getUserLike();
  // }, []);
  
  return (
    <>
      <div className=" Fp_top me-2 mb-3">
        <img className="Fp_img" src={Bird} alt="" />
      </div>
      <div className="Fp_body me-2 mb-5">
        <h3>{data.product_name}</h3>
        <p>NT$ {data.price}</p>
        <button
          style={{ width: '9rem' }}
          variant="primary"
          className="text-white d-block Fp_button p-2"
        >
          <Heart data={data} />
          <FaShoppingCart className="me-2 h2 m-0 " />
          加入購物車
        </button>
      </div>
    </>
  );
};

export default FavProduct;
