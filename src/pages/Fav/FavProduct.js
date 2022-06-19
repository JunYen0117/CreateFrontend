import React from 'react';
import ASidebar from '../../components/AccountSidebar/ASidebar';
import FavTitle from '../../components/Fav/FavTitle';
import { Card, Button } from 'react-bootstrap';
import Bird from '../../img/Bird.jpg';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

const FavProduct = () => {
  return (
    <>
      <div className="container-fluid mb-5">
        <div className="row">
          <ASidebar />
          <div className="col-8 productOrder">
            <FavTitle />
            <div className=" row">
              {[1, 2, 3, 4].map(() => {
                return (
                  <Card
                    style={{ width: '12rem' }}
                    className="me-5 mt-2 p-0 position-relative"
                  >
                    <Card.Img
                      variant="top"
                      src={Bird}
                      className="Fp_img"
                      style={{ height: '10rem' }}
                    />
                    <FaHeart className="Fp_heart" />
                    <Card.Body>
                      <Card.Title className="Fp_cardtitle text-center">
                        鳥燈
                      </Card.Title>
                      <Card.Text className="text-center">NT$ 260</Card.Text>
                      <Button
                        style={{ width: '10rem' }}
                        variant="primary"
                        className="text-white mx-auto d-block"
                      >
                        <FaShoppingCart className="me-3 " />
                        加入購物車
                      </Button>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavProduct;
