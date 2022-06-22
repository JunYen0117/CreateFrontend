// import '../../styles/_frontpage.scss';

function ProductRWD(props) {
  return (
    <>
      <div className="card col-12">
        <div className="flex-shrink-0 product_img">
          <a href={props.pic_href} className="ratio ratio-1x1">
            <img src={props.product_pic} className="card-img-top" alt="..." />
          </a>
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.product}</h5>
          <a href={props.brand_href} className="card-text">
            {props.brand}
          </a>
          <p className="money">NT. {props.cost}</p>
        </div>
      </div>
    </>
  );
}

export default ProductRWD;
