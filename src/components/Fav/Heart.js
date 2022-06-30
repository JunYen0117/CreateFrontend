import React from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { useState } from 'react';
import { API_URL } from '../../utils/config';
import axios from 'axios';

const Heart = ({ data }) => {
  const [showheart, setShowHeart] = useState(true);
  // console.log(data);
  data = data || {};

  let user_id = 1;

  return (
    <>
      {showheart ? (
        <BsHeartFill
          className="Fp_heart"
          onClick={async () => {
            setShowHeart(false);
            console.log(`${API_URL}/favproduct/del/1/1`);
            // console.log(data.id)
            let response = await axios.get(
             `${API_URL}/favproduct/del/${user_id}/${data.product_id}`
            );
            // window.alert(`${response.data.message}`);
          }}
        />
      ) : (
        <BsHeart
          className="Fp_heart"
          onClick={async () => {
            setShowHeart(true);
            console.log(`${API_URL}/favproduct/add/1/1`);

            // console.log(user.id);
            let response = await axios.get(
              `${API_URL}/favproduct/add/${user_id}/${data.product_id}`
            );
            // window.alert(`${response.data.message}`);
          }}
        />
      )}
    </>
  );
};

export default Heart;
