import Card from 'react-bootstrap/Card';

function Brand(props) {
  return (
    <Card className="front_brand_card">
      <div className="logo-card">
        <a href="/">
          <figure className="logo-pic">
            <Card.Img
              variant="top"
              src={`http://localhost:3003/images/brand/${props.logo}`}
              className="img"
            />
          </figure>
        </a>
        <Card.Body>
          <Card.Title className="d-flex justify-content-center front_brand_name">
            <a href="/">{props.business_name}</a>
          </Card.Title>
        </Card.Body>
      </div>
    </Card>
  );
}

export default Brand;
