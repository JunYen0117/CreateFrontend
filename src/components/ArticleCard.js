import '../styles/_frontpage.scss';
import Card from 'react-bootstrap/Card';

import A1 from '../img/A1.jpg';
import A2 from '../img/A2.jpg';

function ArticleCard() {
  return (
    <>
      <h2>
        <a href="/">質感商品</a>
      </h2>
      {/* Card 1 */}
      <div className="d-flex justify-content-between all-card">
        <Card style={{ width: '285px' }}>
          <a href="/">
            <figure className="figure">
              <Card.Img variant="top" src={A1} className="img-fluid" />
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
              <Card.Img variant="top" src={A2} className="img-fluid" />
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
      </div>
    </>
  );
}

export default ArticleCard;
