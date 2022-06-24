import { useEffect } from 'react';
import { useState } from 'react';
import { API_URL } from '../../utils/config';
import axios from 'axios';
import { FaWaze } from 'react-icons/fa';
import Detail from './Detail';

const List = (props) => {
  const { showOL, showOD } = props;

  function changeIsShowOL() {
    showOL(false);
    showOD(true);
  }
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    let getOrders = async () => {
      // axios.get(URL, config)
      let response = await axios.get(API_URL + `/productorder`);
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
          <div className="orderlist-card w-100 h3" key={`list-${v.orderid}`}>
            <div className="card-title d-flex py-3">
              <div className="title-num mx-2">訂單編號</div>
              <div className="title-name mx-2">{v.orderid}</div>
            </div>
            <div className="card-content">
              <table className="ol_table ">
                <tr>
                  <th>訂單日期</th>
                  <td>{v.orderdate}</td>
                </tr>
                <tr>
                  <th>訂單金額</th>
                  <td>NT${v.totalsub}</td>
                </tr>
                <tr>
                  <th>處理狀態</th>
                  <td>已取貨</td>
                </tr>
                <tr>
                  <th>付款方式</th>
                  <td>信用卡-付款</td>
                </tr>
              </table>
            </div>
            <button className="card-button px-3 py-2" onClick={changeIsShowOL}>
              <FaWaze
                className="me-2"
                style={{ color: 'rgb(182, 115, 115)' }}
              />
              查看訂單明細
            </button>
          </div>
        );
      })}

      {/* ======================================= */}
    </>
  );
};

export default List;
