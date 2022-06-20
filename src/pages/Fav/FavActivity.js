import React from 'react';
import ASidebar from '../../components/AccountSidebar/ASidebar';
import FavTitle from '../../components/Fav/FavTitle';
import Activity from '../../img/Activity.png';
import { Button } from 'react-bootstrap';
import { FaShoppingCart, FaHeart, FaFireAlt } from 'react-icons/fa';

const FavActivity = () => {
  return (
    <>
      <div className="container-fluid mb-5">
        <div className="row">
          <ASidebar />
          <div className="col-9 productOrder">
            <FavTitle />
            <div className="row ">
              {[1, 2, 3, 4].map(() => {
                return (
                  <>
                    <div
                      className="col-3 p-0 me-2 mb-5 mt-1 position-relative"
                      style={{ width: '25%', height: '160px' }}
                    >
                      <img src={Activity} alt="" className="Fac_img " />
                      <FaHeart className="Fac_heart" />
                    </div>
                    <div className="col-8 mb-5 mt-1">
                      <h2>
                        可愛巧虎展 Meow &nbsp;
                        <FaFireAlt style={{ color: 'red' }} />
                      </h2>

                      <table className="Fac_table">
                        <tr>
                          <th>展覽日期</th>
                          <td>2050 年 03 月 07 日 - 2070年 12 月 12 日</td>
                        </tr>
                        <tr>
                          <th>展覽時間</th>
                          <td>23:00 - 24:00</td>
                        </tr>
                        <tr>
                          <th>活動地點</th>
                          <td>台北市信義區光復南路133號</td>
                        </tr>
                        <tr>
                          <th>票價</th>
                          <td>NT $400</td>
                          <Button
                            style={{ width: '10rem' }}
                            variant="primary"
                            className="text-white mx-auto d-block"
                          >
                            <FaShoppingCart className="me-3 " />
                            購票去
                          </Button>
                        </tr>
                      </table>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavActivity;
