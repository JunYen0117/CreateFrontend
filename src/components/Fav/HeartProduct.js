import React from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { useState } from 'react';
import { API_URL } from '../../utils/config';
import axios from 'axios';

const HeartProduct = ({ data }) => {
  const [showheart, setShowHeart] = useState(true);
  // console.log(data);
  data = data || {};

  let user_id = 1;

  const delfav = async () => {
    try {
      let response = await axios.get(
        `${API_URL}/fav/product/del/${user_id}/${data.product_id}`
      );
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {showheart ? (
        <BsHeartFill
          className="Fp_heart"
          onClick={async () => {
            setShowHeart(false);
            delfav();

            // window.alert(`${response.data.message}`);
          }}
        />
      ) : (
        <BsHeart
          className="Fp_heart"
          onClick={async () => {
            setShowHeart(true);
            // console.log(`${API_URL}/favproduct/add/1/1`);

            // console.log(user.id);
            let response = await axios.get(
              `${API_URL}/fav/product/add/${user_id}/${data.product_id}`
            );
            // window.alert(`${response.data.message}`);
          }}
        />
      )}
    </>
  );
};

export default HeartProduct;
