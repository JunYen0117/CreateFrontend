import ActivityCard from '../components/Activity/ActivityCard';
import ActivityTitle from '../components/Activity/ActivityTitle';
import Sidebar from '../components/Sidebar';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_URL } from '../utils/config';

function Avtivity(props) {
  const [avtivity, setAvtivity] = useState([]);
  const [state, setState] = useState(1);
  useEffect(() => {
    let getAvtivitys = async () => {
      let response = await axios.get(API_URL + '/activity', {
        params: {
          state: state,
        },
      });
      setAvtivity(response.data);
    };
    getAvtivitys();
  }, [state, setState]);
  return (
    <>
      <div className="container pt-5">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>

          <div className="col-8">
            <ActivityTitle setState={setState} />
            <ActivityCard avtivity={avtivity} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Avtivity;
