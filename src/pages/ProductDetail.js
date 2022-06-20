import product from '../img/products/product01.jpg';

import {
  BsPlusLg,
  BsDashLg,
  BsFillCartPlusFill,
  BsHeart,
} from 'react-icons/bs';

function ProductDetail() {
  //   const [productInDetail, setProductInDetail] = useState({
  //     id: '',
  //     picture: '',
  //     stock: 0,
  //     name: '',
  //     price: 0,
  //     tags: '',
  //   });

  //   // /products?productId=2
  //   const location = useLocation();

  //   const fetchProductById = async () => {
  //     // 根據 URL 建立 Params 物件
  //     const searchParams = new URLSearchParams(location.search);
  //     // 取得 Param: productId
  //     const productId = searchParams.get('productId');
  //     // 向後端要資料
  //     const response = await fetch('/products/?productId=' + productId);
  //     const data = await response.json();
  //     setProductInDetail(data);
  //   };

  //   // didMount
  //   useEffect(() => {
  //     fetchProductById();
  //   }, []);

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 p-5">
            <figure className="figure">
              <img src={product} className="img-fluid" alt="" />
            </figure>
          </div>
          {/* 商品描述 */}
          <div className="col-md-4 p-5 product_description d-flex flex-column justify-content-around">
            <p className="h1 m-0 p-3">簡單生活 香氛水晶 簡單生活</p>
            <div className="h2 m-0 p-3">
              <span>NT $ 9999</span>
            </div>
            <p className="h2 m-0 p-3">數量</p>
            <div className="m-0 p-3 product_count">
              <span className="fw-bolder">
                <BsDashLg />
              </span>
              <span className="border mx-3 h2 fw-bolder">1</span>
              <span className="fw-bolder">
                <BsPlusLg />
              </span>
            </div>
            <div className="mb-0 p-2 h2 product_pluscart text-center">
              <BsFillCartPlusFill className="mb-1 me-3 h1" />
              <a href="#/" alt="">
                加入購物車
              </a>
            </div>
            <div className="mb-0 p-2 h2 product_pluscart text-center">
              <BsHeart className="mb-1 me-3 h1" />
              <a href="#/" alt="">
                收藏商品
              </a>
            </div>
          </div>
        </div>
        {/* 商品介紹 */}
        <div className="row justify-content-start my-3">
          <div className="col-md-9">
            <h1 className="fw-bolder">商品介紹</h1>
            <p className="h2">
              商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹商品介紹
            </p>
          </div>
        </div>
        {/* 商品資訊 */}
        <div className="row justify-content-start my-3">
          <div className="col-md-9">
            <h1 className="fw-bolder">商品資訊</h1>
            <p className="h2">
              商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊商品資訊
            </p>
          </div>
        </div>
        {/* 購買評價 */}
        <div className="row justify-content-start my-3">
          <div className="col-12">
            <h1 className="fw-bolder">購買評價</h1>
            <p className="h2">Customer Name</p>
            <div className="card mb-3" style={{ maxWidth: '960px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={product} alt="" className="img-fluid" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title h3">評論</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* --------- 購買評價 --------- */}
      </div>
      <h1>ProductDetail</h1>
      <h1>ProductDetail</h1>
      <h1>ProductDetail</h1>
      <h1>ProductDetail</h1>
    </>
  );
}

export default ProductDetail;
