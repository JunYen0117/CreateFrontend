import { useState } from 'react';
import Bird from '../../img/Bird.jpg';
import { FaShoppingCart } from 'react-icons/fa';
import { BsHeart, BsHeartFill } from 'react-icons/bs';

const Product = () => {
  const [showheart, setShowHeart] = useState(true);
  return (
    <>
      <div className="container-fluid mb-5 px-0">
        <div className=" row d-flex">
          {[1, 2, 3, 4, 5].map(() => {
            return (
              <div className="col-2 position-relative">
                {showheart ? (
                  <BsHeartFill className="Fp_heart" />
                ) : (
                  <BsHeart className="Fp_heart" />
                )}
                <BsHeart
                  className="Fp_heart"
                  onClick={() => {
                    setShowHeart(!showheart);
                  }}
                />
                <div className=" Fp_top me-2 mb-3">
                  <img className="Fp_img" src={Bird} alt="" />
                </div>
                <div className="Fp_body me-2 mb-5">
                  <h3>鳥燈</h3>
                  <p>NT $100</p>
                  <button
                    style={{ width: '7rem' }}
                    variant="primary"
                    className="text-white d-block Fp_button"
                  >
                    <FaShoppingCart className="me-2 h3 m-0" />
                    加入購物車
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
