import { Link } from 'react-router-dom';
import { useCart } from '../../utils/useCart';

function Summary() {
  const { cart, items, plusOne, minusOne, removeItem } = useCart();

  return (
    <>
      <p className="h1 p-3 cart_order_summary cart_order_border">訂單摘要</p>
      <div className="h1 p-3 cart_order_border">
        <div className="d-flex justify-content-between">
          <p>商品總計</p>
          <p>NT ${cart.cartTotal}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>運費</p>
          <p>100</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>折扣金額</p>
          <p>-100</p>
        </div>
      </div>
      <div className="h1 p-3 cart_order_border">
        <div className="d-flex justify-content-between">
          <p>結帳總金額：</p>
          <p>NT ${cart.cartTotal}</p>
        </div>
        <div className="text-center cart_checkout my-3">
          <Link to="#/">結帳去</Link>
        </div>
      </div>
    </>
  );
}

export default Summary;
