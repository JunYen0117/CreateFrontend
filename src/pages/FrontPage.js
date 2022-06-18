import React from 'react';
import ProductCard from '../components/ProductCard';
import SliderBanner from '../components/SliderBanner';
import BusinessLogo from '../components/BusinessLogo';
import ArticleCards from '../components/ArticleCards';
import datas from "../test/data/ArticleCard"

function FrontPage(props) {
  return (
    <>
      <SliderBanner />
      <ProductCard />
      <BusinessLogo />
      <ArticleCards datas={datas}/>
    </>
  );
}

export default FrontPage;
