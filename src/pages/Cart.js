import { Link } from 'react-router-dom';

import { AiOutlineShop } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import cartImg from '../img/products/2_2deer.jpg';

function Cart() {
  const productsArr = [1, 2, 3];

  return (
    <>
      <div className="container mt-5">
        <p className="h1">購物車</p>
        <input type="checkbox" className="mx-3 my-3" />
        <label>選擇全部</label>
        <div className="row">
          {/* 購物車清單 */}
          <div className="col-md-8">
            {productsArr.map((v, i) => {
              return (
                <div key={i} className="my-3">
                  <div className="cart_product_border">
                    <input type="checkbox" className="m-3" />
                    <AiOutlineShop className="h1" />
                    <label className="m-3">紫電</label>
                  </div>
                  <div className="p-3 d-flex align-items-center cart_product_border">
                    <figure className="cart_picture w-25">
                      <img src={cartImg} alt="" className="img-fluid" />
                    </figure>
                    <p className="h1 text-center mx-auto cart_product_name">
                      麋鹿夜燈
                    </p>
                    <div className="text-center mx-auto cart_product_count">
                      <input
                        type="number"
                        min="1"
                        value="1"
                        className="w-100"
                      ></input>
                    </div>
                    <p className="h2 fw-bolder text-center mx-auto w-25">
                      NT 500
                    </p>
                    <div className="d-flex align-items-center mx-auto cart_product_delete">
                      <BsFillTrashFill className="h1" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-md-4 mt-3 w-25">
            <p className="h1 p-3 cart_order_summary cart_order_border">
              訂單摘要
            </p>
            <div className="h1 p-3 cart_order_border">
              <div className="d-flex justify-content-between">
                <p>商品總計</p>
                <p>NT $1000</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>運費</p>
                <p>100</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>折扣金額</p>
                <p>-100</p>
              </div>
            </div>
            <div className="h1 p-3 cart_order_border">
              <div className="d-flex justify-content-between">
                <p>結帳總金額：</p>
                <p>NT $1000</p>
              </div>
              <div className="text-center cart_checkout my-3">
                <Link to="#/">結帳去</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
