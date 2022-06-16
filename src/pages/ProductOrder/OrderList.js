import Sidebar from '../../components/Sidebar';

const OrderList = ({ showOL, showOD }) => {
  const arr = [1, 2, 3];

  function changeIsShowOL() {
    showOL(false);
    showOD(true);
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 d-flex justify-content-center mt-4">
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
                            src={require('../../img/Singing.jpg')}
                            alt=""
                            width={100}
                            height={100}
                          />
                        </td>
                      </tr>
                    </table>
                  </div>
                  <button
                    className="card-button px-3 py-2"
                    onClick={changeIsShowOL}
                  >
                    查看訂單明細
                  </button>
                </div>
              );
            })}

            {/* ======================================= */}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderList;
