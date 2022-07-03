import { useEffect, useState } from 'react';
import { API_URL } from '../../utils/config';
import axios from 'axios';
import { FaWaze } from 'react-icons/fa';
import DetailNotShipped from './DetailNotShipped';
import { Collapse } from 'antd';

const ListNotShipped = () => {
  const [orderShipped, setOrderShipped] = useState([]);
  const [orderDetailId, setOrderDetailId] = useState(0);
  const { Panel } = Collapse;

  const [detail, setDetail] = useState([]);
  const [detailtotal, setDetailTotal] = useState([]);
  const [detailreceiver, setDetailReceiver] = useState([]);

  useEffect(() => {
    getOrderShipped();
  }, [orderDetailId]);

  const getOrderShipped = async () => {
    // axios.get(URL, config)
    let response = await axios.get(API_URL + `/productorder/notshipped`);
    setOrderShipped(response.data);
  };

  useEffect(() => {
    if (orderDetailId === 0) return;
    let getDetail = async () => {
      // axios.get(URL, config)
      let response = await axios.get(
        API_URL + `/productorder/shipped/${orderDetailId}`
      );
      setDetail(response.data.total);
      setDetailTotal(response.data.result);
      setDetailReceiver(response.data.receiver);
    };
    getDetail();
  }, [orderDetailId]);

  let arr = orderShipped.arrshipped || [];

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
                        <td>訂單處理中</td>
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
                <DetailNotShipped
                  setOrderDetailId={setOrderDetailId}
                  orderId={orderDetailId}
                  detail={detail}
                  detailtotal={detailtotal}
                  detailreceiver={detailreceiver}
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

export default ListNotShipped;
