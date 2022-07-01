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

  // 購物車
  const { addItem, isInCart } = useCart();

  // 計算購買數量
  const [purchaseQuantity, setPurchaseQuantity] = useState(1);

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

  // console.log(productInDetail);
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 p-5">
            <figure className="figure">
              <img
                src={`http://localhost:3003/images/product/${productInDetail.image}`}
                className="img-fluid"
                alt=""
              />
            </figure>
          </div>
          {/* 商品描述 */}
          <div className="col-md-4 p-5 product_description d-flex flex-column justify-content-around">
            <p className="h1 m-0 p-3">{productInDetail.product_name}</p>
            <div className="h2 m-0 p-3">
              <span>NT $ {productInDetail.price}</span>
            </div>
            <p className="h2 m-0 p-3">數量</p>
            <div className="m-0 p-3 product_count">
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
            <a
              href="#/"
              alt=""
              onClick={() => {
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
              }}
            >
              <div className="p-2 h2 product_pluscart text-center">
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
              <div className="p-2 h2 product_pluscart text-center">
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
          <div className="col-12 px-5 py-3">
            <h1 className="fw-bolder">購買評價</h1>
            {textarr.map((v, i) => {
              return (
                <div key={i} className="my-4">
                  <p className="h2">Customer Name</p>
                  <div className="card mb-3 productdetail_comment">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={`http://localhost:3003/images/product/${productInDetail.image}`}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-md-8 p-3">
                        <div className="card-body d-flex flex-column justify-content-between h-100">
                          <p className="card-text h2 lh-lg">
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
