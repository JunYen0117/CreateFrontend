import React from 'react';
import ASidebar from '../../components/AccountSidebar/ASidebar';
import FavTitle from '../../components/Fav/FavTitle';
import { Card, Button } from 'react-bootstrap';
import Bird from '../../img/Bird.jpg';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

const FavProduct = () => {
  return (
    <>
      <div className="container-fluid mb-5 px-0">
        <div className=" row d-flex">
          {[1, 2, 3, 4, 5].map(() => {
            return (
              <div className="col-2">
                <div className="  Fp_top ">
                  <img className="Fp_img" src={Bird} alt="" />
                </div>
                <div className="Fp_body">
                  <h2>鳥燈</h2>
                  <p>NT $100</p>
                  <Button
                    style={{ width: '10rem' }}
                    variant="primary"
                    className="text-white d-block"
                  >
                    <FaShoppingCart className="me-3 h5" />
                    加入購物車
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FavProduct;
