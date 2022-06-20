import React from 'react';
import Nav from 'react-bootstrap/Nav';
import LogoSvg1 from '../img/logo.svg';
import styled from '@emotion/styled';

const Login = () => {
  return (
    <>
      <div
        className="backdrop"
        onClick={() => {
          console.log('backdrop');
        }}
      >
        <form
          className="login_form"
          onClick={(e) => {
            console.log('form');
            e.stopPropagation();
          }}
        >
          <div>
            <Nav
              className="login_header"
              justify
              variant="tabs"
              defaultActiveKey="/home"
            >
              <Nav.Item className="signup_btn">
                <Nav.Link href="/home">註冊</Nav.Link>
              </Nav.Item>
              <Nav.Item className="login_btn">
                <Nav.Link eventKey="link-1">登入</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className="login_body">
            <figure className="login_form_logo">
              <img src={LogoSvg1} alt="#/" />
            </figure>
            <h3 className="login_title text-center pb-4">會員登入</h3>
            <div className="account">
              <input className="mx-auto mb-4" placeholder="帳號（電子信箱）" />
            </div>
            <div className="password">
              <input className="mx-auto mb-5" placeholder="密碼" />
            </div>
            <div className="d-flex justify-content-center mb-4">
            <button className="login_btn mx-auto">登入</button>
            </div>
            <div className="forgotten_password">
              <a href="#/">忘記密碼?</a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
