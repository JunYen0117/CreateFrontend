import { useState } from 'react';
import LogoSvg1 from '../../img/header/logo.svg';

function LoginBody(props) {

  return (
    <>
      <form className="login_form">
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
        </div>
      </form>
    </>
  );
}
export default LoginBody;
