import ExhibitionExploreMap from '../components/ExhibitionExplore/ExhibitionExploreMap';
import ExhibitionExploreCards from '../components/ExhibitionExplore/ExhibitionExploreCards';

function ExhibitionExplore() {
  return (
    <>
      <div className="row container-fluid m-0 p-0">
        <div className="col-12 col-md-4">
          <ExhibitionExploreCards />
        </div>
        <div className="d-none d-md-block col-md-8 p-0">
          <ExhibitionExploreMap />
        </div>
      </div>
    </>
  );
}
export default ExhibitionExplore;
