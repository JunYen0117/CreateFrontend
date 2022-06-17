import React from 'react';

// 等要帶資料的時候再把props加進Card =()裡面
const Card = (props) => {
  const { pass, use } = props;

  return (
    <div className="coupon_item1 col-md-6 py-1 gap-4 position-relative">
      {/* 這是 即將過期 的變數 */}
      {pass}
      <div className="coupon_item2 p-4 row">
        <div className="dc col-md-6 w-25 mx-0 my-auto">
          <h2 className="coupon_p my-0 ps-3 py-auto">8折</h2>
        </div>
        <div className="coupon_item2_Div dc col-md-6 w-75 px-3 pt-1">
          <h3 className="coupon_p text-start my-0">新戶首購8折券</h3>
          <h4 className="coupon_p text-start my-0">商品單筆結帳金額滿2500元</h4>
          <h4 className="coupon_p text-start my-0 pt-3">使用期限：</h4>
          <h4 className="coupon_p text-start my-0">2022/07/01 00:00:01至</h4>
          <h4 className="coupon_p text-start my-0 mb-1">2022/07/31 11:59:59</h4>
        </div>
      </div>
      <div className="d-flex mb-4">
        <button className="couponCard_btn mx-auto px-2">
          <a href="/" className="text-decoration-none">
            {/* 這是 立即使用 的變數 */}
            {use}
          </a>
        </button>
      </div>
    </div>
  );
};

export default Card;
