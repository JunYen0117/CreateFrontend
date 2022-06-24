import { useState } from 'react';
import CartList from '../components/Cart/CartList';
import Summary from '../components/Cart/Summary';
import { useCart } from '../utils/useCart';

function Cart() {
  const { items } = useCart();

  // const [checkList, setCheckList] = useState([]);

  return (
    <>
      <div className="container mt-5">
        <p className="h1">購物車</p>
        <input type="checkbox" className="mx-3 cart_checkbox" />
        <label className="m-0">選擇全部</label>
        {items.length !== 0 ? (
          <div className="row">
            {/* 購物車清單 */}
            <div className="col-md-8">
              <CartList />
            </div>
            <div className="col-md-4 mt-3 w-25">
              <Summary />
            </div>
          </div>
        ) : (
          <h2 style={{ height: '500px' }}>沒有商品加入購物車</h2>
        )}
      </div>
    </>
  );
}

export default Cart;
