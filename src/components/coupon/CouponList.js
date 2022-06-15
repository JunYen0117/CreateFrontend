// 優惠券清單

import { React, useState } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Available from './Available';
import ReceiveList from './ReceiveList.js';
import Invalid from './Invalid';

const CouponList = () => {
  const [canUse, setCanUse] = useState('available');
  return (
    <>
      <div className="d-grid px-2 py-3 container">
        <h1 className="coupon_p pt-4 my-0">優惠券</h1>
        <nav>
          <ul className="coupon_nav nav pt-4">
            <li className="coupon_nav1 nav-item">
              <button
                onClick={() => {
                  setCanUse('available');
                }}
                className={`nav-link coupon_btn ${
                  canUse === 'available' ? 'active' : ''
                }`}
              >
                可領取
              </button>
            </li>
            <li className="nav-item coupon_nav2">
              <button
                onClick={() => {
                  setCanUse('receivelist');
                }}
                className={`nav-link coupon_btn ${
                  canUse === 'receivelist' ? 'active' : ''
                }`}
              >
                可使用
              </button>
            </li>
            <li className="nav-item coupon_nav3">
              <button
                onClick={() => {
                  setCanUse('invalid');
                }}
                className={`nav-link coupon_btn ${
                  canUse === 'invalid' ? 'active' : ''
                }`}
              >
                已失效
              </button>
            </li>
          </ul>
        </nav>
        <h4 className="coupon_p px-3 py-0 mt-2 my-0">
          每筆訂單僅可使用一張優惠券
        </h4>
        {canUse === 'available' && <Available />}
        {canUse === 'receivelist' && <ReceiveList />}
      </div>
    </>
  );
};

export default CouponList;
