import CartItem from './CartItem';

function CartList(props) {
  const { productsInCart, setProductsInCart } = props;

  return (
    <>
      {productsInCart.map((product, i) => {
        const { id, name, categroy, image, price, count } = product;
        return (
          <CartItem
            key={id}
            id={id}
            name={name}
            categroy={categroy}
            image={image}
            price={price}
            count={count}
            setCount={(newCount) => {
              // 1. 從目前的狀態"拷貝"出一個新的變數值(陣列/物件)
              // 注意要用map，因為要深拷貝到第一層的物件
              const newProductsInCart = productsInCart.map((value) => {
                return { ...value };
              });

              // 2. 在拷貝出來的新變數(or常數)值(陣列/物件)上作處理
              newProductsInCart[i].count = newCount < 1 ? 1 : newCount;

              // 3. 設定回原本的狀態中
              setProductsInCart(newProductsInCart);
            }}
            removeItem={() => {
              // 1. 從目前的狀態"拷貝"出一個新的變數值(陣列/物件)
              // 2. 在拷貝出來的新變數(or常數)值(陣列/物件)上作處理
              const newProductsInCart = productsInCart.filter(
                (value, index) => {
                  return value.id !== product.id;
                }
              );
              // 3. 設定回原本的狀態中
              setProductsInCart(newProductsInCart);
            }}
          />
        );
      })}
    </>
  );
}

export default CartList;
