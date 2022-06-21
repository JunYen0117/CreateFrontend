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
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
}

export default Cart;
