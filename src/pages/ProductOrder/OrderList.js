import { useEffect } from 'react';
import { useState } from 'react';
import { API_URL } from '../../utils/config';
import axios from 'axios';

const OrderList = ({ showOL, showOD }) => {
  function changeIsShowOL() {
    showOL(false);
    showOD(true);
  }
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    let getOrders = async () => {
      // axios.get(URL, config)
      let response = await axios.get(API_URL + '/productorder');
      setOrders(response.data);
    };
    getOrders();
  }, []);
  let arr = orders.totalarr || [];
  console.log(arr);

  return (
    <>
      {arr.map((v, i) => {
        return (
          <div className="orderlist-card w-100">
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
                  <td>{v.orderid}</td>
                </tr>
                <tr>
                  <th>單館統計</th>
                  <td>{v.totalsub}</td>
                </tr>
                <tr>
                  <th>購買項目</th>
                  <td>{v.totalcount}</td>
                </tr>
                <tr>
                  <th>產品圖片</th>
                  <td>
                    <img
                      src={require('../../img/Singing.jpg')}
                      alt=""
                      width={100}
                      height={100}
                    />
                  </td>
                </tr>
              </table>
            </div>
            <button className="card-button px-3 py-2" onClick={changeIsShowOL}>
              查看訂單明細
            </button>
          </div>
        );
      })}

      {/* ======================================= */}
    </>
  );
};

export default OrderList;
