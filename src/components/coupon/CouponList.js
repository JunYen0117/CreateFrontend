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
  const [availableList, setAvailable] = useState([]);
  const [nowPage, setNowPage] = useState(1);
  const [lastPage, setLastPage] = useState();

  const [receiveLastPage, setReceiveLastPage] = useState();
  const [nowReceivePage, setReceiveNowPage] = useState(1);
  const [receiveList, setReceiveList] = useState([]);

  const [invalidLastPage, setInvalidLastPage] = useState();
  const [nowInvalidPage, setInvalidNowPage] = useState(1);
  const [invalidList, setInvalidList] = useState([]);

  const [changeState, setChangeState] = useState(1);

  useEffect(() => {
    let getCoupons = async () => {
      let response = await axios.get(API_URL + '/coupons/available', {
        params: {
          page: nowPage,
        },
      });
      setAvailable(response.data.availableList);
      setLastPage(response.data.pagination.lastPage);
    };
    getCoupons();
  }, [nowPage, lastPage]);

  // console.log(availableList);

  useEffect(() => {
    let getCoupons = async () => {
      let response = await axios.get(API_URL + '/coupons/receive', {
        params: {
          page: nowReceivePage,
        },
      });
      setReceiveList(response.data.receiveList);
      setReceiveLastPage(response.data.pagination.receiveLastPage);
    };
    getCoupons();
    console.log('receiveLastPage', receiveLastPage);
    console.log('nowReceivePage', nowReceivePage);
  }, [nowReceivePage, receiveLastPage]);
  console.log('receiveList', receiveList);

  // 撈出全部使用者擁有的優惠券但已失效
  useEffect(() => {
    let getCoupons = async () => {
      let response = await axios.get(API_URL + '/coupons/invalid', {
        params: {
          page: nowInvalidPage,
        },
      });
      setInvalidList(response.data.invalidList);
      setInvalidLastPage(response.data.pagination.invalidLastPage);
    };
    getCoupons();
    // console.log('invalidLastPage', invalidLastPage);
    // console.log('nowInvalidPage', nowInvalidPage);
  }, [nowInvalidPage, invalidLastPage]);
  console.log('invalidList:', invalidList);

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
              <Tab.Pane
                className=""
                eventKey="available"
                onEnter={(e) => {
                  setChangeState(1);
                }}
              >
                <Available
                  availableList={availableList}
                  setNowPage={setNowPage}
                  lastPage={lastPage}
                  setLastPage={setLastPage}
                  receiveList={receiveList}
                  receiveLastPage={receiveLastPage}
                  setReceiveLastPage={setReceiveLastPage}
                  setReceiveList={setReceiveList}
                  nowReceivePage={nowReceivePage}
                  setReceiveNowPage={setReceiveNowPage}
                  changeState={changeState}
                />
              </Tab.Pane>
              <Tab.Pane
                eventKey="receiveList"
                onEnter={(e) => {
                  setChangeState(2);
                }}
              >
                <ReceiveList
                  availableList={availableList}
                  setNowPage={setReceiveNowPage}
                  lastPage={lastPage}
                  setLastPage={setLastPage}
                  receiveLastPage={receiveLastPage}
                  receiveList={receiveList}
                  changeState={changeState}
                />
              </Tab.Pane>
              <Tab.Pane
                eventKey="invalid"
                onEnter={(e) => {
                  setChangeState(3);
                }}
              >
                <Invalid
                  availableList={availableList}
                  setNowPage={setInvalidNowPage}
                  lastPage={lastPage}
                  setLastPage={setLastPage}
                  receiveLastPage={receiveLastPage}
                  receiveList={receiveList}
                  invalidList={invalidList}
                  invalidLastPage={invalidLastPage}
                  changeState={changeState}
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
