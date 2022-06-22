import Banner from '../../img/banner.jpg';
// import Logo from '../../img/purple.jpg';

function Brandcard(props) {
  const { vendor } = props;
  return (
    <>
      <div className="col-4 brand">
        <div class="card brand-card">
          <img src={Banner} className="card-img-top brand-banner" alt="..." />
          <div class="card-body d-flex justify-content-between">
            <img
              src={`http://localhost:3003/images/product/${vendor.logo}`}
              className="brand-logo"
              alt=""
            />
            <div className="brand-imformation">
              <h2>{vendor.business_name}</h2>
              <p class="card-text">{vendor.introduce}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Brandcard;
