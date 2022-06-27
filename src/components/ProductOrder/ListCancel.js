import React from 'react';
import { API_URL } from '../../utils/config';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ListCancel = () => {
  const [orderCancel, setOrderCancel] = useState([]);
  const [orderDetailId, setOrderDetailId] = useState(0);


  useEffect(() => {
    let getOrderCancel = async () => {
      // axios.get(URL, config)
      let response = await axios.get(API_URL + `/poCancel`);
      setOrderCancel(response.data);
      // console.log(response.data);
    };
    getOrderCancel();
  }, []);
  let arr = orderCancel.arrcancel || [];
  console.log(arr);

  return (
    <>
      {arr.map((v) => {
        return (
          <div className="orderlist-card w-100 h3 ">
            <div className="card-title d-flex py-3">
              <div className="title-num mx-2">訂單編號</div>
              <div className="title-name mx-2">{v.orderid}</div>
            </div>
            <div className="card-content">
              <table className="ol_table ">
                <tbody>
                  <tr>
                    <td>訂單日期</td>
                    <td>2022</td>
                  </tr>
                  <tr>
                    <td>訂單金額</td>
                    <td>NT$123</td>
                  </tr>
                  <tr>
                    <td>處理狀態</td>
                    <td className="text-danger">已取消</td>
                  </tr>
                  <tr>
                    <td>付款方式</td>
                    <td>信用卡-付款(金額會自動退回刷卡帳戶）</td>
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
          </div>
        );
      })}
    </>
  );
};

export default ListCancel;
