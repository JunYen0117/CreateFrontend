import { API_URL } from '../../utils/config';
import axios from 'axios';
import { FaWaze } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import DetailCancel from './DetailCancel';
import { Collapse } from 'antd';

const ListCancel = (props) => {
  const { orderStatus } = props;
  const [orderCancel, setOrderCancel] = useState([]);
  const [orderId, setOrderId] = useState(0);
  const { Panel } = Collapse;
  const [detail, setDetail] = useState([]);
  const [detailtotal, setDetailTotal] = useState([]);
  const [detailpayment, setDetailPayment] = useState([]);
  const [detailreceiver, setDetailReceiver] = useState([]);

  // console.log('sda', detail);

  let customer_id = 1;

  useEffect(() => {
    let getOrderCancel = async () => {
      // axios.get(URL, config)
      let response = await axios.get(
        API_URL + `/productorder/cancel/${customer_id}`
      );
      setOrderCancel(response.data);
      // console.log(response.data);
    };
    getOrderCancel();
  }, [orderStatus]);
  let arr = orderCancel.arrcancel || [];
  // console.log('sd',arr)

  useEffect(() => {
    if (orderId === 0) return;
    let getDetail = async () => {
      // axios.get(URL, config)
      let response = await axios.get(
        API_URL + `/productorder/cancel/${orderId}`
      );
      setDetail(response.data.total);
      setDetailTotal(response.data.result);
      setDetailReceiver(response.data.receiver);
      setDetailPayment(response.data.payment);
    };
    getDetail();
  }, [orderId]);

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
              {orderId === v.orderid ? (
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
                      setOrderId(v.orderid);
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
              {orderId === v.orderid ? (
                <DetailCancel
                  key={v.id}
                  setOrderId={setOrderId}
                  orderId={orderId}
                  detail={detail}
                  detailtotal={detailtotal}
                  detailreceiver={detailreceiver}
                  detailpayment={detailpayment}
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
