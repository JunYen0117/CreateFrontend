import ASidebar from '../../components/AccountSidebar/ASidebar';
import React from 'react';
import OrderList from './OrderList';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import OrderDetail from './OrderDetail';

const Order = () => {
  const [isShowOL, setIsShowOL] = useState(true);
  const [isShowOD, setIsShowOD] = useState(false);
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="product">
        <Row className="">
          <ASidebar />
          <Col sm={8}>
            <h1 className="Fl_title ">我的訂單</h1>
            <Nav className="Fl_nav" defaultActiveKey="finish">
              <Nav.Item className=" Fl_item mt-3 ">
                <Nav.Link className="Fl_btn" eventKey="finish">
                  已完成
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className=" Fl_item mt-3 ">
                <Nav.Link className=" Fl_btn" eventKey="cancel">
                  已取消
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Col sm={12}>
              <Tab.Content className="mb-5 row mt-3">
                <Tab.Pane eventKey="finish">
                  {isShowOL ? (
                    <OrderList showOL={setIsShowOL} showOD={setIsShowOD} />
                  ) : null}
                  {isShowOD ? (
                    <OrderDetail showOL={setIsShowOL} showOD={setIsShowOD} />
                  ) : null}
                </Tab.Pane>
                <Tab.Pane eventKey="cancel">
                  <OrderList showOL={setIsShowOL} showOD={setIsShowOD} />
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
