import React from 'react';
import { Modal } from 'antd';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { useState, useEffect } from 'react';

const DetailNotShipped = (props) => {
  const { setOrderDetailId } = props;
  const { orderId } = props;

  const [detail, setDetail] = useState([]);
  const [detailtotal, setDetailTotal] = useState([]);
  const [detailreceiver, setDetailReceiver] = useState([]);

  // 刪除按鈕
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  // 取消訂單 傳給後端 使valid=0
  const cancelOrder = async () => {
    setIsModalVisible(false);
    let [result] = await axios.get(API_URL + `/ponotshipped/${orderId}/2`);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    let getDetail = async () => {
      // axios.get(URL, config)
      let response = await axios.get(API_URL + `/poshipped/${orderId}`);
      setDetail(response.data.total);
      setDetailTotal(response.data.result);
      setDetailReceiver(response.data.receiver);
    };
    getDetail();
  }, []);

  return (
    <>
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
            {detailreceiver.map((v) => {
              return (
                <>
                  <tbody>
                    <tr>
                      <td>收件人</td>
                      <td>{v.member_name}</td>
                    </tr>
                    <tr>
                      <td>收件人地址</td>
                      <td>{v.address}</td>
                    </tr>
                    <tr>
                      <td>收件人電話</td>
                      <td>{v.phone}</td>
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
                </>
              );
            })}
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
          <button
            className=" orderlist-b2 px-3 py-2 mt-2 mb-2"
            onClick={showModal}
          >
            取消訂單
          </button>
          <Modal
            title=""
            visible={isModalVisible}
            onOk={cancelOrder}
            onCancel={handleCancel}
            okText="確認"
            OKType="$primary"
            cancelText="再想想"
            className="orderdetail_bt"
          >
            <h1>確定要取消訂單嗎？</h1>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default DetailNotShipped;
