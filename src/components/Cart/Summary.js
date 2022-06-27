import { useState, useContext } from 'react';
import { CheckListContext } from '../../App.js';
import CheckoutForm from './CheckoutForm';

function Summary() {
  const { checkList, checkListTotal } = useContext(CheckListContext);

  return (
    <>
      <p className="h2 p-3 cart_order_summary cart_order_border text-center fw-bold">
        訂單摘要
      </p>
      <div className="h2 px-5 py-4 cart_order_border">
        <div className="d-flex justify-content-between mb-3">
          <p>商品總計</p>
          <p className="text-end">NT ${checkListTotal}</p>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <p>運費</p>
          <p>100</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>折扣金額</p>
          <p>-100</p>
        </div>
      </div>
      <div className="h2 px-5 py-4 cart_order_border">
        <div className="d-flex justify-content-between">
          <p>結帳總金額</p>
          <p className="text-end">NT ${checkListTotal}</p>
        </div>
      </div>
      <div className="h2 px-5 py-4 cart_order_border">
        <div className="container p-3">
          <div className="checkout_modal_body row g-3">
            <div className="col-12">
              <h1 className="checkout_modal_title text-center">收件資料</h1>
            </div>
            <div className="col-12">
              <label className="w-100 mb-2 h2">收件人姓名</label>
              <input
                type="text"
                placeholder="預設會員姓名"
                name="customer"
                className="w-100 form-control"
                required
              />
            </div>
            <div className="col-12">
              <label className="w-100 mb-2 h2">Email</label>
              <input
                type="email"
                placeholder="name@example.com"
                name="email"
                className="w-100 form-control"
                required
              />
            </div>
            <div className="col-12">
              <label className="w-100 mb-2 h2">行動電話</label>
              <input
                type="text"
                name="phone"
                className="w-100 form-control"
                required
              />
            </div>
            <div className="col-6">
              <label className="w-100 mb-2 h2">縣市</label>
              <select className="form-control" name="county" required>
                <option>桃園市</option>
              </select>
            </div>
            <div className="col-6">
              <label className="w-100 mb-2 h2" name="district">
                鄉鎮市區
              </label>
              <select className="form-control" required>
                <option>中壢區</option>
              </select>
            </div>
            <div className="col-12">
              <label className="w-100 mb-2 h2">地址</label>
              <input type="text" className="w-100 form-control" required />
            </div>
          </div>
        </div>
        <div className="text-center px-3 my-3">
          <CheckoutForm checkList={checkList} />
        </div>
      </div>
    </>
  );
}

export default Summary;
