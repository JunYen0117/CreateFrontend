function ProductItem(props) {
  const { product } = props;

  return (
    <>
      <div className="col-3">
        <div className="product_item">
          <figure>
            <a href="#/" alt="">
              <img
                src={`http://localhost:3003/images/product/${product.image}`}
                alt=""
              ></img>
            </a>
          </figure>
          <h2>{product.product_name}</h2>
          <h3>品牌：{product.business_name}</h3>
          <h3>NT$ {product.price}</h3>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
