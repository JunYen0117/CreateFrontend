import { AiOutlineShop } from 'react-icons/ai';
import { BsPlusLg, BsDashLg, BsFillTrashFill } from 'react-icons/bs';

import { useCart } from '../../utils/useCart';

function CartItem(props) {
  const { plusOne, minusOne, removeItem } = useCart();
  const { productId, productName, vendor, image, price, quantity } = props;

  return (
    <>
      <div className="my-3">
        <div className="cart_product_border">
          <AiOutlineShop className="h1 ms-3" />
          <label className="m-3">{vendor}</label>
        </div>
        <div className="p-3 d-flex align-items-center cart_product_border">
          <figure className="cart_picture w-25">
            <img
              src={`http://localhost:3003/images/product/${image}`}
              alt=""
              className="img-fluid"
            />
          </figure>
          <p className="h1 text-center mx-auto cart_product_name">
            {productName}
          </p>
          <div className="text-center mx-auto mb-2 cart_product_count">
            <span
              className="fw-bolder"
              onClick={() => {
                minusOne(productId);
              }}
            >
              <BsDashLg />
            </span>
            <span className="border mx-3 h2 fw-bolder">{quantity}</span>
            <span
              className="fw-bolder"
              onClick={() => {
                plusOne(productId);
              }}
            >
              <BsPlusLg />
            </span>
          </div>
          <p className="h2 fw-bolder text-center mx-auto w-25">NT {price}</p>
          <div className="d-flex align-items-center mx-auto cart_product_delete">
            <BsFillTrashFill
              className="h1"
              onClick={() => {
                removeItem(productId);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
