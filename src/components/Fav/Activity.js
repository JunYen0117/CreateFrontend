import { useState, useEffect } from 'react';
import { API_URL } from '../../utils/config';
import axios from 'axios';
import FavActivity from './FavActivity';

const Activity = () => {
  let user_id = 1;

  const [arr, setArr] = useState([]);

  useEffect(() => {
    let getUserLike = async () => {
      let response = await axios.get(`${API_URL}/fav/activity/${user_id}`);
      setArr(response.data);
      // console.log('activity', response.data);
    };
    getUserLike();
  }, []);

  // console.log('favactivity', arr);

  return (
    <>
      <div className="container-fluid mb-5 px-0">
        <div className="row">
          {arr.map((v, i) => {
            return (
              <div
                className=" Fac_card d-flex px-0 position-relative mb-3 border"
                key={v.id}
              >
                <FavActivity data={v} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Activity;
