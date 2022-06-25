import { AiOutlineShop } from 'react-icons/ai';
import { BsPlusLg, BsDashLg, BsFillTrashFill } from 'react-icons/bs';

import { useCart } from '../../utils/useCart';
import { useEffect, useContext } from 'react';
import { CheckListContext } from '../../App.js';

function CartItem(props) {
  const { items, plusOne, minusOne, removeItem, updateItem } = useCart();
  const { productId, productName, vendor, image, price, quantity, checked } =
    props;

  // 載入頁面時，重置 localStorage 的 checked 為 false
  useEffect(() => {
    let newList = [...items];
    if (items.length !== checkList.length) {
      items.forEach((v) => {
        updateItem({ id: v.id, checked: false });
      });
      newList = [];
      setCheckList(newList);
    }
  }, []);

  // 加選購物車商品的清單: 取出 Context
  const { checkList, setCheckList } = useContext(CheckListContext);

  // 選取商品 加入 checkList；取消選取 移除 checkList
  const handleCheckChange = () => {
    const checkItemIndex = checkList.findIndex((item) => item.id === productId);
    let newList = [...checkList];

    if (checkItemIndex > -1) {
      newList = newList.filter((v) => v.id !== productId);
    } else {
      newList = [
        ...checkList,
        {
          id: productId,
          productName,
          vendor,
          image,
          price,
          quantity,
        },
      ];
    }
    updateItem({ id: productId, checked: !checked });
    setCheckList(newList);
  };

  // 選中商品的數量增加
  const checkListPlus = () => {
    const checkItemIndex = checkList.findIndex((item) => item.id === productId);
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

  // 選中商品的數量減少
  const checkListMinus = () => {
    const checkItemIndex = checkList.findIndex((item) => item.id === productId);
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

  // 移除選中商品
  const checkListRemove = () => {
    let newList = [...checkList];
    newList = newList.filter((v) => v.id !== productId);
    setCheckList(newList);
  };

  // 看結果
  console.log('checkList:', checkList);

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
            checked={checked}
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
                checkListRemove();
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
