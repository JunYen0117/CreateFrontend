import React from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { useState } from 'react';
import { API_URL } from '../../utils/config';
import axios from 'axios';

const HeartArticle = ({ data }) => {
  const [showheart, setShowHeart] = useState(true);
  data = data || {};
  // console.log('fartHeart', data);

  let user_id = 1;

  const delfav = async () => {
    try {
      let response = await axios.get(
        `${API_URL}/fav/blog/del/${user_id}/${data.blog_id}`
      );
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {showheart ? (
        <BsHeartFill
          className="Far_heart"
          onClick={async () => {
            setShowHeart(false);
            delfav();

            // window.alert(`${response.data.message}`);
          }}
        />
      ) : (
        <BsHeart
          className="Far_heart"
          onClick={async () => {
            setShowHeart(true);
            // console.log(`${API_URL}/favblog/add/1/1`);

            // console.log(user.id);
            let response = await axios.get(
              `${API_URL}/fav/blog/add/${user_id}/${data.blog_id}`
            );
            // window.alert(`${response.data.message}`);
          }}
        />
      )}
    </>
  );
};

export default HeartArticle;
