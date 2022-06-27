import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { API_URL } from '../../utils/config';
// import Link from 'react';

// 等要帶資料的時候再把props加進Card =()裡面
const Card = (props) => {
  const { pass, use, coupon } = props;

  // 判斷優惠券折扣，在電腦版優惠券顯示
  const [discount, setDiscount] = useState(null);
  useEffect(() => {
    if (coupon.discount === 60) {
      setDiscount('免運');
    } else if (coupon.discount < 100) {
      let newDiscount = coupon.discount / 10;
      setDiscount(`${newDiscount}折`);
    } else if (coupon.discount === 100) {
      setDiscount('$100');
    } else if (coupon.discount === 200) {
      setDiscount('$200');
    }
  }, [coupon.discount]);

  return (
    <>
      {/* 以下為桌機版 */}

      <div className="couponCard_desktop col-md-6 py-1 position-relative mb-5">
        {/* 這是 即將過期 的變數 */}
        {(Number(new Date(coupon.coupon_end_period)) - Number(new Date())) /
          (24 * 60 * 60 * 1000) <
        7
          ? pass
          : ''}

        <div className="couponCard_left p-4 row ">
          <div className="dc col-md-6 w-25 mx-0 my-auto">
            <h2 className="coupon_p my-0 ps-2 py-auto">{discount}</h2>
          </div>
          <div className="couponCard_right dc col-md-6 w-75 px-3 pt-1">
            <h3 className="coupon_p text-start my-0">{coupon.coupon_name}</h3>
            <h5 className="coupon_p text-start my-0">
              商品單筆結帳金額滿{coupon.coupon_min_cost}元
            </h5>
            <h5 className="coupon_p text-start my-0 pt-3">使用期限：</h5>
            <h5 className="coupon_p text-start my-0">
              {coupon.coupon_start_period}至
            </h5>
            <h5 className="coupon_p text-start my-0 mb-1">
              {coupon.coupon_end_period}
            </h5>
          </div>
          <div className="couponCard_btn_desktop d-flex mb-4 position-absolute">
            <button className="couponCard_btn ms-2">
              <a href="/" className="text-decoration-none">
                {/* 這是 立即使用 的變數 */}
                {use}
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* 以下為手機版 */}

      <div className="couponCard_phone p-0 position-relative d-md-none my-auto">
        <div className="couponCard_phone row mt-3 mx-auto">
          <div className="couponCard_phone_left col-md-6 mx-0 d-flex">
            <h2 className="coupon_p_phone align-content-center text-center">
              {coupon.coupon_name}
            </h2>
          </div>
          <div className="couponCard_phone_right col-md-6 ps-3 p-0 position-relative">
            <h4 className="coupon_p text-start mt-2">
              商品單筆結帳金額滿{coupon.coupon_min_cost}元
            </h4>
            <h5 className="coupon_p text-start my-0 pt-2">使用期限：</h5>
            <h5 className="coupon_p text-start my-0 pt-1">
              {coupon.coupon_start_period}至
              {/* 資料庫欄位名稱：coupon_start_period	 */}
            </h5>
            <h5 className="coupon_p text-start my-0 mb-1">
              {coupon.coupon_end_period}
              {/* 資料庫欄位名稱：coupon_end_period		 */}
            </h5>
            <button className="couponCard_btn_phone mx-auto px-2 position-absolute">
              <a href="#/" className="text-decoration-none">
                {/* 這是 立即使用 的變數 */}
                {use}
              </a>
            </button>
            {/* 2022-07-31 11:59:59 */}
            <div className="coupon_pass_phone d-md-none text-center py-2 position-absolute">
              {/* (資料庫的日期時間 - 現在的日期時間) / (24*60*60*1000) 如果 < 7天 就顯示即將過期*/}
              {(Number(new Date(coupon.coupon_end_period)) -
                Number(new Date())) /
                (24 * 60 * 60 * 1000) <
              7
                ? pass
                : ''}
              {/* {Number(new Date('2022-07-31 11:59:59')) > Number(new Date()) ? '' : '已過期'} */}
              {/* {(Number(new Date('2022-06-21 11:59:59')) - Number (new Date())) / (24*60*60*1000) < 7 ? '即將過期' : ''} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
