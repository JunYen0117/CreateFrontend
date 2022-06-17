import banner from '../img/products/cart_banner.webp';
import option1 from '../img/products/option1.jpg';
import option2 from '../img/products/option2.jpg';
import option3 from '../img/products/option3.jpg';
import productImg from '../img/products/2_2deer.jpg';

import { ReactComponent as CategoryIcon } from '../img/products/product_category.svg';

import { useState } from 'react';
import { AiOutlineAlignRight, AiFillCaretRight, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const category = [
  '居家生活',
  '香氛系列',
  '配件飾品',
  '家電/3C',
  '辦公文具',
  '玩偶玩具',
  '包包提袋',
];

const product_name = [
  {
    id: 'a',
    category: '居家生活',
    item: ['餐具', '抱枕', '夜燈', '擺飾', '衛浴用品', '便利小物'],
  },
  { id: 'b', category: '香氛系列', item: ['沐浴', '精油與配件', '香水'] },
  { id: 'c', category: '配件飾品', item: ['個人配件', '首飾', '髮飾'] },
  { id: 'd', category: '家電/3C', item: ['3C產品', '家用電器'] },
  { id: 'e', category: '辦公文具', item: ['書寫工具', '辦公用具'] },
  { id: 'f', category: '玩偶玩具', item: ['玩偶', '玩具', '療癒小物'] },
  {
    id: 'g',
    category: '包包提袋',
    item: ['日常包款', '錢包', '收納包', '旅行'],
  },
];

function Products() {
  const [open, setOpen] = useState(false);

  const handleOption = (type) => () => {
    switch (type) {
      case '居家生活': {
        setOpen(0);
        break;
      }
      case '香氛系列': {
        setOpen(1);
        break;
      }
      case '配件飾品': {
        setOpen(2);
        break;
      }
      case '家電/3C': {
        setOpen(3);
        break;
      }
      case '辦公文具': {
        setOpen(4);
        break;
      }
      case '玩偶玩具': {
        setOpen(5);
        break;
      }
      case '包包提袋': {
        setOpen(6);
        break;
      }
      default: {
        break;
      }
    }
  };

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
            <ul className="product_list">
              {category.map((v, i) => {
                return (
                  <li key={i}>
                    <a href="#/" alt="" onClick={handleOption(v)}>
                      <CategoryIcon /> {v}
                    </a>
                    {open === i && (
                      <div className="product_name">
                        {product_name[i].item.map((v, i) => {
                          return (
                            <a key={i} href="#/" className="ms-3" alt="">
                              {v}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-9 p-0">
            <div className="row w-100">
              {/* 商品列 一 */}
              <div className="col-3">
                <div className="product_item">
                  <figure>
                    <img src={productImg} alt=""></img>
                  </figure>
                  <h2>商品A</h2>
                  <h3>品牌名</h3>
                  <h3>NT.1000</h3>
                </div>
              </div>
              <div className="col-3">
                <div className="product_item">
                  <figure>
                    <img src={productImg} alt=""></img>
                  </figure>
                  <h2>商品B</h2>
                  <h3>品牌名</h3>
                  <h3>NT.1000</h3>
                </div>
              </div>
              <div className="col-3">
                <div className="product_item">
                  <figure>
                    <img src={productImg} alt=""></img>
                  </figure>
                  <h2>商品C</h2>
                  <h3>品牌名</h3>
                  <h3>NT.1000</h3>
                </div>
              </div>
              <div className="col-3">
                <div className="product_item">
                  <figure>
                    <img src={productImg} alt=""></img>
                  </figure>
                  <h2>商品D</h2>
                  <h3>品牌名</h3>
                  <h3>NT.1000</h3>
                </div>
              </div>
              {/* 商品列 二 */}
              <div className="col-3">
                <div className="product_item">
                  <figure>
                    <img src={productImg} alt=""></img>
                  </figure>
                  <h2>商品E</h2>
                  <h3>品牌名</h3>
                  <h3>NT.1000</h3>
                </div>
              </div>
              <div className="col-3">
                <div className="product_item">
                  <figure>
                    <img src={productImg} alt=""></img>
                  </figure>
                  <h2>商品F</h2>
                  <h3>品牌名</h3>
                  <h3>NT.1000</h3>
                </div>
              </div>
              <div className="col-3">
                <div className="product_item">
                  <figure>
                    <img src={productImg} alt=""></img>
                  </figure>
                  <h2>商品G</h2>
                  <h3>品牌名</h3>
                  <h3>NT.1000</h3>
                </div>
              </div>
              <div className="col-3">
                <div className="product_item">
                  <figure>
                    <img src={productImg} alt=""></img>
                  </figure>
                  <h2>商品H</h2>
                  <h3>品牌名</h3>
                  <h3>NT.1000</h3>
                </div>
              </div>
            </div>
            {/* 商品列結束 */}
            <nav aria-label="Page navigation example">
              <ul className="pagination product_page justify-content-end me-4 my-5">
                <li className="page-item">
                  <a className="page-link" href="#/" aria-label="Previous">
                    <AiOutlineLeft />
                  </a>
                </li>
                <li className="page-item ms-3">
                  <a className="page-link" href="#/">
                    1
                  </a>
                </li>
                <li className="page-item ms-3">
                  <a className="page-link" href="#/">
                    2
                  </a>
                </li>
                <li className="page-item ms-3">
                  <a className="page-link" href="#/">
                    3
                  </a>
                </li>
                <li className="page-item ms-3">
                  <a className="page-link" href="#/" aria-label="Next">
                    <AiOutlineRight />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
