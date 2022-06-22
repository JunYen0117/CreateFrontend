import { useState } from 'react';
import { Link } from 'react-router-dom';

import CartList from '../components/Cart/CartList';

const products = [
  {
    id: 1,
    name: '麋鹿夜燈',
    categroy: '夜燈',
    image: '../img/products/2_2deer.jpg',
    price: 300,
  },
  {
    id: 2,
    name: '幽靈夜燈',
    categroy: '夜燈',
    image: '../img/products/2_2deer.jpg',
    price: 500,
  },
  {
    id: 3,
    name: '迴廊夜燈',
    categroy: '夜燈',
    image: '../img/products/2_2deer.jpg',
    price: 700,
  },
];

// 擴充原本的product屬性，多一個記錄數量屬性(count)
// map語法
const initState = (productArray) => {
  return productArray.map((v) => ({ ...v, count: 1 }));
};

function Cart() {
  const [productsInCart, setProductsInCart] = useState(initState(products));

  const totalNumber = () => {
    let result = 0;

    productsInCart.map((v, i) => {
      result += v.count;
    });

    return result;
  };

  const totalPrice = () => {
    let result = 0;

    productsInCart.map((v, i) => {
      result += v.count * v.price;
    });

    return result;
  };

  // Cart List

  // let setCount = (newCount) => {
  //   // 1. 從目前的狀態"拷貝"出一個新的變數值(陣列/物件)
  //   // 注意要用map，因為要深拷貝到第一層的物件
  //   const newProductsInCart = productsInCart.map((value) => {
  //     return { ...value };
  //   });

  //   // 2. 在拷貝出來的新變數(or常數)值(陣列/物件)上作處理
  //   newProductsInCart[i].count = newCount < 1 ? 1 : newCount;

  //   // 3. 設定回原本的狀態中
  //   setProductsInCart(newProductsInOrder);
  // };

  return (
    <>
      <div className="container mt-5">
        <p className="h1">購物車</p>
        <input type="checkbox" className="mx-3 my-3" />
        <label>選擇全部</label>
        <div className="row">
          {/* 購物車清單 */}
          <div className="col-md-8">
            <CartList
              productsInCart={productsInCart}
              setProductsInCart={setProductsInCart}
            />
          </div>
          <div className="col-md-4 mt-3 w-25">
            <p className="h1 p-3 cart_order_summary cart_order_border">
              訂單摘要
            </p>
            <div className="h1 p-3 cart_order_border">
              <div className="d-flex justify-content-between">
                <p>商品總計</p>
                <p>NT ${totalPrice()}</p>
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
                <p>NT ${totalPrice()}</p>
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
