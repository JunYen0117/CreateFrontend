import Card from 'react-bootstrap/Card';

function CarouselContents(props) {
  const res = props.contents.map((page_content, index) => {
    const a = index == 0 ? 'active' : '';
    return (
      <div className={`carousel-item ${a}`}>
        <div className="d-flex justify-content-between all-logo">
          {page_content.map((content) => (
            <Card className="col-3">
              <a href="/">
                <figure className="logo">
                  <Card.Img variant="top" src={content.img} className="img" />
                </figure>
              </a>
              <Card.Body>
                <Card.Title className="d-flex justify-content-center">
                  <a href="/">{content.brand_name}</a>
                </Card.Title>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
  });
  return <>{res}</>;
}
export default CarouselContents;
