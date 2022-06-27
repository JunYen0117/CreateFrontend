import React, { Component } from 'react';
import ProductCards from '../components/FrontPage/ProductCards';
import SliderBanner from '../components/FrontPage/SliderBanner';
import ArticleCards from '../components/FrontPage/ArticleCards';
import Carousel from '../components/FrontPage/Carousel';
import CarouselContents from '../components/FrontPage/CarouselContents';

import datas from '../test/data/ArticleCard.json';
import Productdatas from '../test/data/ProductCard.json';
import Contents from '../test/data/Business.json';
import ProductsRWD from '../components/FrontPage/ProductsRWD';

class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.state = { matches: window.matchMedia('(min-width: 768px)').matches };
  }
  componentDidMount() {
    const handler = (e) => this.setState({ matches: e.matches });
    window.matchMedia('(min-width: 768px)').addEventListener('change', handler);
  }
  render() {
    let product = (
      <ProductsRWD datas={Productdatas} on_phone={!this.state.matches} />
    );
    let brand = (
      <ProductsRWD datas={Productdatas} on_phone={!this.state.matches} />
    );
    if (this.state.matches) {
      product = (
        <Carousel key_="test1">
          <ProductCards datas={Productdatas} />
        </Carousel>
      );
      brand = (
        <Carousel key_="test2">
          <CarouselContents contents={Contents} />
        </Carousel>
      );
    }
    return (
      <div>
        <SliderBanner />
        <h2>
          <a href="/">質感商品</a>
        </h2>
        {product}
        <h2>
          <a href="/">精選品牌</a>
        </h2>
        {brand}
        <ArticleCards datas={datas} />
      </div>
    );
  }
}

export default FrontPage