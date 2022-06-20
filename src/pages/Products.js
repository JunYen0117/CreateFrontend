import banner from '../img/products/cart_banner.webp';
import option1 from '../img/products/option1.jpg';
import option2 from '../img/products/option2.jpg';
import option3 from '../img/products/option3.jpg';

import { AiOutlineAlignRight, AiFillCaretRight } from 'react-icons/ai';

import { useState } from 'react';
import ProductList from '../components/Products/ProductList';
import ProductSidebar from '../components/Products/ProductSidebar';
import ProductPagination from '../components/Products/ProductPagination';

function Products() {
  const [classifications, setClassifications] = useState([]);
  const [categorys, setCategorys] = useState([]);

  // 顯示的商品
  const [products, setProducts] = useState([]);

  // 商品篩選 類別
  const [classificationId, setClassificationId] = useState(-1);

  // 商品篩選 種類
  const [categoryId, setCategoryId] = useState(-1);

  // 分頁
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  return (
    <>
      <div className="mt-4 product_banner">
        <img src={banner} alt="" />
      </div>
      <div className="d-flex justify-content-between mt-5 mx-auto product_option">
        <div className="product_mask">
          <a href="#/">
            <div>
              <img src={option1} alt="" />
            </div>
            <p className="product_option_text">節日推薦</p>
            <div className="product_option_mask"></div>
          </a>
        </div>
        <div className="product_mask">
          <a href="#/">
            <div>
              <img src={option2} alt="" />
            </div>
            <p className="product_option_text">熱門商品</p>
            <div className="product_option_mask"></div>
          </a>
        </div>
        <div className="product_mask">
          <a href="#/">
            <div>
              <img src={option3} alt="" />
            </div>
            <p className="product_option_text">全部商品</p>
            <div className="product_option_mask"></div>
          </a>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-7"></div>
          <div className="col-5 p-0">
            <ul className="d-flex justify-content-between">
              {/* 用 form 表單查詢 */}
              <li className="price_filter">
                <span className="me-3">NT$</span>
                <input type="text" />
                <span>－</span>
                <input type="text" />
                <a href="#/" alt="" className="ms-1">
                  <span>
                    <AiFillCaretRight />
                  </span>
                </a>
              </li>
              <li className="product_filter">
                {/* 切換 遞增 和 遞減*/}
                <span>商品排序</span>
                <a href="#/" alt="">
                  <span>
                    <AiOutlineAlignRight />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-5 product_area pt-5">
          <div className="col-3">
            <ProductSidebar
              classifications={classifications}
              setClassifications={setClassifications}
              categorys={categorys}
              setCategorys={setCategorys}
              classificationId={classificationId}
              setClassificationId={setClassificationId}
              categoryId={categoryId}
              setCategoryId={setCategoryId}
              setPage={setPage}
            />
          </div>
          <div className="col-9 p-0">
            <ProductList
              products={products}
              setProducts={setProducts}
              classificationId={classificationId}
              categoryId={categoryId}
              page={page}
              lastPage={lastPage}
              setLastPage={setLastPage}
            />
            {categoryId === -1 ? (
              <ProductPagination
                page={page}
                lastPage={lastPage}
                setPage={setPage}
              />
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
