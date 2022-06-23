import CartItem from './CartItem';
import { useCart } from '../../utils/useCart';

function CartList(props) {
  const { cart, items, plusOne, minusOne, removeItem } = useCart();

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
          />
        );
      })}
    </>
  );
}

export default CartList;
