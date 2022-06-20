import { Link } from 'react-router-dom';

function ProductItem(props) {
  const { product } = props;

  return (
    <>
      <div className="col-3">
        <div className="product_item">
          <figure>
            <Link to={'/productdetail/?productId=' + product.id} alt="">
              <img
                src={`http://localhost:3003/images/product/${product.image}`}
                alt=""
              ></img>
            </Link>
          </figure>
          <p className="h2">{product.product_name}</p>
          <p className="h3">品牌：{product.business_name}</p>
          <p className="h3">NT$ {product.price}</p>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
