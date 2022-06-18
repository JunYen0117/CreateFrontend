import Card from 'react-bootstrap/Card';

function CarouselContents(props) {
    const res = props.contents.map((page_content, index) => {
        const a = index == 0 ? 'active' : ''
        return (
            <div className={`carousel-item ${a}`} >
                <div className="d-flex justify-content-between all-card">
                    {
                        page_content.map(content =>
                            <Card style={{ width: '285px' }}>
                                <a href="/">
                                    <figure className="figure">
                                        <Card.Img variant="top" src={content.img} className="img-fluid" />
                                    </figure>
                                </a>
                                <Card.Body>
                                    <Card.Title>
                                        <a href="/">{content.title}</a>
                                    </Card.Title>
                                    <Card.Text>
                                        <a href="/">{content.brand_name}</a>
                                    </Card.Text>
                                    <Card.Text variant="primary" className="money">
                                        {content.cost}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    }
                </div>
            </div>)
    }
    );
    return (
        <>
            {res}
        </>
    )
}
export default CarouselContents