import '../../styles/_frontpage.scss';
import ProductCard from './ProductCard';
// import PLeftCircle from '../../img/left-circle.svg';
// import PRightCircle from '../../img/right-circle.svg';

function ProductCards(props) {
  return (
    <>
      {props.datas.map((Productdatas, index) => {
        const a = index == 0 ? 'active' : '';
        return (
          <div className={`carousel-item ${a}`}>
            <div className="all-logo d-flex justify-content-between">
              {Productdatas.map((content) => (
                <ProductCard
                  key={content.product}
                  product={content.product}
                  brand={content.brand}
                  product_pic={content.product_pic}
                  brand_href={content.brand_href}
                  pic_href={content.pic_href}
                  cost={content.cost}
                />
              ))
              }
            </div>
          </div>)
      })}
    </>
  );
}

export default ProductCards;
