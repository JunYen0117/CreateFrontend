import React from 'react';
import ProductCards from '../components/FrontPage/ProductCards';
import SliderBanner from '../components/FrontPage/SliderBanner';
import ArticleCards from '../components/FrontPage/ArticleCards';
import Carousel from '../components/FrontPage/Carousel';
import CarouselContents from '../components/FrontPage/CarouselContents';

import datas from '../test/data/ArticleCard.json';
import Productdatas from '../test/data/ProductCard.json';
import Contents from '../test/data/Business.json';

function FrontPage(props) {
  return (
    <>
      <SliderBanner />
      <h2>
        <a href="/">質感商品</a>
      </h2>
      <Carousel key_="test1">
        <ProductCards datas={Productdatas} />
      </Carousel>
      <h2>
        <a href="/">精選品牌</a>
      </h2>
      <Carousel key_="test2">
        <CarouselContents contents={Contents} />
      </Carousel>
      <ArticleCards datas={datas} />
    </>
  );
}

export default FrontPage;
