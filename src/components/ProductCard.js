import '../styles/_frontpage.scss';
import Card from 'react-bootstrap/Card';

import P1 from '../img/P1.jpg';
import P2 from '../img/P2.jpg';
import P3 from '../img/P3.jpg';
import P4 from '../img/P4.jpg';

function ProductCard() {
  return (
    <>
      <h2><a href='/'>質感商品</a></h2>
      {/* Card 1 */}
      <div className="d-flex justify-content-between all-card">
        <Card style={{ width: '285px' }}>
          <a href="/">
            <figure className="figure">
              <Card.Img variant="top" src={P1} className="img-fluid" />
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
              <Card.Img variant="top" src={P2} className="img-fluid" />
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
              <Card.Img variant="top" src={P3} className="img-fluid" />
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

        {/* Card 4 */}
        <Card style={{ width: '285px' }}>
          <a href="/">
            <figure className="figure">
              <Card.Img variant="top" src={P4} className="img-fluid" />
            </figure>
          </a>
          <Card.Body>
            <Card.Title>
              <a href="/">環保天然香氛蠟燭</a>
            </Card.Title>
            <Card.Text>
              <a href="/">品牌名</a>
            </Card.Text>
            <Card.Text variant="primary" className="money">
              NT.2000
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default ProductCard;
