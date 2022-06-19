import '../../styles/_frontpage.scss';
import ProductCard from './ProductCard';
import PLeftCircle from '../../img/left-circle.svg';
import PRightCircle from '../../img/right-circle.svg';

function ProductCards(props) {
  return (
    <>
      <h2>
        <a href="/">質感商品</a>
      </h2>
      <div className="all-card d-flex justify-content-between">
        {props.datas.map((Productdatas) => (
          <ProductCard
            product={Productdatas.product}
            brand={Productdatas.brand}
            product_pic={Productdatas.product_pic}
            brand_href={Productdatas.brand_href}
            pic_href={Productdatas.pic_href}
            cost={Productdatas.cost}
          />
        ))}
      </div>
      {/* 左按鈕 */}
      <button
        className="d-flex align-items-start justify-content-center carousel-control-prev "
        type="button"
        data-bs-target="#test123"
        data-bs-slide="prev"
      >
        <img src={PLeftCircle} alt="" className="left-button" />
      </button>
      {/* 右按鈕 */}
      <button
        className="d-flex align-items-start justify-content-center carousel-control-next"
        type="button"
        data-bs-target="#test123"
        data-bs-slide="next"
      >
        <img src={PRightCircle} alt="" className="right-button" />
      </button>
    </>
  );
}

export default ProductCards;
