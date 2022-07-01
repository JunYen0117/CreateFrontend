import { useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import axios from 'axios';
import { API_URL } from '../../utils/config';

const HeartActivity = ({ data }) => {
  const [showheart, setShowHeart] = useState(true);
  // console.log(data);
  data = data || {};

  let user_id = 1;

  const delfav = async () => {
    try {
      let response = await axios.get(
        `${API_URL}/fav/activity/del/${user_id}/${data.exhibition_id}`
      );
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      {showheart ? (
        <BsHeartFill
          className="Fac_heart"
          onClick={async () => {
            setShowHeart(false);
            delfav();
          }}
        />
      ) : (
        <BsHeart
          className="Fac_heart"
          onClick={async () => {
            setShowHeart(true);

            let response = await axios.get(
              `${API_URL}/fav/activity/add/${user_id}/${data.exhibition_id}`
            );
          }}
        />
      )}
    </>
  );
};

export default HeartActivity;
