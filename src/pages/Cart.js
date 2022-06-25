import CartList from '../components/Cart/CartList';
import Summary from '../components/Cart/Summary';
import { useCart } from '../utils/useCart';
import { useContext } from 'react';
import { CheckListContext } from '../App.js';

function Cart() {
  const { items, updateItem } = useCart();

  // 加選購物車商品的清單: 取出 Context
  const { checkList, setCheckList } = useContext(CheckListContext);

  // 全選；反選
  const handleAllCheck = () => {
    let newList = [...items];
    if (items.length !== checkList.length) {
      // 全選
      newList = items.map((v) => {
        let newCheck = { ...v };
        newCheck['checked'] = true;
        updateItem({ id: v.id, checked: true });
        return newCheck;
      });
    } else {
      // 反選
      items.forEach((v) => {
        updateItem({ id: v.id, checked: false });
      });
      newList = [];
    }
    setCheckList(newList);
  };

  return (
    <>
      <div className="container mt-5">
        <p className="h1">購物車</p>
        {items.length !== 0 ? (
          <>
            <input
              type="checkbox"
              className="mx-3 cart_checkbox"
              name="selectAll"
              onChange={handleAllCheck}
              checked={items.length === checkList.length}
            />
            <label className="m-0">選擇全部</label>
            <div className="row">
              {/* 購物車清單 */}
              <div className="col-md-8">
                <CartList />
              </div>
              <div className="col-md-4 mt-3 w-25">
                <Summary />
              </div>
            </div>
          </>
        ) : (
          <h2 style={{ height: '500px', marginLeft: '22px' }}>
            沒有商品加入購物車
          </h2>
        )}
      </div>
    </>
  );
}

export default Cart;
