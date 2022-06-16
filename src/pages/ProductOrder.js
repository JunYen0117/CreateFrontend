const ProductOrder = () => {
  return (
    <>
      {/* 沒有訂單 */}
      {/* <h1>我的訂單</h1>
      <div className="border-bottom">
        <a href="#">已完成</a>
        <a href="#">已取消</a>
      </div>

      <div>
import Sidebar from '../components/Sidebar';
import { ReactComponent as More } from '../img/More.svg';

const ProductOrder = () => {
  const arr = [];
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 d-flex justify-content-center">
            <Sidebar />
          </div>
          <div className="col-9 productOrder">
            <h1>我的訂單</h1>
            <div className="border-bottom w-75 my-3">
              <a href="#/" className="me-5">
                已完成
              </a>
              <a href="#/">已取消</a>
            </div>
            {arr.map((v, i) => {
              return (
                <div className="orderlist-card w-75">
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
                            src={require('../img/logo.svg')}
                            alt=""
                            width={100}
                            height={100}
                          />
                        </td>
                      </tr>
                    </table>
                  </div>
                  <button className="card-button px-3 py-2">
                    查看訂單明細
                  </button>
                </div>
              );
            })}

            {/* 訂單列表 */}
            {/* 已完成 */}

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

      {/* 已完成 */}

      <h1>我的訂單</h1>
      <div className="border-bottom">
        <a href="#/">已完成</a>
        <a href="#/">已取消</a>
      </div>
      <div className="orderlist-card">
        <div className="card-title d-flex">
          <p className="text-info">5555</p>
          <div className="title-num">20221212</div>
          <div className="title-name">Miu</div>
        </div>
        <div className="card-content">
          <table>
            <tr>
              <td className="text-info">State</td>
              <td>finish</td>
            </tr>
            <tr>
              <td>account</td>
              <td>14</td>
            </tr>
          </table>
        </div>
        <button className="card-button">查看訂單明細</button>
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
              <div className="card-content">
                <p className="ol_p mt-3">123</p>
              </div>
            </div>

            {/* ======================================= */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductOrder;
