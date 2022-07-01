import ExhibitionExploreMap from '../components/ExhibitionExplore/ExhibitionExploreMap';
import ExhibitionExploreCards from '../components/ExhibitionExplore/ExhibitionExploreCards';
import ExhibitionExploreButton from '../components/ExhibitionExplore/ExhibitionExploreButton';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_URL } from '../utils/config';

function ExhibitionExplore(props) {
  const [exhibitions, setExhibitions] = useState([]);
  const [city, setCity] = useState('');
  const [level, setLevel] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    let getExhibitions = async () => {
      let response = await axios.get(API_URL + '/exhibition');
      setExhibitions(response.data);
    };
    getExhibitions();
  }, []);
  function handleExExhibitions() {
    exhibitions.map((item, index) => {
      return (item.position = { lat: item.latitude, lng: item.longitude });
    });
  }
  handleExExhibitions();

  return (
    <>
      <ExhibitionExploreButton />
      <div className="row container-fluid m-0 p-0">
        <div className="col-12 col-md-4">
          <ExhibitionExploreCards
            exhibitions={exhibitions}
            city={city}
            setCity={setCity}
            level={level}
            setLevel={setLevel}
            date={date}
            setDate={setDate}
          />
        </div>
        <div className="d-none d-md-block col-md-8 p-0">
          <ExhibitionExploreMap exhibitions={exhibitions} />
        </div>
      </div>
    </>
  );
}
export default ExhibitionExplore;
