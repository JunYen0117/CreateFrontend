// 優惠券
// react 元件是一個函式
// 自訂元件的開頭英文要大寫
// 一個檔案寫一個元件

import Sidebar from '../components/Sidebar';

import React from 'react';
import CouponList from '../components/coupon/CouponList';

const Coupon = () => {
  return (
    <>
      <CouponList/>
    </>
  );
};

export default Coupon;
