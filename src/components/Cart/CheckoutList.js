import CheckoutItem from './CheckoutItem';

function CheckoutList(props) {
  const { checkList } = props;

  // id: 16
  // image: "6_1bao.jpg"
  // price: 600
  // productName: "喜寶抱枕"
  // quantity: 1
  // vendor: "藍天"

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
