import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CheckListContext } from '../../App.js';

function Summary() {
  const { checkListTotal } = useContext(CheckListContext);

  return (
    <>
      <p className="h1 p-3 cart_order_summary cart_order_border">訂單摘要</p>
      <div className="h1 p-3 cart_order_border">
        <div className="d-flex justify-content-between">
          <p>商品總計</p>
          <p>NT ${checkListTotal}</p>
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
          <p>NT ${checkListTotal}</p>
        </div>
        <div className="text-center cart_checkout my-3">
          <Link to="#/">結帳去</Link>
        </div>
      </div>
    </>
  );
}

export default Summary;
