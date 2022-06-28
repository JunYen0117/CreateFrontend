import React from 'react';
import ASidebar from '../components/AccountSidebar/ASidebar';
import List from '../components/ProductOrder/List';
import ListCancel from '../components/ProductOrder/ListCancel';
import ListNotShipped from '../components/ProductOrder/ListNotShipped';
import { useState, useEffect } from 'react';
import { Tab, Col, Nav, Row } from 'react-bootstrap';
import { API_URL } from '../utils/config';
import axios from 'axios';
import 'antd/dist/antd.css';
import ListShipped from '../components/ProductOrder/ListShipped';


const Order = () => {
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="finish">
        <Row className="">
          <ASidebar />
          <Col sm={8}>
            <h1 className="Fl_title  ">我的訂單</h1>
            <Nav className="Fl_nav" defaultActiveKey="notshipped">
              <Nav.Item className=" Fl_item mt-3 ">
                <Nav.Link className="Fl_btn h3  " eventKey="notshipped">
                  未出貨
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="  Fl_item mt-3 ">
                <Nav.Link className="Fl_btn h3" eventKey="shipped">
                  已出貨
                </Nav.Link>
              </Nav.Item>
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
                <Tab.Pane eventKey="notshipped">
                  <ListNotShipped />
                </Tab.Pane>
                <Tab.Pane eventKey="shipped">
                  <ListShipped />
                </Tab.Pane>
                <Tab.Pane eventKey="finish">
                  <List />
                </Tab.Pane>
                <Tab.Pane eventKey="cancel">
                  <ListCancel />
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
