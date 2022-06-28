// import '../../styles/_frontpage.scss';

function ProductCard(props) {
  const { pic_href, product_pic, product, brand_href, brand, cost, on_phone } =
    props;
  return (
    <>
      <div className={`card front_card ${on_phone ? 'col' : 'col-3'}`}>
        <a href={pic_href} className="ratio ratio-1x1">
          <img src={product_pic} className="card-img-top" alt="..." />
        </a>
        <div className="card-body">
          <h5 className="card-title">{product}</h5>
          <a href={brand_href} className="card-text">
            {brand}
          </a>
          <p className="money">NT. {cost}</p>
        </div>
      </div>
    </>
  );
}
export default ProductCard;
