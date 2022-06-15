import Carousel from 'react-bootstrap/Carousel'

import img1 from '../img/B1.jpg'
import img2 from '../img/B2.jpg'
import img3 from '../img/B3.jpg'

function SliderBanner() {
  return (
    <Carousel
      style={{
        width: '100%',
        margin: '0 auto',
      }}
    >
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  )
}

export default SliderBanner
