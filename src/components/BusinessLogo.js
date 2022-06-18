import '../styles/_frontpage.scss';
import Card from 'react-bootstrap/Card';

import red from '../img/red.jpg';
import rainbow from '../img/rainbow.png';
import kaigi from '../img/kaigi.jpg';
import LeftCircle from '../img/left-circle.svg';
import RightCircle from '../img/right-circle.svg';

function BusinessLogo() {
  return (
    <>
      <h2>
        <a href="/">精選品牌</a>
      </h2>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner product-card">
          <div class="carousel-item active">
            {/* 第一頁 */}
            <div className="d-flex justify-content-between all-card">
              {/* Card 1 */}
              <Card style={{ width: '285px' }}>
                <a href="/">
                  <figure className="figure">
                    <Card.Img variant="top" src={red} className="img-fluid" />
                  </figure>
                </a>
                <Card.Body>
                  <Card.Title>
                    <a href="/">燒味袋防水側背包</a>
                  </Card.Title>
                  <Card.Text>
                    <a href="/">品牌名</a>
                  </Card.Text>
                  <Card.Text variant="primary" className="money">
                    NT.1769
                  </Card.Text>
                </Card.Body>
              </Card>

              {/* Card 2 */}
              <Card style={{ width: '285px' }}>
                <a href="/">
                  <figure className="figure">
                    <Card.Img variant="top" src={red} className="img-fluid" />
                  </figure>
                </a>
                <Card.Body>
                  <Card.Title>
                    <a href="/">傳遞信封包</a>
                  </Card.Title>
                  <Card.Text>
                    <a href="/">品牌名</a>
                  </Card.Text>
                  <Card.Text variant="primary" className="money">
                    NT.699
                  </Card.Text>
                </Card.Body>
              </Card>

              {/* Card 3 */}
              <Card style={{ width: '285px' }}>
                <a href="/">
                  <figure className="figure">
                    <Card.Img variant="top" src={red} className="img-fluid" />
                  </figure>
                </a>
                <Card.Body>
                  <Card.Title>
                    <a href="/">搖籃曲朋友兔寶寶</a>
                  </Card.Title>
                  <Card.Text>
                    <a href="/">品牌名</a>
                  </Card.Text>
                  <Card.Text variant="primary" className="money">
                    NT.1769
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div class="carousel-item">
            {/* 第二頁 */}
            <div className="d-flex justify-content-between all-card">
              {/* Card 1 */}
              <Card style={{ width: '285px' }}>
                <a href="/">
                  <figure className="figure">
                    <Card.Img
                      variant="top"
                      src={rainbow}
                      className="img-fluid"
                    />
                  </figure>
                </a>
                <Card.Body>
                  <Card.Title>
                    <a href="/">燒味袋防水側背包</a>
                  </Card.Title>
                  <Card.Text>
                    <a href="/">品牌名</a>
                  </Card.Text>
                  <Card.Text variant="primary" className="money">
                    NT.1769
                  </Card.Text>
                </Card.Body>
              </Card>

              {/* Card 2 */}
              <Card style={{ width: '285px' }}>
                <a href="/">
                  <figure className="figure">
                    <Card.Img
                      variant="top"
                      src={rainbow}
                      className="img-fluid"
                    />
                  </figure>
                </a>
                <Card.Body>
                  <Card.Title>
                    <a href="/">傳遞信封包</a>
                  </Card.Title>
                  <Card.Text>
                    <a href="/">品牌名</a>
                  </Card.Text>
                  <Card.Text variant="primary" className="money">
                    NT.699
                  </Card.Text>
                </Card.Body>
              </Card>

              {/* Card 3 */}
              <Card style={{ width: '285px' }}>
                <a href="/">
                  <figure className="figure">
                    <Card.Img
                      variant="top"
                      src={rainbow}
                      className="img-fluid"
                    />
                  </figure>
                </a>
                <Card.Body>
                  <Card.Title>
                    <a href="/">搖籃曲朋友兔寶寶</a>
                  </Card.Title>
                  <Card.Text>
                    <a href="/">品牌名</a>
                  </Card.Text>
                  <Card.Text variant="primary" className="money">
                    NT.1769
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            {/* 第三頁 */}
          </div>
          <div class="carousel-item">
            <div className="d-flex justify-content-between all-card">
              {/* Card 1 */}
              <Card style={{ width: '285px' }}>
                <a href="/">
                  <figure className="figure">
                    <Card.Img variant="top" src={kaigi} className="img-fluid" />
                  </figure>
                </a>
                <Card.Body>
                  <Card.Title>
                    <a href="/">燒味袋防水側背包</a>
                  </Card.Title>
                  <Card.Text>
                    <a href="/">品牌名</a>
                  </Card.Text>
                  <Card.Text variant="primary" className="money">
                    NT.1769
                  </Card.Text>
                </Card.Body>
              </Card>

              {/* Card 2 */}
              <Card style={{ width: '285px' }}>
                <a href="/">
                  <figure className="figure">
                    <Card.Img variant="top" src={kaigi} className="img-fluid" />
                  </figure>
                </a>
                <Card.Body>
                  <Card.Title>
                    <a href="/">傳遞信封包</a>
                  </Card.Title>
                  <Card.Text>
                    <a href="/">品牌名</a>
                  </Card.Text>
                  <Card.Text variant="primary" className="money">
                    NT.699
                  </Card.Text>
                </Card.Body>
              </Card>

              {/* Card 3 */}
              <Card style={{ width: '285px' }}>
                <a href="/">
                  <figure className="figure">
                    <Card.Img variant="top" src={kaigi} className="img-fluid" />
                  </figure>
                </a>
                <Card.Body>
                  <Card.Title>
                    <a href="/">搖籃曲朋友兔寶寶</a>
                  </Card.Title>
                  <Card.Text>
                    <a href="/">品牌名</a>
                  </Card.Text>
                  <Card.Text variant="primary" className="money">
                    NT.1769
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        {/* 左按鈕 */}
        <button
          className="d-flex align-items-start justify-content-center carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <img src={LeftCircle} alt="" className="left-button" />
        </button>
        {/* 右按鈕 */}
        <button
          className="d-flex align-items-start justify-content-center carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <img src={RightCircle} alt="" className="right-button" />
        </button>
      </div>
    </>
  );
}

export default BusinessLogo;
