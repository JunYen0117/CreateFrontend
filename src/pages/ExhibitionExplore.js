import ExhibitionExploreMap from '../components/ExhibitionExplore/ExhibitionExploreMap';
import ExhibitionExploreCards from '../components/ExhibitionExplore/ExhibitionExploreCards';
import ExhibitionExploreButton from '../components/ExhibitionExplore/ExhibitionExploreButton';
// import Ac from '../components/ExhibitionExplore/ac';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_URL } from '../utils/config';

function ExhibitionExplore(props) {
  const [exhibitions, setExhibitions] = useState([]);

  useEffect(() => {
    let getExhibitions = async () => {
      let response = await axios.get(API_URL + '/exhibitionexplore');
      setExhibitions(response.data);
    };
    getExhibitions();
  }, []);
  return (
    <>
      <ExhibitionExploreButton />
      <div className="row container-fluid m-0 p-0">
        <div className="col-12 col-md-4">
          {/* {exhibitions.map((exhibition, i) => {
            return (
              <ExhibitionExploreCards
                key={exhibition.id}
                exhibition={exhibition}
              />
            );
          })} */}
          <ExhibitionExploreCards exhibitions={exhibitions} />
        </div>
        <div className="d-none d-md-block col-md-8 p-0">
          <ExhibitionExploreMap exhibitions={exhibitions}/>
        </div>
      </div>
    </>
  );
}
export default ExhibitionExplore;
