import { AiOutlineShop } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import cartImg from '../img/products/2_2deer.jpg';

function Cart() {
  return (
    <>
      <div className="container mt-5">
        <p className="h1">購物車</p>
        <input type="checkbox" className="mx-3 my-3" />
        <label>選擇全部</label>
        <div className="row">
          <div className="col-md-8">
            <div className="border">
              <input type="checkbox" className="m-3" />
              <AiOutlineShop className="h1" />
              <label className="m-3">紫電</label>
            </div>
            <div className="border p-3 d-flex align-items-center">
              <figure className="cart_picture">
                <img src={cartImg} alt="" className="img-fluid" />
              </figure>
              <p className="h1 ms-4 cart_product_name">
                麋鹿夜燈麋鹿夜燈麋鹿夜燈麋鹿夜燈麋鹿夜燈麋鹿夜燈麋鹿夜燈麋鹿夜燈
              </p>
              <div className="text-center">
                <input type="number" min="1" className="w-25"></input>
              </div>
              <p className="h2 fw-bolder">NT 500</p>
              <div className="d-flex align-items-center mx-auto">
                <BsFillTrashFill className="h1" />
              </div>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
}

export default Cart;
