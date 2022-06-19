import '../../styles/_frontpage.scss';

function ProductCard(props) {
  return (
    <>
      <div className="card">
        <a href={props.pic_href}>
          <img src={props.product_pic} className="card-img-top" alt="..." />
        </a>
        <div className="card-body">
          <h5 className="card-title">{props.product}</h5>
          <a href={props.brand_href} className="card-text">
            {props.brand}
          </a>
          <p className="">{props.cost}</p>
        </div>
      </div>
    </>
  );
}
export default ProductCard;
