import '../../styles/_frontpage.scss';
import ProductRWD from './ProductRWD';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

function ProductsRWD(props) {
  const { datas } = props;
  return (
    <>
      {datas.map((Productdatas, index) => {
        const a = index === 0 ? 'active' : '';
        return (
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <div className="all-logo d-flex justify-content-between">
              {Productdatas.map((content) => (
                <SwiperSlide className={`carousel-item ${a}`}>
                  <ProductRWD
                    key={content.product}
                    product={content.product}
                    brand={content.brand}
                    product_pic={content.product_pic}
                    brand_href={content.brand_href}
                    pic_href={content.pic_href}
                    cost={content.cost}
                  />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        );
      })}
    </>
  );
}

export default ProductsRWD;
