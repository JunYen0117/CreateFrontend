function Product(props) {
  const { productName, productPrice, image } = props;

  return (
    <>
      <div className="col-2">
        <a href="/">
          <div className="ratio ratio-1x1">
            <img
              src={`http://localhost:3003/images/product/${image}`}
              className="card-img-top"
              alt=""
            />
          </div>
          <div className="card-body productinfo">
            <h5 className="card-title">{productName}</h5>
            <p className="money">NT. {productPrice}</p>
          </div>
        </a>
      </div>
    </>
  );
}
export default Product;
