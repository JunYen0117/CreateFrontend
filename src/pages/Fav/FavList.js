import ASidebar from '../../components/AccountSidebar/ASidebar';
import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';

const FavList = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="available">
      <Row className="">
        <ASidebar />
        <Col sm={8}>
          <h1 className="coupon_prompt pt-5 my-3">我的收藏</h1>
          <Nav className="coupon_nav pt-4" defaultActiveKey="available">
            <Nav.Item className="mt-3">
              <Nav.Link className="coupon_btn" eventKey="available">
                可領取
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mt-3">
              <Nav.Link className="nav-item coupon_btn" eventKey="receiveList">
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
        <Col sm={16}>
          <Tab.Content className="mb-5">
            <Tab.Pane className="" eventKey="available"></Tab.Pane>
            <Tab.Pane eventKey="receiveList"></Tab.Pane>
            <Tab.Pane eventKey="invalid"></Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default FavList;
