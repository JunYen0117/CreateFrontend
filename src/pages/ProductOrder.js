import Sidebar from '../components/Sidebar';

const ProductOrder = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 d-flex justify-content-center">
            <Sidebar />
          </div>
          <div className="col-9">
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
                    <td>State</td>
                    <td>finish</td>
                  </tr>
                  <tr>
                    <td>account</td>
                    <td>14</td>
                  </tr>
                </table>
              </div>
              <button className="card-button">查看訂單明細</button>
            </div>
          </div>
        </div>
      </div>
      {/* 沒有訂單 */}
      {/* <h1>我的訂單</h1>
      <div className="border-bottom">
        <a href="#">已完成</a>
        <a href="#">已取消</a>
      </div>

      <div>
        <img src={require('../image/Singing.png')} className="img1" alt="" />
        <h3>您沒有尚未付款的訂單</h3>
      </div> */}

      {/* ===================================== */}

      {/* 已完成 */}
    </>
  );
};

export default ProductOrder;
