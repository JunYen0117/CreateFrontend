import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import HeartProduct from './HeartProduct';

const FavProduct = (props) => {
  const { data } = props;
  // console.log('favproduct', data);

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
        <img
          className="Fp_img"
          src={`http://localhost:3003/images/product/${data.image}`}
          alt=""
        />
      </div>
      <div className="Fp_body me-2 mb-5">
        <h3 style={{ height: '40px' }}>{data.product_name}</h3>
        <p>NT$ {data.price}</p>
        <button
          style={{ width: '9rem' }}
          variant="primary"
          className="text-white d-block Fp_button p-2 mt-2"
        >
          <HeartProduct data={data} />
          <FaShoppingCart className="me-2 h2 m-0 " />
          加入購物車
        </button>
      </div>
    </>
  );
};

export default FavProduct;
