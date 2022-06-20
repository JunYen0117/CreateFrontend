import '../../styles/_frontpage.scss';
import ProductCard from './ProductCard';
// import PLeftCircle from '../../img/left-circle.svg';
// import PRightCircle from '../../img/right-circle.svg';

function ProductCards(props) {
  return (
    <>
      <h2>
        <a href="/">質感商品</a>
      </h2>

      <div className="all-product-card">
        <div className="d-flex justify-content-between">
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
      </div>
    </>
  );
}

export default ProductCards;
