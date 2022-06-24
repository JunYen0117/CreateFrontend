import CartList from '../components/Cart/CartList';
import Summary from '../components/Cart/Summary';

function Cart() {
  return (
    <>
      <div className="container mt-5">
        <p className="h1">購物車</p>
        <div className="row">
          {/* 購物車清單 */}
          <div className="col-md-8">
            <CartList />
          </div>
          <div className="col-md-4 mt-3 w-25">
            <Summary />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
