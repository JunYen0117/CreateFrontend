import { Collapse } from 'antd';
import { useEffect, useState } from 'react';
import { API_URL } from '../../utils/config';
import axios from 'axios';
import { FaWaze } from 'react-icons/fa';
import Detail from './DetailFinish';
import 'antd/dist/antd.css';

const ListFinish = () => {
  const [orders, setOrders] = useState([]);
  const [orderDetailId, setOrderDetailId] = useState(0);

  const { Panel } = Collapse;

  //連接後端
  useEffect(() => {
    let getOrders = async () => {
      // axios.get(URL, config)
      let response = await axios.get(API_URL + `/productorder/finish`);
      setOrders(response.data);
    };
    getOrders();
  }, []);
  let arr = orders.totalarr || [];
  // console.log(arr);

  return (
    <>
      {arr.map((v, i) => {
        return (
          <Collapse accordion className="orderlist-card">
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
                        <td>NT$ {v.totalsub}</td>
                      </tr>
                      <tr>
                        <td>處理狀態</td>
                        <td>已取貨</td>
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
                <Detail
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

export default ListFinish;