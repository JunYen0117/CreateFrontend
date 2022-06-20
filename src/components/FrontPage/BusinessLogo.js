import '../../styles/_frontpage.scss';

import red from '../../img/red.jpg';
import rainbow from '../../img/rainbow.png';
import kaigi from '../../img/kaigi.jpg';
import LeftCircle from '../../img/left-circle.svg';
import RightCircle from '../../img/right-circle.svg';

import CarouselContents from './CarouselContents';
const contents = [
  [
    {
      img: red,
      title: '燒味袋防水側背包',
      brand_name: '品牌名1',
    },
    {
      img: red,
      title: '傳遞信封包',
      brand_name: '品牌名1',
    },
    {
      img: red,
      title: '搖籃曲朋友兔寶寶',
      brand_name: '品牌名1',
    },
    {
      img: red,
      title: '搖籃曲朋友兔寶寶',
      brand_name: '品牌名1',
    },
  ],
  [
    {
      img: rainbow,
      title: '燒味袋防水側背包',
      brand_name: '品牌名2',
    },
    {
      img: rainbow,
      title: '傳遞信封包',
      brand_name: '品牌名2',
    },
    {
      img: rainbow,
      title: '搖籃曲朋友兔寶寶',
      brand_name: '品牌名2',
    },
    {
      img: rainbow,
      title: '搖籃曲朋友兔寶寶',
      brand_name: '品牌名2',
    },
  ],
  [
    {
      img: kaigi,
      title: '燒味袋防水側背包',
      brand_name: '品牌名3',
    },
    {
      img: kaigi,
      title: '傳遞信封包',
      brand_name: '品牌名3',
    },
    {
      img: kaigi,
      title: '搖籃曲朋友兔寶寶',
      brand_name: '品牌名3',
    },
    {
      img: kaigi,
      title: '搖籃曲朋友兔寶寶',
      brand_name: '品牌名3',
    },
  ],
];
function BusinessLogo() {
  return (
    <>
      <h2>
        <a href="/">精選品牌</a>
      </h2>
      <div
        id="test123"
        className="carousel slide d-flex justify-content-between"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <CarouselContents contents={contents} />
        </div>
        {/* 左按鈕 */}
        <button
          className="d-flex align-items-start justify-content-center carousel-control-prev "
          type="button"
          data-bs-target="#test123"
          data-bs-slide="prev"
        >
          <img src={LeftCircle} alt="" className="left-button" />
        </button>
        {/* 右按鈕 */}
        <button
          className="d-flex align-items-start justify-content-center carousel-control-next"
          type="button"
          data-bs-target="#test123"
          data-bs-slide="next"
        >
          <img src={RightCircle} alt="" className="right-button" />
        </button>
      </div>
    </>
  );
}

export default BusinessLogo;
