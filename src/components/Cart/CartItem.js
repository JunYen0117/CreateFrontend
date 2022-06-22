import cartImg from '../../img/products/2_2deer.jpg';
import { AiOutlineShop } from 'react-icons/ai';
import { BsPlusLg, BsDashLg, BsFillTrashFill } from 'react-icons/bs';

function CartItem(props) {
  const { id, name, vendor, image, price, count, setCount, removeItem } =
    props;

  return (
    <>
      <div className="my-3">
        <div className="cart_product_border">
          <AiOutlineShop className="h1 ms-3" />
          <label className="m-3">{vendor}</label>
        </div>
        <div className="p-3 d-flex align-items-center cart_product_border">
          <figure className="cart_picture w-25">
            <img src={cartImg} alt="" className="img-fluid" />
          </figure>
          <p className="h1 text-center mx-auto cart_product_name">{name}</p>
          <div className="text-center mx-auto mb-2 cart_product_count">
            <span
              className="fw-bolder"
              onClick={() => {
                setCount(count - 1);
              }}
            >
              <BsDashLg />
            </span>
            <span className="border mx-3 h2 fw-bolder">{count}</span>
            <span
              className="fw-bolder"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              <BsPlusLg />
            </span>
          </div>
          <p className="h2 fw-bolder text-center mx-auto w-25">NT {price}</p>
          <div className="d-flex align-items-center mx-auto cart_product_delete">
            <BsFillTrashFill className="h1" onClick={removeItem} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
