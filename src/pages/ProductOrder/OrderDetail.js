import ASidebar from '../../components/AccountSidebar/ASidebar';
import OrderTitle from '../../components/ProductOrder/OrderTitle';

import React from 'react';

const OrderDetail = () => {
  return (
    <>
      {/* 訂單列表 */}
      {/* 已完成 */}

      <div className="container-fluid mb-5">
        <div className="row">
          <ASidebar />
          <div className="col-9 productOrder">
           <OrderTitle />

            {/* <div className="orderlist-card w-75">
              <div className="card-title d-flex py-3">
                <div className="title-num mx-2">20221212</div>
                <div className="title-name mx-2">Miu</div>
              </div>
              <div className="card-content">
                <table className="ol_table ">
                  <tr>
                    <th>訂單狀態</th>
                    <td>finish</td>
                  </tr>
                  <tr>
                    <th>訂單編號</th>
                    <td>14</td>
                  </tr>
                  <tr>
                    <th>單館統計</th>
                    <td>14</td>
                  </tr>
                  <tr>
                    <th>購買項目</th>
                    <td>14</td>
                  </tr>
                  <tr>
                    <th>產品圖片</th>
                    <td>
                      <img
                        src={require('../img/Singing.png')}
                        alt=""
                        width={200}
                      />
                    </td>
                  </tr>
                </table>
              </div>
              <button className="card-button px-3 py-2">查看訂單明細</button>
            </div> */}

            {/* ===================================== */}

            {/* 沒有訂單 */}
            {/* <div>
        <img src={require('../image/Singing.png')} className="img1" alt="" />
        <h3>您沒有尚未付款的訂單</h3>
      </div> */}

            {/* ===================================== */}

            {/* 訂單明細 */}
            <div className="orderlist-card w-75">
              <div className="card-title d-flex py-3">
                <div className="title-num mx-2">訂單內容</div>
              </div>
              <div className="card-content">
                <table className="ol_table ">
                  <tr>
                    <th>訂單編號</th>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th>訂單日期</th>
                    <td>20220111</td>
                  </tr>
                  <tr>
                    <th>廠商名稱</th>
                    <td>Rainbow</td>
                  </tr>
                  <tr>
                    <th>產品編號</th>
                    <td>d110</td>
                  </tr>
                  <tr>
                    <th>產品名稱</th>
                    <td>奇奇怪怪的東西</td>
                  </tr>
                  <tr>
                    <th>購買數量</th>
                    <td>2</td>
                  </tr>
                  <tr>
                    <th>購買金額</th>
                    <td>NT$ 2100</td>
                  </tr>
                </table>
                <hr />

                <div className="d-flex justify-content-end ">
                  <table className="ol_tabledown text-end w-25">
                    <tr>
                      <th>小計</th>
                      <td>NT $2100</td>
                    </tr>
                    <tr>
                      <th>運費</th>
                      <td>NT$ 120</td>
                    </tr>
                    <tr>
                      <th>運費折抵</th>
                      <td>NT$ 120</td>
                    </tr>
                    <tr className=" border-bottom">
                      <th>貨到付款加收</th>
                      <td>NT$ 40</td>
                    </tr>

                    <tr>
                      <th>購買金額</th>
                      <td className="ol_f">NT$ 2100</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>

            <div className="orderlist-card w-75">
              <div className="card-title d-flex py-3">
                <div className="title-num mx-2">優惠折抵明細</div>
              </div>
              <div className="card-content">
                <div className="row mt-3">
                  <p className="ol_p col-lg-6">單筆消費滿NT$ 2000享免運</p>
                  <p className="ol_p1 text-info col-lg-6 text-end">NT$ -120</p>
                </div>
              </div>
            </div>

            <div className="orderlist-card w-75">
              <div className="card-title d-flex py-3">
                <div className="title-num mx-2">收件人資訊</div>
              </div>
              <div className="card-content ">
                <table className="ol_table">
                  <tr>
                    <th>收件人</th>
                    <td>小雞蛋</td>
                  </tr>
                  <tr>
                    <th>收件人地址</th>
                    <td>789 天堂路</td>
                  </tr>
                  <tr>
                    <th>收件人電話</th>
                    <td>0931266789</td>
                  </tr>
                  <tr>
                    <th>運送方式</th>
                    <td>宅配</td>
                  </tr>
                </table>
              </div>
            </div>

            <div className="orderlist-card w-75 ">
              <div className="card-title d-flex py-3">
                <div className="title-num mx-2">付款資訊</div>
              </div>
              <div className="card-content ">
                <table className="ol_table">
                  <tr>
                    <th>付款方式</th>
                    <td>線上信用卡付款</td>
                  </tr>
                </table>
              </div>
              <div className="mt-5 position-relative">
                <button className=" orderlist-b1 me-3 px-3 py-2">返回</button>
                <button className=" orderlist-b2 px-3 py-2">取消訂單</button>
              </div>
            </div>

            {/* =========================================== */}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
