import '../styles/_frontpage.scss';
import Carousel from 'react-bootstrap/Carousel';

import red from '../img/red.jpg';
import rainbow from '../img/rainbow.png';
import kaigi from '../img/kaigi.jpg';

function BusinessLogo() {
  return (
    <>
      <h2>
        <a href="/">精選品牌</a>
      </h2>
      <div className="d-flex justify-content-between all-logo">
        <div>
          <a href="/">
            <img src={red} alt="" className='logo'></img>
          </a>
        </div>
        ;
        <div>
          <a href="/">
            <img src={rainbow} alt="" className='logo'></img>
          </a>
        </div>
        ;
        <div>
          <a href="/">
            <img src={kaigi} alt="" className='logo'></img>
          </a>
        </div>
      </div>

      {/* <Carousel className="all-logo">
        <Carousel.Item className="d-flex justify-content-between">
          <img className="d-block logo" src={red} alt="First slide" />
          <img className="d-block logo" src={red} alt="First slide" />
          <img className="d-block logo" src={red} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item className="d-flex justify-content-between">
          <img className="d-block logo" src={rainbow} alt="Second slide" />
          <img className="d-block logo" src={rainbow} alt="Second slide" />
          <img className="d-block logo" src={rainbow} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item className="d-flex justify-content-between">
          <img className="d-block logo" src={kaigi} alt="Third slide" />
          <img className="d-block logo" src={kaigi} alt="Third slide" />
          <img className="d-block logo" src={kaigi} alt="Third slide" />
        </Carousel.Item>
      </Carousel> */}
    </>
  );
}

export default BusinessLogo;
