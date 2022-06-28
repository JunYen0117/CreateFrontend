import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';

const DetailShipped = (props) => {
  const { setOrderDetailId } = props;
  const { orderId } = props;
  // console.log('orderId', orderId);

  const [detail, setDetail] = useState([]);
  const [detailtotal, setDetailTotal] = useState([]);

  // 取得訂單明細所需資料
  useEffect(() => {
    let getDetail = async () => {
      // axios.get(URL, config)
      let response = await axios.get(API_URL + `/poshipped/${orderId}`);
      setDetail(response.data.total);
      setDetailTotal(response.data.result);
    };
    getDetail();
  }, []);

  return (
    <>
      {/* 沒有訂單 */}
      {/* <div>
        <img src={require('../image/Singing.png')} className="img1" alt="" />
        <h3>您沒有尚未付款的訂單</h3>
      </div> */}

      {/* ===================================== */}

      {/* 訂單明細 */}
      <div className="orderlist-card w-100 ">
        <div className="w-100 mt-3">
          <table className="detail-table w-100 ms-2">
            <thead className="text-center w-100">
              <tr>
                <th>品牌</th>
                <th>商品編號</th>
                <th>商品資訊</th>
                <th>定價</th>
                <th>數量</th>
                <th>小計</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {detail.map((v) => {
                return (
                  <tr key={`detail-${v.id}`}>
                    <td className="pt-3">{v.business_name}</td>
                    <td className="pt-3">{v.product_num}</td>
                    <td className="pt-3">{v.product_name}</td>
                    <td className="pt-3">{v.price}</td>
                    <td className="pt-3">{v.amount}</td>
                    <td className="pt-3">{v.subtotal}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <hr />

          <div className="d-flex justify-content-end ">
            <table className="ol_tabledown text-end w-25">
              <tbody>
                <tr>
                  <td></td>
                  <td>NT${detailtotal}</td>
                </tr>
                <tr className=" border-bottom">
                  <td>運費</td>
                  <td>NT$ 120</td>
                </tr>
                <tr className="text-danger">
                  <td>優惠券折抵</td>
                  <td>- NT $100</td>
                </tr>
                <tr>
                  <td>總金額</td>
                  <td className="ol_f">NT$ 2100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="orderlist-card w-100 ">
        <div className="card-title d-flex py-3">
          <div className="title-num mx-2">付款人資訊</div>
        </div>
        <div className="card-content ">
          <table className="ol_table">
            <tbody>
              <tr>
                <td>收件人</td>
                <td>小雞蛋</td>
              </tr>
              <tr>
                <td>收件人地址</td>
                <td>789 天堂路</td>
              </tr>
              <tr>
                <td>收件人電話</td>
                <td>0931266789</td>
              </tr>
              <tr>
                <td>運送方式</td>
                <td>宅配</td>
              </tr>
              <tr>
                <td>備註</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="orderlist-card w-100 ">
        <div className="card-title d-flex py-3">
          <div className="title-num mx-2">付款資訊</div>
        </div>
        <div className="card-content ">
          <table className="ol_table">
            <tbody>
              <tr>
                <td>付款方式</td>
                <td>線上信用卡付款</td>
              </tr>
              <tr>
                <td>付款狀態</td>
                <td>已付款</td>
              </tr>
              <tr>
                <td>刷卡狀態</td>
                <td>交易成功</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-5 position-relative">
          <button
            className=" orderlist-b1 me-3 px-3 py-2 mt-2 mb-2 "
            onClick={() => {
              setOrderDetailId(0);
            }}
          >
            回訂單查詢
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailShipped;
