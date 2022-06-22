// import '../../styles/_frontpage.scss';
import ProductCard from './ProductCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

function ProductsRWD(props) {
  const { datas } = props;
  return (
    <>
      <Swiper
        spaceBetween={3}
        slidesPerView={2}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {datas.map((Productdatas, index) => {
          const a = index === 0 ? 'active' : '';
          return (
            Productdatas.map((content) => (
              <SwiperSlide>
                <ProductCard
                  key={content.product}
                  product={content.product}
                  brand={content.brand}
                  product_pic={content.product_pic}
                  brand_href={content.brand_href}
                  pic_href={content.pic_href}
                  cost={content.cost}
                />
              </SwiperSlide>
            ))
          );
        })}
      </Swiper>
    </>
  );
}

export default ProductsRWD;
