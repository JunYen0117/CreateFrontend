import banner from '../img/products/cart_banner.webp';
import option1 from '../img/products/option1.jpg';
import option2 from '../img/products/option2.jpg';
import option3 from '../img/products/option3.jpg';
import productImg from '../img/products/2_2deer.jpg';

import { ReactComponent as CategoryIcon } from '../img/products/product_category.svg';

import { useState, useEffect } from 'react';
import axios from 'axios';

import {
  AiOutlineAlignRight,
  AiFillCaretRight,
  AiOutlineLeft,
  AiOutlineRight,
} from 'react-icons/ai';

function Products() {
  const [classifications, setClassifications] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(-1);

  // Products
  useEffect(() => {
    let getProduct = async () => {
      let response = await axios.get('http://localhost:3003/api/product', {
        withCredentials: true,
      });
      setProducts(response.data);
    };
    getProduct();
  }, []);

  // Classification
  useEffect(() => {
    let getClassification = async () => {
      let response = await axios.get(
        'http://localhost:3003/api/product/classification',
        {
          withCredentials: true,
        }
      );
      setClassifications(response.data);
    };
    getClassification();
  }, []);

  // category
  useEffect(() => {
    let getCategory = async () => {
      let response = await axios.get(
        `http://localhost:3003/api/product/classification/${open}`,
        {
          withCredentials: true,
        }
      );
      setCategorys(response.data);
    };
    getCategory();
  }, [open]);

  const handleOption = (type) => () => {
    switch (type) {
      case '居家生活': {
        setOpen(1);
        break;
      }
      case '香氛系列': {
        setOpen(2);
        break;
      }
      case '配件飾品': {
        setOpen(3);
        break;
      }
      case '家電3C': {
        setOpen(4);
        break;
      }
      case '辦公文具': {
        setOpen(5);
        break;
      }
      case '玩偶玩具': {
        setOpen(6);
        break;
      }
      case '包包提袋': {
        setOpen(7);
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
              {classifications.map((v, i) => {
                return (
                  <li key={v.id}>
                    <a
                      href="#/"
                      alt=""
                      onClick={
                        open === v.id
                          ? () => setOpen(-1)
                          : handleOption(v.classification_name)
                      }
                    >
                      <CategoryIcon /> {v.classification_name}
                    </a>
                    {open === v.id && (
                      <div className="product_name">
                        {categorys.map((v, i) => {
                          return (
                            <a key={v.id} href="#/" className="ms-3" alt="">
                              {v.category_name}
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
              {products.map((v, i) => {
                return (
                  <div className="col-3">
                    <div className="product_item">
                      <figure>
                        <a href="#/" alt="">
                          <img
                            src={`http://localhost:3003/images/product/${v.image}`}
                            alt=""
                          ></img>
                        </a>
                      </figure>
                      <h2>{v.product_name}</h2>
                      <h3>品牌：{v.business_name}</h3>
                      <h3>NT$ {v.price}</h3>
                    </div>
                  </div>
                );
              })}
              <div className="col-3">
                <div className="product_item">
                  <figure>
                    <a href="#/" alt="">
                      <img src={productImg} alt=""></img>
                    </a>
                  </figure>
                  <h2>商品A</h2>
                  <h3>品牌名</h3>
                  <h3>NT.1000</h3>
                </div>
              </div>
              <div className="col-3">
                <div className="product_item">
                  <figure>
                    <a href="#/" alt="">
                      <img
                        src="http://localhost:3003/images/product/1_1咖啡壺.jpg"
                        alt=""
                      ></img>
                    </a>
                  </figure>
                  <h2>商品B</h2>
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
