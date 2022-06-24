import CartItem from './CartItem';
import { useCart } from '../../utils/useCart';
import { useState } from 'react';
import { useContext, createContext } from 'react';

const checkListCart = createContext(null);





function CartList(props) {
  const { items } = useCart();
  const [checkList, setCheckList] = useState([]);

  return (
    <>
      {items.map((v, i) => {
        return (
          <CartItem
            key={v.id}
            productId={v.id}
            productName={v.product_name}
            vendor={v.business_name}
            image={v.image}
            price={v.price}
            quantity={v.quantity}
            checkList={checkList}
            setCheckList={setCheckList}
          />
        );
      })}
    </>
  );
}

export default CartList;
