import { useState } from 'react';
import Form from 'react-bootstrap/Form';

import { IconContext } from 'react-icons';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
function SignupBody() {
  const [signupInfo, setSignInfo] = useState({
    member_name: '',
    account: '',
    password: '',
    gender: '',
    age: '',
    phone: '',
    address: '',
  });
  const handleChange = (e) => {
    setSignInfo({ ...signupInfo, [e.target.name]: e.target.value });
  };

  const [signupPwdEye, setSignupPwdEye] = useState(false);
  const [pwdReveal, setPwdReveal] = useState('password');

  const [signupPwdEye2, setSignupPwdEye2] = useState(false);
  const [pwdReveal2, setPwdReveal2] = useState('password');

  //checkbox 勾選是否同意網站政策 (沒有做完)
  const [isAgree, setIsAgree] = useState('disable');

  return (
    <>
      <form className="signup_form">
        <div className="signup_body pb-3 mb-2">
          <h3 className="signup_title text-center py-4">新會員註冊</h3>
          <div className="is_required mb-1">*為必填欄位</div>

          <Form.Group className="account">
            <Form.Control
              type="text"
              name="account"
              value={signupInfo.account}
              onChange={handleChange}
              className="mx-auto mb-4"
              placeholder="帳號（電子信箱）*"
            />
          </Form.Group>

          <Form.Group className="password">
            <Form.Control
              type={pwdReveal}
              name="password"
              value={signupInfo.password}
              onChange={handleChange}
              className="mx-auto mb-4"
              placeholder="密碼 *"
            />
            <div
              className="signup_eye"
              onClick={() => {
                setSignupPwdEye(!signupPwdEye);
                pwdReveal === 'password'
                  ? setPwdReveal('text')
                  : setPwdReveal('password');
              }}
            >
              <IconContext.Provider value={{ color: '#b99664', size: '35px' }}>
                {signupPwdEye === true ? (
                  <AiOutlineEye />
                ) : (
                  <AiOutlineEyeInvisible />
                )}
              </IconContext.Provider>
            </div>
          </Form.Group>

          <Form.Group className="re_password">
            <Form.Control
              type={pwdReveal2}
              name="re_password"
              className="mx-auto mb-4"
              placeholder="請再確認密碼 *"
            />
            <div
              className="signup_eye2"
              onClick={() => {
                setSignupPwdEye2(!signupPwdEye2);
                pwdReveal2 === 'password'
                  ? setPwdReveal2('text')
                  : setPwdReveal2('password');
              }}
            >
              <IconContext.Provider value={{ color: '#b99664', size: '35px' }}>
                {signupPwdEye2 === true ? (
                  <AiOutlineEye />
                ) : (
                  <AiOutlineEyeInvisible />
                )}
              </IconContext.Provider>
            </div>
          </Form.Group>

          <Form.Group className="member_name">
            <Form.Control
              type="text"
              name="member_name"
              value={signupInfo.member_name}
              onChange={handleChange}
              className="mx-auto mb-4"
              placeholder="用戶名 *"
            />
          </Form.Group>

          <Form.Group className="phone">
            <Form.Control
              type="tel"
              name="phone"
              value={signupInfo.phone}
              onChange={handleChange}
              className="mx-auto mb-4"
              placeholder="電話"
            />
          </Form.Group>

          <Form.Group className="address">
            <Form.Control
              type="text"
              name="address"
              value={signupInfo.address}
              onChange={handleChange}
              className="mx-auto mb-4"
              placeholder="地址"
            />
          </Form.Group>

          <Form.Group className="gender">
            <Form.Select
              name="gender"
              value={signupInfo.gender}
              onChange={handleChange}
              className="gender_select mx-auto mb-4"
              aria-label="Default select example"
            >
              <option>請選擇性別</option>
              <option value="男">男</option>
              <option value="女">女</option>
              <option value="不提供">不提供</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="age">
            <Form.Control
              type="text"
              name="age"
              value={signupInfo.age}
              onChange={handleChange}
              className="mx-auto mb-4"
              placeholder="年齡"
            />
          </Form.Group>
        </div>
        <div className="signup_footer d-flex flex-column">
          <div className="my-3 d-flex justify-content-center">
            <input
              type="checkbox"
              checked={isAgree}
              onChange={(e) => {
                setIsAgree(e.target.checked);
              }}
              className="align-self-center me-3"
            />
            <div className="isagree_text d-inline-block">
              我同意網站&ensp;
              <a href="#/" alt="#/">
                隱私權政策
              </a>
              &ensp;和&ensp;
              <a href="#/" alt="#/">
                服務條款
              </a>
            </div>
          </div>
          <div className="d-flex justify-content-center mb-4">
            <button className="signup_btn mx-auto">註冊</button>
          </div>
        </div>
      </form>
    </>
  );
}
export default SignupBody;
