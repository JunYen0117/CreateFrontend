import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CheckListContext } from '../../App.js';
import CheckoutForm from './CheckoutForm';

function Summary() {
  const { checkListTotal } = useContext(CheckListContext);

  return (
    <>
      <p className="h2 p-3 cart_order_summary cart_order_border text-center fw-bold">
        訂單摘要
      </p>
      <div className="h2 p-3 cart_order_border">
        <div className="d-flex justify-content-between">
          <p>商品總計</p>
          <p className="text-end">NT ${checkListTotal}</p>
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
      <div className="h2 p-3 cart_order_border">
        <div className="d-flex justify-content-between">
          <p>結帳總金額：</p>
          <p className="text-end">NT ${checkListTotal}</p>
        </div>
        <div className="text-center my-4">
          <CheckoutForm />
        </div>
      </div>
    </>
  );
}

export default Summary;
