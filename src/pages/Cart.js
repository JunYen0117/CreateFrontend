import CartList from '../components/Cart/CartList';
import Summary from '../components/Cart/Summary';
import { useCart } from '../utils/useCart';
import { useState, useEffect, useContext } from 'react';
import { CheckListContext } from '../App.js';
import { BsCart4 } from 'react-icons/bs';

import axios from 'axios';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

function Cart() {
  const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    const showStripe = async () => {
      const response = await axios.post(
        'http://localhost:3003/api/cart/create-payment-intent'
      );
      setClientSecret(response.data.clientSecret);
    };
    showStripe();
  }, []);

  const appearance = {
    theme: 'stripe',
  };

  const options = {
    // pendding
    clientSecret:
      'pi_3LGE8w2eZvKYlo2C0chbzF5H_secret_MYpguHwGOOKohVI9oC1GrepYL',
    appearance,
  };

  console.log('options', options);

  const { items, updateItem } = useCart();

  // 加選購物車商品的清單: 取出 Context
  const { checkList, setCheckList } = useContext(CheckListContext);

  // 全選；反選
  const handleAllCheck = () => {
    let newList = [];
    if (items.length !== checkList.length) {
      // 全選
      newList = items.map((item) => {
        let newItem = { ...item };
        // update checkList checked
        newItem['checked'] = true;
        // update items checked
        updateItem({ id: item.id, checked: true });
        return newItem;
      });
    } else {
      // 反選
      items.forEach((v) => {
        updateItem({ id: v.id, checked: false });
      });
    }
    setCheckList(newList);
  };

  return (
    <>
      <div className="container mt-5 px-4">
        <div className="d-flex">
          <p className="h1">
            <BsCart4 style={{ color: '#b99664', fontSize: '30px' }} />
          </p>
          <div className="mt-2 mx-1 fw-bold h2">購物車</div>
        </div>
        {items.length !== 0 ? (
          <>
            <input
              type="checkbox"
              className="mx-3 cart_checkbox"
              name="selectAll"
              onChange={handleAllCheck}
              checked={items.length === checkList.length}
            />
            <label className="m-0">選擇全部</label>
            <div className="row gx-5 mb-5">
              {/* 購物車清單 */}
              <div className="col-12 col-lg-8 col-xl-8">
                <CartList />
              </div>
              <div className="col-12 col-lg-4 col-xl-4 mt-3">
                <div className="cart_sticky">
                  <Elements stripe={stripePromise} options={options}>
                    <Summary />
                  </Elements>
                </div>
              </div>
            </div>
          </>
        ) : (
          <h2 style={{ height: '500px', marginLeft: '22px' }}>
            沒有商品加入購物車
          </h2>
        )}
      </div>
    </>
  );
}

export default Cart;
