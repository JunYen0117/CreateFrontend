import React from 'react';
import ProductCard from '../components/ProductCard';
import SliderBanner from '../components/SliderBanner';
import BusinessLogo from '../components/BusinessLogo';
import ArticleCard from '../components/ArticleCard';

function FrontPage(props) {
  return (
    <>
      <SliderBanner />
      <ProductCard />
      <BusinessLogo />
      <ArticleCard />
    </>
  );
}

export default FrontPage;
