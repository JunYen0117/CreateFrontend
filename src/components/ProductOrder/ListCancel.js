import React from 'react';
import { API_URL } from '../../utils/config';
import axios from 'axios';
import { FaWaze } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import DetailCancel from './DetailCancel';
import { Collapse } from 'antd';

const ListCancel = (props) => {
  const { orderStatus } = props;

  const [orderCancel, setOrderCancel] = useState([]);
  const [orderDetailId, setOrderDetailId] = useState(0);
  const { Panel } = Collapse;

  useEffect(() => {
    let getOrderCancel = async () => {
      // axios.get(URL, config)
      let response = await axios.get(API_URL + `/productorder/cancel`);
      setOrderCancel(response.data);
      // console.log(response.data);
    };
    getOrderCancel();
  }, [orderStatus]);
  let arr = orderCancel.arrcancel || [];
  // console.log(arr)

  return (
    <>
      {arr.map((v, i) => {
        return (
          <Collapse accordion className="orderlist-card" key={i}>
            <Panel
              header={`訂單編號 ${v.orderid}`}
              key="1"
              className=" card-title"
            >
              {orderDetailId === v.orderid ? (
                ''
              ) : (
                <div className="card-content">
                  <table className="ol_tableList ">
                    <tbody>
                      <tr>
                        <td>訂單日期</td>
                        <td>{v.orderdate}</td>
                      </tr>
                      <tr>
                        <td>訂單金額</td>
                        <td>NT${v.totalsub}</td>
                      </tr>
                      <tr>
                        <td>處理狀態</td>
                        <td className="text-danger">已取消</td>
                      </tr>
                      <tr>
                        <td>付款方式</td>
                        <td>信用卡-付款</td>
                      </tr>
                    </tbody>
                  </table>
                  <button
                    className="card-button px-3 py-2"
                    onClick={() => {
                      setOrderDetailId(v.orderid);
                    }}
                  >
                    <FaWaze
                      className="me-2"
                      style={{ color: 'rgb(182, 115, 115)' }}
                    />
                    查看訂單明細
                  </button>
                </div>
              )}
              {orderDetailId === v.orderid ? (
                <DetailCancel
                  key={v.id}
                  setOrderDetailId={setOrderDetailId}
                  orderId={orderDetailId}
                />
              ) : (
                ''
              )}
            </Panel>
          </Collapse>
        );
      })}
    </>
  );
};

export default ListCancel;
