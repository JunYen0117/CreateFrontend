import CheckoutItem from './CheckoutItem';

function CheckoutList(props) {
  const { checkList } = props;

  return (
    <>
      {checkList.map((v, i) => {
        return (
          <CheckoutItem
            key={v.id}
            productName={v.productName}
            image={v.image}
            price={v.price}
            quantity={v.quantity}
            subtotal={v.price * v.quantity}
          />
        );
      })}
    </>
  );
}

export default CheckoutList;
