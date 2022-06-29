// 優惠券清單
import { React } from 'react';
import Available from './Available';
import ReceiveList from './ReceiveList';
import Invalid from './Invalid';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';

const CouponList = () => {
  const [couponList, setCoupons] = useState([]);
  const [nowPage, setNowPage] = useState(1);
  const [lastPage, setLastPage] = useState();
  useEffect(() => {
    let getCoupons = async () => {
      let response = await axios.get(API_URL + '/coupons/available', {
        params: {
          page: nowPage,
        },
      });
      setCoupons(response.data.couponList);
      setLastPage(response.data.pagination.lastPage);
    };
    getCoupons();
  }, [nowPage, lastPage]);

  // 寫法 2 要加的
  // const [coupon, setCoupon] = useState('available');
  return (
    <>
      {/* 寫法 1：React Bootstrap */}
      <Tab.Container id="left-tabs-example" defaultActiveKey="available">
        <Row>
          <Col sm={12}>
            <h1 className="coupon_prompt pt-5 my-3">優惠券</h1>
            <Nav className="coupon_nav pt-4" defaultActiveKey="available">
              <Nav.Item className="mt-3">
                <Nav.Link className="coupon_btn" eventKey="available">
                  可領取
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mt-3">
                <Nav.Link
                  className="nav-item coupon_btn"
                  eventKey="receiveList"
                >
                  可使用
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mt-3">
                <Nav.Link className="nav-item coupon_btn" eventKey="invalid">
                  已失效
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={12}>
            <Tab.Content className="mb-5">
              <Tab.Pane className="" eventKey="available">
                <Available
                  couponList={couponList}
                  setNowPage={setNowPage}
                  lastPage={lastPage}
                  setLastPage={setLastPage}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="receiveList">
                <ReceiveList
                  couponList={couponList}
                  setNowPage={setNowPage}
                  lastPage={lastPage}
                  setLastPage={setLastPage}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="invalid">
                <Invalid
                  couponList={couponList}
                  setNowPage={setNowPage}
                  lastPage={lastPage}
                  setLastPage={setLastPage}
                />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

      {/* 寫法 2：純Bootstrap */}
      {/* <div className="d-grid px-2 py-3 container">
        <h1 className="coupon_prompt pt-4 my-0">優惠券</h1>
        <nav>
          <ul className="coupon_nav nav pt-4">
            <li className="coupon_nav1 nav-item">
              <button
                onClick={() => {
                  setCanUse('available');
                }}
                className={`nav-link coupon_btn ${
                  canUse === 'available' ? 'active' : ''
                }`}
              >
                可領取
              </button>
            </li>
            <li className="nav-item coupon_nav2">
              <button
                onClick={() => {
                  setCanUse('receiveList');
                }}
                className={`nav-link coupon_btn ${
                  canUse === 'receiveList' ? 'active' : ''
                }`}
              >
                可使用
              </button>
            </li>
            <li className="nav-item coupon_nav3">
              <button
                onClick={() => {
                  setCanUse('invalid');
                }}
                className={`nav-link coupon_btn ${
                  canUse === 'invalid' ? 'active' : ''
                }`}
              >
                已失效
              </button>
            </li>
          </ul>
        </nav>

        {canUse === 'available' && <Available />}
        {canUse === 'receiveList' && <ReceiveList />}
        {canUse === 'invalid' && <Invalid />}
      </div> */}
    </>
  );
};

export default CouponList;
