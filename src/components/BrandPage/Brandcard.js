import Banner from '../../img/banner.jpg';
import Logo from '../../img/purple.jpg';

function Brandcard(props) {
  // const { vendor } = props;
  return (
    <>
      <div className="container all-brand-card">
        <div className="row">
          <div className="col-12 col-md-4 brand">
            <a href="/" className="text-decoration-none">
              <div className="card brand-card">
                <img
                  src={Banner}
                  className="card-img-top brand-banner"
                  alt="..."
                />
                <div class="card-body d-flex">
                  <img src={Logo} className="brand-logo" alt="" />
                  <div className="brand-imformation">
                    <h2>廠商名稱business_name</h2>
                    <p class="card-text">
                      介紹introduce介紹introduce介紹introduce
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="col-12 col-md-4 brand">
            <a href="/" className="text-decoration-none">
              <div className="card brand-card">
                <img
                  src={Banner}
                  className="card-img-top brand-banner"
                  alt="..."
                />
                <div class="card-body d-flex">
                  <img src={Logo} className="brand-logo" alt="" />
                  <div className="brand-imformation">
                    <h2>廠商名稱business_name</h2>
                    <p class="card-text">
                      介紹introduce介紹introduce介紹introduce
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="col-12 col-md-4 brand">
            <a href="/" className="text-decoration-none">
              <div className="card brand-card">
                <img
                  src={Banner}
                  className="card-img-top brand-banner"
                  alt="..."
                />
                <div class="card-body d-flex">
                  <img src={Logo} className="brand-logo" alt="" />
                  <div className="brand-imformation">
                    <h2>廠商名稱business_name</h2>
                    <p class="card-text">
                      介紹introduce介紹introduce介紹introduce
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Brandcard;
