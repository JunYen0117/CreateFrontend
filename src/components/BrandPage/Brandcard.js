import { Link } from 'react-router-dom';
import Banner from '../../img/banner.jpg';
import Logo from '../../img/purple.jpg';

function Brandcard(props) {
  const { business_name, business_id } = props;

  return (
    <>
      <div className="col-12 col-md-4 brand">
        <Link
          to={'/BrandStores?BrandId=' + business_id}
          className="text-decoration-none"
        >
          <div className="card brand-card">
            <img src={Banner} className="card-img-top brand-banner" alt="..." />
            <div className="card-body d-flex">
              <img src={Logo} className="brand-logo" alt="" />
              <div className="brand-imformation">
                <h2>{business_name}</h2>
                <p className="card-text">
                  介紹introduce介紹introduce介紹introduce
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
export default Brandcard;
