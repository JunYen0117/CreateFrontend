import React from 'react';
import PropTypes from 'prop-types';

function Common(props) {
  const { pass } = props;
  return (
    <>
      <div className="coupon d-flex d-grid gap-3 flex-wrap justify-content-between mx-3">
        <div className="coupon_item1 g-col-md-6 py-1 gap-5 position-relative">
          {/* 這是即將過期的變數 */}
          {pass}
          <div className="d-flex p-4">
            <div className="coupon_item2 dc g-col-md-6 w-25 mx-0 my-auto">
              <h2 className="my-0 ps-2 py-auto">8折</h2>
            </div>
            <div className="coupon_item3 dc g-col-md-6 w-75 px-3 pt-1">
              <h3 className="coupon_item3_p text-start my-0">新戶首購8折券</h3>
              <h4 className="text-start my-0">商品單筆結帳金額滿2500元</h4>
              <h4 className="text-start my-0 pt-3">使用期限：</h4>
              <h4 className="text-start my-0">2022/07/01 00:00:01至</h4>
              <h4 className="text-start my-0 mb-1">2022/07/31 11:59:59</h4>
            </div>
          </div>
          <div className="d-flex mb-4">
            <button className="coupon_item4 mx-auto px-2">
              <a href="#/" className="text-decoration-none">
                可領取
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

Common.propTypes = {};

export default Common;
