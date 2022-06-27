import Logo from '../../img/purple.jpg';
import { Rate } from 'antd';
import 'antd/dist/antd.css';

function StoreInformation() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div class="card-body d-flex col-6">
            <img src={Logo} alt="" className="logo" />
            <div className="brand-imformation">
              <h2 className="store_name">廠商名稱Store</h2>
              <div className="comment d-inline-block">
                <Rate disabled defaultValue={4} />
                <div className="d-inline-block me-3">4.0</div>
                <div className="product_comment_id d-inline-block">(30)</div>
              </div>
              <div className="d-flex justify-content-start align-items-end">
                <div className="product-vendor_id me-md-5">
                  <p>商品數量</p>
                  <div className="count">100</div>
                </div>
                <div className="customer_order_detail">
                  <p>已賣出數量</p>
                  <div className="count">50</div>
                </div>
              </div>
            </div>
          </div>
          {/* 資訊連結 */}
          <div className="col-6 d-flex align-items-end">
            <div className="border-line">
              <div className="information">分享：</div>
              <div className="information">地址：</div>
              <div className="information">加入時間：</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default StoreInformation;
