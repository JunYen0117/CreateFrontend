import ExhibitionSidebar from '../components/Exhibition/ExhibitionSidebar';
import ExhibitionText from '../components/Exhibition/ExhibitionText';
import ExhibitionCarousel from '../components/Exhibition/ExhibitionCarousel';
import ExhibitionOrder from '../components/Exhibition/ExhibitionOrder';
function Exhibition() {
  return (
    <>
      <div className="container">
        <ExhibitionCarousel />
        <div className="d-flex">
          <div className="col-12 col-md-10">
            <ExhibitionText />
          </div>
          <div className="col-2 d-none d-md-block ">
            <ExhibitionSidebar className="d-flex justify-content-center" />
          </div>
        </div>
        <div className="row exhibition-order-card ">
          <div className="col-12 col-md-8 ">
            <ExhibitionOrder />
          </div>
        </div>
      </div>
    </>
  );
}
export default Exhibition;
