import ASidebar from '../../components/AccountSidebar/ASidebar';
import React from 'react';
import List from '../../components/ProductOrder/List';
import { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Detail from '../../components/ProductOrder/Detail';
import { API_URL } from '../../utils/config';
import axios from 'axios';
import 'antd/dist/antd.css';

const Order = () => {
  const [isShowOL, setIsShowOL] = useState(true);
  const [isShowOD, setIsShowOD] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    let getOrders = async () => {
      // axios.get(URL, config)
      let response = await axios.get(API_URL + '/productorder');
      setOrders(response.data);
    };
    getOrders();
  }, []);
  // console.log(orders);
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="finish">
        <Row className="">
          <ASidebar />
          <Col sm={8}>
            <h1 className="Fl_title  ">我的訂單</h1>
            <Nav className="Fl_nav" defaultActiveKey="finish">
              <Nav.Item className=" Fl_item mt-3 ">
                <Nav.Link className="Fl_btn h3" eventKey="finish">
                  已完成
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className=" Fl_item mt-3 ">
                <Nav.Link className=" Fl_btn h3" eventKey="cancel">
                  已取消
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Col sm={12}>
              <Tab.Content className="mb-5 row mt-3">
                <Tab.Pane eventKey="finish">
                  {isShowOL ? (
                    <List showOL={setIsShowOL} showOD={setIsShowOD} />
                  ) : null}
                  {isShowOD ? (
                    <Detail showOL={setIsShowOL} showOD={setIsShowOD} />
                  ) : null}
                </Tab.Pane>
                <Tab.Pane eventKey="cancel">
                  <List showOL={setIsShowOL} showOD={setIsShowOD} />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default Order;
