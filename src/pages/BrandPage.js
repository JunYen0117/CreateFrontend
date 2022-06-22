import React from 'react';
import Brand from '../components/BrandPage/Banner';
import Brandcard from '../components/BrandPage/Brandcard';

import Starbrand from '../img/star-brand.jpg';
import Allbrand from '../img/all-brand.jpg';
import sort from '../img/align-right.svg';

function BrandPage() {
  return (
    <>
      <Brand />
      <div className="mt-4 product_banner">
        <img src="" alt="" />
      </div>
      <div className="all-button">
        <div className="row justify-content-between mt-5 gy-3">
          <div className="col-12 col-md-6 button2">
            <a href="#/">
              <div className="product_mask">
                <img src={Starbrand} alt="" />
                <p className="product_option_text">當月精選品牌</p>
                <div className="product_option_mask"></div>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-6 button3">
            <a href="#/">
              <div className="product_mask">
                <img src={Allbrand} alt="" />
                <p className="product_option_text">全部店家</p>
                <div className="product_option_mask"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="price-choise">
        <div className="row">
          <div className="col-12 p-0">
            <ul className="d-flex justify-content-end">
              <li className="product_filter">
                {/* 切換 遞增 和 遞減*/}
                <span>價格排序</span>
                <a href="#/" alt="">
                  <img src={sort} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" container line" />
      <div className="container">
        <div className="row">
          <Brandcard />
        </div>
      </div>
    </>
  );
}

export default BrandPage;
