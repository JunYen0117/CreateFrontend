import Card from 'react-bootstrap/Card';

function CarouselContents(props) {
  const res = props.datas.map((page_content, index) => {
    const a = index == 0 ? 'active' : '';
    return (
      <div className={`carousel-item ${a}`}>
        <div className="all-logo d-flex justify-content-between">
          {page_content.map((content) => (
            <Card className="front_brand_card">
              <div className="logo-card">
                <a href="/">
                  <figure className="logo-pic">
                    <Card.Img
                      variant="top"
                      src={`http://localhost:3003/images/brand/${content.logo}`}
                      className="img"
                    />
                  </figure>
                </a>
                <Card.Body>
                  <Card.Title className="d-flex justify-content-center front_brand_name">
                    <a href="/">{content.business_name}</a>
                  </Card.Title>
                </Card.Body>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  });
  return <>{res}</>;
}
export default CarouselContents;
