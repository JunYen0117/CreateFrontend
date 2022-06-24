import Course from '../../img/course.jpg';
import Exhibition from '../../img/exhibition.jpg';

function ExhibitionExploreButton() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-between gy-3 my-4">
          <div className="col-12 col-md-6 button2">
            <a href="#/">
              <div className="product_mask">
                <img src={Exhibition} alt="" />
                <p className="product_option_text">看展覽</p>
                <div className="product_option_mask"></div>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-6 button3">
            <a href="#/">
              <div className="product_mask">
                <img src={Course} alt="" />
                <p className="product_option_text">手作課程</p>
                <div className="product_option_mask"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default ExhibitionExploreButton;
