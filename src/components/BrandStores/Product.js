import product1 from '../../img/P4.jpg';
function Product(props) {
  const productsArr = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <div className="col-2">
        <a href="" className="ratio ratio-1x1">
          <img src={product1} className="card-img-top" alt="..." />
        </a>
        <div className="card-body">
          <h5 className="card-title">產品名</h5>
          <p className="money">NT. 1000</p>
        </div>
      </div>
    </>
  );
}
