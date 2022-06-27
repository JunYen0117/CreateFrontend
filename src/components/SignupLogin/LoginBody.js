import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { IconContext } from 'react-icons';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
import LogoSvg1 from '../../img/header/logo.svg';

function LoginBody(props) {
  const [loginPwdEye, setLoginPwdEye] = useState(false);
  const [pwdReveal, setPwdReveal] = useState('password');
  return (
    <>
      <Form className="login_form">
        <div className="login_body">
          <figure className="login_form_logo">
            <img src={LogoSvg1} alt="#/" />
          </figure>
          <h3 className="login_title text-center pb-4">會員登入</h3>
          <Form.Group className="account">
            <Form.Control
              type="text"
              className="mx-auto mb-4"
              placeholder="帳號（電子信箱）"
            />
          </Form.Group>
          <Form.Group className="password">
            <Form.Control
              type={pwdReveal}
              className="mx-auto mb-5"
              placeholder="密碼"
            />
            <div
              className="login_eye"
              onClick={() => {
                setLoginPwdEye(!loginPwdEye);
                pwdReveal === 'password'
                  ? setPwdReveal('text')
                  : setPwdReveal('password');
              }}
            >
              <IconContext.Provider value={{ color: '#b99664', size: '35px' }}>
                {loginPwdEye === true ? (
                  <AiOutlineEye />
                ) : (
                  <AiOutlineEyeInvisible />
                )}
              </IconContext.Provider>
            </div>
          </Form.Group>
          <Form.Group className="d-flex justify-content-center mb-4">
            <button className="login_btn mx-auto">登入</button>
          </Form.Group>
        </div>
      </Form>
    </>
  );
}
export default LoginBody;
