import { AiOutlineShop } from 'react-icons/ai';
import { BsPlusLg, BsDashLg, BsFillTrashFill } from 'react-icons/bs';

import { useCart } from '../../utils/useCart';

function CartItem(props) {
  const { plusOne, minusOne, removeItem } = useCart();
  const { productId, productName, vendor, image, price, quantity } = props;
  const { checkList, setCheckList } = props;

  const checkItemIndex = checkList.findIndex(
    (item) => item.productId === productId
  );

  // input checked
  let checkProductId = { ...checkList[checkItemIndex] };

  const handleCheckChange = () => {
    let newList = [...checkList];

    if (checkItemIndex > -1) {
      newList = newList.filter((v) => v.productId !== productId);
    } else {
      newList = [
        ...checkList,
        { productId, productName, vendor, image, price, quantity },
      ];
    }

    setCheckList(newList);
  };

  const checkListPlus = () => {
    let newList = [...checkList];

    let newQuantity = quantity + 1;

    if (checkItemIndex > -1) {
      newList[checkItemIndex] = {
        ...newList[checkItemIndex],
        quantity: newQuantity,
      };
    }
    setCheckList(newList);
  };

  const checkListMinus = () => {
    let newList = [...checkList];

    let newQuantity = quantity > 1 ? quantity - 1 : 1;

    if (checkItemIndex > -1) {
      newList[checkItemIndex] = {
        ...newList[checkItemIndex],
        quantity: newQuantity,
      };
    }
    setCheckList(newList);
  };

  console.log(checkList);

  return (
    <>
      <div className="my-3">
        <div className="cart_product_border">
          <input
            type="checkbox"
            name={productName}
            value={productName}
            className="ms-3 cart_checkbox"
            onChange={handleCheckChange}
            checked={checkProductId.productId === productId}
          />
          <AiOutlineShop className="h1 ms-3" />
          <label className="m-3">{vendor}</label>
        </div>
        <div className="p-3 d-flex align-items-center cart_product_border">
          <figure className="cart_picture w-25">
            <img
              src={`http://localhost:3003/images/product/${image}`}
              alt=""
              className="img-fluid"
            />
          </figure>
          <p className="h1 text-center mx-auto cart_product_name">
            {productName}
          </p>
          <div className="text-center mx-auto mb-2 cart_product_count">
            <span
              className="fw-bolder"
              onClick={() => {
                minusOne(productId);
                checkListMinus();
              }}
            >
              <BsDashLg />
            </span>
            <span className="border mx-3 h2 fw-bolder">{quantity}</span>
            <span
              className="fw-bolder"
              onClick={() => {
                plusOne(productId);
                checkListPlus();
              }}
            >
              <BsPlusLg />
            </span>
          </div>
          <p className="h2 fw-bolder text-center mx-auto w-25">NT {price}</p>
          <div className="d-flex align-items-center mx-auto cart_product_delete">
            <BsFillTrashFill
              className="h1"
              onClick={() => {
                removeItem(productId);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
