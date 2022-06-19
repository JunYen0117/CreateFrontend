import React from 'react';
import ProductCards from '../components/FrontPage/ProductCards';
import SliderBanner from '../components/FrontPage/SliderBanner';
import BusinessLogo from '../components/FrontPage/BusinessLogo';
import ArticleCards from '../components/FrontPage/ArticleCards';
import datas from '../test/data/ArticleCard';
import Productdatas from '../test/data/ProductCard';

function FrontPage(props) {
  return (
    <>
      <SliderBanner />
      <ProductCards datas={Productdatas} />
      <BusinessLogo />
      <ArticleCards datas={datas} />
    </>
  );
}

export default FrontPage;
