import banner from '../img/Cart/cart_banner.webp';
import option1 from '../img/Cart/option1.jpg';
import option2 from '../img/Cart/option2.jpg';
import option3 from '../img/Cart/option3.jpg';

function ShoppingCart() {
  return (
    <>
      <div className="mt-4 banner">
        <img src={banner} alt="" />
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className="mask">
          <a href="#/">
            <div className="option">
              <img src={option1} alt="" style={{ width: '100%' }} />
            </div>
            <p className="option_text">節日推薦</p>
            <div className="mask-option"></div>
          </a>
        </div>
        <div className="mask mx-3">
          <a href="#/">
            <div className="option">
              <img src={option2} alt="" style={{ width: '100%' }} />
            </div>
            <p className="option_text">熱門商品</p>
            <div className="mask-option"></div>
          </a>
        </div>
        <div className="mask">
          <a href="#/">
            <div className="option">
              <img src={option3} alt="" style={{ width: '100%' }} />
            </div>
            <p className="option_text">全部商品</p>
            <div className="mask-option"></div>
          </a>
        </div>
      </div>
      <div>
        <h1>123</h1>
      </div>
    </>
  );
}

export default ShoppingCart;
