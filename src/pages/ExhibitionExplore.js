import ExhibitionExploreMap from '../components/ExhibitionExplore/ExhibitionExploreMap';
import ExhibitionExploreCards from '../components/ExhibitionExplore/ExhibitionExploreCards';

function ExhibitionExplore() {
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-4">
          <ExhibitionExploreCards />
        </div>
        <div className="col-8">
          <ExhibitionExploreMap />
        </div>
      </div>
      
    </>
  );
}
export default ExhibitionExplore;
