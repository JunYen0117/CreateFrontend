// import '../../styles/_frontpage.scss';

function ProductCard(props) {
  const { image, product_name, vendor_id, price, on_phone } = props;
  return (
    <>
      <div className={`card front_card ${on_phone ? 'col' : 'col-3'}`}>
        <a href="/" className="ratio ratio-1x1">
          <img
            src={'http://localhost:3003/images/product/' + image}
            className="card-img-top ratio ratio-1x1"
            alt="..."
          />
        </a>
        <div className="card-body">
          <h5 className="card-title">{product_name}</h5>
          <a href="/" className="card-text">
            {vendor_id}
          </a>
          <p className="money">NT. {price}</p>
        </div>
      </div>
    </>
  );
}
export default ProductCard;
