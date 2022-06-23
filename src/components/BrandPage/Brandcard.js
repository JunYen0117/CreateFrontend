import Banner from '../../img/banner.jpg';
import Logo from '../../img/purple.jpg';

function Brandcard(props) {
  // const { vendor } = props;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4 brand">
            <div class="card brand-card">
              <img
                src={Banner}
                className="card-img-top brand-banner"
                alt="..."
              />
              <div class="card-body d-flex justify-content-">
                <img src={Logo} className="brand-logo" alt="" />
                <div className="brand-imformation">
                  <h2>店家名稱</h2>
                  <p class="card-text">fffffffffffffffffffff</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 brand">
            <div class="card brand-card">
              <img
                src={Banner}
                className="card-img-top brand-banner"
                alt="..."
              />
              <div class="card-body d-flex justify-content-start">
                <img src={Logo} className="brand-logo" alt="" />
                <div className="brand-imformation">
                  <h2>店家名稱</h2>
                  <p class="card-text">fffffffffffffffffffff</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 brand">
            <div class="card brand-card">
              <img
                src={Banner}
                className="card-img-top brand-banner"
                alt="..."
              />
              <div class="card-body d-flex justify-content-start">
                <img src={Logo} className="brand-logo" alt="" />
                <div className="brand-imformation">
                  <h2>店家名稱</h2>
                  <p class="card-text">fffffffffffffffffffff</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Brandcard;
