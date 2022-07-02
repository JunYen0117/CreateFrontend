import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useCart } from '../../utils/useCart';
import Swal from 'sweetalert2';
import { productGetDetail } from '../../utils/api';
import {
  BsPlusLg,
  BsDashLg,
  BsFillCartPlusFill,
  BsHeart,
  BsHeartFill,
} from 'react-icons/bs';

function ProductDetail() {
  const textarr = [1, 2, 3];
  const [heart, setHeart] = useState(false);
  // 購物車
  const { addItem, isInCart } = useCart();
  // 計算購買數量
  const [purchaseQuantity, setPurchaseQuantity] = useState(1);
  // 商品明細
  const [productInDetail, setProductInDetail] = useState({
    id: 0,
    product_name: '',
    price: 0,
    image: '1_1咖啡壺.jpg',
    vendor_id: 0,
    business_name: '',
    product_intro: '',
    product_info: '',
  });

  // /products?productId=2
  const location = useLocation();
  // 前往結帳
  const goPath = useHistory();

  useEffect(() => {
    let axiosProductById = async () => {
      // 根據 URL 建立 Params 物件
      const searchParams = new URLSearchParams(location.search);
      // 取得 Param: productId
      const productId = searchParams.get('productId');
      // 向後端要資料
      const response = await productGetDetail(productId);
      setProductInDetail(response.data[0]);
    };
    axiosProductById();
  }, []);

  const handleAddCart = (e) => {
    e.preventDefault();
    const item = {
      ...productInDetail,
      quantity: purchaseQuantity,
      checked: false,
    };
    if (isInCart(productInDetail.id)) {
      goPath.push('/cart');
    } else {
      addItem(item);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: '商品已加入購物車',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex p-2 p-md-4">
            <figure className="product_detail_main_pic align-self-center">
              <img
                src={`http://localhost:3003/images/product/${productInDetail.image}`}
                className="img-fluid"
                alt=""
              />
            </figure>
          </div>
          {/* 商品描述 */}
          <div className="col-md-6 p-2 p-md-4 product_description d-flex flex-column ">
            <p className="h1 m-0 p-3 my-md-4">{productInDetail.product_name}</p>
            <div className="h2 m-0 p-3">
              <span className="price">NT $ {productInDetail.price}</span>
            </div>
            <div className="d-flex mb-md-4">
              <p className="me-3 p-3 align-self-center">數量</p>
              <div className="me-3 p-3 product_count align-self-center">
                <span
                  className="fw-bolder cursor_pointer"
                  onClick={() => {
                    setPurchaseQuantity(
                      purchaseQuantity === 1 ? 1 : purchaseQuantity - 1
                    );
                  }}
                >
                  <BsDashLg />
                </span>
                <span className="border mx-3 h2 fw-bolder">
                  {purchaseQuantity}
                </span>
                <span
                  className="fw-bolder cursor_pointer"
                  onClick={() => {
                    setPurchaseQuantity(purchaseQuantity + 1);
                  }}
                >
                  <BsPlusLg />
                </span>
              </div>
            </div>
            <a href="#/" alt="" onClick={handleAddCart}>
              <div className="mb-md-5 p-2 h2 product_pluscart text-center">
                <BsFillCartPlusFill className="mb-1 me-3 h1" />
                <span>
                  {isInCart(productInDetail.id) ? '立即結帳' : '加入購物車'}
                </span>
              </div>
            </a>
            <a
              href="#/"
              alt=""
              onClick={() => {
                setHeart(!heart);
              }}
            >
              <div className="mb-md-5 p-2 h2 product_pluscart text-center">
                {heart ? (
                  <BsHeartFill className="mb-1 me-3 h1" />
                ) : (
                  <BsHeart className="mb-1 me-3 h1" />
                )}
                <span>收藏商品</span>
              </div>
            </a>
          </div>
        </div>
        {/* 商品介紹 */}
        <div className="row justify-content-start">
          <div className="col-md-9 px-5 py-3">
            <h1 className="fw-bolder">商品介紹</h1>
            <pre className="h2">{productInDetail.product_intro}</pre>
          </div>
        </div>
        {/* 商品資訊 */}
        <div className="row justify-content-start">
          <div className="col-md-9 px-5 py-3">
            <h1 className="fw-bolder">商品資訊</h1>
            <pre className="h2">{productInDetail.product_info}</pre>
          </div>
        </div>

        {/* 購買評價 */}
        <div className="row justify-content-start my-3">
          <div className="col-12 p-3 px-md-5">
            <h1 className="fw-bolder">購買評價</h1>
            {textarr.map((v, i) => {
              return (
                <div key={i} className="productdetail_whole_card my-4">
                  <div className="productdetail_user_info d-flex">
                    <figure className=" me-md-3 my-1"> ＜img＞ </figure>
                    <div className="name_area h2 mx-md-3 p-1">Name</div>
                    <div className="star_area mx-md-3 p-1">放星星的地方</div>
                  </div>
                  <div className="productdetail_card mb-3 row g-0">
                    <div className="productdetail_card_avatar col-12 col-md-4">
                      <img
                        src={`http://localhost:3003/images/product/${productInDetail.image}`}
                        alt=""
                        className=""
                      />
                    </div>
                    <div className="productdetail_card_content col-12 col-md-8 p-3">
                      <div className="d-flex flex-column justify-content-between h-100">
                        <p className="user_comment h2">
                          這件商品好讚喔！這件商品好讚！這件商品好讚！這件商品好讚！這件商品好讚！這件商品好讚！這件商品好讚！這件商品好讚！這件商品好讚！這件商品好讚！這件商品好讚！這件商品好讚！這件商品好讚！這件商品好讚！這件商品好讚！
                        </p>
                        <div>
                          <span className="h2 px-3 py-1 fw-bolder">
                            質感優異
                          </span>
                          <span className="h2 px-3 py-1 ms-3 fw-bolder">
                            符合期待
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* --------- 購買評價 --------- */}
      </div>
    </>
  );
}

export default ProductDetail;
